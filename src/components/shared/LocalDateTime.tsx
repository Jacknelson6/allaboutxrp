"use client";

export default function LocalDateTime({ value }: { value: string }) {
  const date = new Date(value);
  const label = new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(date);

  return <time dateTime={value} suppressHydrationWarning>{label}</time>;
}
