/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, HStack, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function MedidasEsquerdo() {
  const altura = "100%";
  const largura = "95%";

  const [frasesMedidasE, setFrasesMedidasE] = useState<any>([]);

  //States Medidas Utero - Inicio
  const [medidaJSF, setMedidaJSF] = useState("");
  const [medidaCoxa, setMedidaCoxa] = useState("");
  const [medidaPerna, setMedidaPerna] = useState("");
  const [medidaParva, setMedidaParva] = useState("");
  //States Medidas Utero - Fim

  const criaStringMedidasJSF = () => {
    var string = `Doppler Venoso MMII, JSF medindo: ${medidaJSF} mm `;
    if (medidaJSF !== "") {
      setFrasesMedidasE((arr) => [...arr, string]);
    }
  };
  const removeMedidasJSF = () => {
    frasesMedidasE.map((e) => {
      if (e.includes("Doppler Venoso MMII, JSF medindo:")) {
        var index = frasesMedidasE.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesMedidasE.splice(index, 1);
          setFrasesMedidasE((arr) => [...arr]);
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
      setFrasesMedidasE((arr) => [...arr, string]);
    }
  };
  const removeMedidasCoxa = () => {
    frasesMedidasE.map((e) => {
      if (e.includes("Doppler Venoso MMII, Coxa medindo:")) {
        var index = frasesMedidasE.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesMedidasE.splice(index, 1);
          setFrasesMedidasE((arr) => [...arr]);
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
      setFrasesMedidasE((arr) => [...arr, string]);
    }
  };
  const removeMedidasPerna = () => {
    frasesMedidasE.map((e) => {
      if (e.includes("Doppler Venoso MMII, Perna medindo:")) {
        var index = frasesMedidasE.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesMedidasE.splice(index, 1);
          setFrasesMedidasE((arr) => [...arr]);
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
      setFrasesMedidasE((arr) => [...arr, string]);
    }
  };
  const removeMedidasParva = () => {
    frasesMedidasE.map((e) => {
      if (e.includes("Doppler Venoso MMII, Parva medindo:")) {
        var index = frasesMedidasE.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesMedidasE.splice(index, 1);
          setFrasesMedidasE((arr) => [...arr]);
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

  const subExame = "Medidas Lado Esquerdo";
  const titulo_exame = "Doppler Venoso de MMII";

  useEffect(() => {
    if (Object.keys(frasesMedidasE).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesMedidasE
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesMedidasE
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesMedidasE]);

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
export default MedidasEsquerdo;
