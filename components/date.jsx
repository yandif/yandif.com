import dayjs from "dayjs";

dayjs().format();
dayjs("2018-04-04T16:00:00.000Z");

export default function Date({ dateString }) {
  return (
    <time dateTime={dateString}>
      {dayjs(dateString).format(" MMMM D, YYYY")}
    </time>
  );
}
