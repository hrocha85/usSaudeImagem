/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Button, Center, Checkbox, HStack, Input, Select } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { isLineBreak } from "typescript";
import { LaudosContext } from "../../../../../../context/LuadosContext";
import { Format_Laudo } from "../../../../../component/function_format_laudo";

export default function IndividualizarRoturaExtensores({ numCalculo }) {

  const [fraseRoturaFlexoresEsquerdo, setFraseRoturaFlexoresEsquerdo] = useState<any>([]);

  const subExame = `Rotura dos flexores ${numCalculo} Esquerdo`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(fraseRoturaFlexoresEsquerdo).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        fraseRoturaFlexoresEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        fraseRoturaFlexoresEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [fraseRoturaFlexoresEsquerdo]);

  const [tamanhoCalculoInput, settamanhoCalculoInput] = useState("");
  const [multiplosCalculosCheckBox, setmultiplosCalculosCheckBox] =
    useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringMultiplosCalculos = (tamanhoCalculoInput,) => {
    removeMultiplosCalculos();

    if (tamanhoCalculoInput !== "") {
      var string = `Dedo ${numCalculo} com descontinuidade das fibras de ${tamanhoCalculoInput} mm `;
      setFraseRoturaFlexoresEsquerdo((arr) => [...arr, string]);
    }
  };

  const removeMultiplosCalculos = () => {
    fraseRoturaFlexoresEsquerdo.map((e) => {
      if (e.includes(`Dedo ${numCalculo}`)) {
        var index = fraseRoturaFlexoresEsquerdo.indexOf(e);

        if (index > -1) {
          fraseRoturaFlexoresEsquerdo.splice(index, 1);
          setFraseRoturaFlexoresEsquerdo((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosCalculosCheckBox) {
      setDisableSelect(false)
      criaStringMultiplosCalculos(
        tamanhoCalculoInput,
      );
    } else {
      setDisableSelect(true)
      removeMultiplosCalculos();
      settamanhoCalculoInput("");
    }
  }, [
    multiplosCalculosCheckBox,
    tamanhoCalculoInput,
  ]);

  return (
    <Box gap="10px" display="flex" flexWrap="wrap" mt="20px">
      <Checkbox
        onChange={() => setmultiplosCalculosCheckBox(!multiplosCalculosCheckBox)}
      >
        {numCalculo}º dedo
      </Checkbox>
      <Center>
        descontinuidade das fibras com intervalor de
      </Center>
      <Input
        isDisabled={DisableSelect}
        value={tamanhoCalculoInput}
        w="60px"
        h="77x"
        padding="5px"
        maxLength={2}
        textAlign="center"
        onChange={(e) => { settamanhoCalculoInput(e.target.value) }}
        placeholder={"mm"}
      />
      <Center>
        mm
      </Center>
    </Box>
  );
}
