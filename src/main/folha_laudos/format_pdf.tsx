import { Flex, Text } from "@chakra-ui/react";
import { pdf } from "@react-pdf/renderer";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import Pdf from "react-to-pdf";
import { LaudosContext } from "../../context/LuadosContext";

export default function Format_PDF() {
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
  //
  //
  //
  const getCurrentDate = () => {
    const timeStamp = new Date();

    return `${timeStamp.getDate()}/${
      timeStamp.getMonth() + 1
    }/${timeStamp.getFullYear()}  ${timeStamp.getHours()}:${timeStamp.getMinutes()}:${timeStamp.getSeconds()}h`;
  };
  const navigate = useNavigate();

  const { laudoPrin } = useContext(LaudosContext);
  const [clinicaSet, setClinica] = useState<any>(JSON.parse(getUserClinica()));
  const [medico, setMedico] = useState(getUserMedico());
  const [goBack, setGoback] = useState(false);
  const [execute, setExecute] = useState(0);

  useEffect(() => {
    if (goBack) {
      navigate(-1);
      setExecute(0);
    }
  }, [goBack]);

  return (
    <>
      <Pdf
        targetRef={ref}
        filename="code-example.pdf"
        onComplete={() => setExecute(1)}
      >
        {({ toPdf }) => (
          <Flex
            ref={ref}
            borderWidth="2px"
            borderColor="black"
            w="21cm"
            h="29.7cm"
            backgroundColor="grey"
          >
            <Text>sdgfsdfgsdfg</Text>
            <>
              {execute == 0
                ? setTimeout(() => {
                    toPdf();
                    setExecute(1);
                  }, 0)
                : null}
            </>
          </Flex>
        )}
      </Pdf>
    </>
  );
}
