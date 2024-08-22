import { Box, Card, Flex, HStack, Stack, Text } from "@chakra-ui/react";

const TransactionCardMob = () => {
  const cardData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "PKR Deposit",
        tag: "E-Transfer",
      },
      amount: "+PKR81,123",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:02 AM",
      type: {
        name: "PKR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-PKR55,123",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "08:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "10:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Widthdraw",
      },
      amount: "-5.05555544",
    },
  ];

  return (
    <Card>
      <Stack spacing={4}>
        {cardData.map((data) => (
          <Box key={data.id}>
            <Flex
              justifyContent="space-between"
              color="p.black"
              alignItems="center"
              wrap="wrap"
              p={2}
            >
              <Text fontSize={["xs", "sm"]} fontWeight="medium">
                {data.id}
              </Text>
              <Text fontSize={["xs", "sm"]} fontWeight="medium">
                {data.date}
              </Text>
              <Text fontSize={["xs", "sm"]} fontWeight="medium">
                {data.time}
              </Text>
              <Text fontSize={["xs", "sm"]} fontWeight="medium">
                {data.amount}
              </Text>
            </Flex>
          </Box>
        ))}
      </Stack>
    </Card>
  );
};

export default TransactionCardMob;

/*    
    <Stack spacing={4} p={4} bg="white" borderRadius="md" boxShadow="md">
      {transactions.map((transaction, index) => (
        <Box key={index} p={4} bg="gray.50" borderRadius="md">
          <Stack spacing={2}>
            <HStack justifyContent="space-between">
              <Text fontWeight="bold">ID: {transaction.id}</Text>
              <Text>{transaction.date}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>{transaction.type}</Text>
              <Text fontWeight="bold" color={transaction.amount.startsWith('-') ? 'red.500' : 'green.500'}>
                {transaction.amount}
              </Text>
            </HStack>
            <Badge colorScheme={transaction.statusColor}>{transaction.status}</Badge>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
*/
