import { Button, Link as ChakraLink } from "@chakra-ui/core";
import { SiGithub, SiTwitter } from "react-icons/si";

import { Container } from "./Container";

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    maxWidth="48rem"
    py={2}
  >
    <ChakraLink
      isExternal
      href="https://github.com/daduam"
      flexGrow={1}
      mx={2}
    >
      <Button
        width="100%"
        colorScheme="gray"
        variant="solid"
        leftIcon={<SiGithub />}
      >
        Github
      </Button>
    </ChakraLink>

    <ChakraLink
      isExternal
      href="https://twitter.com/mpadu_"
      flexGrow={1}
      mx={2}
    >
      <Button width="100%" colorScheme="twitter" leftIcon={<SiTwitter />}>
        Twitter
      </Button>
    </ChakraLink>

    <ChakraLink
      isExternal
      href="mailto:josephampadu549@gmail.com"
      flexGrow={1}
      mx={2}
    >
      <Button width="100%" colorScheme="red">
        Contact Me
      </Button>
    </ChakraLink>
  </Container>
);
