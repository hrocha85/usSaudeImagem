import {
  Box,
  Button,
  Flex,
  Text,
  Link,
  Image,
  useMediaQuery,
  extendTheme,
  VStack,
  IconButton,
  ChakraProvider,
  Collapse,
  useToast,
  Spinner
} from "@chakra-ui/react";
import Cookies from 'js-cookie';

import marca from "../../images/Marca.png";
import Assinatura from "../../images/signature.png";
import imgMed from "../../images/logoMed.jpeg";
import imgHosp from "../../images/logoHosp.jpeg";
import { useState } from "react";
import { ChevronLeftIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import api, { setAuthToken } from "../../../api";

function Header() {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false); // Estado de carregamento
  const AlreadyRegistered = localStorage.getItem("AlreadyRegistered");
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  let display = ""
  let width = ""
  let width1 = ""
  isLargerThan600 ? display = "flex" : display = "none"



  isLargerThan600 ? width = "20%" : width = "45%"
  isLargerThan600 ? width1 = "150px" : width1 = "110px"

  const theme = extendTheme({
    config: {
      initialColorMode: "light",
    },
  });


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const VerifyRegistered = () => {
    if (AlreadyRegistered) {
      return (
        <Link
          href={`#/Splash`}
        >

          <Button>
            Teste Free
          </Button>
        </Link>
      );
    }
    if (!AlreadyRegistered) {
      return (
        <Link
          href={`#/Cadastro`}
        >

          <Button>
            Login Teste Free
          </Button>
        </Link>
      );
    }
  }
  const login = async () => {
    try {
      setIsLoading(true); // Ativar carregamento
      const user = {
        email: 'usuariogratuito@hotmail.com',
        password: 'Contatousg*123'
      }

      const response = await api.post("login", user);
      console.log(response);
      if (response.status === 200) {
        const { name } = response.data.user;

        if (response.data.token) {
          Cookies.remove('USGImage_token')
          setAuthToken(response.data.token)
          Cookies.set('USGImage_token', JSON.stringify(response.data.token));
        } else {
          const token = Cookies.get('USGImage_token');
          setAuthToken(JSON.parse(token))
        }
        Cookies.set('USGImage_user', JSON.stringify(response.data.user));
        const roleResponse = await api.get(`usuario/${response.data.user.id}`);

        Cookies.set('USGImage_role', JSON.stringify(roleResponse.data.roles[0].name));
        setTimeout(() => {
          toast({
            duration: 3000,
            title: `Olá ${name}, seja bem-vindo!`,
            position: "top",
            isClosable: true,
          });
        }, 500);
        usenavigate("/Splash");
      } else {
        setTimeout(() => {
          toast({
            duration: 3000,
            title: `Email ou senha inválido`,
            position: "top",
            isClosable: true,
          });
        }, 500);
      }
    } catch (error) {
      console.log('Erro:', error);
      setTimeout(() => {
        toast({
          duration: 3000,
          title: `Email ou senha inválido`,
          position: "top",
          isClosable: true,
        });
      }, 500);
    } finally {
      setIsLoading(false);
    }
  };

  const usenavigate = useNavigate()
  const TesteSemLogin = () => {
    const verify = localStorage.getItem("testeSemLogin")
    if (!verify) {
      localStorage.setItem("testeSemLogin", 'true')
      const TodasClinicasString = localStorage.getItem("minhasClinicas")
      const TodasClinicas = TodasClinicasString ? JSON.parse(TodasClinicasString) : []
      let idClinica = TodasClinicas.length + 1
      TodasClinicas.map((Clinica: any) => {
        if (idClinica === Clinica.id) {
          console.log(Clinica)
          console.log(idClinica)
          idClinica = idClinica + 1
        }
      })
      const Clinica = {
        id: idClinica,
        userID: 12,
        CNPJ: '82.622.141/0001-00',
        nome: 'Clínica teste gratuito',
        endereco: 'endereco teste gratuito',
        CEP: '12345-123',
        NumeroEndereco: '123',
        foto: imgHosp,
        telefone: '(12)3456-7891',
      };
      TodasClinicas.push(Clinica);
      localStorage.setItem("minhasClinicas", JSON.stringify(TodasClinicas));

      const TodosMedicosString = localStorage.getItem("medicos")
      const TodosMedicos = TodosMedicosString ? JSON.parse(TodosMedicosString) : []
      let idMedico = TodosMedicos.length + 1
      TodosMedicos.map((medico) => {
        if (idMedico === medico.id) {
          idMedico = idMedico + 1
        }
      })
      const obj = {
        id: idMedico,
        userID: 12,
        nome: 'Médico teste gratuito',
        CRMUF: '123456789-1/BR',
        assinatura: Assinatura,
        foto: imgMed,
        clinicas: [JSON.stringify(Clinica)],
        laudos: [{}],
      };
      TodosMedicos.push(obj);
      localStorage.setItem("medicos", JSON.stringify(TodosMedicos));
      login()
    } else {
      login()
    }
  }

  return (
    <Box
      top="0"
      left="0"
      right="0"
      bg="#FAFAFA"
      w="100%"
      borderRadius="0"
      boxShadow="md"
      padding="1%"
      px={5}
      py={'15px'}
      gap={5}
    >
      <Flex alignItems="center" justifyContent="space-around" p={0} m={0}>
        <Image
          src={marca}
          w={width}
        />
        <Flex justifyContent="space-between">
          <Link href={`#/Login`} display={display}>
            <Button
              mr={3}
              bg={'transparent'}
              px={'40px'}
              fontFamily={"Sora, sans-serif"}
              fontSize={"16px"}
              fontStyle={'normal'}
              fontWeight={'600'}
              lineHeight={'24px'}
            >
              Login
            </Button>
          </Link>
          {/* <Link href={`#/Login`} display={display}> */}
          {isLoading ? (
            <Button
              mr={3}
              bg={'transparent'}
              px={'40px'}
              fontFamily={"Sora, sans-serif"}
              fontSize={"16px"}
              fontStyle={'normal'}
              fontWeight={'600'}
              lineHeight={'24px'}
            >
              Teste sem login <Spinner size='md' color='blue' style={{ marginRight: '10px' }} />
            </Button>
            // <Spinner size='lg' color='blue' style={{ marginRight: '10px' }} />
          ) : (
            <Button
              mr={3}
              bg={'transparent'}
              px={'40px'}
              fontFamily={"Sora, sans-serif"}
              fontSize={"16px"}
              fontStyle={'normal'}
              fontWeight={'600'}
              lineHeight={'24px'}
              onClick={(e) => TesteSemLogin()}
            >
              Teste sem login
            </Button>
          )}
          {/* </Link> */}
          <ScrollLink to="planos" smooth={true} duration={500}>
            <Button
              border="1px solid #1C49B0"
              color="#1C49B0"
              w={width1}
              fontFamily={"Sora, sans-serif"}
              fontWeight={'600'}
              bg="transparent"
              _hover={{ background: 'transparent', color: '#1C49B0', }}
            >
              Teste Grátis</Button>
          </ScrollLink>

          <ChakraProvider>
            <Box >
              <Box ml={1}>
                <IconButton
                  icon={<HamburgerIcon />}
                  aria-label="Abrir menu"
                  onClick={toggleMenu}
                  bg={'transparent'}
                  fontSize={'25px'}
                  top={'-2px'}
                  fontWeight={'extrabold'}
                  justifyContent={'center'}
                  color={'#1C49B0'}
                  display={{ base: "block", md: "none" }}
                  _hover={{
                    background: 'transparent',
                    color: '#1C49B0',
                  }}
                />
              </Box>

              <Box display={{ base: isMenuOpen ? "block" : "none", md: "block" }} pr={4} bg="gray.100">
                <VStack spacing={4} align="start">
                </VStack>
              </Box>

              <Collapse in={isMenuOpen} animateOpacity>
                <Box
                  display={{ base: "block", md: "block" }}
                  bg="gray.100"
                  w="200px"
                  h="150px"
                  rounded={'10%'}
                  borderRight="1px solid"
                  borderColor="gray.200"
                  position="fixed"
                  opacity={'98%'}
                  right="0"
                  top="0"
                  zIndex="999"
                  my={'14%'}
                  mx={'4%'}
                >
                  <VStack align="center" p={4}>
                    <Flex flexDir={'column'} w={'100%'}>
                      <Link href={`#/Login`} borderBottom={'2px solid #aaa'} pt={'6%'}>
                        <Button
                          bg={'transparent'}
                          fontFamily={"Sora, sans-serif"}
                          fontSize={"13px"}
                          fontStyle={'normal'}
                          fontWeight={'600'}
                          lineHeight={'24px'}
                        >Login</Button>
                      </Link>
                    </Flex>
                  </VStack>
                </Box>
              </Collapse>
            </Box>
          </ChakraProvider>

        </Flex>
      </Flex>
    </Box>

  );
}

export { Header };
