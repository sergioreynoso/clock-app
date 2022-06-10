import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import useSWR from "swr";
import { END_POINTS } from "../utils/constants";
import { fetcher } from "../utils/helpers";
import SunCalc from "suncalc";

export const useSun = () => {
  const { data, error } = useSWR(END_POINTS.location, fetcher, {
    refreshInterval: 0,
  });
  const times = SunCalc.getTimes(new Date(), data?.latitude, data?.longitude);
  // const sunrise = times.sunrise.getHours() + ":" + times.sunrise.getMinutes();

  return times.sunset < new Date() ? "dark" : "light";
};
