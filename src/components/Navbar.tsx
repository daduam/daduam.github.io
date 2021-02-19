import { Flex, Link } from "@chakra-ui/react";
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
      fontWeight="bold"
    >
      <Link mr="2">
        <NextLink href="/">About</NextLink>
      </Link>
      <span>|</span>
      <Link ml="2">
        <NextLink href="/work">Portfolio</NextLink>
      </Link>
    </Flex>
  );
};
