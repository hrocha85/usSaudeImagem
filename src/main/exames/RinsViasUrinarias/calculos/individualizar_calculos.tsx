/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Checkbox, HStack, Input, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function IndividualizarCalculos({ numCalculo }) {
  const [frasesIndCalc, setFrasesIndCalc] = useState<any>([]);
  const [ConclusaoCalc, setConclusaoCalc] = useState<any>([]);

  const [tamanhoCalculoInput, settamanhoCalculoInput] = useState("");
  const [posicaoCalculosSelect, setPosicaoCalculosSelect] = useState("");
  const [localizacaoCalculosSelect, setlocalizacaoCalculosSelect] =
    useState("");
  const [multiplosCalculosCheckBox, setmultiplosCalculosCheckBox] =
    useState(false);

  const criaStringMultiplosCalculos = () => {
    removeMultiplosCalculos();
    const conclusao = 'Litíase renal.'
    removeItemConclusao(conclusao)
    var string = `${numCalculo}º Cálculo- Presença de imagem hiperecogênica, com formação de sombra acústica posterior, de limites precisos e contornos regulares: `
    if (multiplosCalculosCheckBox) {
      if (tamanhoCalculoInput !== "" && tamanhoCalculoInput !== "" && localizacaoCalculosSelect !== "") {
        string = `${string} ${posicaoCalculosSelect} medindo ${tamanhoCalculoInput} cm do  ${localizacaoCalculosSelect}`;
        setFrasesIndCalc((arr) => [...arr, string]);
        setConclusaoCalc((arr) => [...arr, conclusao])
      }
    } else {
      settamanhoCalculoInput("");
      setPosicaoCalculosSelect("");
      setlocalizacaoCalculosSelect("");
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


  const removeMultiplosCalculos = () => {
    frasesIndCalc.map((e) => {
      if (e.includes(`${numCalculo}º Cálculo-`)) {
        var index = frasesIndCalc.indexOf(e);

        if (index > -1) {
          frasesIndCalc.splice(index, 1);
          setFrasesIndCalc((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringMultiplosCalculos()

  }, [
    multiplosCalculosCheckBox,
    posicaoCalculosSelect,
    tamanhoCalculoInput,
    localizacaoCalculosSelect,
  ]);

  const subExame = `${numCalculo} Cálculo`;
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
    <HStack>
      <Checkbox
        onChange={() =>
          setmultiplosCalculosCheckBox(!multiplosCalculosCheckBox)
        }
      >
        Cálculo {numCalculo}
      </Checkbox>

      <Input
        isDisabled={!multiplosCalculosCheckBox}
        value={tamanhoCalculoInput}
        w="60px"
        h="77x"
        padding="5px"
        textAlign="center"
        onChange={(e) => {
          settamanhoCalculoInput(e.target.value);
        }}
        placeholder={"mm"}
      />
      <Select
        w="auto"
        isDisabled={!multiplosCalculosCheckBox}
        onChange={(e) => {
          setPosicaoCalculosSelect(e.target.value);
        }}
        value={posicaoCalculosSelect}
      >
        <option value="" disabled selected>
          no
        </option>
        <option value="terço superior">terço superior</option>
        <option value="terço médio">terço médio </option>
        <option value="terço inferior">terço inferior</option>
      </Select>

      <Select
        w="auto"
        isDisabled={!multiplosCalculosCheckBox}
        onChange={(e) => {
          setlocalizacaoCalculosSelect(e.target.value);
        }}
        value={localizacaoCalculosSelect}
      >
        <option value="" disabled selected>
          do
        </option>
        <option value="rim direito">rim direito</option>
        <option value="rim esquerdo">rim esquerdo</option>
      </Select>
    </HStack>
  );
}
