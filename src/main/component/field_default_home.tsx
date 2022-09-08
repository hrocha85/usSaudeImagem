import { Flex, GridItem, Link } from "@chakra-ui/react";
import PropsTypes from "prop-types";
import reghd_2 from '../images/reghd_2.png'

const FieldDefaultHome = ({ text, textColor, id }) => {
  return (
    <Flex>
      <GridItem
        backgroundImage={reghd_2}
        w="300px"
        h="80px"
        verticalAlign="center"
        alignSelf="center"
        alignItems="center"
        backgroundPosition="fixed"
        backgroundSize="cover"
        backgroundClip="padding-box"
        backgroundRepeat="no-repeat"
        paddingTop="35px"
        paddingLeft="110px"
      >
        <Link href={`#/Home/${id}`}
          fontWeight="bold"
          fontSize="14px"
          paddingRight="50px"
        >
          {text}
        </Link>
      </GridItem>
    </Flex>
  );
};

FieldDefaultHome.protoTypes = {
  text: PropsTypes.string,
  textColor: PropsTypes.string,
};

FieldDefaultHome.defaultProps = {
  text: "Título",
  textColor: "FFFFFF",
};

export default FieldDefaultHome;
