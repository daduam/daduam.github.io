import { Box, Heading } from "@chakra-ui/react";

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
      </Box>
    </Layout>
  );
};

export default Work;
