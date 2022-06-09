import SunCalc from "suncalc";

export const fetcher = (...args) => fetch(...args).then(res => res.json());

export const getCurrentTime = () =>
  `${new Date().getHours()}:${
    // Get minutes with a leading zero
    new Date().getMinutes() < 10 ? 0 : ""
  }${new Date().getMinutes()}`;

export const getTimeOfDayGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 1 && hour < 12) return "Morning";
  if (hour >= 12 && hour <= 18) return "Afternoon";
  if (hour > 18 && hour < 24) return "Evening";
  return "day";
};

export const getSunPosition = coordinates => {
  const times = SunCalc.getTimes(
    new Date(),
    coordinates.latitude,
    coordinates.longitude
  );
  console.log(coordinates);
  console.log(times.sunrise.getHours() + ":" + times.sunrise.getMinutes());
};