/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, Input, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function IndividualizarNodulos({ numNodulo }) {
  const [frasesIndCalc, setFrasesIndCalc] = useState<any>([]);
  const [ConclusaoCalc, setConclusaoCalc] = useState<any>([]);


  const [checkboxNodulo, setCheckboxNodulo] = useState(false);
  const [valueInput01Nodulo, setValueInput01Nodulo] = useState("");
  const [valueInput02Nodulo, setValueInput02Nodulo] = useState("");
  const [valueSelect01Nodulo, setValueSelect01Nodulo] = useState("");
  const [valueSelect02Nodulo, setValueSelect02Nodulo] = useState("");
  const [valueSelect03Nodulo, setValueSelect03Nodulo] = useState("");
  const [valueSelect04Nodulo, setValueSelect04Nodulo] = useState("");


  const criaStringMultiplosNodulos = () => {
    removeMultiplosNodulos();
    const conclusao = 'Nódulos renais.'
    removeItemConclusao(conclusao)
    var string = `${numNodulo}º Nódulo- Nota-se imagens nodulares sólidas,corticais, sem alterara a arquitetura vascular e pielo-calicinal.\n`
    if (checkboxNodulo) {
      if (valueInput01Nodulo && valueInput02Nodulo && valueSelect01Nodulo && valueSelect02Nodulo !== '' && valueSelect03Nodulo && valueSelect04Nodulo) {
        string = `${string} ${valueSelect02Nodulo}: Conteúdo  ${valueSelect04Nodulo}, no ${valueSelect01Nodulo}, homogêneo, contornos ${valueSelect03Nodulo}, medindo ${valueInput01Nodulo} x ${valueInput02Nodulo} cm.`;
        setFrasesIndCalc((arr) => [...arr, string]);
        setConclusaoCalc((arr) => [...arr, conclusao])
      }
    } else {
      setValueInput01Nodulo("");
      setValueInput02Nodulo("");
      setValueSelect01Nodulo("");
      setValueSelect02Nodulo("");
      setValueSelect03Nodulo("");
      setValueSelect04Nodulo("");
    }
  };

  const removeItemConclusao = (value) => {
    var index = ConclusaoCalc.indexOf(value);

    if (index > -1) {
      ConclusaoCalc.splice(index, 1);
      setConclusaoCalc((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };


  const removeMultiplosNodulos = () => {
    frasesIndCalc.map((e) => {
      if (e.includes(`${numNodulo}º Nódulo-`)) {
        var index = frasesIndCalc.indexOf(e);

        if (index > -1) {
          frasesIndCalc.splice(index, 1);
          setFrasesIndCalc((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringMultiplosNodulos()

  }, [
    checkboxNodulo,
    valueInput01Nodulo,
    valueInput02Nodulo,
    valueSelect01Nodulo,
    valueSelect02Nodulo,
    valueSelect03Nodulo,
    valueSelect04Nodulo,
  ]);

  const subExame = `${numNodulo} Nódulo`;
  const titulo_exame = "Rins e Vias Urinárias";

  useEffect(() => {
    if (Object.keys(frasesIndCalc).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesIndCalc,
        ConclusaoCalc
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesIndCalc,
        ConclusaoCalc
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesIndCalc]);

  return (
    <Stack>
      <Checkbox
        onChange={(e) => {
          setCheckboxNodulo(!checkboxNodulo);
        }}
      >
        Nódulo {numNodulo}
      </Checkbox>
      <Box>
        <Input
          value={valueInput01Nodulo}
          onChange={(e) => {
            setValueInput01Nodulo(e.target.value);
          }}
          isDisabled={!checkboxNodulo}
          w="55px"
          placeholder="00"
        />
        x
        <Input
          value={valueInput02Nodulo}
          onChange={(e) => {
            setValueInput02Nodulo(e.target.value);
          }}
          isDisabled={!checkboxNodulo}
          w="55px"
          placeholder="00"
        />
        cm
      </Box>
      <Select
        isDisabled={!checkboxNodulo}
        value={valueSelect01Nodulo}
        onChange={(e) => {
          setValueSelect01Nodulo(e.target.value);
        }}
        mt="5px"
        w="160px"
      >
        <option value="" disabled selected>
          Localizado no
        </option>
        <option value="terço Superior">Terço superior</option>
        <option value="terço Medio">Terço medio</option>
        <option value="terço Inferior">Terço inferior</option>
      </Select>
      <Select
        isDisabled={!checkboxNodulo}
        value={valueSelect02Nodulo}
        onChange={(e) => {
          setValueSelect02Nodulo(e.target.value);
        }}
        mt="5px"
        w="160px"
      >
        <option value="" disabled selected>
          Do
        </option>
        <option value="Rim direito">Rim direito</option>
        <option value="Rim esquerdo">Rim Esquerdo</option>
      </Select>
      <Select
        isDisabled={!checkboxNodulo}
        value={valueSelect03Nodulo}
        onChange={(e) => {
          setValueSelect03Nodulo(e.target.value);
        }}
        mt="5px"
        w="160px"
      >
        <option value="" disabled selected>
          Contornos
        </option>
        <option value="regulares">Regulares</option>
        <option value="irregulares">Irregulares</option>
      </Select>
      <Select
        isDisabled={!checkboxNodulo}
        value={valueSelect04Nodulo}
        onChange={(e) => {
          setValueSelect04Nodulo(e.target.value);
        }}
        mt="5px"
        w="160px"
      >
        <option value="" disabled selected>
          Ecogenicidade
        </option>
        <option value="hipoecogenico">Hipoecogênico</option>
        <option value="hiperecogenico">Hiperecogênico</option>
        <option value="isoecogenico">Isoecogênico</option>
      </Select>
    </Stack>
  );
}
