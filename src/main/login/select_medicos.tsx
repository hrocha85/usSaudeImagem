import {
  Box,
  Button,
  Center,
  Link,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Cookies from 'js-cookie';
import GetMedicosFree from "../Helpers/UserFree/GetMedicos";
import getClinicaAdmin from "../Helpers/UserAdmin/GetClinicas";
import GetMedicosAdmin from "../Helpers/UserAdmin/GetMedicos";
import { useNavigate } from "react-router-dom";

function SelectMedicos() {

  const [medicoString, setmedicoString] = useState<any>();
  const [medicoAdm, setMedicoAdm] = useState<any>();
  const [medicoSelecionado, setmedicoSelecionado] = useState<any | null>(null);

  const [clinicaString, setclinicaString] = useState<any>();
  const [clinicaSelecionada, setClinSelecionada] = useState<any | null>(null);
  const [clinicasMedSelect, setClinicaMedSelect] = useState<any[]>([]);

  const [isDisabledEntrar, setisDisabledEntrar] = useState(true);
  const [AdminMaster, setAdminMaster] = useState(false);

  const [lista_medico, setlista_medico] = useState<any[]>([]);

  useEffect(() => {
    let isAdmin;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role === 'admin' ? isAdmin = true : isAdmin = false
      role === 'adminMaster' ? setAdminMaster(true) : setAdminMaster(false)
    }
    if (!isAdmin) {
      setlista_medico(GetMedicosFree())
    } else {
      GetMedicosAdmin()
        .then(medicos => {
          setlista_medico(medicos)
        })
        .catch(error => {
          console.error('Erro ao obter clínicas:', error);
        });
    }
  }, [])

  const getMedicos = () => {
    let isAdmin;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role == 'admin' ? isAdmin = true : isAdmin = false
    }
    if (!isAdmin) {
      setlista_medico(GetMedicosFree())
    } else {
      GetMedicosAdmin()
        .then(medicos => {
          setlista_medico(medicos)
        })
        .catch(error => {
          console.error('Erro ao obter clínicas:', error);
        });
    }
  };

  const SelectMedicosUser = () => {
    let isAdmin;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role == 'admin' ? isAdmin = true : isAdmin = false
    }
    let user;
    if (!isAdmin) {
      user = {
        isLogged: true,
        medico: medicoSelecionado,
        clinica: JSON.parse(clinicaSelecionada)
      };

    } else {
      user = {
        isLogged: true,
        medico: medicoSelecionado,
        clinica: clinicaSelecionada
      };
    }


    localStorage.setItem("user", JSON.stringify(user));
    // console.log('deletar')
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
      // console.log(medicoSelecionado)
      setClinicaMedSelect(medicoSelecionado.clinicas);

    // console.log('medico', medicoSelecionado.clinicas)
  }, [medicoSelecionado]);

  useEffect(() => {
    if (clinicaSelecionada != null && medicoSelecionado != null)
      setisDisabledEntrar(false);
  }, [clinicaSelecionada, medicoSelecionado]);

  window.addEventListener("update_medicos", () => {
    getMedicos();
  });

  const verificaMedico = () => {

    let isAdmin;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role == 'admin' ? isAdmin = true : isAdmin = false
    }
    if (!isAdmin) {
      if (lista_medico.length > 0) {
        return (
          <Center>
            <Stack w={'100%'}>
              <Select
                defaultValue=""
                w={['100%', '100%']}
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
                  w={['100%', '100%']}
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
                        {parseClinica.nome}
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
                    SelectMedicosUser();
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
    } else {
      if (lista_medico.length > 0) {
        return (
          <Center>
            <Stack>
              <Select
                defaultValue=""
                w="100%"
                borderColor="#ccc"
                textAlign="center"
                onChange={(event) => setmedicoString(event.currentTarget.value)}
              // onChange={(event) => console.log(JSON.parse(event.currentTarget.value))}
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
                    return (
                      <option value={JSON.stringify(clinica)} key={key}>
                        {clinica.nome}
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
                    SelectMedicosUser();
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
    }
  };

  const navigate = useNavigate()
  const areaAdm = () => {
    let isAdminMaster;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role == 'adminMaster' ? isAdminMaster = true : isAdminMaster = false
    }
    if (isAdminMaster) {
      navigate('/AdminMaster')
    }
  }

  return (
    <Box
      w="100%"
      h="100vh"
      bgGradient='linear(to-b, blue.100, #fff)'
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
          w={['90%', "40%"]}
          h="auto"
          borderRadius="10.85px"
          boxShadow="md"
          padding="30px"
        >
          {verificaMedico()}
        </Box>

        {AdminMaster ?

          <Button onClick={() => areaAdm()} mt={6}>Área administrativa</Button>
          :
          null
        }
      </Center>
    </Box>
  );
}

export default SelectMedicos;
