import { Box } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

export const Layout: React.FC = ({ children, ...props }) => {
  return (
    <Box {...props}>
      <Navbar />
      {children}
    </Box>
  );
};
