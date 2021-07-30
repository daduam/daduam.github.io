import {
  Badge,
  Box,
  Heading,
  Link as ChakraLink,
  List,
  ListItem,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

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
      <Switch
        position="fixed"
        top="1rem"
        right="1rem"
        isChecked={isDark}
        onChange={toggleColorMode}
      />

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

      <Box mt="4">
        <Text>
          Check out what I am working on my{" "}
          <ChakraLink
            color={colorMode === "light" ? "brand.main" : "brand.lightAccent"}
            href="https://github.com/daduam"
          >
            github
          </ChakraLink>
          .
          <br />
          Also check out my{" "}
          <ChakraLink
            color={colorMode === "light" ? "brand.main" : "brand.lightAccent"}
            href="https://linkedin.com/in/daduam"
          >
            LinkedIn profile
          </ChakraLink>
          .
          <br />
          Contact me via{" "}
          <ChakraLink
            color={colorMode === "light" ? "brand.main" : "brand.lightAccent"}
            href="mailto:josephampadu549@gmail.com"
          >
            email
          </ChakraLink>
        </Text>
      </Box>
    </Box>
  );
};

export default Index;
