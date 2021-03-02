import {
  Badge,
  Box,
  Heading,
  List,
  ListItem,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { Layout } from "../components/Layout";

const Index = () => {
  return (
    <Layout height="100vh">
      <Box w="container.md" p="8">
        <Text>
          <em>Hello</em> 👋🏿, I am <strong>Joseph Ampadu</strong>, computer
          science undergraduate and a <strong>fullstack web developer</strong>
          . I am currently <strong>open</strong> to entry level developer
          roles and <strong>internships</strong>. I am currently taking a
          course in <strong>Data Analysis with Python</strong>, while building
          cool side projects.
        </Text>
      </Box>

      <Box w="container.md" p="8">
        <Heading fontSize="2xl">Skills</Heading>
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
            <strong>Databases</strong> - SQL, Postgresql, MongoDB
          </ListItem>
        </List>
      </Box>

      <Box w="container.md" p="8">
        <Heading fontSize="2xl">Links</Heading>
        <List>
          <ListItem>
            <strong>Github</strong> -{" "}
            <ChakraLink color="brand.main" href="https://github.com/daduam">
              https://github.com/daduam
            </ChakraLink>
          </ListItem>
          <ListItem>
            <strong>LinkedIn</strong> -{" "}
            <ChakraLink
              color="brand.main"
              href="https://linkedin.com/in/daduam"
            >
              https://linkedin.com/in/daduam
            </ChakraLink>
          </ListItem>
          <ListItem>
            <strong style={{ color: "red" }}>Email</strong> -{" "}
            <ChakraLink
              color="brand.main"
              href="mailto:josephampadu549@gmail.com"
            >
              josephampadu549@gmail.com
            </ChakraLink>
          </ListItem>
          <ListItem>
            <strong>Twitter</strong> -{" "}
            <ChakraLink color="brand.main" target="_blank" href="https://twitter.com/mpadu_">
              https://twitter.com/mpadu_
            </ChakraLink>
          </ListItem>
        </List>
      </Box>
    </Layout>
  );
};

export default Index;
