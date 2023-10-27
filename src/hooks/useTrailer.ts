import { useQuery } from "@tanstack/react-query";
import Trailer from "../entities/Trailer";
import APIClient from "../services/apiClient";

const useTrailer = (gameID: number) => {
  const apiClient = new APIClient<Trailer>(`games/${gameID}/movies`);

  return useQuery({
    queryKey: ["trailers", gameID],
    queryFn: apiClient.getAll,
  });
};

export default useTrailer;
