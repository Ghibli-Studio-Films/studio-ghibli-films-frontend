import { Input, FormControl, FormLabel, Text } from "@chakra-ui/react";
import { IGenericInput } from "../../../interfaces";

export const GenericInput = ({
  label,
  error,
  register,
  ...rest
}: IGenericInput) => {
  return (
    <FormControl>
      <FormLabel color={error ? "red.500" : "primary.700"} htmlFor={rest.id!}>
        {label}
      </FormLabel>
      <Input
        bg={error ? "red.50" : "primary.200"}
        color={error ? "red.500" : "primary.700"}
        borderRadius="8px"
        borderWidth="1.5px"
        borderColor={error ? "red.500" : "primary.500"}
        size="md"
        _placeholder={{ color: `${error ? "red.500" : "primary.500"}` }}
        // @ts-ignore
        _hover={[
          {},
          {},
          {},
          {
            color: `${error ? "red.500" : "primary.200"}`,
            bg: `${error ? "red.100" : "primary.700"}`,
          },
        ]}
        focusBorderColor={error ? "red.500" : "primary.500"}
        {...register(rest.name!)}
        {...rest}
      />
      <Text
        as="p"
        color={error ? "red.500" : "primary.700"}
        fontSize="14px"
        marginTop="5px"
        height="14px"
      >
        {error}
      </Text>
    </FormControl>
  );
};
