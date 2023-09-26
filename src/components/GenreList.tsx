import { Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <>
      <ul>
        {data.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
