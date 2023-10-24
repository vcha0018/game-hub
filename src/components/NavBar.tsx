import { HStack, Image, useColorMode } from "@chakra-ui/react";
import logo from "../assets/game-icon.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const { colorMode } = useColorMode();

  return (
    <HStack
      paddingY={4}
      paddingX={4}
      zIndex="99"
      position="sticky"
      backgroundColor={colorMode == "dark" ? "gray.800" : "white"}
      top="0"
      left="0">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
