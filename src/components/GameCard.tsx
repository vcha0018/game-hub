import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Card
        variant="elevated"
        backgroundColor={colorMode === "light" ? "#dee1e3" : "gray.700"}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;">
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent={"space-between"} marginBottom={2}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={"xl"}>
            <Link to={"/games/" + game.slug}>{game.name}</Link>
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </Box>
  );
};

export default GameCard;
