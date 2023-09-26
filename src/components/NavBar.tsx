import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/game-icon.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} paddingY={4}>
      <Image src={logo} boxSize="60px" />
      <Text>Game Hub</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
