import { Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <CustomCard bgImage={imgUrl} 
    bgSize="cover" 
    bgColor={inverted ? "p.purple" : "white"}
    
    bgRepeat="no-repeat">
    
      <Tag
        bg={inverted ? "white" : "p.purple"}
        color={inverted ? "p.purple" : "white"}
        borderRadius="full"
      >
        {tagText}
      </Tag>
      <Text mt="4" textStyle="h5" fontWeight="medium"
      color ={inverted ? "white" : "p.purple"}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
