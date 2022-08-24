import { Image, Flex } from "@chakra-ui/react";
import loader from "../../assets/img/totoro-loader.gif";

export const TotoroLoader = () => {
  return (
    <Image
      src={loader}
      w="160px"
      h="160px"
      borderRadius="100%"
      margin="0 auto"
    />
  );
};
