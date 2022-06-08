import { END_POINTS } from "./constants";

export const getLocation = async () => {
  try {
    const res = await fetch(END_POINTS.location);
    if (!res.ok) throw new Error(`💥Problem loading location data💥`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getTimeZone = async () => {
  try {
    const res = await fetch(END_POINTS.timezone);
    if (!res.ok) throw new Error(`💥Problem loading time zone data💥`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getRandomQuote = async () => {
  try {
    const res = await fetch(END_POINTS.quotes);
    if (!res.ok) throw new Error(`💥Problem random quote data💥`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
