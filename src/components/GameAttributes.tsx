import { SimpleGrid, Text } from "@chakra-ui/react";
import Game from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinationItem from "./DefinationItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinationItem
        term="Platforms"
        children={game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      />
      <DefinationItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinationItem>
      <DefinationItem
        term="Genres"
        children={game.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      />
      <DefinationItem
        term="Publishers"
        children={game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      />
    </SimpleGrid>
  );
};

export default GameAttributes;

