/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Testiculo() {
  const altura = "100%";
  const largura = "66%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  //States Medidas TesticuloDireito - Inicio
  const [medidaTesticuloDireito1, setmedidaTesticuloDireito1] = useState("");
  const [medidaTesticuloDireito2, setmedidaTesticuloDireito2] = useState("");
  const [medidaTesticuloDireito3, setmedidaTesticuloDireito3] = useState("");

  const [medidaTesticuloEsquerdo1, setmedidaTesticuloEsquerdo1] = useState("");
  const [medidaTesticuloEsquerdo2, setmedidaTesticuloEsquerdo2] = useState("");
  const [medidaTesticuloEsquerdo3, setmedidaTesticuloEsquerdo3] = useState("");


  // Funcoes medidas TesticuloDireito - Inicio
  const criaStringMedidasTesticuloDireito = () => {
    if (medidaTesticuloDireito1 !== "" && medidaTesticuloDireito2 !== "" && medidaTesticuloDireito3 !== "") {
      var string = `Testículo direito medindo ${medidaTesticuloDireito1} x ${medidaTesticuloDireito2} x ${medidaTesticuloDireito3} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };
  const removeMedidasDireito = () => {
    // console.log("valor remove = ", value);
    laudoPrin.map((e) => {
      if (e.includes("Testículo direito medindo")) {
        var index = laudoPrin.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };
  // Funcoes medidas TesticuloDireito - Fim

  //Observa as mudancas nos inputs de medidas e chama a funcao criarstring
  useEffect(() => {
    removeMedidasDireito();
    criaStringMedidasTesticuloDireito();
  }, [medidaTesticuloDireito1, medidaTesticuloDireito2, medidaTesticuloDireito3]);

  const criaStringMedidasTesticuloEsquerdo = () => {
    if (medidaTesticuloEsquerdo1 !== "" && medidaTesticuloEsquerdo2 !== "" && medidaTesticuloEsquerdo3 !== "") {
      var string = `Testículo esquerdo medindo ${medidaTesticuloEsquerdo1} x ${medidaTesticuloEsquerdo2} x ${medidaTesticuloEsquerdo3} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };
  const removeMedidasEsquerdo = () => {
    // console.log("valor remove = ", value);
    laudoPrin.map((e) => {
      if (e.includes("Testículo esquerdo medindo")) {
        var index = laudoPrin.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };
  // Funcoes medidas TesticuloEsquerdo - Fim

  //Observa as mudancas nos inputs de medidas e chama a funcao criarstring
  useEffect(() => {
    removeMedidasEsquerdo();
    criaStringMedidasTesticuloEsquerdo();
  }, [medidaTesticuloEsquerdo1, medidaTesticuloEsquerdo2, medidaTesticuloEsquerdo3]);


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

      <TituloNomeExame titulo="Medidas" />

      <Box gap="20px" display="flex" flexWrap="wrap">
        <HStack>
          <Text>Testículo Direito:</Text>
          <Input
            w="30px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => setmedidaTesticuloDireito1(e.target.value)}
          />
          <Text>x</Text>
          <Input
            w="30px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => setmedidaTesticuloDireito2(e.target.value)}
          />
          <Text>x</Text>
          <Input
            w="30px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => {
              setmedidaTesticuloDireito3(e.target.value);
            }}
          />
          <Text>mm</Text>
        </HStack>
        <HStack>
          <Text>Testículo Esquerdo:</Text>
          <Input
            w="30px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => setmedidaTesticuloEsquerdo1(e.target.value)}
          />
          <Text>x</Text>
          <Input
            w="30px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => setmedidaTesticuloEsquerdo2(e.target.value)}
          />
          <Text>x</Text>
          <Input
            w="30px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => {
              setmedidaTesticuloEsquerdo3(e.target.value);
            }}
          />
          <Text>mm</Text>
        </HStack>

      </Box>
    </Box>
  );
}
export default Testiculo;