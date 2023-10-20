import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  useColorMode,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../stores/gameQueryStore";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const { colorMode } = useColorMode();
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={4}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeletion) => <GenreSkeleton key={skeletion} />)}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} marginY={2}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={"32px"}
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                color={colorMode === "dark" ? "#fff" : "#000"}
                fontSize="lg"
                onClick={() => setGenreId(genre.id)}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
