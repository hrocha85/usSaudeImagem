import { Box, Button, Checkbox, FormControl, FormLabel, HStack, Heading, Input, Link, useToast, Text, VStack, InputGroup, InputRightElement, Image, PinInput, PinInputField, Stack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import api from "../../../src/api";
import Cookies from 'js-cookie';
import { IoEye, IoEyeOff, IoEyeOffSharp, IoArrowForward } from "react-icons/io5";
import marca from "../images/Marca.png"

type data = {
    password: string
}


export default function PasswordReset({ isOpen, onClose }) {
    const toast = useToast();

    const [Email, setEmail] = useState('')
    const [NovaSenha, setNovaSenha] = useState('')
    const [ConfirmaSenha, setConfirmaSenha] = useState('')
    const [focusedInput, setFocusedInput] = useState('');

    const [show, setShow] = useState(false);

    const usenavigate = useNavigate()

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

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent fontFamily={'Rubik, sans-serif'}>
                <ModalHeader>Alterar Senha</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack spacing={4} align="flex-start">
                        <Stack fontFamily={'Rubik, sans-serif'} w={'100%'}>
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
                                <InputGroup>
                                    <Input
                                        border={0}
                                        borderBottom={'2px solid rgb(200,200,200)'}
                                        outline={0}
                                        rounded='none'
                                        focusBorderColor="#306eee"
                                        _hover={{ bg: "none" }}
                                        bg={'transparent'}
                                        variant='filled'
                                        type={show ? 'text' : 'password'}
                                        value={NovaSenha}
                                        onChange={(e) => setNovaSenha(e.target.value)}
                                    />
                                    <InputRightElement>
                                        <Button h='1.75rem' size='sm' onClick={() => setShow(!show)} bg={'transparent'}>
                                            {show ? <IoEye size={40} /> : <IoEyeOff size={40} />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
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
                                <InputGroup>
                                    <Input
                                        border={0}
                                        borderBottom={'2px solid rgb(200,200,200)'}
                                        outline={0}
                                        rounded='none'
                                        focusBorderColor="#306eee"
                                        _hover={{ bg: "none" }}
                                        bg={'transparent'}
                                        variant='filled'
                                        type={show ? 'text' : 'password'}
                                        value={ConfirmaSenha}
                                        onChange={(e) => setConfirmaSenha(e.target.value)}
                                    />
                                    <InputRightElement>
                                        <Button h='1.75rem' size='sm' onClick={() => setShow(!show)} bg={'transparent'}>
                                            {show ? <IoEye size={40} /> : <IoEyeOff size={40} />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                        </Stack>
                    </VStack>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={() => RedefinirSenha()}>
                        Redefinir senha
                    </Button>
                    <Button onClick={onClose}>Fechar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}