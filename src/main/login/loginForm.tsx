import { Box, Button, Checkbox, FormControl, FormLabel, HStack, Heading, Input, Link, useToast, Text, VStack, InputGroup, InputRightElement, Image } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import api from "../../../src/api";
import Cookies from 'js-cookie';
import { IoEye, IoEyeOff, IoEyeOffSharp, IoArrowForward } from "react-icons/io5";
import marca from "../images/Marca.png"

type data = {
  name?: string,
  email: string,
  password: string
}

export default function LoginForm() {
  const toast = useToast();

  const { setIsAdmin } = useContext(AuthContext);
  const [Email, setEmail] = useState('user@hotmail.com')
  const [Senha, setSenha] = useState('12345678')
  const [show, setShow] = useState(false)
  const handleClickShow = () => setShow(!show)
  const [focusedInput, setFocusedInput] = useState('');

  const usenavigate = useNavigate()

  const login = async () => {
    try {
      const user = {
        email: Email,
        password: Senha
      };

      const response = await api.post("login", user);

      if (response.status === 200) {
        const { name } = response.data.user;

        setTimeout(() => {
          toast({
            duration: 3000,
            title: `Olá ${name}, seja bem-vindo!`,
            position: "top",
            isClosable: true,
          });
        }, 500);

        Cookies.set('USGImage_token', JSON.stringify(response.data.token));
        Cookies.set('USGImage_user', JSON.stringify(response.data.user));

        const roleResponse = await api.get(`usuario/${response.data.user.id}`);
        const isAdmin = roleResponse.data.roles[0].name === 'admin';

        Cookies.set('USGImage_role', JSON.stringify(roleResponse.data.roles[0].name));
        setIsAdmin(isAdmin);
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
    }
  };

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  };

  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  return (

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
          <Text textAlign={'center'} fontWeight={600} fontSize={20} pt={5} textColor={'rgba(56, 100, 100, 2)'}>Para acessar o seu painel faça o login com usuário e senha</Text>
        </VStack>
        <FormControl pos={'relative'}>
          <FormLabel
            pos={(Email || focusedInput === 'email') ? 'relative' : 'absolute'}
            top={(Email || focusedInput === 'email') ? '-10px' : '0'}
            fontSize={(Email || focusedInput === 'email') ? '16px' : '14px'}
            color={(Email || focusedInput === 'email') ? 'black' : 'gray.400'}
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
            pos={(Senha || focusedInput === 'senha') ? 'relative' : 'absolute'}
            top={(Senha || focusedInput === 'senha') ? '-1px' : '0'}
            fontSize={(Senha || focusedInput === 'senha') ? '16px' : '14px'}
            color={(Senha || focusedInput === 'senha') ? 'black' : 'gray.400'}
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
        <HStack w='full' justify='space-between'>
          {/* <Checkbox>Remember me.</Checkbox> */}
          <Link href="/#/RedSenha" variant='link' color="#306eee" >Esqueci minha senha</Link>
        </HStack>

        <Button rounded='9px' colorScheme="blue" w={"100%"}
          //Descomentar onClick do login quando API estiver online
          onClick={() => login()}
        //onClick={() => usenavigate('/Splash')}
        >Acessar meu painel <Box display={'flex'} alignItems={'center'}><IoArrowForward size={25} style={{ marginLeft: '10px' }} /></Box>
        </Button>

      </VStack>

    </Box>
  )
}