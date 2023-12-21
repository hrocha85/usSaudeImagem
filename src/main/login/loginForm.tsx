import { Box, Button, Checkbox, FormControl, FormLabel, HStack, Heading, Input, Link, useToast, Text, VStack, InputGroup, InputRightElement, Image, Spinner } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import api, { setAuthToken } from "../../../src/api";
import Cookies from 'js-cookie';
import { IoEye, IoEyeOff, IoArrowForward } from "react-icons/io5";
import marca from "../images/Marca.png";
import { IoIosArrowBack } from "react-icons/io";

type data = {
  name?: string,
  email: string,
  password: string
}

export default function LoginForm() {
  const toast = useToast();
  const [Email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Estado de carregamento
  const [isUser, setIsUser] = useState(true); // Estado de carregamento
  const usenavigate = useNavigate();

  const login = async () => {
    try {
      setIsLoading(true); // Ativar carregamento
      const user = {
        email: Email.trim().toLowerCase(),
        password: Senha
      };

      const response = await api.post("login", user);
      console.log(response);
      if (response.status === 200) {
        const { name } = response.data.user;

        if (response.data.token) {
          Cookies.remove('USGImage_token')
          setAuthToken(response.data.token)
          Cookies.set('USGImage_token', JSON.stringify(response.data.token));
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
        setIsUser(false)
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
      setIsUser(false)
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

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  };

  return (
    <Box
      w="100%"
      h="100vh"
      bgGradient="linear(to-b, #F0F8FF, #fff)"
      backgroundSize="cover"
      backgroundClip="padding-box"
      backgroundRepeat="no-repeat"
      paddingBottom="10px"
      alignItems="center"
    >
      <Link href="/">
        <HStack p='10px'>
          <IoIosArrowBack /><Text fontWeight={'bold'} >Voltar</Text>
        </HStack>
      </Link>
      <Box
        w={['full', 'md']}
        p={[8, 10]}
        mt={[20, '10vh']}
        mx='auto'
        border={['none', '1px']}
        borderColor={['', 'gray.300']}
        borderRadius={10}
      >
        <VStack spacing={4} align={['flex-start', 'center']} w='full' mb={3}>
          <VStack>
            <Image
              src={marca}
              w="12rem"
              h="3rem"
            />
            {isUser ?
              <Text textAlign={'center'} fontWeight={600} fontSize={20} pt={5} textColor={'rgba(56, 100, 100, 2)'}>Para acessar o seu painel faça o login com usuário e senha</Text>
              :
              <>
                <Text textAlign={'center'} fontWeight={600} fontSize={20} pt={5} textColor={'rgba(56, 100, 100, 2)'}>Para acessar o seu painel faça o login com usuário e senha</Text>
                <Text textAlign={'center'} fontWeight={600} fontSize={15} pt={2} textColor={'rgb(171, 0, 0)'}>Usuário ou senha incorretos. Tente novamente ou <Link variant={'rgb(130, 0, 0)'} textDecoration={'underline '} href="/#/Cadastro">crie uma conta</Link></Text>
              </>
            }
          </VStack>
          <FormControl pos={'relative'}>
            <FormLabel
              pos={(Email) ? 'relative' : 'absolute'}
              top={(Email) ? '-10px' : '0'}
              fontSize={(Email) ? '16px' : '14px'}
              color={(Email) ? 'black' : 'gray.400'}
              transition="top 0.3s, font-size 0.3s, color 0.3s"
            >
              Email
            </FormLabel>
            <Input
              border={0}
              borderBottom={'2px solid rgb(200,200,200)'}
              outline={0}
              rounded='none'
              focusBorderColor="#306eee"
              _hover={{ bg: "none" }}
              bg={'transparent'}
              variant='filled'
              value={Email}
              onChange={(e) => handleInputChange(e, setEmail)}
            // onBlur={() => handleInputBlur()}
            />
          </FormControl>
          <FormControl pos={'relative'}>
            <FormLabel
              pos={(Senha) ? 'relative' : 'absolute'}
              top={(Senha) ? '-1px' : '0'}
              fontSize={(Senha) ? '16px' : '14px'}
              color={(Senha) ? 'black' : 'gray.400'}
            >Senha</FormLabel>
            <InputGroup>
              <Input
                border={0}
                borderBottom={'2px solid rgb(200,200,200)'}
                outline={0}
                focusBorderColor="#306eee"
                _hover={{ bg: "none" }}
                bg={'transparent'}
                rounded='none'
                variant='filled'
                type={show ? 'text' : 'password'}
                value={Senha}
                onChange={(e) => setSenha(e.target.value)} />
              <InputRightElement>
                <Button h='1.75rem' size='sm' onClick={() => setShow(!show)} bg={'transparent'}>
                  {show ? <IoEyeOff size={40} /> : <IoEye size={40} />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <HStack w='full' justify='space-around'>
            {/* <Checkbox>Remember me.</Checkbox> */}
            <Link href="/#/RedSenha" variant='link' color="#306eee" >Esqueci minha senha</Link>
            <Link href="/#/Cadastro" variant='link' color="#306eee" target="_blank">Cadastre -se</Link>
          </HStack>

          <Button
            rounded='9px'
            colorScheme="blue"
            w={"100%"}
            onClick={() => login()}
            disabled={isLoading}
          >
            {isLoading ? (
              <Spinner size='sm' color='white' style={{ marginRight: '10px' }} />
            ) : (
              <>
                Acessar meu painel
                <Box display={'flex'} alignItems={'center'}>
                  <IoArrowForward size={25} style={{ marginLeft: '10px' }} />
                </Box>
              </>
            )}
          </Button>
        </VStack>
      </Box>
    </Box>
  )
}