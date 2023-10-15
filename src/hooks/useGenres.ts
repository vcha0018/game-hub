import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");
// const useGenres = () => ({ data: genres, isLoading: false, error: null });
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 hrs
    initialData: genres,
  });
// const useGenres = () =>
//   useQuery<Genre[], Error>({
//     queryKey: ["genres"],
//     queryFn: () => genres,
//   });

export default useGenres;
