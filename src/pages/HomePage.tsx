import {
  Grid,
  GridItem,
  HStack,
  Show,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}>
        <Show above="lg">
          <GridItem
            area="aside"
            paddingX={4}
            zIndex="1"
            height="fit-content"
            position="sticky"
            top="6em"
            left="0">
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main" paddingX={4} zIndex="1">
          <VStack spacing={4} align="stretch">
            <VStack
              spacing={4}
              align="stretch"
              padding={2}
              backgroundColor={colorMode == "dark" ? "gray.800" : "white"}
              zIndex="99"
              position="sticky"
              top="5.7rem"
              left="0">
              <GameHeading />
              <HStack spacing={4} marginBottom={4}>
                <PlatformSelector />
                <SortSelector />
              </HStack>
            </VStack>
            <GameGrid />
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
