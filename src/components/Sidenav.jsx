import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react"
import { RxDashboard } from "react-icons/rx";
import { RiArrowUpDownFill } from "react-icons/ri";



const Sidenav = () => {
    const navLinks = [
        {
            icon: RxDashboard,
            text: "Dashboard",
            link: "/",
        },

        {
            icon: RiArrowUpDownFill,
            text: "Transactions",
            link: "/",
        },

    ];


    return (
        <Stack boxShadow="sm" maxW="256px" h="100vh" bg="red">
            <Heading textAlign="center" as="h1" fontSize="20px" pt="3.5rem">
                WrathRex Code
            </Heading>
            <Box mt="6" mx="3">
            {navLinks.map((nav) => (
                <HStack mx="3" key={nav.text}>
                    <Icon as={nav.icon} />
                    <Text>{nav.text}</Text>
                </HStack>
            ))}
            </Box>
        </Stack>
    )
}

export default Sidenav
