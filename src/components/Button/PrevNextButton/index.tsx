import { Button } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IPrevNextButton } from "../../../interfaces";

export const PrevNextButton = ({ go, ...rest }: IPrevNextButton) => {
  return (
    <Button
      pointerEvents="auto"
      type="button"
      color="primary.700"
      bgColor="primary.200"
      fontSize="20px"
      w="40px"
      h="40px"
      p="0"
      {...rest}
    >
      {go === "prev" ? <FiChevronLeft /> : <FiChevronRight />}
    </Button>
  );
};
