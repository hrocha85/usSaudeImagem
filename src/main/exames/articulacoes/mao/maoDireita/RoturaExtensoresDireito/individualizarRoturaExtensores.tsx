/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Center, Checkbox, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../../component/function_format_laudo";

export default function IndividualizarRoturaExtensores({ numCalculo, Disable }) {

  const [FraseRoturaExtensoresDireito, setFraseRoturaExtensoresDireito] = useState<any>([]);
  const [ConclusaoRoturaExtensoresDireito, setConclusaoRoturaExtensoresDireito] = useState<any>([]);

  const subExame = `Rotura Extensores ${numCalculo} mão direita`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(FraseRoturaExtensoresDireito).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseRoturaExtensoresDireito,
        ConclusaoRoturaExtensoresDireito
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseRoturaExtensoresDireito,
        ConclusaoRoturaExtensoresDireito
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseRoturaExtensoresDireito]);


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
      setFraseRoturaExtensoresDireito((arr) => [...arr, string]);
      setConclusaoRoturaExtensoresDireito((arr) => [...arr, conclusao]);

    }
  };

  const removeMultiplosCalculos = () => {
    FraseRoturaExtensoresDireito.map((e) => {
      if (e.includes(`Descontinuidade completa das fibras do tendão extensor do ${numCalculo}`)) {
        var index = FraseRoturaExtensoresDireito.indexOf(e);

        if (index > -1) {
          FraseRoturaExtensoresDireito.splice(index, 1);
          setFraseRoturaExtensoresDireito((arr) => [...arr]);
        }
      }
    });
  };
  const removeConclusao = () => {
    ConclusaoRoturaExtensoresDireito.map((e) => {
      if (e.includes(`${numCalculo}`)) {
        var index = ConclusaoRoturaExtensoresDireito.indexOf(e);

        if (index > -1) {
          ConclusaoRoturaExtensoresDireito.splice(index, 1);
          setConclusaoRoturaExtensoresDireito((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select(`${numCalculo}`)
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
