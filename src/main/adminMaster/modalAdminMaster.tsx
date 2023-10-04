import { Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Box, Flex, Spinner } from "@chakra-ui/react";
import api from "../../api";

interface ModalAdminMasterProps {
    isOpen: boolean;
    onClose: () => void;
    user: any;
}

const ModalAdminMaster = ({ isOpen, onClose, user }: ModalAdminMasterProps) => {
    function converterDataParaBrasileiro(dataISO: string) {
        const data = new Date(dataISO);
        const dia = String(data.getDate()).padStart(2, "0");
        const mes = String(data.getMonth() + 1).padStart(2, "0");
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    const Deletar = async () => {
        try {
            const response = await api.delete(`/usuariodelete/${user.id}`)
            if (response.status === 200) {
                onClose
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Usuário: {user ? (user.name ? user.name : '') : 'N/A'}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {user ? (
                        <Flex gap='8px' flexWrap='wrap'>
                            <Flex borderBottom={'1px'}>
                                <Text><Text color='blue.400' fontWeight='bold' display="inline">Nome: </Text>{user.name ? user.name : 'N/A'}</Text>
                            </Flex>
                            <Flex borderBottom={'1px'}>
                                <Text><Text display="inline" color='blue.400' fontWeight='bold'>Endereço: </Text>{user.address ? user.address : 'N/A'}</Text>
                            </Flex>
                            <Flex borderBottom={'1px'}>
                                <Text><Text color='blue.400' fontWeight='bold' display="inline">Email: </Text>{user.email ? user.email : 'N/A'}</Text>
                            </Flex>
                            <Flex borderBottom={'1px'}>
                                <Text><Text display="inline" color='blue.400' fontWeight='bold'>Ip: </Text>{user.ip ? user.ip : 'N/A'}</Text>
                            </Flex>
                            <Flex borderBottom={'1px'}>
                                <Text><Text display="inline" color='blue.400' fontWeight='bold'>Endereço ip: </Text>{user.ip_address ? user.ip_address : 'N/A'}</Text>
                            </Flex>
                            <Flex borderBottom={'1px'}>
                                <Text><Text display="inline" color='blue.400' fontWeight='bold'>Usuário desde: </Text>{converterDataParaBrasileiro(user.created_at)}</Text>
                            </Flex>
                            <Flex borderBottom={'1px'}>
                                <Text><Text display="inline" color='blue.400' fontWeight='bold'>Telefone: </Text>{user.telefone ? user.telefone : 'N/A'}</Text>
                            </Flex>
                            <Flex borderBottom={'1px'}>
                                <Text><Text display="inline" color='blue.400' fontWeight='bold'>Qtd. Laudos: </Text>{user.timesLaudos ? user.timesLaudos : 'N/A'}</Text>
                            </Flex>
                            <Flex borderBottom={'1px'}>
                                <Text><Text display="inline" color='blue.400' fontWeight='bold'>Qtd. Login: </Text>{user.timesLogin ? user.timesLogin : 'N/A'}</Text>
                            </Flex>
                            <Flex borderBottom={'1px'}>
                                <Text><Text display="inline" color='blue.400' fontWeight='bold'>Cadastrado como: </Text>{user.tipo ? user.tipo : 'N/A'}</Text>
                            </Flex>
                            <Flex borderBottom={'1px'}>
                                <Text><Text display="inline" color='blue.400' fontWeight='bold'>Permissão: </Text>{user.roles ? user.roles[0].name : 'N/A'}</Text>
                            </Flex>
                        </Flex>
                    ) : (
                        <Spinner size="lg" />
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Fechar
                    </Button>
                    <Button colorScheme="red" mr={3} onClick={Deletar}>
                        Deletar
                    </Button>
                    {/* Adicione botões de ação ou outras ações de rodapé aqui */}
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ModalAdminMaster;
