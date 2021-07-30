import {
  Badge,
  Box,
  Heading,
  Link as ChakraLink,
  List,
  ListItem,
  Switch,
  Text,
} from "@chakra-ui/react";

const Index = () => {
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
      <Switch />

      <Box mb="4">
        <Text>
          Hi 👋🏿, I am <strong>Joseph Ampadu</strong>, computer science
          undergraduate and a fullstack web developer. I am open to entry level
          developer roles and internships.
        </Text>
      </Box>

      <Box my="4">
        <Heading fontSize="lg" as="h1">
          I work with
        </Heading>
        <List>
          <ListItem>
            <Badge bg="brand.darkAccent" color="white">
              React
            </Badge>{" "}
            <Badge bg="brand.lightAccent">React Native</Badge>{" "}
            <Badge bg="brand.darkAccent" color="white">
              NodeJs
            </Badge>{" "}
            <Badge bg="brand.lightAccent">Docker</Badge>
          </ListItem>
          <ListItem>
            <strong>Languages</strong> - JavaScript/TypeScript, C++, Python,
            Java
          </ListItem>
          <ListItem>
            <strong>Tools</strong> - Linux, Git, Vscode, Vim
          </ListItem>
          <ListItem>
            <strong>Database</strong> - SQL, Postgresql, MongoDB
          </ListItem>
        </List>
      </Box>

      <Box my="4">
        <List>
          {[
            {
              name: "LinkedIn",
              url: "",
            },
            {
              name: "Email",
              email: true,
              url: "mailto:josephampadu549@gmail.com",
              text: "josephampadu549@gmail.com",
            },
          ].map(({ name, url, text, email }, idx) => {
            return (
              <ListItem key={`${name}-${idx}`}>
                <strong style={email ? { color: "red" } : undefined}>
                  {name}
                </strong>{" "}
                -{" "}
                <ChakraLink color="brand.main" href={url}>
                  {text || url}
                </ChakraLink>
              </ListItem>
            );
          })}
        </List>
      </Box>

      <Box mt="4">
        <Heading fontSize="lg" as="h1">
          Projects
        </Heading>
        <Text>
          Check out what I am working on my{" "}
          <ChakraLink color="brand.main" href="https://github.com/daduam">
            github
          </ChakraLink>
          .<br />
          Also check out my{" "}
          <ChakraLink href="https://linkedin.com/in/daduam">
            LinkedIn profile
          </ChakraLink>
          .
        </Text>
      </Box>
    </Box>
  );
};

export default Index;
