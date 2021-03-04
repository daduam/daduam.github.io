import { Box, Heading, ListItem, List, Badge } from "@chakra-ui/react";

export const Skills = () => {
  return (
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
          <strong>Database</strong> - SQL, Postgresql, MongoDB
        </ListItem>
      </List>
    </Box>
  );
};
