import { GridItem, Link, Image, Text, Box, Button } from "@chakra-ui/react";
import PropsTypes from "prop-types";
import reghd_2 from '../images/reghd_2.png'
import SecondIconPlus from "../images/plus 2.png";

const FieldDefaultHome = ({ text, textColor, id }) => {

  return (
    <GridItem
      w="200px"
      h="70px"
      display="flex"
      flexWrap='wrap'
    >
      <Box
        display="flex"
        flexWrap="wrap"
        h='100%'
        w='100%'
        margin='5px'
        alignItems='center'
      >
        <Image
          position='absolute'
          h="100px"
          width="220px"
          z-index='-1'
          src={reghd_2} alt='' />
        <Link
          href={`#/Home/${id}`}
          fontWeight="bold"
          fontSize="14px"
          position='relative'
          pl='80px'
          // pt='30px'
          z-index='1'
        >
          <Text
            textAlign='center'
            w='110px'
            h='100%'
          >
            {text}
          </Text>
        </Link>
      </Box>
    </GridItem >


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
