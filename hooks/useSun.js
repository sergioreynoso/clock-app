import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import useSWR from "swr";
import { END_POINTS } from "../utils/constants";
import { fetcher } from "../utils/helpers";
import SunCalc from "suncalc";

export const useSun = data => {
  const { setTheme } = useTheme();
  setTheme("light");
  if (!data) return;
  const { latitude, longitude } = data;
  const times = SunCalc.getTimes(new Date(), data.latitude, data.longitude);
  const theme = times.sunset <= new Date() ? "dark" : "light";
  console.log(theme, times.sunset);
  setTheme(theme);
};
