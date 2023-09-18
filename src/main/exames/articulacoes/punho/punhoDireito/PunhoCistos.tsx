/* eslint-disable array-callback-return */

import { Box, Checkbox, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { PunhoDireitoNormalContext } from "../../../../../context/PunhoDireitoNormalContext";
import { Convert_Medida } from "../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function PunhoCistosDireito({ Disable }) {
  const altura = "100%";
  const largura = "100%";

  const [frasesPunhoCistosDireito, setFrasesPunhoCistosDireito] = useState<any>([]);

  const subExame = 'Punho- Cistos Direito'
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(frasesPunhoCistosDireito).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesPunhoCistosDireito
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesPunhoCistosDireito
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesPunhoCistosDireito]);

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



  const criaStringFaceDorsal = (medida1cm, medida2cm, medida3cm, selectFaceDorsal) => {
    removeFaceDorsal();
    const medida1 = new Convert_Medida(medida1cm).Convert_Medida()
    const medida2 = new Convert_Medida(medida2cm).Convert_Medida()
    const medida3 = new Convert_Medida(medida3cm).Convert_Medida()

    let string;
    if (FaceDorsalCheckbox) {
      if (medida1cm !== "" && medida2cm !== "" && medida3cm !== "" && selectFaceDorsal !== '' && ComunicandoDorsal) {
        string = `Cisto de contornos regulares com finas septações em seu interior, localizado na face dorsal do punho, entre o ${selectFaceDorsal} compartimentos sinoviais dos extensores,medindo ${medida1} x ${medida2} x ${medida3} cm, comunicando-se com a articulação radiocárpica`;
        setFrasesPunhoCistosDireito((arr) => [...arr, string]);
      } else if (medida1cm !== "" && medida2cm !== "" && medida3cm !== "" && selectFaceDorsal !== '') {
        string = `Cisto de contornos regulares com finas septações em seu interior, localizado na face dorsal do punho, entre o ${selectFaceDorsal} compartimentos sinoviais dos extensores,medindo ${medida1} x ${medida2} x ${medida3} cm.`;
        setFrasesPunhoCistosDireito((arr) => [...arr, string]);
      }
    } else {
      removeFaceDorsal();
    }
  };

  const removeFaceDorsal = () => {
    frasesPunhoCistosDireito.map((e) => {
      if (e.includes("Cisto de contornos regulares com finas septações em seu interior, localizado na face dorsal do punho, entre o ")) {
        const index = frasesPunhoCistosDireito.indexOf(e);
        if (index > -1) {
          frasesPunhoCistosDireito.splice(index, 1);
          setFrasesPunhoCistosDireito((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (FaceDorsalCheckbox) {
      setdisableFaceDorsalInput(false);
    } else {
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



  const criaStringFaceVolar = (medida1cm, medida2cm, medida3cm) => {
    removeFaceVolar();
    const medida1 = new Convert_Medida(medida1cm).Convert_Medida()
    const medida2 = new Convert_Medida(medida2cm).Convert_Medida()
    const medida3 = new Convert_Medida(medida3cm).Convert_Medida()

    let string;
    if (FaceVolarCheckbox) {
      if (medida1cm !== "" && medida2cm !== "" && medida3cm !== "" && ComunicandoVolar) {
        string = `Cisto de contornos regulares com finas septações em seu interior, localizado na face volar do punho, situado adjacente à artéria radial, próximo ao escafoide, medindo ${medida1} x ${medida2} x ${medida3} mm, comunicando-se com a articulação radiocárpica.`;
        setFrasesPunhoCistosDireito((arr) => [...arr, string]);
      } else if (medida1cm !== "" && medida2cm !== "" && medida3cm !== "") {
        string = `Cisto de contornos regulares com finas septações em seu interior, localizado na face volar do punho, situado adjacente à artéria radial, próximo ao escafoide, medindo ${medida1} x ${medida2} x ${medida3} mm`;
        setFrasesPunhoCistosDireito((arr) => [...arr, string]);
      }
    } else {
      removeFaceVolar();

    }
  };

  const removeFaceVolar = () => {
    frasesPunhoCistosDireito.map((e) => {
      if (e.includes("Cisto de contornos regulares com finas septações em seu interior, localizado na face volar do punho, situado adjacente à artéria radial, próximo ao escafoide, medindo ")) {
        const index = frasesPunhoCistosDireito.indexOf(e);
        if (index > -1) {
          frasesPunhoCistosDireito.splice(index, 1);
          setFrasesPunhoCistosDireito((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (FaceVolarCheckbox) {
      setdisableFaceVolarInput(false);
    } else {
      setdisableFaceVolarInput(true);
      setFaceVolarInput("");
      setFaceVolarInput2("");
      setFaceVolarInput3("");
    }
  }, [FaceVolarCheckbox]);

  useEffect(() => {
    criaStringFaceVolar(FaceVolarInput, FaceVolarInput2, FaceVolarInput3);
  }, [FaceVolarInput, FaceVolarInput2, FaceVolarInput3, ComunicandoVolar]);


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
            <option value="III e IV">III e IV</option>
            <option value="IV e V">IV e V</option>
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
export default PunhoCistosDireito;
