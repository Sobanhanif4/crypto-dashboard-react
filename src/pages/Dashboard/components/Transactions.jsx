import { Box, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { FaRupeeSign } from "react-icons/fa";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { AiFillDollarCircle } from "react-icons/ai";

const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: FaRupeeSign,
      text: "PKR Deposit",
      amount: "+ PKR81,123.21",
      timeStamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: PiCurrencyBtcFill,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timeStamp: "2022-05-27 12:32 PM",
    },
    {
      id: "3",
      icon: AiFillDollarCircle,
      text: "PKR Deposit",
      amount: "+ PKR81,123.21",
      timeStamp: "2022-06-09 7:06 PM",
    },
  ];

  return (
    <CustomCard>
      <Text>Recent Transactions</Text>
      <Stack>
        {transactions.map((transaction) => (
          <Flex key={transaction.id}>
            <Grid  placeItems="center" bg="black.5" boxSize={10} borderRadius="full">
              <Icon as={transaction.icon} />
            </Grid>

            <Flex justify="space-between">
                <Stack>
                    <Text fontSize="sm" color="black.80">
                        {transaction.text}
                    </Text>
                    <Text fontSize="sm" color="black.80">
                        {transaction.timeStamp}
                    </Text>
                </Stack>
            </Flex>
          </Flex>
        ))}
      </Stack>
    </CustomCard>
  );
};

export default Transactions;
