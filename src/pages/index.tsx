import { Box } from "@chakra-ui/react";
import { Layout } from "../components/Layout";

const Index = () => {
  return (
    <Layout height="100vh">
      <Box w="container.md" p="8">
        <p>
          <em>Hello</em>, I am <strong>Joseph Ampadu</strong>, a computer
          science undergraduate and <strong>fullstack web developer</strong>.
          I am currently <strong>open</strong> to entry level developer roles
          and internships.
        </p>
      </Box>
    </Layout>
  );
};

export default Index;
