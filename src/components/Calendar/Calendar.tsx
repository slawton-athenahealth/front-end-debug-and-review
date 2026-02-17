import {
  Calendar as SpectrumCalendar,
  type SpectrumCalendarProps,
} from "@adobe/react-spectrum";
import type { DateValue } from "@internationalized/date";

export interface CalendarProps<T extends DateValue>
  extends SpectrumCalendarProps<T> {
  errorMessage?: string;
}

export function Calendar<T extends DateValue>({
  errorMessage,
  ...props
}: CalendarProps<T>) {
  return (
    <SpectrumCalendar {...props} errorMessage={errorMessage} />
  );
}
