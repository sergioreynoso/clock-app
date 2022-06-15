import SunCalc from "suncalc";
import useSWR from "swr";

export const fetcher = (...args) => fetch(...args).then(res => res.json());

export const getCurrentTime = () => {
  const date = new Date();
  // console.log(
  //   typeof date.toLocaleTimeString([], {
  //     hour12: false,
  //     hour: "2-digit",
  //     minute: "2-digit",
  //   })
  // );
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

export const getSunAltitude = data => {
  if (!data) return;
  const { latitude, longitude } = data;
  const times = SunCalc.getTimes(new Date(), data.latitude, data.longitude);
  const position = SunCalc.getPosition(
    times.solarNoon,
    data.latitude,
    data.longitude
  );
  // console.log(position.altitude);
  return position.altitude;
};
