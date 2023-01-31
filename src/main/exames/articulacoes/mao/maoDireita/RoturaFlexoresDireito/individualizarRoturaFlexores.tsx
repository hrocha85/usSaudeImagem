/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Button, Center, Checkbox, HStack, Input, Select } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { isLineBreak } from "typescript";
import { LaudosContext } from "../../../../../../context/LuadosContext";
import { Convert_Medida } from "../../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../../component/function_format_laudo";

export default function IndividualizarRoturaExtensores({ numCalculo }) {

  const [fraseRoturaFlexoresDireito, setFraseRoturaFlexoresDireito] = useState<any>([]);

  const subExame = `Rotura dos flexores ${numCalculo} direito`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(fraseRoturaFlexoresDireito).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        fraseRoturaFlexoresDireito
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        fraseRoturaFlexoresDireito
      ).Format_Laudo_Create_Storage();
    }
  }, [fraseRoturaFlexoresDireito]);

  const [tamanhoCalculoInput, settamanhoCalculoInput] = useState("");
  const [multiplosCalculosCheckBox, setmultiplosCalculosCheckBox] =
    useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringMultiplosCalculos = (tamanhoCalculoInput,) => {
    removeMultiplosCalculos();

    if (tamanhoCalculoInput !== "") {
      const medida = new Convert_Medida(tamanhoCalculoInput).Convert_Medida()
      var string = `Descontinuidade completa das fibras do tendão flexores do ${numCalculo} dedo com intervalo de ${medida} cm.`;
      setFraseRoturaFlexoresDireito((arr) => [...arr, string]);
    }
  };

  const removeMultiplosCalculos = () => {
    fraseRoturaFlexoresDireito.map((e) => {
      if (e.includes(`Descontinuidade completa das fibras do tendão flexores do ${numCalculo}`)) {
        var index = fraseRoturaFlexoresDireito.indexOf(e);

        if (index > -1) {
          fraseRoturaFlexoresDireito.splice(index, 1);
          setFraseRoturaFlexoresDireito((arr) => [...arr]);
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
