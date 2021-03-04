import {
  Box,
  Heading,
  List,
  ListItem,
  Link as ChakraLink,
} from "@chakra-ui/react";
import React from "react";

type MyLink = {
  name: string;
  email?: boolean;
  ext?: boolean;
  url: string;
  text?: string;
};

const myLinks: Array<MyLink> = [
  {
    name: "Github",
    url: "https://github.com/daduam",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/daduam",
  },
  {
    name: "Email",
    email: true,
    url: "mailto:josephampadu549@gmail.com",
    text: "josephampadu549@gmail.com",
  },
  {
    name: "Twitter",
    ext: true,
    url: "https://twitter.com/mpadu_",
  },
];

export const Links = ({}) => {
  return (
    <Box w="container.md" p="8">
      <Heading fontSize="2xl">Links</Heading>

      <List>
        {myLinks.map(({ name, url, text, email, ext }) => {
          return (
            <ListItem>
              <strong style={email ? { color: "red" } : undefined}>
                {name}
              </strong>{" "}
              -{" "}
              <ChakraLink
                color="brand.main"
                href={url}
                rel={ext ? "noopener noreferrer" : undefined}
                isExternal={ext}
              >
                {text || url}
              </ChakraLink>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
