function formatDate(releasedDate) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(releasedDate).toLocaleDateString(undefined, options);
}

function DateFormat({ date }) {
  return formatDate(date);
}

export default DateFormat;
