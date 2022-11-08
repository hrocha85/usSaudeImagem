import { Box, Button, Center, Link, Select, Stack } from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import BGImage from "../images/bg_img.png";

function Login() {
  const [medicoString, setmedicoString] = useState<any>();
  const [medicoSelecionado, setmedicoSelecionado] = useState<any | null>(null);

  const [clinicaString, setclinicaString] = useState<any>();
  const [clinicaSelecionada, setclinicaSelecionada] = useState<any | null>(
    null
  );

  const getMedicos = () => {
    var medicos;
    var item;
    if (localStorage.getItem("medicos") != null) {
      item = localStorage.getItem("medicos");
      medicos = JSON.parse(item);
    } else medicos = [];
    return medicos;
  };
  var lista_medico = getMedicos();

  const parseMedicoSelecionado = () => {
    if (medicoString != undefined)
      setmedicoSelecionado(JSON.parse(medicoString));
  };
  const parseClinicaSelecionada = () => {
    if (clinicaString != undefined)
      setclinicaSelecionada(JSON.parse(clinicaString));
  };

  useEffect(() => {
    parseMedicoSelecionado();
  }, [medicoString]);

  useEffect(() => {
    parseClinicaSelecionada();
  }, [clinicaString]);

  return (
    <Box
      w="100%"
      h="100vh"
      backgroundImage={BGImage} 
      backgroundSize="cover"
      backgroundClip="padding-box"
      backgroundRepeat="no-repeat"
      paddingBottom="10px"
      alignItems="center"
    >
      <Center>
        <Box
          position="absolute"
          top="30%"
          bg="#FAFAFA"
          w="auto"
          h="auto"
          borderRadius="10.85px"
          boxShadow="md"
          padding="30px"
        >
          <Center>
            <Stack>
              <Select
                w="200px"
                borderColor="black"
                textAlign="center"
                onChange={(event) => setmedicoString(event.currentTarget.value)}
              >
                <option value="" disabled selected>
                  Médicos
                </option>

                {lista_medico.map((medico, key) => {
                  return (
                    <option value={JSON.stringify(medico)} key={key}>
                      {medico.nome}
                    </option>
                  );
                })}
              </Select>
              {medicoSelecionado != null || undefined ? (
                <Select
                  w="200px"
                  borderColor="black"
                  textAlign="center"
                  onChange={(e) => setclinicaString(e.currentTarget.value)}
                >
                  <option value="" disabled selected>
                    Clínicas
                  </option>
                  {medicoSelecionado.clinica.map((clinica, key) => {
                    return (
                      <option value={clinica} key={key}>
                        {clinica}
                      </option>
                    );
                  })}
                </Select>
              ) : null}

              <Link
                display="block"
                href={`#/Home`}
                style={{ textDecoration: "none" }}
              >
                <Button colorScheme="blue" display="block" w="100%">
                  Entrar
                </Button>
              </Link>

              <Link
                display="block"
                href={`#/Home/Configuracoes`}
                style={{ textDecoration: "none" }}
              >
                <Button colorScheme="blue" display="block" w="100%">
                  Adicionar Médico
                </Button>
              </Link>
            </Stack>
          </Center>
        </Box>
      </Center>
    </Box>
  );
}

export default Login;
