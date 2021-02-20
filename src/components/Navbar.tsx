import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <Flex
      h="10"
      w="100%"
      bg="brand.main"
      color="brand.lightShade"
      justifyContent="center"
      alignItems="center"
    >
      <NextLink href="/" passHref>
        <ChakraLink mr="2">About</ChakraLink>
      </NextLink>
      <span>|</span>
      <NextLink href="/work" passHref>
        <ChakraLink ml="2">Portfolio</ChakraLink>
      </NextLink>
    </Flex>
  );
};
