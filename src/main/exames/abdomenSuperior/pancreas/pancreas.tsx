/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Pancreas() {
  const altura = "100%";
  const largura = "66%";

  const [FrasesPancreas, setFrasesPancreas] = useState<any>([]);
  const [ConclusaoPancreas, setConclusaoPancreas] = useState<any>([]);

  const [value, setValue] = useState("1");
  const [ValueInput, setValueInput] = useState("");
  const [enableInput, setEnableInput] =
    useState<boolean>(false);

  const removeItemSelect = (value) => {
    FrasesPancreas.map((e) => {
      if (e.includes(value)) {
        var index = FrasesPancreas.indexOf(e);
        if (index > -1) {
          FrasesPancreas.splice(index, 1);
          setFrasesPancreas((arr) => [...arr]);
        }
      }
    });
  }
  const removeStringConclusao = (value) => {
    var index;
    ConclusaoPancreas.map((e) => {
      if (e.includes(value)) {
        index = ConclusaoPancreas.indexOf(e);
        if (index > -1) {
          ConclusaoPancreas.splice(index, 1);
          setConclusaoPancreas((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao(value);
        }
      }
    });
  };
  useEffect(() => {
    removeStringConclusao('Meteorismo intestinal moderado.')
    removeStringConclusao('Alteração parenquimatosa pancreática. Considerar possibilidade de pancreatite aguda.')
    removeStringConclusao('Pancreatite crônica.')
    removeStringConclusao('Cisto pancreático simples.')
    setConclusaoPancreas([])
    if (value == 'não visibilizado devido à interposição gasosa das alças intestinais.') {
      setConclusaoPancreas(['Meteorismo intestinal moderado.'])
    }
    if (value == 'de contornos irregulares e parcialmente obscurecidos, com hipoecogenicidade textural e dimensões aumentadas. Ducto de Wirsung de calibre preservado.') {
      setConclusaoPancreas(['Alteração parenquimatosa pancreática. Considerar possibilidade de pancreatite aguda.'])
    }
    if (value == 'de dimensões normais, com contornos lobulados e focos irregulares de calcificações nas regiões de cabeça e corpo. Ducto de Wirsung ectasiado, de aspecto levemente tortuoso.') {
      setConclusaoPancreas(['Pancreatite crônica.'])
    }
    if (value == 'enable' && ValueInput != '') {
      setConclusaoPancreas(['Cisto pancreático simples.'])
    }
  }, [value, ValueInput])

  useEffect(() => {
    if (value == "enable") {
      setEnableInput(true);
    } else {
      setValueInput('')
      if (value == "1") {
        setFrasesPancreas([]);
        setEnableInput(false);
      } else {
        setFrasesPancreas([]);
        setFrasesPancreas((arr) => [...arr, value]);
        setEnableInput(false);
      }
    }
  }, [value]);

  useEffect(() => {
    setFrasesPancreas([]);
    var string = 'visibilizados cabeça e corpo, com dimensões normais, limites precisos e ecotextura típica. Nota-se imagem anecóica, de limites precisos e contornos regulares, com reforço acústico posterior, medindo'
    if (ValueInput != "") {
      removeItemSelect(string);
      string = `${string} ${ValueInput} mm.`;
      setFrasesPancreas((arr) => [...arr, string]);
    }
  }, [ValueInput])

  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    var index = FrasesPancreas.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      FrasesPancreas.splice(index, 1);
      setFrasesPancreas((arr) => [...arr]);
    }
  };

  const subExame = "Pâncreas";
  const titulo_exame = "Abdomen Superior";

  useEffect(() => {
    if (Object.keys(FrasesPancreas).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesPancreas,
        ConclusaoPancreas
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesPancreas,
        ConclusaoPancreas
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesPancreas]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 20px 15px"
      mt="15px"
    >
      <Box>
        <TituloNomeExame titulo="Pâncreas" />

        <RadioGroup onChange={setValue} value={value} padding="10px">
          <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">

            <Radio value="1">Não citar</Radio>
            <Radio value="visibilizados cabeça e corpo, com dimensões normais, limites precisos e ecotextura típica.">Normal</Radio>
            <Radio value="não visibilizado devido à interposição gasosa das alças intestinais.">
              Não visibilizado
            </Radio>
            <Radio value="de contornos irregulares e parcialmente obscurecidos, com hipoecogenicidade textural e dimensões aumentadas. Ducto de Wirsung de calibre preservado.">
              Pancreatite Aguda
            </Radio>
            <Radio value="de dimensões normais, com contornos lobulados e focos irregulares de calcificações nas regiões de cabeça e corpo. Ducto de Wirsung ectasiado, de aspecto levemente tortuoso.">
              Pancreatite Crônica
            </Radio>
            <Radio value="enable">Cisto</Radio>
            <Input
              p='0px'
              textAlign='center'
              w='50px'
              value={ValueInput}
              isDisabled={!enableInput}
              onChange={(e) => setValueInput(e.target.value)}
            />

          </Box>
        </RadioGroup>
      </Box>
    </Box>
  );
}

export default Pancreas;
