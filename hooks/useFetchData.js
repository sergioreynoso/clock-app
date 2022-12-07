import useSWR, { useSWRConfig } from "swr";
import { END_POINTS } from "../utils/constants";
import { fetcher } from "../utils/helpers";

export default function useFetchData(srt) {
  if (typeof srt !== "string") {
    throw Error("Parameter must be of type String!");
  }

  const { mutate } = useSWRConfig();
  const { data, error } = useSWR(srt, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    refreshInterval: 0,
  });

  return { data, error, mutate };
}
