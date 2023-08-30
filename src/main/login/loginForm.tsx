import { Box, Button, Checkbox, FormControl, FormLabel, HStack, Heading, Input, Link, useToast, Text, VStack, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import api from "../../../src/api";
import { IoEye, IoEyeOff, IoEyeOffSharp } from "react-icons/io5";

type data = {
  name?: string,
  email: string,
  password: string
}

export default function LoginForm() {
  const toast = useToast();


  const { setUserRole } = useContext(AuthContext);
  const [Email, setEmail] = useState('medico1@hotmail.com')
  const [Senha, setSenha] = useState('123456')
  const [show, setShow] = useState(false)
  const handleClickShow = () => setShow(!show)

  const usenavigate = useNavigate()

  const login = async () => {
    let User: data = {
      email: Email,
      password: Senha
    }
    await api.post("login", User).then(async (response) => {
      if (response.status === 200) {
        User = {
          name: response.data.user.name,
          email: Email,
          password: Senha
        }
        console.log(response.data)
        setTimeout(() => {
          toast({
            duration: 3000,
            title: `${User.name}, Seja bem vindo!`,
            position: "top",
            isClosable: true,
          });
        }, 500);
        localStorage.setItem("sipToken", response.data.token);
        localStorage.setItem("sipUser", JSON.stringify(User));
        localStorage.setItem("sipID", response.data.user.id);
        await api.get(`usuario/${response.data.user.id}`).then((response) => {
          setUserRole(response.data.roles[0].name)
        })
        usenavigate("/Splash")
      }
    }).catch((e) => {
      // toast.error('Email ou senha inválidos.')
      console.log(e.response.data);
    })
  }

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
          <Heading>Login</Heading>
          <Text>Entre com email e senha</Text>
        </VStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input rounded='none' variant='filled' value={Email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Senha</FormLabel>
          <InputGroup>
            <Input rounded='none' variant='filled' type={show ? 'text' : 'password'} value={Senha} onChange={(e) => setSenha(e.target.value)} />
            <InputRightElement>
              <Button h='1.75rem' size='sm' onClick={() => setShow(!show)}>
                {show ? <IoEyeOff size={40} /> : <IoEye size={40} />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        {/* <HStack w='full' justify='space-between'>
          <Checkbox>Remember me.</Checkbox>
          <Button variant='link' colorScheme="blue"> Forgot Password</Button>
        </HStack> */}

        <Button rounded='9px' colorScheme="blue" w={['full', 'auto']} onClick={() => login()}>Login</Button>

      </VStack>

    </Box>
  )
}