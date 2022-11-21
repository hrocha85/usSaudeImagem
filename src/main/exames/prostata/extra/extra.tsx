/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";

function Utero() {
  const altura = "100%";
  const largura = "40%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [ContornosIrregularesCheckBox, setContornosIrregularesCheckBox] = useState(true);
  const [ProstataEcotexturaCheckBox, setProstataEcotexturaCheckBox] = useState(true);
  const [BexigaEsforcoCheckBox, setBexigaEsforcoCheckBox] = useState(true);

  //Funcoes DIU Posicionado - Inicio
  const criaStringContornosIrregulares = () => {
    var string = "Contornos prostáticos irregulares";
    if (ContornosIrregularesCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
    } else {
      removeItemString(string)
    }
  };

  const criaStringProstataEcotextura = () => {
    var string = "Próstata com ecotextura heterogênea";
    if (ProstataEcotexturaCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
    } else {
      removeItemString(string)
    }
  };

  const criaStringBexigaEsforco = () => {
    var string = "Bexiga com esforço";
    if (BexigaEsforcoCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
    } else {
      removeItemString(string)
    }
  };

  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    var index = laudoPrin.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
    }
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
      padding="24px 15px 20px 15px"
      mt="15px"
    >
      <Box gap="30px" >
        <Box>
          <Checkbox
            onChange={() => {
              criaStringContornosIrregulares()
              setContornosIrregularesCheckBox(!ContornosIrregularesCheckBox)
            }}
          >
            Contornos Prostáticos irregulares
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            onChange={() => {
              criaStringProstataEcotextura()
              setProstataEcotexturaCheckBox(!ProstataEcotexturaCheckBox)
            }}
          >
            Próstata com ecotextura heterogênea
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            onChange={() => {
              criaStringBexigaEsforco()
              setBexigaEsforcoCheckBox(!BexigaEsforcoCheckBox)
            }}
          >
            Bexiga de esforço
          </Checkbox>
        </Box>
      </Box>
    </Box>
  );
}
export default Utero;
