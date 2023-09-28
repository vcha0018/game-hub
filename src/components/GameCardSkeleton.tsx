import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="300px" />
      <CardBody>
        <SkeletonText noOfLines={2} skeletonHeight={2} />
        <HStack marginY={4} justifyContent="space-between">
          <Skeleton height="15px" width="10rem" />
          <Skeleton
            height="15px"
            width="30px"
            startColor="grey.600"
            endColor="green.600"
          />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
