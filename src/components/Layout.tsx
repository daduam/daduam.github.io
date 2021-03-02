import { Flex, FlexProps } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

export const Layout = ({ children, ...props }: FlexProps) => {
  return (
    <Flex direction="column" alignItems="center" {...props}>
      <Navbar />
      {children}
    </Flex>
  );
};
