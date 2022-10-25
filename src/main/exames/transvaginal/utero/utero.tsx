import {
  Box,
  Checkbox,
  HStack,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Utero() {
  const altura = "100%";
  const largura = "66%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [medidaUtero1, setmedidaUtero1] = useState<string | null>(null);
  const [medidaUtero2, setmedidaUtero2] = useState<string | null>(null);
  const [medidaUtero3, setmedidaUtero3] = useState<string | null>(null);

  const [medidaPolipo1, setmedidaPolipo1] = useState("");
  const [medidaPolipo2, setmedidaPolipo2] = useState("");

  const [endometrio, setEndometrio] = useState<string | null>(null);
  const [medidasChecked, setmedidasChecked] = useState(false);
  const [checkBoxChecked, setCheckBoxChecked] = useState(true);

  const [polipoCheckBox, setPolipoCheckBox] = useState(false);
  const [disablePolipo, setdisablePolipoInput] = useState(true);

  const handleChangeMedidaPolipo1 = (event) =>
    setmedidaPolipo1(event.target.value);
  const handleChangeMedidaPolipo2 = (event) => {
    setmedidaPolipo2(event.target.value);
  };

  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    var index = laudoPrin.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
    }
  };
  const removeEndometrio = () => {
    // console.log("valor remove = ", value);
    var index = laudoPrin.indexOf("Endométrio");
    console.log(laudoPrin)
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
    }
  };

  const criaStringPosicaoUtero = (value) => {
    var string = `Útero em ${value} `;
    return string;
  };

  const criaStringEndometrio = (value) => {
    if (endometrio != null && endometrio != "") {
      var string = `Endométrio com ${value} MM `;
      removeEndometrio();
      setLaudoPrin((arr) => [...arr, string]);
      setEndometrio(null);
    }
  };

  const criaStringMedidasUtero = (medida1, medida2, medida3) => {
    var string = `Útero com ${medida1} x ${medida2} x ${medida3} MM `;
    setLaudoPrin((arr) => [...arr, string]);
    setmedidaUtero1(null);
    setmedidaUtero2(null);
    setmedidaUtero3(null);
    setmedidasChecked(false);
  };

  const checkPosicaoUtero = (value) => {
    switch (value) {
      case "Anteversoflexão":
        removeItemString(criaStringPosicaoUtero("Retroversoflexão"));
        setLaudoPrin((arr) => [...arr, criaStringPosicaoUtero(value)]);

        break;

      case "Retroversoflexão": {
        removeItemString(criaStringPosicaoUtero("Anteversoflexão"));
        setLaudoPrin((arr) => [...arr, criaStringPosicaoUtero(value)]);
        break;
      }
    }
  };

  const addEndometrioCheckBoxString = () => {
    var string = "Endométrio heterogêneo e espessado";
    if (checkBoxChecked) {
      setLaudoPrin((arr) => [...arr, string]);
      setCheckBoxChecked(false);
    } else {
      removeItemString(string);
    }
  };

  const addPolipoString = (medida1, medida2) => {
    removePolipo();
    if (medidaPolipo1 != "" && medidaPolipo2 != "") {
      var string = `Pólipo mede ${medida1} x ${medida2} MM`;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };
  const removePolipo = () => {
    // console.log("valor remove = ", value);
    var index = laudoPrin.indexOf("Pólipo");
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente

    laudoPrin.splice(index, 1);
    setLaudoPrin((arr) => [...arr]);
  };
  useEffect(() => {
    if (medidasChecked) {
      criaStringMedidasUtero(medidaUtero1, medidaUtero2, medidaUtero3);
    }
  }, [medidasChecked]);

  useEffect(() => {
    if (medidaUtero1 != null && medidaUtero2 != null && medidaUtero3 != null) {
      setmedidasChecked(true);
    }
  });
  useEffect(() => {
    criaStringEndometrio(endometrio);
  }, [endometrio]);

  useEffect(() => {
    if (polipoCheckBox) {
      setdisablePolipoInput(false);
    } else {
      setdisablePolipoInput(true);
      removePolipo();
      setmedidaPolipo1("");
      setmedidaPolipo2("");
    }
  }, [polipoCheckBox]);

  useEffect(() => {
    addPolipoString(medidaPolipo1, medidaPolipo2);
  }, [medidaPolipo1, medidaPolipo2]);

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
      <Box borderBottom="1px">
        <TituloNomeExame titulo="Útero" />
      </Box>

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Box>
          <Text>Posição:</Text>
          <Select
            placeholder="Posição"
            onChange={(e) => {
              checkPosicaoUtero(e.target.value);
            }}
          >
            <option value="Anteversoflexão">Anteversoflexão</option>
            <option value="Retroversoflexão">Retroversoflexão</option>
          </Select>
        </Box>

        <Box w="200px">
          <Text>Medidas:</Text>
          <HStack marginTop="5px">
            <Input
              w="80px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => setmedidaUtero1(e.target.value)}
            />
            <Text>x</Text>
            <Input
              w="80px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => setmedidaUtero2(e.target.value)}
            />
            <Text>x</Text>
            <Input
              w="80px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setmedidaUtero3(e.target.value);
              }}
            />
            <Text>MM</Text>
          </HStack>
        </Box>

        <Box w="200px">
          <Text>Endométrio:</Text>
          <HStack marginTop="5px">
            <Input
              w="50px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setEndometrio(e.target.value);
              }}
            />
            <Text>MM</Text>
          </HStack>
        </Box>
        <Stack>
          <Checkbox
            onChange={() => {
              setCheckBoxChecked(true);
              addEndometrioCheckBoxString();
            }}
          >
            Endométrio heterogêneo e espessado
          </Checkbox>

          <HStack>
            <Checkbox onChange={() => setPolipoCheckBox(!polipoCheckBox)}>
              Pólipo endometrial
            </Checkbox>
            <Input
              isDisabled={disablePolipo}
              w="35px"
              h="30px"
              value={medidaPolipo1}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={handleChangeMedidaPolipo1}
            />
            <Text>x</Text>
            <Input
              isDisabled={disablePolipo}
              w="35px"
              h="30px"
              value={medidaPolipo2}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={handleChangeMedidaPolipo2}
            />
            <Text>MM</Text>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Utero;
