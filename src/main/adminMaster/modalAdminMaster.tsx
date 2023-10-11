import { Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Box, Flex, Spinner, Stack } from "@chakra-ui/react";
import api from "../../api";

interface ModalAdminMasterProps {
    isOpen: boolean;
    onClose: () => void;
    user: any;
    updateTable: () => void
}

const ModalAdminMaster = ({ isOpen, onClose, user, updateTable }: ModalAdminMasterProps) => {
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
            if (response.status === 201) {
                updateTable()
                onClose()
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            {user ? (
                <ModalContent>
                    <ModalHeader>
                        <Stack>
                            <Text fontWeight={'bold'}><Text borderBottom={'1px'} display="inline" color='orange.400' fontWeight='bold'>Usuário: </Text>{user ? (user.name ? user.name : '') : 'N/A'}</Text>
                            <Text fontWeight={'bold'}><Text borderBottom={'1px'} display="inline" color='orange.400' fontWeight='bold'>Permissão: </Text>{user.roles ? user.roles[0].name : 'N/A'}</Text>
                        </Stack>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex gap='10px' flexWrap='wrap'>

                            <Flex>
                                <Text fontWeight={'bold'}><Text borderBottom={'1px'} display="inline" color='blue.400' >Nota: </Text>{user.nota1a5 ? user.nota1a5 : 'Ainda não avaliou'}</Text>
                            </Flex>
                            <Flex>
                                <Text fontWeight={'bold'}><Text borderBottom={'1px'} display="inline" color='blue.400' >Avaliação: </Text>{user.bom_regular_ruim ? user.bom_regular_ruim : 'Ainda não avaliou'}</Text>
                            </Flex>
                            <Flex>
                                <Text fontWeight={'bold'}><Text borderBottom={'1px'} display="inline" color='blue.400' >Email: </Text>{user.email ? user.email : 'N/A'}</Text>
                            </Flex>
                            <Flex >
                                <Text fontWeight={'bold'}><Text borderBottom={'1px'} display="inline" color='blue.400' >Endereço: </Text>{user.address ? user.address : 'N/A'}</Text>
                            </Flex>
                            <Flex>
                                <Text fontWeight={'bold'}><Text borderBottom={'1px'} display="inline" color='blue.400' >Ip: </Text>{user.ip ? user.ip : 'N/A'}</Text>
                            </Flex>
                            <Flex>
                                <Text fontWeight={'bold'}><Text borderBottom={'1px'} display="inline" color='blue.400' >Endereço ip: </Text>{user.ip_address ? user.ip_address : 'N/A'}</Text>
                            </Flex>
                            <Flex>
                                <Text fontWeight={'bold'}><Text borderBottom={'1px'} display="inline" color='blue.400' >Usuário desde: </Text>{converterDataParaBrasileiro(user.created_at)}</Text>
                            </Flex>
                            <Flex>
                                <Text fontWeight={'bold'}><Text borderBottom={'1px'} display="inline" color='blue.400' >Telefone: </Text>{user.telefone ? user.telefone : 'N/A'}</Text>
                            </Flex>
                            <Flex>
                                <Text fontWeight={'bold'}><Text borderBottom={'1px'} display="inline" color='blue.400' >Qtd. Laudos: </Text>{user.timesLaudos ? user.timesLaudos : 'N/A'}</Text>
                            </Flex>
                            <Flex>
                                <Text fontWeight={'bold'}><Text borderBottom={'1px'} display="inline" color='blue.400' >Qtd. Login: </Text>{user.timesLogin ? user.timesLogin : 'N/A'}</Text>
                            </Flex>
                            <Flex>
                                <Text fontWeight={'bold'}><Text borderBottom={'1px'} display="inline" color='blue.400' >Cadastrado como: </Text>{user.tipo ? user.tipo : 'N/A'}</Text>
                            </Flex>

                        </Flex>
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
            ) : (
                <Spinner size="lg" />
            )}
        </Modal>
    );
};

export default ModalAdminMaster;
