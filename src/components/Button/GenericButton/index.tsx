import { Button } from "@chakra-ui/react";
import { IGenericButton } from "../../../interfaces";

export const GenericButton = ({ children, ...rest }: IGenericButton) => {
  return (
    <Button
      bg="primary.200"
      color="primary.700"
      borderRadius="8px"
      borderWidth="1.5px"
      borderColor="primary.700"
      p="15px 30px"
      _hover={{ color: "primary.200", bg: "primary.700" }}
      {...rest}
    >
      {children}
    </Button>
  );
};
