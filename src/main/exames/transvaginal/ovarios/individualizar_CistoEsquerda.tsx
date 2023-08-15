
import { Checkbox, HStack, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function IndividualizarCistosEsquerdo({ numCisto }) {

  const [cistoInput, setCistoInput] = useState("");
  const [cistoCheckBox, setCistoCheckBox] = useState(false);
  const [cistoSelect, setCistoSelect] = useState("");

  const [FrasesOvarioEsquerdo, setFrasesOvarioEsquerdo] = useState<any>([]);
  const [ConclusaoOvarioEsquerdo, setConclusaoOvarioEsquerdo] = useState<any>([]);

  const subExame = `Ovário Esquerdo. Cisto ${numCisto}`;
  const titulo_exame = "Transvaginal";

  useEffect(() => {
    if (Object.keys(FrasesOvarioEsquerdo).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesOvarioEsquerdo,
        ConclusaoOvarioEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesOvarioEsquerdo,
        ConclusaoOvarioEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesOvarioEsquerdo]);

  const handleChangeCistoInput = (event) => {
    setCistoInput(event.target.value);
  };
  const removeCistoFrase = () => {
    FrasesOvarioEsquerdo.map((e) => {
      if (e.includes(`Cisto ${numCisto}:`)) {
        const index = FrasesOvarioEsquerdo.indexOf(e);

        if (index > -1) {
          FrasesOvarioEsquerdo.splice(index, 1);
          setFrasesOvarioEsquerdo((arr) => [...arr]);
        }
      }
    });
  };

  const removeCistoConclusao = () => {
    ConclusaoOvarioEsquerdo.map((e) => {
      if (e.includes(`${numCisto}º Cisto Ovário esquerdo:`)) {
        const index = ConclusaoOvarioEsquerdo.indexOf(e);

        if (index > -1) {
          ConclusaoOvarioEsquerdo.splice(index, 1);
          setConclusaoOvarioEsquerdo((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select(`${numCisto}º Cisto Ovário esquerdo:`);
        }
      }
    });

  };

  const criaStringCisto = (medida, cisto) => {
    let conclusao = ' no ovário Esquerdo.'
    let SelectConclusao;
    removeCistoFrase();
    removeCistoConclusao()

    if (cisto === 'Ovário Esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística anecóica, de limites precisos e contornos regulares, com reforço acústico posterior') {
      SelectConclusao = `${numCisto}º Cisto Ovário esquerdo: Cisto simples`
    } else if (cisto === 'Ovário Esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística anecóica, de limites precisos e contornos regulares, com reforço acústico posterior e septação fina') {
      SelectConclusao = `${numCisto}º Cisto Ovário esquerdo: Cisto septado`
    } else if (cisto === 'Ovário Esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística anecóica, multiloculada, de limites precisos e contornos regulares, com reforço acústico posterior') {
      SelectConclusao = `${numCisto}º Cisto Ovário esquerdo: Cisto multiloculado`
    } else if (cisto === 'Ovário Esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística, de paredes espessas e irregulares, conteúdo anecóide, com septos espessos e moderados debris de permeio') {
      SelectConclusao = `${numCisto}º Cisto Ovário esquerdo: Cisto hemorrágico`
    } else if (cisto === 'Ovário Esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima apresenta imagem arredondada, anecóica de limites precisos e contornos regulares, com finos debrís em seu interior') {
      SelectConclusao = `${numCisto}º Cisto Ovário esquerdo: Imagem cística sugestiva de endometrioma`
    } else if (cisto === 'Ovário Esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística, de paredes espessas e regulares, conteúdo anecóide, sem septos ou debris') {
      SelectConclusao = `${numCisto}º Cisto Ovário esquerdo: Cisto de corpo lúteo`
    } else if (cisto === 'Ovário Esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima apresenta imagem nodular hiperecogênica de limites precisos e contornos definidos, apresentando reforço acústico posterior, com área cística em seu interior') {
      SelectConclusao = `${numCisto}º Cisto Ovário esquerdo: Imagem sugestiva de cisto dermóide`
    }

    if (cistoCheckBox) {
      if (medida !== "" && cisto !== "") {
        const string = `Cisto ${numCisto}: ${cisto}, medindo ${medida} mm `;
        conclusao = `${SelectConclusao} ${conclusao}`
        setFrasesOvarioEsquerdo((arr) => [...arr, string]);
        setConclusaoOvarioEsquerdo((arr) => [...arr, conclusao]);
      }
    } else {
      setCistoInput('')
      setCistoSelect('')
    }
  };

  useEffect(() => {
    criaStringCisto(cistoInput, cistoSelect);
  }, [cistoCheckBox, cistoInput, cistoSelect]);

  return (
    <HStack>
      <Checkbox w='120px' onChange={() => setCistoCheckBox(!cistoCheckBox)}>
        Cisto {numCisto}
      </Checkbox>
      <Input
        isDisabled={!cistoCheckBox}
        value={cistoInput}
        w="45px"
        h="30px"
        padding="0px"
        textAlign="center"
        onChange={handleChangeCistoInput}
      />
      <Text>mm</Text>
      <Select
        isDisabled={!cistoCheckBox}
        value={cistoSelect}
        onChange={(e) => {
          setCistoSelect(e.target.value);
        }}
      >
        <option value="" disabled selected>
          Selecione
        </option>
        <option value="Ovário Esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística anecóica, de limites precisos e contornos regulares, com reforço acústico posterior">
          Cisto Simples
        </option>
        <option value="Ovário Esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística anecóica, de limites precisos e contornos regulares, com reforço acústico posterior e septação fina">
          Cisto septação fina
        </option>
        <option value="Ovário Esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística anecóica, multiloculada, de limites precisos e contornos regulares, com reforço acústico posterior">
          Multiloculado
        </option>
        <option value="Ovário Esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística, de paredes espessas e irregulares, conteúdo anecóide, com septos espessos e moderados debris de permeio">
          Hemorrágico
        </option>
        <option value="Ovário Esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima apresenta imagem arredondada, anecóica de limites precisos e contornos regulares, com finos debrís em seu interior">
          Endometrioma
        </option>
        <option value="Ovário Esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística, de paredes espessas e regulares, conteúdo anecóide, sem septos ou debris">
          Corpo lúteo
        </option>
        <option value="Ovário Esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima apresenta imagem nodular hiperecogênica de limites precisos e contornos definidos, apresentando reforço acústico posterior, com área cística em seu interior">
          Cisto dermóide
        </option>
      </Select>
    </HStack>
  );
}
