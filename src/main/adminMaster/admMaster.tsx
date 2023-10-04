import { Box, Button, Center, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api, { setAuthToken } from "../../api";
import { IoIosEye } from "react-icons/io";
import ModalAdminMaster from "./modalAdminMaster";
import Cookies from 'js-cookie';
function AdmMaster() {
    const [usuarios, setUsuarios] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedForm] = useState<any>(null);
    const toggleModal = (user?: any) => {
        if (user !== null) {
            setSelectedForm(user);
            setIsModalOpen(!isModalOpen);
        }
    };
    useEffect(() => {
        const getUsers = async () => {
            const token = Cookies.get("USGImage_token")
            setAuthToken(JSON.parse(token))
            try {
                const response = await api.get('/usuario');
                setUsuarios(response.data);
            } catch (error) {
                console.error("Erro ao obter usuários:", error);
            }
        };

        getUsers();
    }, []);

    function converterDataParaBrasileiro(dataISO) {
        const data = new Date(dataISO);
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }


    return (
        <>
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
                        top="10%"
                        bg="#FAFAFA"
                        w={['90%', "100%"]}
                        h="auto"
                        borderRadius="10.85px"
                        boxShadow="md"
                        padding="30px"
                    >
                        <TableContainer >
                            <Table variant='striped' colorScheme='teal'>
                                <TableCaption>Imperial to metric conversion factors</TableCaption>
                                <Thead>
                                    <Tr>
                                        <Th>id</Th>
                                        <Th>Nome</Th>
                                        <Th>Email</Th>
                                        <Th>Criado em</Th>
                                        <Th>Qnt. Laudos</Th>
                                        <Th>Qnt. Login</Th>
                                        <Th>Tipo</Th>
                                        <Th>Ações</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {usuarios.map((user) => (
                                        <Tr key={user.id}>
                                            <Td >{user.id}</Td>
                                            <Td >{user.name}</Td>
                                            <Td >{user.email}</Td>
                                            <Td >{converterDataParaBrasileiro(user.created_at)}</Td>
                                            <Td >{user.timesLaudos}</Td>
                                            <Td >{user.timesLogin}</Td>
                                            <Td >{user.tipo}</Td>
                                            <Td ><Button onClick={() => toggleModal(user)}><IoIosEye /></Button></Td>
                                        </Tr>
                                    ))}
                                </Tbody>

                            </Table>
                        </TableContainer>
                    </Box>
                </Center>
            </Box>
            <ModalAdminMaster isOpen={isModalOpen} onClose={toggleModal} user={selectedUser} />
        </>
    );
}

export default AdmMaster;
