import { GridItem, Text } from "@chakra-ui/react";

const FieldDefault = ({text,textColor}) => {
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
          paddingStart="16px"
              >
                  {text}
        </Text>
      </GridItem>
    </>
  );
};

export default FieldDefault