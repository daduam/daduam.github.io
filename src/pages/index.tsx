import { Code, Text } from "@chakra-ui/core";

import { Container } from "../components/Container";
import { CTA } from "../components/CTA";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Text textAlign="center">
        I write JavaScript web apps with <Code>Node.js</Code> and{" "}
        <Code>React</Code>.
      </Text>
    </Main>

    <DarkModeSwitch />
    <Footer></Footer>
    <CTA />
  </Container>
);

export default Index;
