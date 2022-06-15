import SunCalc from "suncalc";

export const fetcher = (...args) => fetch(...args).then(res => res.json());

export const getCurrentTime = timeZone => {
  const date = new Date();
  return date.toLocaleTimeString([], {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const getTimeOfDayGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 1 && hour < 12) return "Morning";
  if (hour >= 12 && hour <= 18) return "Afternoon";
  if (hour > 18 && hour < 24) return "Evening";
  return "day";
};

export const isSunSet = data => {
  if (!data) return;
  const hour = new Date().getHours();
  const times = SunCalc.getTimes(new Date(), data.latitude, data.longitude);
  const sunrise = times.sunrise.getHours();
  const sunset = times.sunset.getHours();
  return hour >= sunrise && hour < sunset ? false : true;
};
