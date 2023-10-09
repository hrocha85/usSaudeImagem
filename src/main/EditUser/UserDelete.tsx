import { Box, Button, Checkbox, FormControl, FormLabel, HStack, Heading, Input, Link, useToast, Text, VStack, InputGroup, InputRightElement, Image, PinInput, PinInputField, Stack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api";
import Cookies from 'js-cookie';
import { IoEye, IoEyeOff, IoEyeOffSharp, IoArrowForward } from "react-icons/io5";
import marca from "../images/Marca.png"

type data = {
    email: string,
    token: string,
    password: string
}


export default function UserDelete({ isOpen, onClose }) {

    const toast = useToast();

    const [userID, setUserID] = useState();
    const [userNome, setUserNome] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userTelefone, setUserTelefone] = useState('');
    const [userCep, setUserCep] = useState('');
    const [userRua, setUserRua] = useState('');
    const [userNumero, setUserNumero] = useState('');
    const [userCidade, setUserCidade] = useState('');
    const [userBairro, setUserBairro] = useState('');
    const [userEstado, setUserEstado] = useState('');
    const usenavigate = useNavigate()

    useEffect(() => {
        const userLogged = Cookies.get('USGImage_user')
        const userParse = JSON.parse(userLogged)
        setUserID(userParse.id)
        const getUsers = async () => {
            try {
                const response = await api.get(`/usuario/${userParse.id}`);
                const usuario = response.data
                console.log(usuario)
                const endereco = usuario.address
                const enderecoSplit = endereco.split(',')
                const cep = enderecoSplit[3].trim()
                const ruaBairro = enderecoSplit[1].split('- ')
                const cidadeEstado = enderecoSplit[2].split('- ')
                console.log(cidadeEstado)
                setUserNome(usuario.name)
                setUserCep(cep)
                setUserEmail(usuario.email)
                setUserTelefone(usuario.telefone)
                setUserRua(enderecoSplit[0])
                setUserNumero(ruaBairro[0])
                setUserCidade(enderecoSplit[2])
                setUserBairro(ruaBairro[1])
                setUserEstado(cidadeEstado[0])
            } catch (error) {
                console.error("Erro ao obter usuários:", error);
            }
        };

        getUsers();
    }, []);

    const Excluir = async () => {
        const endereco = `${userRua}, ${userNumero}- ${userBairro}, ${userCidade}- ${userEstado}, ${userCep}`
        const obj = {
            name: userNome,
            email: userEmail,
            telefone: userTelefone,
            address: endereco
        }
        try {
            console.log(userID)
            const response = await api.delete(`usuarioDelete/${userID}`);

            if (response.status === 201) {
                toast({
                    duration: 3000,
                    title: 'Usuário Exluido com sucesso!',
                    status: 'success',
                    position: 'top',
                    isClosable: true,
                });
            }
        } catch (error) {
            console.error('Erro ao atualizar o usuário', error);
            toast({
                duration: 3000,
                title: 'Erro ao excluir o usuário',
                status: 'error',
                position: 'top',
                isClosable: true,
            });
        }
    }



    return (
        <Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Confirmar Exclusão</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            Tem certeza de que deseja excluir sua conta?
                            Esta ação é irreversível e todos os seus dados serão perdidos.
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Link href='#/Login'>
                            <Button colorScheme="red" mr={3} onClick={Excluir}>
                                Confirmar Exclusão
                            </Button>
                        </Link>
                        <Button variant="ghost" onClick={onClose}>
                            Cancelar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}