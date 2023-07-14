/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, HStack, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function MedidasDireito() {
  const altura = "100%";
  const largura = "95%";

  const [frasesMedidasD, setFrasesMedidasD] = useState<any>([]);

  //States Medidas Utero - Inicio
  const [medidaJSF, setMedidaJSF] = useState("");
  const [medidaCoxa, setMedidaCoxa] = useState("");
  const [medidaPerna, setMedidaPerna] = useState("");
  const [medidaParva, setMedidaParva] = useState("");
  //States Medidas Utero - Fim

  const criaStringMedidasJSF = () => {
    var string = `Doppler Venoso MMII, JSF medindo: ${medidaJSF} mm `;
    if (medidaJSF !== "") {
      setFrasesMedidasD((arr) => [...arr, string]);
    }
  };
  const removeMedidasJSF = () => {
    frasesMedidasD.map((e) => {
      if (e.includes("Doppler Venoso MMII, JSF medindo:")) {
        var index = frasesMedidasD.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesMedidasD.splice(index, 1);
          setFrasesMedidasD((arr) => [...arr]);
        }
      }
    });
  };
  // Funcoes medidas Utero - Fim

  //Observa as mudancas nos inputs de medidas e chama a funcao criarstring
  useEffect(() => {
    removeMedidasJSF();
    criaStringMedidasJSF();
  }, [medidaJSF]);

  const criaStringMedidasCoxa = () => {
    var string = `Doppler Venoso MMII, Coxa medindo: ${medidaCoxa} mm `;
    if (medidaCoxa !== "") {
      setFrasesMedidasD((arr) => [...arr, string]);
    }
  };
  const removeMedidasCoxa = () => {
    frasesMedidasD.map((e) => {
      if (e.includes("Doppler Venoso MMII, Coxa medindo:")) {
        var index = frasesMedidasD.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesMedidasD.splice(index, 1);
          setFrasesMedidasD((arr) => [...arr]);
        }
      }
    });
  };
  // Funcoes medidas Utero - Fim

  //Observa as mudancas nos inputs de medidas e chama a funcao criarstring
  useEffect(() => {
    removeMedidasCoxa();
    criaStringMedidasCoxa();
  }, [medidaCoxa]);

  const criaStringMedidasPerna = () => {
    var string = `Doppler Venoso MMII, Perna medindo: ${medidaPerna} mm `;
    if (medidaPerna !== "") {
      setFrasesMedidasD((arr) => [...arr, string]);
    }
  };
  const removeMedidasPerna = () => {
    frasesMedidasD.map((e) => {
      if (e.includes("Doppler Venoso MMII, Perna medindo:")) {
        var index = frasesMedidasD.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesMedidasD.splice(index, 1);
          setFrasesMedidasD((arr) => [...arr]);
        }
      }
    });
  };
  // Funcoes medidas Utero - Fim

  //Observa as mudancas nos inputs de medidas e chama a funcao criarstring
  useEffect(() => {
    removeMedidasPerna();
    criaStringMedidasPerna();
  }, [medidaPerna]);

  const criaStringMedidasParva = () => {
    var string = `Doppler Venoso MMII, Parva medindo: ${medidaParva} mm `;
    if (medidaParva !== "") {
      setFrasesMedidasD((arr) => [...arr, string]);
    }
  };
  const removeMedidasParva = () => {
    frasesMedidasD.map((e) => {
      if (e.includes("Doppler Venoso MMII, Parva medindo:")) {
        var index = frasesMedidasD.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesMedidasD.splice(index, 1);
          setFrasesMedidasD((arr) => [...arr]);
        }
      }
    });
  };
  // Funcoes medidas Utero - Fim

  //Observa as mudancas nos inputs de medidas e chama a funcao criarstring
  useEffect(() => {
    removeMedidasParva();
    criaStringMedidasParva();
  }, [medidaParva]);

  const subExame = "Medidas Lado Direito";
  const titulo_exame = "Doppler Venoso de MMII";

  useEffect(() => {
    if (Object.keys(frasesMedidasD).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesMedidasD
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesMedidasD
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesMedidasD]);

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

      <Box gap="10px" display="flex" flexWrap="wrap" mt="20px">
        <HStack>
          <Text>JSF</Text>
          <Input
            w="50px"
            h="30px"
            value={medidaJSF}
            padding="5px"
            textAlign="center"
            onChange={(e) => setMedidaJSF(e.target.value)}
          />
          <Text>mm</Text>
        </HStack>
        <HStack>
          <Text>Coxa</Text>
          <Input
            w="50px"
            h="30px"
            padding="5px"
            textAlign="center"
            onChange={(e) => setMedidaCoxa(e.target.value)}
          />
          <Text>mm</Text>
        </HStack>
      </Box>
      <Box gap="10px" display="flex" flexWrap="wrap" mt="20px">
        <HStack>
          <Text>Perna</Text>
          <Input
            w="50px"
            h="30px"
            padding="5px"
            textAlign="center"
            value={medidaPerna}
            onChange={(e) => {
              setMedidaPerna(e.target.value);
            }}
          />
          <Text>mm</Text>
        </HStack>
        <HStack>
          <Text>Parva</Text>
          <Input
            w="50px"
            h="30px"
            padding="5px"
            textAlign="center"
            value={medidaParva}
            onChange={(e) => {
              setMedidaParva(e.target.value);
            }}
          />
          <Text>mm</Text>
        </HStack>
      </Box>
    </Box>
  );
}
export default MedidasDireito;
