import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { AiOutlineDownload } from "react-icons/ai";
import TransactionTable from "./components/TransactionTable";
import { BiSearch } from "react-icons/bi";
import TransactionCardMob from "./components/TransactionCardMob";
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
    },
  ];

  return (
    <DashboardLayout>
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList
            pt={4}
            display="flex"
            w="full"
            justifyContent="space-between"
          >
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" pb={4}>
                  {tab.name}{" "}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup maxW="200px" pr={6}>
              <InputLeftElement pointerEvents="none">
                <Icon as={BiSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>
          <TabIndicator />
          <TabPanels>
            <TabPanel>
              <TransactionCardMob />
              {/* <TransactionTable /> */}
            </TabPanel>
            <TabPanel>
              {/* <TransactionTable /> */}
            </TabPanel>
            <TabPanel>
              {/* <TransactionTable /> */}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
