import { Button, Card, Flex, Icon, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Tag } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { AiOutlineDownload } from "react-icons/ai";
import TransactionTable from "./components/TransactionTable";

const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: "349",
    },
    {
      name: "Desposite",
      count: "114",
    },
    {
      name: "Withdraw",
      count: "213",
    },
    {
      name: "Trade",
      count: "22",
    }
  ]


  return (
    <DashboardLayout>
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
      </Flex>
      <Card>
        <Tabs>
          <TabList py={4}>
            {
              tabs.map((tab) => (<Tab key={tab.name} display="flex" gap="2">{tab.name} <Tag colorScheme="gray" borderRadius="full">{tab.count}</Tag></Tab>))
            }
            
          </TabList>
          <TabIndicator
        
          />
          <TabPanels>
            <TabPanel>
              <TransactionTable /> 
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
