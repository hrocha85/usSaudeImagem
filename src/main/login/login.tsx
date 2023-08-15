import {
  Box,
  Button,
  Center,
  Link,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Login() {
  const [medicoString, setmedicoString] = useState<any>();
  const [medicoSelecionado, setmedicoSelecionado] = useState<any | null>(null);

  const [clinicaString, setclinicaString] = useState<any>();
  const [clinicaSelecionada, setClinSelecionada] = useState<any | null>(null);
  const [clinicasMedSelect, setClinicaMedSelect] = useState<any[]>([]);

  const [isDisabledEntrar, setisDisabledEntrar] = useState(true);

  const getMedicos = () => {
    let medicos;
    let item;
    if (localStorage.getItem("medicos") != null) {
      item = localStorage.getItem("medicos");
      medicos = JSON.parse(item);
    } else medicos = [];
    return medicos;
  };
  const lista_medico = getMedicos();

  const loginUser = () => {
    const user = {
      isLogged: true,
      medico: medicoSelecionado,
      clinica: clinicaSelecionada,
    };
    localStorage.setItem("user", JSON.stringify(user));
  };

  const parseMedicoSelecionado = () => {
    if (medicoString != undefined)
      setmedicoSelecionado(JSON.parse(medicoString));
  };

  const parseClinicaSelecionada = () => {
    if (clinicaString != undefined)
      setClinSelecionada(JSON.parse(clinicaString));
  };

  useEffect(() => {
    parseMedicoSelecionado();
  }, [medicoString]);

  useEffect(() => {
    parseClinicaSelecionada();
  }, [clinicaString]);

  useEffect(() => {
    if (medicoSelecionado != null && medicoSelecionado != undefined)
      setClinicaMedSelect(medicoSelecionado.clinica);
  }, [medicoSelecionado]);

  useEffect(() => {
    if (clinicaSelecionada != null && medicoSelecionado != null)
      setisDisabledEntrar(false);
  }, [clinicaSelecionada, medicoSelecionado]);

  window.addEventListener("update_medicos", () => {
    getMedicos();
  });

  const verificaMedico = () => {
    if (lista_medico.length > 0) {
      return (
        <Center>
          <Stack>
            <Select
              defaultValue=""
              w="30vw"
              borderColor="#ccc"
              textAlign="center"
              onChange={(event) => setmedicoString(event.currentTarget.value)}
            >
              <option value="" disabled>
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
                defaultValue=""
                w="30vw"
                borderColor="#ccc"
                textAlign="center"
                onChange={(e) => setclinicaString(e.currentTarget.value)}
              >
                <option value="" disabled>
                  Clínicas
                </option>
                {clinicasMedSelect.map((clinica, key) => {
                  const parseClinica = JSON.parse(clinica);
                  return (
                    <option value={JSON.stringify(clinica)} key={key}>
                      {parseClinica.nomeClinica}
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
              <Button
                colorScheme="blue"
                display="block"
                w="100%"
                isDisabled={isDisabledEntrar}
                onClick={() => {
                  loginUser();
                }}
              >
                Entrar
              </Button>
            </Link>

            <Link
              display="block"
              href={`#/Home/Configuracoes`}
              style={{ textDecoration: "none" }}
            >
              <Button colorScheme="blue" display="block" w="100%">
                Adicionar médico
              </Button>
            </Link>
          </Stack>
        </Center>
      );
    } else {
      return (
        <Center>
          <Stack>
            <Text fontWeight="bold">Adicione um médico para prosseguir.</Text>

            <Link
              display="block"
              href={`#/Home/Configuracoes`}
              style={{ textDecoration: "none" }}
            >
              <Button colorScheme="blue" display="block" w="100%">
                Adicionar médico
              </Button>
            </Link>
          </Stack>
        </Center>
      );
    }
  };

  return (
    <Box
      w="100%"
      h="100vh"
      height={'100vh'} bgGradient='linear(to-b, blue.100, #fff)'
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
          {verificaMedico()}
        </Box>
      </Center>
    </Box>
  );
}

export default Login;
