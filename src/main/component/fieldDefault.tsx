import { GridItem, Stack, Text, Icon, color } from "@chakra-ui/react";
import PropsTypes from "prop-types";
import { GoAlert } from "react-icons/go";
import { IconContext } from "react-icons";

const FieldDefault = ({ text, textColor }) => {
  return (
    <>
      <GridItem
        w="193.75"
        h="29px"
        borderRadius="4px"
        marginBottom="8px"
        marginEnd="42px"
        marginStart="16px"
        bg="#FEFFFE"
        borderStyle="solid"
        borderWidth="2px"
        borderColor="#e2e8f0"
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
    </>
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
