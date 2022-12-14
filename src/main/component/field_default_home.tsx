import { GridItem, Link, Image, Text, Box, Button } from "@chakra-ui/react";
import PropsTypes from "prop-types";
import { useEffect, useState } from "react";
import LaudoPrincipal from "../../class/LaudoPrincipal";
import Laudo from "../../class/Laudo";
import reghd_2 from '../images/reghd_2.png'

const FieldDefaultHome = ({ text, textColor, id }) => {
  // let laudos = new LaudoPrincipal(id, text)
  // const clicando = (id, nome) => {
  //   new LaudoPrincipal(id, nome)
  //   console.log(`${id} e o texto ${nome}`)
  //   console.log(laudos)
  // }


  // let laudo: any[]
  // const clicando = (nome) => {
  //   laudo.push(new Laudo(nome))
  //   console.log(`${id} e o texto ${nome}`)
  //   console.log(laudo)
  // }



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
        //onClick={(e) => clicando(id, text)}
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
