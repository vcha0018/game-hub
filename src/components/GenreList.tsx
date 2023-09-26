import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return null;
  return (
    <>
      <List>
        {isLoading &&
          skeletons.map((skeletion) => <GenreSkeleton key={skeletion} />)}
        {data.map((genre) => (
          <ListItem key={genre.id} marginY={2}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={"32px"}
                borderRadius={2}
              />
              <Text fontSize={"xl"}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
