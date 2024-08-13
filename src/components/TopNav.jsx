import {
    Box,
  Button,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { IoChevronDownCircleOutline } from "react-icons/io5";

const TopNav = () => {
  return (
    <Box boxShadow="xl">
    <HStack maxW="60rem" h="16" justify="space-between" px={32} mx="auto" >
      <Heading fontSize= "28px">Dashboard</Heading>

      <Menu>
        <MenuButton as={Button} rightIcon={<IoChevronDownCircleOutline />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
    </Box>
  );
};

export default TopNav;
