import { HStack, Skeleton, VStack } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <VStack marginY={2} align="stretch">
      <HStack justifyContent="flex-start">
        <Skeleton height="32px" width="32px" borderRadius={8} />
        <Skeleton height="10px" width="6rem" />
      </HStack>
    </VStack>
  );
};

export default GenreSkeleton;
