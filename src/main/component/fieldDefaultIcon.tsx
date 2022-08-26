import { GridItem, Stack, Text, Icon, color } from "@chakra-ui/react";
import PropsTypes from "prop-types";
import { GoAlert } from "react-icons/go";
import { IconContext } from "react-icons";

const FieldDefaultIcon = ({ text, textColor, icon }) => {
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
        <Stack direction="row" alignItems="center">
          <IconContext.Provider value={{ color: "#4A5568" }}>
            <Icon as={icon} w={5} h={4} alignSelf="center" marginStart="15px" />
          </IconContext.Provider>

          <Text
            alignSelf="center"
            textColor={textColor}
            textStyle="solid"
            fontSize="12px"
            fontWeight="medium"
            paddingTop="4.5"
          >
            {text}
          </Text>
        </Stack>
      </GridItem>
    </>
  );
};

FieldDefaultIcon.protoTypes = {
  text: PropsTypes.string,
  textColor: PropsTypes.string,
  icon: PropsTypes.any,
};

FieldDefaultIcon.defaultProps = {
  text: "Título",
  textColor: "FFFFFF",
  icon: null,
};

export default FieldDefaultIcon;
