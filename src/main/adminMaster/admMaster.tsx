import {
    Box,
    Button,
    Center,
    HStack,
    Spinner,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    Link
} from "@chakra-ui/react";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosEye } from "react-icons/io";
import api, { setAuthToken } from "../../api";
import ModalAdminMaster from "./modalAdminMaster";
function AdmMaster() {
    const [usuarios, setUsuarios] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true); // Estado para controlar o carregamento
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<any>(null);

    useEffect(() => {
        const getUsers = async () => {
            const token = Cookies.get("USGImage_token");
            setAuthToken(JSON.parse(token));
            api.get("/usuario")
                .then((response) => {
                    setUsuarios(response.data);
                    setIsLoading(false); // Defina isLoading como falso após o carregamento
                })
                .catch((error) => {
                    console.error("Erro ao obter usuários:", error);
                });
        };

        getUsers();
    }, []);

    const updateTable = () => {
        const token = Cookies.get("USGImage_token");
        setAuthToken(JSON.parse(token));
        api.get("/usuario")
            .then((response) => {
                setUsuarios(response.data);
                setIsLoading(false); // Defina isLoading como falso após o carregamento
            })
            .catch((error) => {
                console.error("Erro ao obter usuários:", error);
            });
    };

    function converterDataParaBrasileiro(dataISO: string) {
        const data = new Date(dataISO);
        const dia = String(data.getDate()).padStart(2, "0");
        const mes = String(data.getMonth() + 1).padStart(2, "0");
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    const renderTable = () => {
        if (isLoading) {
            return <Spinner size="lg" />;
        }

        if (usuarios.length === 0) {
            return <Text>Nenhum usuário encontrado.</Text>;
        }

        return (
            <div style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                <Table variant="striped" colorScheme="customBlue">
                    <Thead>
                        <Tr>
                            <Th p="5px" textAlign={"center"}>
                                id
                            </Th>
                            <Th p="5px" textAlign={"center"}>
                                Nome
                            </Th>
                            <Th p="5px" textAlign={"center"}>
                                Email
                            </Th>
                            <Th p="5px" textAlign={"center"}>
                                Criado em
                            </Th>
                            <Th p="5px" textAlign={"center"}>
                                Qnt. Laudos
                            </Th>
                            <Th p="5px" textAlign={"center"}>
                                Qnt. Login
                            </Th>
                            <Th p="5px" textAlign={"center"}>
                                Tipo
                            </Th>
                            <Th p="5px" textAlign={"center"}>
                                Ações
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {usuarios.map((user) => (

                            < Tr key={user.id} >
                                <Td fontWeight={'bold'} p="5px" textAlign={"center"}>
                                    {user.id}
                                </Td>
                                <Td fontWeight={'bold'} p='5px' textAlign={'center'}>
                                    {user ? user.name : "N/A"}
                                </Td>

                                <Td fontWeight={'bold'} p="5px" textAlign={"center"}>
                                    {user.email}
                                </Td>
                                <Td fontWeight={'bold'} p="5px" textAlign={"center"}>
                                    {converterDataParaBrasileiro(user.created_at)}
                                </Td>
                                <Td fontWeight={'bold'} p="5px" textAlign={"center"}>
                                    {user.timesLaudos}
                                </Td>
                                <Td fontWeight={'bold'} p="5px" textAlign={"center"}>
                                    {user.timesLogin}
                                </Td>
                                <Td fontWeight={'bold'} p="5px" textAlign={"center"}>
                                    {user.tipo}
                                </Td>
                                <Td fontWeight={'bold'} p="5px" textAlign={"center"}>
                                    <Button onClick={() => toggleModal(user)}>
                                        <IoIosEye />
                                    </Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </div >
        );
    };

    const toggleModal = (user?: any) => {
        if (user !== null) {
            setSelectedUser(user);
            setIsModalOpen(!isModalOpen);
        }
    };

    return (
        <>
            <Box
                w="100%"
                h="100vh"
                bgGradient="linear(to-b, blue.100, #fff)"
                backgroundSize="cover"
                backgroundClip="padding-box"
                backgroundRepeat="no-repeat"
                paddingBottom="10px"
                alignItems="center"
            >
                <Link href="/#/SelectMedicos">
                    <HStack p='10px'>
                        <IoIosArrowBack /><Text fontWeight={'bold'} >Voltar</Text>
                    </HStack>
                </Link>

                <Center>
                    <Box
                        position="absolute"
                        top="10%"
                        bg="#FAFAFA"
                        w={["90%", "100%"]}
                        h="auto"
                        borderRadius="10.85px"
                        boxShadow="md"
                        padding="30px"
                    >
                        <TableContainer>{renderTable()}</TableContainer>
                    </Box>
                </Center>
            </Box>
            <ModalAdminMaster isOpen={isModalOpen} onClose={toggleModal} user={selectedUser} updateTable={updateTable} />
        </>
    );
}

export default AdmMaster;
