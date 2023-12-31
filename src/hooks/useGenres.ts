import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import Genre from "../entities/Genre";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Genre>("/genres");

// const useGenres = () => useData<Genre>("/genres");
// const useGenres = () => ({ data: genres, isLoading: false, error: null });
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });
// const useGenres = () =
//   useQuery<Genre[], Error>({
//     queryKey: ["genres"],
//     queryFn: () => genres,
//   });

export default useGenres;
