import { Box, Text, Heading } from "@chakra-ui/react";

import { Layout } from "../components/Layout";
import { Links } from "../components/Links";
import { Skills } from "../components/Skills";

const Index = () => {
  return (
    <Layout>
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
          About me
        </Heading>
        <Text>
          <em>Hello</em> 👋🏿, I am <strong>Joseph Ampadu</strong>, computer
          science undergraduate and a <strong>fullstack web developer</strong>.
          I am <strong>open</strong> to entry level developer roles and{" "}
          <strong>internships</strong>.
        </Text>
      </Box>

      <Skills />

      <Links />
    </Layout>
  );
};

export default Index;
