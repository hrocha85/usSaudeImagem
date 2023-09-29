import { Box, Button, Checkbox, FormControl, FormLabel, HStack, Heading, Input, Link, useToast, Text, VStack, InputGroup, InputRightElement, Image, PinInput, PinInputField, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import api from "../../../src/api";
import Cookies from 'js-cookie';
import { IoEye, IoEyeOff, IoEyeOffSharp, IoArrowForward } from "react-icons/io5";
import marca from "../images/Marca.png"

type data = {
  email: string,
  token: string,
  password: string
}


export default function EsqueciSenha() {
  const toast = useToast();

  const [Email, setEmail] = useState('')
  const [NovaSenha, setNovaSenha] = useState('')
  const [ConfirmaSenha, setConfirmaSenha] = useState('')
  const [TokenEnviado, setTokenEnviado] = useState(false)
  const [focusedInput, setFocusedInput] = useState('');

  const [pin, setPin] = useState<any>();

  const usenavigate = useNavigate()

  const SendEmailToken = async () => {
    try {
      const User = {
        email: Email
      };

      const response = await api.post("ForgotPassword", User)
      if (response.status === 200) {
        setTimeout(() => {
          toast({
            duration: 3000,
            title: `E-mail com token de recuperação enviado.`,
            position: "top",
            isClosable: true,
          });
        }, 500);
        setTokenEnviado(true)
      } else {
        setTimeout(() => {
          toast({
            duration: 3000,
            title: `Email não cadastrado!`,
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
          title: `Email não cadastrado!`,
          position: "top",
          isClosable: true,
        });
      }, 500);
    }
  };

  const RedefinirSenha = async () => {
    if (NovaSenha !== ConfirmaSenha) {
      setTimeout(() => {
        toast({
          duration: 3000,
          title: `Confirmação de senha não conincide com a nova senha!`,
          position: "top",
          isClosable: true,
        });
      }, 500);
      return
    }

    const User: data = {
      email: Email ? Email : '',
      token: pin,
      password: NovaSenha
    }

    await api.post("ResetPassword", User).then((response) => {
      if (response.status === 200) {
        setTimeout(() => {
          toast({
            duration: 3000,
            title: `Senha alterada com sucesso!`,
            position: "top",
            isClosable: true,
          });
        }, 500);
        usenavigate("/")
      }
    }).catch((e) => {
      setTimeout(() => {
        toast({
          duration: 3000,
          title: `Opss, algo deu errado, tente novamente!`,
          position: "top",
          isClosable: true,
        });
      }, 500);
      console.log(e.response.data);
    })
  }

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
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
          <Text textAlign={'center'} fontWeight={600} fontSize={20} pt={5} textColor={'rgba(56, 100, 100, 2)'}>
            Para redefinir sua senha, digite seu email de cadastro.
          </Text>
          <Text textAlign={'center'} fontWeight={400} fontSize={20} textColor={'rgba(56, 100, 100, 2)'}>
            Um Token de redefinição será enviado para o email!
          </Text>
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

        <Button rounded='9px' colorScheme="blue" w={"100%"}
          //Descomentar onClick do login quando API estiver online
          onClick={() => SendEmailToken()}
        //onClick={() => usenavigate('/Splash')}
        >Enviar Token <Box display={'flex'} alignItems={'center'}><IoArrowForward size={25} style={{ marginLeft: '10px' }} /></Box>
        </Button>
        {TokenEnviado ?
          <Box>
            <Stack>
              <Text textAlign={'center'} fontWeight={400} fontSize={18} textColor={'rgba(56, 100, 100, 2)'}>Token</Text>
              <HStack>
                <HStack>
                  <PinInput type={"alphanumeric"} onChange={(e) => setPin(e)}>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
              </HStack>
              <FormControl mt='10px' pos={'relative'}>
                <FormLabel
                  pos={(NovaSenha || focusedInput === 'senha') ? 'relative' : 'absolute'}
                  top={(NovaSenha || focusedInput === 'senha') ? '-10px' : '0'}
                  fontSize={(NovaSenha || focusedInput === 'senha') ? '16px' : '14px'}
                  color={(NovaSenha || focusedInput === 'senha') ? 'black' : 'gray.400'}
                  transition="top 0.3s, font-size 0.3s, color 0.3s"
                >
                  Nova senha:
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
                  value={NovaSenha}
                  onChange={(e) => setNovaSenha(e.target.value)}
                />
              </FormControl>
              <FormControl mt='10px' pos={'relative'}>
                <FormLabel
                  pos={(ConfirmaSenha || focusedInput === 'ConfirmaSenha') ? 'relative' : 'absolute'}
                  top={(ConfirmaSenha || focusedInput === 'ConfirmaSenha') ? '-10px' : '0'}
                  fontSize={(ConfirmaSenha || focusedInput === 'ConfirmaSenha') ? '16px' : '14px'}
                  color={(ConfirmaSenha || focusedInput === 'ConfirmaSenha') ? 'black' : 'gray.400'}
                  transition="top 0.3s, font-size 0.3s, color 0.3s"
                >
                  Confirmar senha:
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
                  value={ConfirmaSenha}
                  onChange={(e) => setConfirmaSenha(e.target.value)}
                />
              </FormControl>
              <Button rounded='9px' colorScheme="blue" w={"100%"}
                //Descomentar onClick do login quando API estiver online
                onClick={() => RedefinirSenha()}
              //onClick={() => usenavigate('/Splash')}
              >Redefinir senha <Box display={'flex'} alignItems={'center'}><IoArrowForward size={25} style={{ marginLeft: '10px' }} /></Box>
              </Button>
            </Stack>

          </Box> :
          null
        }
      </VStack>

    </Box>
  )
}