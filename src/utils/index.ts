export const numberTocomma = (price?: number) => {
  if (!price) return "- ";
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const millisecondsToTime = (sec: number) => {
  const ONE_DAY = 1000 * 60 * 60 * 24;
  const day = Math.floor(sec / ONE_DAY);
  sec = sec % ONE_DAY;
  const HOUR = 1000 * 60 * 60;
  const hour = Math.floor(sec / HOUR);
  sec = sec % HOUR;
  const MINUTE = 1000 * 60;
  const minute = Math.floor(sec / MINUTE);
  sec = sec % MINUTE;
  const SECOND = 1000;
  let second: number | string = Math.floor(sec / SECOND);

  if (second < 10) second = "0" + second;

  return `${day}일 ${hour}:${minute}:${second}`;
};
