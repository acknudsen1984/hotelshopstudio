// Netlify serverless function: Amazon image proxy
// Fetches Amazon product images server-side and relays them to the browser
// This bypasses CORS and allows caching at the CDN level

exports.handler = async (event) => {
  const asin = event.queryStringParameters?.asin;
  
  if (!asin || !/^[A-Z0-9]{10}$/.test(asin)) {
    return { statusCode: 400, body: "Invalid ASIN" };
  }

  const imageUrls = [
    `https://m.media-amazon.com/images/P/${asin}.01._SL500_.jpg`,
    `https://images-na.ssl-images-amazon.com/images/P/${asin}.01._SL500_.jpg`,
  ];

  for (const url of imageUrls) {
    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
          "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.9",
          "Referer": "https://www.amazon.com/",
          "Origin": "https://www.amazon.com",
        },
      });

      if (response.ok) {
        const contentType = response.headers.get("content-type") || "image/jpeg";
        // Skip 1x1 GIF responses (bot protection)
        const buffer = await response.arrayBuffer();
        if (buffer.byteLength < 100) continue;
        
        return {
          statusCode: 200,
          headers: {
            "Content-Type": contentType,
            "Cache-Control": "public, max-age=86400, s-maxage=604800",
            "Access-Control-Allow-Origin": "*",
          },
          body: Buffer.from(buffer).toString("base64"),
          isBase64Encoded: true,
        };
      }
    } catch (e) {
      console.error(`Failed to fetch ${url}:`, e);
    }
  }

  return { statusCode: 404, body: "Image not found" };
};
