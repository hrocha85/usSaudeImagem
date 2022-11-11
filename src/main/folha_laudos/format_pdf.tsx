import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@react-pdf/renderer";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Pdf from "react-to-pdf";
import { LaudosContext } from "../../context/LuadosContext";

export default function Format_PDF() {
  useLayoutEffect(() => {
    <Pdf targetRef={ref} filename="code-example.pdf">
      {({ toPdf }) => <p onClick={toPdf}></p>}
    </Pdf>;
  });

  const ref = useRef<HTMLDivElement | null>(null);

  const getUserClinica = () => {
    if (localStorage.getItem("user") != null) {
      var clinica = JSON.parse(localStorage.getItem("user")!);
    }
    return clinica.clinica;
  };

  const getUserMedico = () => {
    if (localStorage.getItem("user") != null) {
      var medico = JSON.parse(localStorage.getItem("user")!);
    }
    return medico.medico;
  };

  const getPaciente = () => {
    if (localStorage.getItem("paciente") != null) {
      return JSON.parse(localStorage.getItem("paciente")!).nome;
    } else {
      return "Nome paciente";
    }
  };

  const getCurrentDate = () => {
    const timeStamp = new Date();

    return `${timeStamp.getDate()}/${
      timeStamp.getMonth() + 1
    }/${timeStamp.getFullYear()}  ${timeStamp.getHours()}:${timeStamp.getMinutes()}:${timeStamp.getSeconds()}h`;
  };

  const { laudoPrin } = useContext(LaudosContext);
  const [clinicaSet, setClinica] = useState<any>(JSON.parse(getUserClinica()));
  const [medico, setMedico] = useState(getUserMedico());

  return (
    <Flex
      ref={ref}
      borderWidth="2px"
      borderColor="black"
      w="21cm"
      h="29.7cm"
      backgroundColor="grey"
      onFocusCapture={()=>console.log('load')}
    >
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <Box h="100%" w='100%' backgroundColor="white" onClick={toPdf}></Box>
        )}
      </Pdf>
      ;<Text>teste</Text>
    </Flex>
  );
}
