import { Box, Flex } from "@chakra-ui/react"
import Sidenav from "../../components/sidenav"
import TopNav from "../../components/TopNav"

const Dashboard = () => {
  return (
    <div>
     <Flex>
       <Sidenav /> 
       <Box flexGrow={1}>
       <TopNav />
       </Box>
     </Flex>
    </div>
  )
}

export default Dashboard
