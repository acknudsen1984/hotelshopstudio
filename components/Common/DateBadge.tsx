'use client';

type DateBadgeProps = {
  readonly day: number;
  readonly month: string;
};

export default function DateBadge({ day, month }: DateBadgeProps) {
  return (
    <div className="absolute top-3 left-3 bg-taupe text-white px-2.5 py-1.5 rounded-sm z-10">
      <span className="font-serif text-2xl font-bold leading-none block">{day}</span>
      <span className="font-sans text-[10px] uppercase tracking-wider">{month}</span>
    </div>
  );
}
