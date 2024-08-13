import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react"
import { RxDashboard } from "react-icons/rx";
import { RiArrowUpDownFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";



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
        <Stack justify= "space-between" boxShadow="lg" w="256px" h="100vh"
        
        >
            <Box>
                <Heading textAlign="center" as="h1" fontSize="20px" pt="3.5rem">
                    WrathRex Code
                </Heading>
                <Box mt="6" mx="3">
                    {navLinks.map((nav) => (
                        <HStack mx="3" py="3" px="4" _hover={{
                            borderRadius: "10px",
                            bg: "#F3F3F7",
                            color: "#171717",

                        }}
                            color="#797E82"
                        >
                            <Icon as={nav.icon} />
                            <Text fontSize="14px" fontWeight="medium" >{nav.text}</Text>
                        </HStack>
                    ))}
                </Box>
            </Box>

            <Box mt= "6" mx= "3" mb= "6">
            <HStack mx="3" py="3" px="4" _hover={{
                borderRadius: "10px",
                bg: "#F3F3F7",
                color: "#171717",

            }}
                color="#797E82"
            >
                <Icon as={BiSupport} />
                <Text fontSize="14px" fontWeight="medium" >Support</Text>
            </HStack>
            </Box>
        </Stack>
    )
}

export default Sidenav
