import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { BsMoon, BsSun } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <BsSun />
      <Switch
        colorScheme="gray"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <BsMoon />

      {/* <Text whiteSpace="nowrap">Dark Mode</Text> */}
    </HStack>
  );
};

export default ColorModeSwitch;
