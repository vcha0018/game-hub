import { Box, Text } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  // const emojiMap: { [key: number]: ImageProps } = {
  //   3: { src: FaMeh, alt: "meh", boxSize: "" },
  //   4: { src: FaThumbsUp, alt: "recommended", boxSize: "" },
  //   5: { src: FaBullseye, alt: "exceptional", boxSize: "" },
  // };

  const emojiMap: { [key: number]: JSX.Element } = {
    3: <Text>😑</Text>,
    4: <Text>👍</Text>,
    5: <Text>🎯</Text>,
  };
  return (
    <>
      <Box marginTop={2}>{emojiMap[rating]}</Box>
    </>
  );
};

export default Emoji;
