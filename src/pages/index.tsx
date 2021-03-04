import { Badge, Box, Heading, List, ListItem, Text } from "@chakra-ui/react";

import { Layout } from "../components/Layout";
import { Links } from "../components/Links";

const Index = () => {
  return (
    <Layout height="100vh">
      <Box w="container.md" p="8">
        <Text>
          <em>Hello</em> 👋🏿, I am <strong>Joseph Ampadu</strong>, computer
          science undergraduate and a <strong>fullstack web developer</strong>
          . I am <strong>open</strong> to entry level developer roles and{" "}
          <strong>internships</strong>. I am currently taking a course in{" "}
          <strong>Data Analysis with Python</strong>, while building cool side
          projects.
        </Text>
      </Box>

      <Box w="container.md" p="8">
        <Heading fontSize="2xl" as="h1">
          Skills
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
            <strong>Databases</strong> - SQL, Postgresql, MongoDB
          </ListItem>
        </List>
      </Box>

      <Links />
    </Layout>
  );
};

export default Index;
