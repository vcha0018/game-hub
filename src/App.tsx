import {
  Grid,
  GridItem,
  HStack,
  Show,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const { colorMode } = useColorMode();
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}>
      <GridItem
        area="nav"
        paddingX={4}
        zIndex="99"
        position="sticky"
        backgroundColor={colorMode == "dark" ? "gray.800" : "white"}
        top="0"
        left="0">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem
          area="aside"
          paddingX={4}
          zIndex="1"
          height="fit-content"
          position="sticky"
          top="6em"
          left="0">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={4} zIndex="1">
        <VStack spacing={4} align="stretch">
          <VStack
            spacing={4}
            align="stretch"
            paddingY={2}
            backgroundColor={colorMode == "dark" ? "gray.800" : "white"}
            zIndex="99"
            position="sticky"
            top="5.7rem"
            left="0">
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={4} marginBottom={4}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </HStack>
          </VStack>
          <GameGrid gameQuery={gameQuery} />
        </VStack>
      </GridItem>
    </Grid>
  );
}

export default App;

