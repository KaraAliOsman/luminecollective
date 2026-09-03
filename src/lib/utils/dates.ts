const timeZone = "Europe/Amsterdam";

export function validDate(value?: string) {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

export function formatDate(value?: string) {
  const date = validDate(value);
  return date ? new Intl.DateTimeFormat("nl-NL", {
    day: "numeric", month: "long", year: "numeric", timeZone,
  }).format(date) : "Datum volgt";
}

export function formatTime(value?: string) {
  const date = validDate(value);
  return date ? new Intl.DateTimeFormat("nl-NL", {
    hour: "2-digit", minute: "2-digit", timeZone,
  }).format(date) : undefined;
}
