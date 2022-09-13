import { Flex, GridItem, Text } from "@chakra-ui/react";
import PropsTypes from "prop-types";

const FieldDefault = ({ text, textColor }) => {
  return (
    <Flex>
      <GridItem
        w="100%"
        h="100%"
        borderRadius="4px"
        marginBottom="8px"
        marginEnd="42px"
        marginStart="16px"
        bg="#FEFFFE"
        borderStyle="solid"
        borderWidth="2px"
        borderStartWidth='4px'
        borderStartColor='#47AFFC'
        
      >
        <Text
          textColor={textColor}
          textStyle="solid"
          fontSize="12px"
          fontWeight="medium"
          verticalAlign="center"
          paddingTop="4.5"
          paddingStart="12px"
        >
          {text}
        </Text>
      </GridItem>
    </Flex>
  );
};

FieldDefault.protoTypes = {
  text: PropsTypes.string,
  textColor: PropsTypes.string,
};

FieldDefault.defaultProps = {
  text: "Título",
  textColor: "FFFFFF",
};

export default FieldDefault;
