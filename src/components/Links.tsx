import {
  Box,
  Heading,
  List,
  ListItem,
  Link as ChakraLink,
} from "@chakra-ui/react";

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
    <Box
      mx="auto"
      p="4"
      width={{
        base: "100%",
        sm: "75%",
        md: "50%",
      }}
    >
      <Heading fontSize="xl" as="h1">
        Links
      </Heading>

      <List>
        {myLinks.map(({ name, url, text, email, ext }, idx) => {
          return (
            <ListItem key={`${name}-${idx}`}>
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
