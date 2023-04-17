/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function BulboCarotideoDireito() {
  const altura = "100%";
  const largura = "66%";

  const [frasesBulbo, setFrasesBulbo] = useState<any>([]);

  const [PlacaInput, setPlacaInput] = useState("");
  const [disablePlacaInput, setdisablePlacaInput] = useState(true);
  const [PlacaCheckBox, setPlacaCheckBox] = useState(false);

  //Funcoes Placa - Inicio
  const criaStringPlaca = (medida) => {
    removePlaca();
    if (medida !== "") {
      var string = `Bulbo carotídeo direita  medindo ${medida} mm `;
      setFrasesBulbo((arr) => [...arr, string]);
    }
  };

  const removePlaca = () => {
    frasesBulbo.map((e) => {
      if (e.includes("Bulbo carotídeo direita")) {
        var index = frasesBulbo.indexOf(e);

        if (index > -1) {
          frasesBulbo.splice(index, 1);
          setFrasesBulbo((arr) => [...arr]);
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

  const subExame = "Bulbo Carotídeo Direito";
  const titulo_exame = "Doppler das Carótidas";

  useEffect(() => {
    if (Object.keys(frasesBulbo).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesBulbo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesBulbo
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesBulbo]);

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
      <Box
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexWrap="wrap"
      >
        <Checkbox onChange={() => setPlacaCheckBox(!PlacaCheckBox)}>
          Placa
        </Checkbox>
        <Input
          isDisabled={disablePlacaInput}
          value={PlacaInput}
          w="45px"
          h="30px"
          padding="5px"
          
          textAlign="center"
          onChange={(e) => {
            setPlacaInput(e.target.value);
          }}
        />
        <Text>mm</Text>
      </Box>
    </Box>
  );
}
export default BulboCarotideoDireito;
