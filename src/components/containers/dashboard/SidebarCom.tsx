import React from "react";
import { Box, HStack } from "@chakra-ui/react";

const SidebarCom = ({ sidebarWidth, children }: { sidebarWidth: string, children: React.ReactNode }) => {
  return (
    <HStack spacing={0}>
      <Box
        as="nav"
        display="block"
        height="100%"
        // border={".1rem solid rgb(233, 232, 234)"}
        left="0"
        py="5"
        px="3"
        width={sidebarWidth}
        // bg="rgb(233, 232, 234)"
        background={'rgb(250, 250, 250)'}
        transition="all 0.2s"
      >
        {children}
      </Box>
    </HStack>
  );
};

export default SidebarCom;
