/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Center, Checkbox, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../../component/function_format_laudo";

export default function IndividualizarRoturaExtensores({ numCalculo, Disable }) {

  const [FraseRoturaExtensoresEsquerdo, setFraseRoturaExtensoresEsquerdo] = useState<any>([]);
  const [ConclusaoRoturaExtensoresEsquerdo, setConclusaoRoturaExtensoresEsquerdo] = useState<any>([]);

  const subExame = `Rotura Extensores ${numCalculo} mão esquerda`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(FraseRoturaExtensoresEsquerdo).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseRoturaExtensoresEsquerdo,
        ConclusaoRoturaExtensoresEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseRoturaExtensoresEsquerdo,
        ConclusaoRoturaExtensoresEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseRoturaExtensoresEsquerdo]);


  const [tamanhoCalculoInput, settamanhoCalculoInput] = useState("");
  const [multiplosCalculosCheckBox, setmultiplosCalculosCheckBox] =
    useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringMultiplosCalculos = (tamanhoCalculoInput) => {
    removeMultiplosCalculos();
    removeConclusao()
    var conclusao = `Rotura do tendõe extensor do ${numCalculo} dedo`
    if (tamanhoCalculoInput !== "") {
      const medida = new Convert_Medida(tamanhoCalculoInput).Convert_Medida()
      var string = `Descontinuidade completa das fibras do tendão extensor do ${numCalculo} dedo com intervalor de ${medida} cm `;
      setFraseRoturaExtensoresEsquerdo((arr) => [...arr, string]);
      setConclusaoRoturaExtensoresEsquerdo((arr) => [...arr, conclusao]);
    }
  };

  const removeConclusao = () => {
    ConclusaoRoturaExtensoresEsquerdo.map((e) => {
      if (e.includes(`${numCalculo}`)) {
        var index = ConclusaoRoturaExtensoresEsquerdo.indexOf(e);

        if (index > -1) {
          ConclusaoRoturaExtensoresEsquerdo.splice(index, 1);
          setConclusaoRoturaExtensoresEsquerdo((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select(`${numCalculo}`)
        }
      }
    });
  };

  const removeMultiplosCalculos = () => {
    FraseRoturaExtensoresEsquerdo.map((e) => {
      if (e.includes(`Descontinuidade completa das fibras do tendão extensor do ${numCalculo}`)) {
        var index = FraseRoturaExtensoresEsquerdo.indexOf(e);

        if (index > -1) {
          FraseRoturaExtensoresEsquerdo.splice(index, 1);
          setFraseRoturaExtensoresEsquerdo((arr) => [...arr]);
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
        isDisabled={Disable}
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
