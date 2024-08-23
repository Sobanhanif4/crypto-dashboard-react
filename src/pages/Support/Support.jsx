import { IoMdMail } from "react-icons/io";
import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import { AiTwotoneMessage } from "react-icons/ai";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout>
      <Stack spacing="5rem">
        <SupportCard
          icon={IoMdMail}
          leftComponent={<ContactCard />}
          title="Contact Us"
          text="Have a question or just want to know more? Feel free to reach out to
          us."
        />
        <SupportCard 
          icon={AiTwotoneMessage}
          leftComponent={
            <InfoCard
              imgUrl="/grid_bg.png"
              text="Learn more about our real estate, mortgage, and  corporate account services"
              tagText="Contact"
              inverted={true}
            />
          }
          title="Live Chat"
          text="Don’t have time to wait for the answer? Chat with us now. adsad dsdsdss"
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
