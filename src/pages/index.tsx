import { Box, Text } from "@chakra-ui/react";

import { Layout } from "../components/Layout";
import { Links } from "../components/Links";
import { Skills } from "../components/Skills";

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

      <Skills />

      <Links />
    </Layout>
  );
};

export default Index;
