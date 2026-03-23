import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const asin = request.nextUrl.searchParams.get("asin");

  if (!asin || !/^[A-Z0-9]{10}$/.test(asin)) {
    return new NextResponse("Invalid ASIN", { status: 400 });
  }

  // Try multiple Amazon image URL formats
  const imageUrls = [
    `https://m.media-amazon.com/images/P/${asin}.01._SL500_.jpg`,
    `https://images-na.ssl-images-amazon.com/images/P/${asin}.01._SL500_.jpg`,
    `https://m.media-amazon.com/images/P/${asin}.01.LZZZZZZZ.jpg`,
  ];

  const errors: string[] = [];

  for (const url of imageUrls) {
    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
          Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.9",
          Referer: "https://www.amazon.com/",
        },
      });

      const ct = response.headers.get("content-type") || "";
      const buffer = await response.arrayBuffer();
      
      // Return debug info
      errors.push(`${url} → status=${response.status} ct=${ct} size=${buffer.byteLength}`);
      
      if (response.ok && buffer.byteLength > 500) {
        return new NextResponse(buffer, {
          status: 200,
          headers: {
            "Content-Type": ct || "image/jpeg",
            "Cache-Control": "public, max-age=86400, s-maxage=604800",
            "Access-Control-Allow-Origin": "*",
          },
        });
      }
    } catch (e: unknown) {
      errors.push(`${url} → error: ${e instanceof Error ? e.message : String(e)}`);
    }
  }

  return new NextResponse(JSON.stringify({ errors }), { 
    status: 404,
    headers: { "Content-Type": "application/json" }
  });
}
