import { Checkbox, HStack, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function IndividualizarNodulos({
  numNodulo,
  selectNodulo1,
  selectNodulo2,
  disable,
}) {
  const [medida1NoduloInput, setMedida1NoduloInput] = useState("");
  const [medida2NoduloInput, setMedida2NoduloInput] = useState("");
  const [medida3NoduloInput, setMedida3NoduloInput] = useState("");

  const [multiplosNodulosCheckBox, setmultiplosNodulosCheckBox] =
    useState(false);

  const [frasesNodulos, setFrasesNodulos] = useState<any>([]);

  const subExame = `Partes Moles - Nódulo ${numNodulo}`;
  const titulo_exame = "Partes Moles";

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

  const handleChangeNoduloInputMedida1 = (event) => {
    setMedida1NoduloInput(event.target.value);
  };
  const handleChangeNoduloInputMedida2 = (event) => {
    setMedida2NoduloInput(event.target.value);
  };
  const handleChangeNoduloInputMedida3 = (event) => {
    setMedida3NoduloInput(event.target.value);
  };

  const criaStringMultiplosNodulos = () => {
    removeMultiplosNodulos();

    if (
      selectNodulo1 != "" &&
      selectNodulo2 != "" &&
      medida1NoduloInput != "" &&
      medida2NoduloInput != "" &&
      medida3NoduloInput != ""
    ) {
      var string = `Nódulo ${numNodulo}. Presença de nódulo sólido de ${selectNodulo1}, ${selectNodulo2}, medindo ${medida1NoduloInput}x${medida2NoduloInput}x${medida3NoduloInput}, situado em meio à gordura subcutânea.`;
      setFrasesNodulos((arr) => [...arr, string]);
    }
  };

  const removeMultiplosNodulos = () => {
    frasesNodulos.map((e) => {
      if (e.includes(`Nódulo ${numNodulo}. `)) {
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
      criaStringMultiplosNodulos();
    } else {
      removeMultiplosNodulos();
      setMedida1NoduloInput("");
      setMedida2NoduloInput("");
      setMedida3NoduloInput("");
    }
  }, [
    selectNodulo1,
    selectNodulo2,
    medida1NoduloInput,
    medida2NoduloInput,
    medida3NoduloInput,
    multiplosNodulosCheckBox,
  ]);

  return (
    <HStack>
      <Checkbox
        whiteSpace="nowrap"
        isDisabled={disable}
        onChange={() => setmultiplosNodulosCheckBox(!multiplosNodulosCheckBox)}
      >
        Nódulo {numNodulo}
      </Checkbox>

      <Input
        isDisabled={disable}
        value={medida1NoduloInput}
        w="60px"
        h="77x"
        padding="5px"
        maxLength={2}
        textAlign="center"
        onChange={handleChangeNoduloInputMedida1}
        placeholder={"mm"}
      />
      <Text>x</Text>

      <Input
        isDisabled={disable}
        value={medida2NoduloInput}
        w="60px"
        h="77x"
        padding="5px"
        maxLength={2}
        textAlign="center"
        onChange={handleChangeNoduloInputMedida2}
        placeholder={"mm"}
      />
      <Text>x</Text>

      <Input
        isDisabled={disable}
        value={medida3NoduloInput}
        w="60px"
        h="77x"
        padding="5px"
        maxLength={2}
        textAlign="center"
        onChange={handleChangeNoduloInputMedida3}
        placeholder={"mm"}
      />
    </HStack>
  );
}
