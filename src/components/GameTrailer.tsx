import { Spinner } from "@chakra-ui/react";
import useTrailer from "../hooks/useTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, isLoading, error } = useTrailer(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  const videoToDisplay = trailers?.results[0];
  return videoToDisplay ? (
    <video
      src={videoToDisplay.data[480]}
      poster={videoToDisplay.preview}
      controls
    />
  ) : null;
};

export default GameTrailer;
