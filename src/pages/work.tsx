import { Box, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Layout } from "../components/Layout";

const Work = () => {
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
          Projects
        </Heading>
        <Text>
          Check out what I am working on <ChakraLink color="brand.main" href="https://github.com/daduam">here</ChakraLink>.
        </Text>
      </Box>
    </Layout>
  );
};

export default Work;
