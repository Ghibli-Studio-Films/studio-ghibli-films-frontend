import { Button } from "@chakra-ui/react";
import { FiChevronUp } from "react-icons/fi";
import { IGoToButton } from "../../../interfaces";

export const GoToButton = ({ coordinates }: IGoToButton) => {
  if (coordinates.x < 0 || coordinates.y < 0) {
    throw new TypeError("Cooradinates x and y should be positive.");
  }

  return (
    <Button
      onClick={() => window.scrollTo(coordinates.x, coordinates.y)}
      type="button"
      color="primary.700"
      bgColor="primary.200"
      fontSize="20px"
      w="40px"
      h="40px"
      p="0"
    >
      <FiChevronUp />
    </Button>
  );
};
