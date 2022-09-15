import { GridItem, Link, Image, Text, Box } from "@chakra-ui/react";
import PropsTypes from "prop-types";
import reghd_2 from '../images/reghd_2.png'
import reghd_1 from '../images/reghd_15.png'

const FieldDefaultHome = ({ text, textColor, id }) => {

  return (

    <GridItem
      //backgroundImage={reghd_2}
      w="100%"
      h="100%"
      // verticalAlign="center"
      // alignSelf="center"
      // alignItems="center"
      // backgroundPosition="fixed"
      // backgroundSize="cover"
      // backgroundClip="padding-box"
      // backgroundRepeat="no-repeat"
      // paddingTop="35px"
      // paddingLeft="110px"
      display="flex"
      flexWrap='wrap'
    //justify-content="flex-start"
    >
      <Box

        display="flex"
        flexWrap="wrap"
        //position="relative"
        // h='100px'
        // w='300px'
        h='100%'
        w='100%'
        margin='5px'
      //flex="1 1 200px"
      >
        <Image
          position='absolute'
          h="101px"
          width="250px"
          z-index='-1'
          //max-width="100%"
          display="block"
          src={reghd_2} alt='' />


        <Link
          href={`#/Home/${id}`}
          fontWeight="bold"
          fontSize="16px"
          position='relative'
          pl='90px'
          pt='30px'
          z-index='1'
        >
          <Text
            textAlign='center'
            w='131px'
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
