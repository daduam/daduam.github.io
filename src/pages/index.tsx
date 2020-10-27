import { Code, Text } from "@chakra-ui/core";
import Head from "next/head";

import { Container } from "../components/Container";
import { CTA } from "../components/CTA";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";

const Index = () => (
  <Container height="100vh">
    <Head>
      <title>Kwadjo Ampadu</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      {/* <link rel="manifest" href="/site.webmanifest" /> */}
    </Head>
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
