import { useBreakpointValue } from "@chakra-ui/react";
import TransactionTable from './TransactionTable';
import TransactionCardMob from './TransactionCardMob';

const ResponsiveComponent = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {isMobile ? <TransactionCardMob /> : <TransactionTable />}
    </>
  );
};

export default ResponsiveComponent;
