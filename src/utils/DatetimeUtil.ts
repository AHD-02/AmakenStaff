import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(timezone);
dayjs.extend(utc);

interface IDateTimeFormatter {
  getFormattedDateTime: (date: string) => string;
  getFormattedDate: (date: string) => string;
  getSimpleFormattedDate: (date: string) => string;
  getFormattedDateWithMonth: (date: string) => string;
  getDateDifferenceHumanized: (
    dateFrom: Date | string,
    DateTo: Date | string
  ) => string;
  getFormattedHourAndMinute: (date: string) => string;
  getFullFormattedDateAndTime: (date: string) => string;
  getFormattedDateForDatePicker: (date: string) => string;
  getDayAndMonth: (date: string) => string;
  reFormatDateForMonthPicker: (date: string) => string;
}

const getTimeZone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};
export const DateTimeFormatter: IDateTimeFormatter = {
  getDateDifferenceHumanized: (
    dateFrom: Date | string,
    DateTo: Date | string
  ) => {
    const date1 = dayjs(dateFrom);
    const date2 = dayjs(DateTo);

    const msDiff = date1.diff(date2, "ms");
    if (msDiff < 1000) {
      return `${msDiff} ms`;
    }
    const sDiff = date1.diff(date2, "s");
    if (sDiff < 60) {
      return `${sDiff} second${sDiff == 1 ? "" : "s"}`;
    }
    const mDiff = date1.diff(date2, "m");
    if (mDiff < 60) {
      return `${mDiff} minute${sDiff == 1 ? "" : "s"}`;
    }
    const hDiff = date1.diff(date2, "hour");
    if (hDiff < 24) {
      return `${hDiff} hour${sDiff == 1 ? "" : "s"} `;
    }

    const dDiff = date1.diff(date2, "d");
    return `${dDiff} day${sDiff == 1 ? "" : "s"}`;
  },
  getFormattedDateTime: (date: string) => {
    if (!date) {
      return "DD/MM/YY";
    }

    dayjs.extend(timezone);
    dayjs.extend(utc);
    let djs = dayjs.utc(date);

    if (!djs.isValid()) {
      return "DD/MM/YY";
    }

    const format = "DD/MM/YYYY hh:mm A";
    djs.tz(getTimeZone());
    return djs.format(format);
  },
  getFormattedDate: (date: string) => {
    if (!date) {
      return "DD/MM/YY";
    }
    dayjs.extend(timezone);
    dayjs.extend(utc);
    let djs = dayjs.utc(date);
    if (!djs.isValid()) {
      return "DD/MM/YY";
    }
    const format = "DD/MM/YYYY";
    djs.tz(getTimeZone());
    return djs.format(format);
  },
  getSimpleFormattedDate: (date: string) => {
    if (!date) {
      return "DD/MM/YY";
    }
    dayjs.extend(timezone);
    dayjs.extend(utc);
    let djs = dayjs(date);
    if (!djs.isValid()) {
      return "DD/MM/YY";
    }
    const format = "MM/DD";
    djs.tz(getTimeZone());
    return djs.format(format);
  },
  getFormattedDateWithMonth: (date: string) => {
    if (!date) {
      return "";
    }
    dayjs.extend(timezone);
    dayjs.extend(utc);
    let djs = dayjs(date);
    const format = "MMM, DD";
    djs.tz(getTimeZone());
    return djs.format(format);
  },
  getFormattedHourAndMinute: (date: string) => {
    if (!date) {
      return "";
    }
    dayjs.extend(timezone);
    dayjs.extend(utc);
    let djs = dayjs(date);
    const format = "HH:mm";
    djs.tz(getTimeZone());
    return djs.format(format);
  },
  getFullFormattedDateAndTime: (date: string) => {
    if (!date) {
      return "-";
    }
    dayjs.extend(timezone);
    dayjs.extend(utc);
    let djs = dayjs(date);
    const format = "H:mm - dddd, MMM DD";
    djs.tz(Intl.DateTimeFormat().resolvedOptions().timeZone);
    return djs.format(format);
  },
  getFormattedDateForDatePicker: (date: string) => {
    if (!date) {
      return "";
    }
    dayjs.extend(timezone);
    dayjs.extend(utc);
    let djs = dayjs(date);
    const format = "YYYY-MM-DD";
    djs.tz(getTimeZone());
    return djs.format(format);
  },
  getDayAndMonth: (dateString: string) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date(dateString);

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const month = months[monthIndex];

    return `${month} ${day}`;
  },
  reFormatDateForMonthPicker: (dateString: string) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const [monthName, day] = dateString.split(" ");
    const monthIndex = months.findIndex(
      (month) => month.toLowerCase() === monthName.slice(0, 3).toLowerCase()
    );

    const year = new Date().getFullYear();
    const date = new Date(year, monthIndex, Number(day), 21, 0, 0);

    return date.toUTCString();
  },
};
