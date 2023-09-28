import { HStack, Icon, Tooltip } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";
import { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    nintendo: SiNintendoswitch,
  };
  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Tooltip key={platform.id} label={platform.name} placement="bottom">
          <span>
            <Icon as={iconMap[platform.slug]} color={"gray.300"} />
          </span>
        </Tooltip>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
