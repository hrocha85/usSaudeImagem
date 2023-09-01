import { Box, Button, Checkbox, FormControl, FormLabel, HStack, Heading, Input, Link, useToast, Text, VStack, InputGroup, InputRightElement, Image } from "@chakra-ui/react";
import { useContext, useState } from "react";
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
  const [Email, setEmail] = useState('medico1@hotmail.com')
  const [Senha, setSenha] = useState('123456')
  const [show, setShow] = useState(false)
  const handleClickShow = () => setShow(!show)
  const [focusedInput, setFocusedInput] = useState('');

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
        Cookies.set('token', JSON.stringify(response.data.token));
        Cookies.set('user', JSON.stringify(response.data.user));
        await api.get(`usuario/${response.data.user.id}`).then((response) => {
          setIsAdmin(response.data.roles[0].name === 'admin' ? true : false)
          Cookies.set('role', JSON.stringify(response.data.roles[0].name));
        })
        usenavigate("/Splash")
      } else {
        setTimeout(() => {
          toast({
            duration: 3000,
            title: `${User.name}, Seja bem vindo!`,
            position: "top",
            isClosable: true,
          });
        }, 500);
      }
    }).catch((e) => {
      setTimeout(() => {
        toast({
          duration: 3000,
          title: `${User.name}, Seja bem vindo!`,
          position: "top",
          isClosable: true,
        });
      }, 500);

    })
  }

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  };

  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  // const handleInputBlur = () => {
  //   setFocusedInput('');
  // };

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
          <Text textAlign={'center'} fontWeight={600} fontSize={20} pt={5} textColor={'rgba(56, 100, 100, 2)'}>Para acessar o seu apimel faça o login com usuário e senha</Text>
        </VStack>
        <FormControl pos={'relative'}>
          <FormLabel
          pos={(Email || focusedInput === 'email') ? 'relative' : 'absolute'}
          top={(Email || focusedInput === 'email') ? '-10px' : '0'}
          fontSize={(Email || focusedInput === 'email') ?'16px' : '14px' }
          color={(Email || focusedInput === 'email') ?  'black' : 'gray.400'}
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
            fontSize={(Senha || focusedInput === 'senha') ?'16px' : '14px' }
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
        {/* <HStack w='full' justify='space-between'>
          <Checkbox>Remember me.</Checkbox>
          <Button variant='link' colorScheme="blue"> Forgot Password</Button>
        </HStack> */}

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