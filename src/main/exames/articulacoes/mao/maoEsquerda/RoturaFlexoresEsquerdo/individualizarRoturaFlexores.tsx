/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Center, Checkbox, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../../component/function_format_laudo";

export default function IndividualizarRoturaExtensores({ numCalculo }) {

  const [fraseRoturaFlexoresEsquerdo, setFraseRoturaFlexoresEsquerdo] = useState<any>([]);

  const subExame = `Rotura dos flexores ${numCalculo} mão esquerda`
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
      const medida = new Convert_Medida(tamanhoCalculoInput).Convert_Medida()
      var string = `Descontinuidade completa das fibras do tendão flexores do ${numCalculo} dedo com intervalo de ${medida} cm.`;
      setFraseRoturaFlexoresEsquerdo((arr) => [...arr, string]);
    }
  };

  const removeMultiplosCalculos = () => {
    fraseRoturaFlexoresEsquerdo.map((e) => {
      if (e.includes(`Descontinuidade completa das fibras do tendão flexores do ${numCalculo}`)) {
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
