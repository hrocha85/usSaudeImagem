/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import ObsBIRADS from "../../../images/ObsBIRADS.png";
import { Format_Laudo } from "../../../component/function_format_laudo";

function Extra4() {
  const altura = "100%";
  const largura = "66%";
  const subExame = "Sugestão de Referência";
  const titulo_exame = "Mamas";
  const [imageAdded, setImageAdded] = useState(false);

  const AddImageFormatLaudo = () => {
    new Format_Laudo(
      titulo_exame,
      subExame,
      undefined,
      undefined,
      undefined,
      ObsBIRADS
    ).Format_Laudo_Create_Storage();
    setImageAdded(true);
  };

  const RemoveImageFormatLaudo = () => {
    new Format_Laudo(
      titulo_exame,
      subExame,
      undefined,
      undefined,
      undefined,
      ObsBIRADS
    ).Remove_Image();
    setImageAdded(false);
  };

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 10px 15px"
      mt="20px"
    >
      <Image src={ObsBIRADS} />
      <Button
        marginTop="10px"
        color={imageAdded ? "red" : "#394BEE"}
        fontSize="16px"
        fontWeight="semibold"
        alignItems="center"
        padding="5px"
        backgroundColor="#E3E5F8"
        onClick={imageAdded ? RemoveImageFormatLaudo : AddImageFormatLaudo}
        _hover={{ backgroundColor: "#47AEFC8E" }}
      >
        {imageAdded ? "Remover Imagem do Laudo" : "Adicionar Imagem ao Laudo"}
      </Button>
    </Box>
  );
}

export default Extra4;
