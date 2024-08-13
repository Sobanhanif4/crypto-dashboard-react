import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import Sidenav from "./sidenav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
    const {isOpen, onClose, onOpen} = useDisclosure();


  return (

      <Flex>
        <Sidenav />
        <SideDrawer isOpen={isOpen} onClose={onclose}/>
        <Box flexGrow={1}>
          <TopNav title={title} />
          <Container bg="red" maxW="70rem">{children}</Container>
        </Box>
      </Flex>
 
  );
};

export default DashboardLayout;
