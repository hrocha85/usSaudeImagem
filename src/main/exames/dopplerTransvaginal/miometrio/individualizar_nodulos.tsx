import { Box, Checkbox, HStack, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function IndividualizarNodulos({ numNodulo, disable }) {
  const [frasesNodulos, setFrasesNodulos] = useState<any>([]);

  const [tamanhoNoduloInput, settamanhoNoduloInput] = useState("");
  const [posicaoNodulosSelect, setPosicaoNodulosSelect] = useState("");
  const [localizacaoNodulosSelect, setlocalizacaoNodulosSelect] = useState("");
  const [DopplerNodulosSelect, setDopplerNodulosSelect] = useState("");
  const [multiplosNodulosCheckBox, setmultiplosNodulosCheckBox] =
    useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const handleChangeNoduloInput = (event) => {
    settamanhoNoduloInput(event.target.value);
  };

  const criaStringMultiplosNodulos = (tamanhoNoduloInput, nodulosSelect, localizado, DopplerNodulosSelect) => {
    removeMultiplosNodulos();
    var string;
    if (DopplerNodulosSelect !== "" && tamanhoNoduloInput !== "" && nodulosSelect !== "" && localizado !== "") {
      string = `Nódulo ${numNodulo}: ${nodulosSelect}, localizado na parede, ${localizado} medindo ${tamanhoNoduloInput} mm, com vascularização ${DopplerNodulosSelect}.`;
      setFrasesNodulos((arr) => [...arr, string]);
    }
  };

  const removeMultiplosNodulos = () => {
    frasesNodulos.map((e) => {
      if (e.includes(`Nódulo ${numNodulo}`)) {
        var index = frasesNodulos.indexOf(e);

        if (index > -1) {
          frasesNodulos.splice(index, 1);
          setFrasesNodulos((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosNodulosCheckBox) {
      setDisableSelect(false);
      criaStringMultiplosNodulos(
        tamanhoNoduloInput,
        posicaoNodulosSelect,
        localizacaoNodulosSelect,
        DopplerNodulosSelect
      );
    } else {
      setDisableSelect(true);
      removeMultiplosNodulos();
      settamanhoNoduloInput("");
      setPosicaoNodulosSelect("");
      setlocalizacaoNodulosSelect("");
      setDopplerNodulosSelect("");
    }
  }, [
    multiplosNodulosCheckBox,
    posicaoNodulosSelect,
    tamanhoNoduloInput,
    localizacaoNodulosSelect,
    DopplerNodulosSelect,
  ]);
  const subExame = "Nódulos";
  const titulo_exame = "Doppler Transvaginal";

  useEffect(() => {
    if (Object.keys(frasesNodulos).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesNodulos
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesNodulos
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesNodulos]);
  return (
    <Box display="flex" flexWrap="wrap">
      <HStack>
        <Checkbox
          whiteSpace="nowrap"
          isDisabled={disable}
          onChange={() =>
            setmultiplosNodulosCheckBox(!multiplosNodulosCheckBox)
          }
        >
          Nódulo {numNodulo}
        </Checkbox>

        <Input
          isDisabled={DisableSelect}
          value={tamanhoNoduloInput}
          w="60px"
          h="77x"
          padding="5px"
          
          textAlign="center"
          onChange={handleChangeNoduloInput}
          placeholder={"mm"}
        />
        <Select
          w="auto"
          isDisabled={DisableSelect}
          onChange={(e) => {
            setPosicaoNodulosSelect(e.target.value);
          }}
          value={posicaoNodulosSelect}
        >
          <option value="" disabled selected>
            Posição
          </option>
          <option value="Intramural">Intramural</option>
          <option value="Subseroso">Subseroso </option>
          <option value="Submucoso">Submucoso</option>
        </Select>

        <Select
          w="auto"
          isDisabled={DisableSelect}
          onChange={(e) => {
            setlocalizacaoNodulosSelect(e.target.value);
          }}
          value={localizacaoNodulosSelect}
        >
          <option value="" disabled selected>
            Localizado
          </option>
          <option value="corporal anterior">Corporal anterior</option>
          <option value="corporal posterior">Corporal posterior</option>
          <option value="fúndica">Fúndica</option>
          <option value="lateral direita">Lateral direita</option>
          <option value="lateral esquerda">Lateral esquerda</option>
          <option value="cervical">Cervical</option>
        </Select>
      </HStack>
      <HStack mt="5px" color="red">
        <Text>Nódulo com vascularização</Text>

        <Select
          w="auto"
          isDisabled={DisableSelect}
          onChange={(e) => {
            setDopplerNodulosSelect(e.target.value);
          }}
          value={DopplerNodulosSelect}
        >
          <option value="" disabled selected>
            Doppler
          </option>
          <option value="ausente">ausente</option>
          <option value="periférica">periférica</option>
          <option value="central">central</option>
          <option value="central e periférica">central e periférica</option>
        </Select>
      </HStack>
    </Box>
  );
}
