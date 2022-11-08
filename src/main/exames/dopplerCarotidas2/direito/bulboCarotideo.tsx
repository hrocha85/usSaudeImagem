/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function BulboCarotideoDireito() {
  const altura = "100%";
  const largura = "66%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [PlacaInput, setPlacaInput] = useState("");
  const [disablePlacaInput, setdisablePlacaInput] = useState(true);
  const [PlacaCheckBox, setPlacaCheckBox] = useState(false);


  //Funcoes Placa - Inicio
  const criaStringPlaca = (medida) => {
    removePlaca();
    if (medida !== "") {
      var string = `Bulbo carotídeo direita  medindo ${medida} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removePlaca = () => {
    laudoPrin.map((e) => {
      if (e.includes("Bulbo carotídeo direita")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };


  useEffect(() => {
    if (PlacaCheckBox) {
      setdisablePlacaInput(false);
    } else {
      removePlaca();
      setdisablePlacaInput(true);
      setPlacaInput("");
    }
  }, [PlacaCheckBox]);

  useEffect(() => {
    criaStringPlaca(PlacaInput);
  }, [PlacaInput]);


  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px"
      mt="15px"
      alignItems="center"
    >
      <TituloNomeExame titulo="Bulbo carotídeo DIR." />
      <Box justifyContent="center" alignItems="center" display="flex" flexWrap="wrap" >
        <Checkbox onChange={() => setPlacaCheckBox(!PlacaCheckBox)}>
          Placa
        </Checkbox>
        <Input
          isDisabled={disablePlacaInput}
          value={PlacaInput}
          w="45px"
          h="30px"
          padding="5px"
          maxLength={2}
          textAlign="center"
          onChange={(e) => { setPlacaInput(e.target.value) }}
        />
        <Text>mm</Text>
      </Box>

    </Box >
  );
}
export default BulboCarotideoDireito;
