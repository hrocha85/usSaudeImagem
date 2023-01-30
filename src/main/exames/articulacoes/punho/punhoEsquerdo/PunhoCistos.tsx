/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Center, Checkbox, Flex, HStack, Input, Radio, RadioGroup, Select, Stack, Text, Wrap, WrapItem, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { PunhoEsquerdoNormalContext } from "../../../../../context/PunhoEsquerdoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";
import { Format_Laudo } from "../../../../component/function_format_laudo";

function PunhoCistosEsquerdo() {
  const altura = "100%";
  const largura = "95%";


  let { PunhoEsquerdoLaudoNormal } = useContext(PunhoEsquerdoNormalContext)
  const [frasesPunhoCistosEsquerdo, setFrasesPunhoCistosEsquerdo] = useState<any>([]);

  const subExame = 'Cistos Esquerdo'
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(frasesPunhoCistosEsquerdo).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesPunhoCistosEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesPunhoCistosEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesPunhoCistosEsquerdo]);

  const [disableTudo, setDisableTudo] = useState(false)

  const [FaceDorsalInput, setFaceDorsalInput] = useState("");
  const [FaceDorsalInput2, setFaceDorsalInput2] = useState("");
  const [FaceDorsalInput3, setFaceDorsalInput3] = useState("");
  const [disableFaceDorsalInput, setdisableFaceDorsalInput] = useState(true);
  const [SelectFaceDorsal, setSelectFaceDorsal] = useState("");

  const [FaceDorsalCheckbox, setFaceDorsalCheckbox] = useState(false);
  const [ComunicandoDorsal, setComunicandoDorsal] = useState(false);

  const [FaceVolarInput, setFaceVolarInput] = useState("");
  const [FaceVolarInput2, setFaceVolarInput2] = useState("");
  const [FaceVolarInput3, setFaceVolarInput3] = useState("");
  const [disableFaceVolarInput, setdisableFaceVolarInput] = useState(true);

  const [FaceVolarCheckbox, setFaceVolarCheckbox] = useState(false);
  const [ComunicandoVolar, setComunicandoVolar] = useState(false);



  const criaStringFaceDorsal = (medida1, medida2, medida3, selectFaceDorsal) => {
    removeFaceDorsal();
    var string;
    if (FaceDorsalCheckbox) {
      if (medida1 !== "" && medida2 !== "" && medida3 !== "" && selectFaceDorsal !== '' && ComunicandoDorsal) {
        string = `Frase ${medida1} x ${medida2} x ${medida3} mm, ${selectFaceDorsal}, comunicando-se com a articulação radiocárpica`;
        setFrasesPunhoCistosEsquerdo((arr) => [...arr, string]);
      } else if (medida1 !== "" && medida2 !== "" && medida3 !== "" && selectFaceDorsal !== '') {
        string = `Frase ${medida1} x ${medida2} x ${medida3} mm, ${selectFaceDorsal}`;
        setFrasesPunhoCistosEsquerdo((arr) => [...arr, string]);
      }
    } else {
      removeFaceDorsal();

    }
  };

  const removeFaceDorsal = () => {
    frasesPunhoCistosEsquerdo.map((e) => {
      if (e.includes("Frase ")) {
        var index = frasesPunhoCistosEsquerdo.indexOf(e);
        if (index > -1) {
          frasesPunhoCistosEsquerdo.splice(index, 1);
          setFrasesPunhoCistosEsquerdo((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (FaceDorsalCheckbox) {
      setdisableFaceDorsalInput(false);
    } else {
      removeFaceDorsal();
      setdisableFaceDorsalInput(true);
      setSelectFaceDorsal("")
      setFaceDorsalInput("");
      setFaceDorsalInput2("");
      setFaceDorsalInput3("");
    }
  }, [FaceDorsalCheckbox]);

  useEffect(() => {
    criaStringFaceDorsal(FaceDorsalInput, FaceDorsalInput2, FaceDorsalInput3, SelectFaceDorsal);
  }, [FaceDorsalInput, FaceDorsalInput2, FaceDorsalInput3, SelectFaceDorsal, ComunicandoDorsal]);



  const criaStringFaceVolar = (medida1, medida2, medida3) => {
    removeFaceVolar();
    var string;
    if (FaceVolarCheckbox) {
      if (medida1 !== "" && medida2 !== "" && medida3 !== "" && ComunicandoVolar) {
        string = `Frase ${medida1} x ${medida2} x ${medida3} mm, comunicando-se com a articulação radiocárpica`;
        setFrasesPunhoCistosEsquerdo((arr) => [...arr, string]);
      } else if (medida1 !== "" && medida2 !== "" && medida3 !== "") {
        string = `Frase ${medida1} x ${medida2} x ${medida3} mm`;
        setFrasesPunhoCistosEsquerdo((arr) => [...arr, string]);
      }
    } else {
      removeFaceVolar();

    }
  };

  const removeFaceVolar = () => {
    frasesPunhoCistosEsquerdo.map((e) => {
      if (e.includes("Frase ")) {
        var index = frasesPunhoCistosEsquerdo.indexOf(e);
        if (index > -1) {
          frasesPunhoCistosEsquerdo.splice(index, 1);
          setFrasesPunhoCistosEsquerdo((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (FaceVolarCheckbox) {
      setdisableFaceVolarInput(false);
    } else {
      removeFaceVolar();
      setdisableFaceVolarInput(true);
      setFaceVolarInput("");
      setFaceVolarInput2("");
      setFaceVolarInput3("");
    }
  }, [FaceVolarCheckbox]);

  useEffect(() => {
    criaStringFaceVolar(FaceVolarInput, FaceVolarInput2, FaceVolarInput3);
  }, [FaceVolarInput, FaceVolarInput2, FaceVolarInput3, ComunicandoVolar]);

  useEffect(() => {
    PunhoEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [PunhoEsquerdoLaudoNormal])

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Cistos" />

      <Box display="flex" flexWrap="wrap">

      </Box>

      <Stack>

        <Box display='flex' flexWrap='wrap' gap='5px'>
          <Checkbox
            isDisabled={disableTudo}
            onChange={() => {
              setFaceDorsalCheckbox(!FaceDorsalCheckbox);
            }}
          >
            Face DORSAL medindo
          </Checkbox>
          <HStack ml='15px'>
            <Input
              isDisabled={disableFaceDorsalInput}
              value={FaceDorsalInput}
              w="45px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => { setFaceDorsalInput(e.target.value) }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableFaceDorsalInput}
              value={FaceDorsalInput2}
              w="45px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => { setFaceDorsalInput2(e.target.value) }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableFaceDorsalInput}
              value={FaceDorsalInput3}
              w="45px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => { setFaceDorsalInput3(e.target.value) }}
            />
            <Text>mm</Text>
          </HStack>
          <Text alignSelf='center'>situado entre o</Text>
          <Select
            w='150px'
            isDisabled={disableFaceDorsalInput}
            value={SelectFaceDorsal}
            onChange={(e) => {
              setSelectFaceDorsal(e.target.value);
            }}
          >
            <option selected disabled value="">Select</option>
            <option value="Tendinopatia sem rotura 1">corno anterior</option>
            <option value="Tendinopatia sem rotura 2">corno posterior</option>
          </Select>
          <Text alignSelf='center'>compartimentos sinovais</Text>
          <Checkbox
            isDisabled={disableFaceDorsalInput}
            onChange={() => {
              setComunicandoDorsal(!ComunicandoDorsal);
            }}
          >
            comunicando-se com a articulação radiocárpica
          </Checkbox>
        </Box>
        <Box display='flex' flexWrap='wrap' gap='5px'>
          <Checkbox
            isDisabled={disableTudo}
            onChange={() => {
              setFaceVolarCheckbox(!FaceVolarCheckbox);
            }}
          >
            Face VOLAR (palmar) medindo
          </Checkbox>
          <HStack ml='15px'>
            <Input
              isDisabled={disableFaceVolarInput}
              value={FaceVolarInput}
              w="45px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => { setFaceVolarInput(e.target.value) }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableFaceVolarInput}
              value={FaceVolarInput2}
              w="45px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => { setFaceVolarInput2(e.target.value) }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableFaceVolarInput}
              value={FaceVolarInput3}
              w="45px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => { setFaceVolarInput3(e.target.value) }}
            />
            <Text>mm</Text>
          </HStack>

          <Checkbox
            isDisabled={disableFaceVolarInput}
            onChange={() => {
              setComunicandoVolar(!ComunicandoVolar);
            }}
          >
            comunicando-se com a articulação radiocárpica
          </Checkbox>
        </Box>

      </Stack >
    </Box >

  );
}
export default PunhoCistosEsquerdo;
