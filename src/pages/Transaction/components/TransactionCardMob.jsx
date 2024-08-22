import React from 'react';
import { Box, Stack, HStack, Text, Badge } from '@chakra-ui/react';

const transactions = [
  {
    id: "HD82NA2H",
    date: "2022-06-09 07:06 PM",
    type: "PKR Deposit",
    amount: "+ PKR81,123.10",
    status: "Pending",
    statusColor: "gray",
  },
  {
    id: "HD82NA2H",
    date: "2022-06-07 02:48 PM",
    type: "PKR Withdraw",
    amount: "- PKR81,123.10",
    status: "Processing",
    statusColor: "orange",
  },
  {
    id: "HD82NA2H",
    date: "2022-06-07 02:48 PM",
    type: "PKR Withdraw",
    amount: " PKR81,123.10",
    status: "Cancelled",
    statusColor: "red",
  },
  {
    id: "HD82NA2H",
    date: "2022-06-07 02:48 PM",
    type: "PKR Withdraw",
    amount: "- PKR81,123.10",
    status: "Completed",
    statusColor: "green",
  },
];

const TransactionCard = (isMobile ) => {
  return (
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
};

export default TransactionCard;
