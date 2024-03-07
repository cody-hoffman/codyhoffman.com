import {
  format,
  differenceInDays,
  parseISO,
  isToday,
  isYesterday,
} from "date-fns";

/**
 * Formats a date to show "Today", "Yesterday", "X days ago" if within a month, or "Month Day, Year" if more than a month ago.
 *
 * @param {Date|string} date - The date to format, can be a Date object or an ISO string.
 * @returns {string} The formatted date string.
 */
export function formatDate(date: Date | string) {
  // Parse the date if it's a string
  const dateObj = typeof date === "string" ? parseISO(date) : date;

  if (isToday(dateObj)) {
    return "Today";
  } else if (isYesterday(dateObj)) {
    return "Yesterday";
  } else {
    const now = new Date();
    const daysDifference = differenceInDays(now, dateObj);

    if (daysDifference < 30) {
      return `${daysDifference} days ago`;
    } else {
      return format(dateObj, "MMMM d, yyyy");
    }
  }
}
