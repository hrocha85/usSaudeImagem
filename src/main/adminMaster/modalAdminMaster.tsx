import { Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from "@chakra-ui/react";

interface ModalAdminMasterProps {
    isOpen: boolean;
    onClose: () => void;
    user: any;
}

const ModalAdminMaster = ({ isOpen, onClose, user }: ModalAdminMasterProps) => {
    console.log(user)
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>aqui</Text>
                    {/* Você pode renderizar o conteúdo do formulário ou outros elementos aqui */}

                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Fechar
                    </Button>
                    {/* Adicione botões de ação ou outras ações de rodapé aqui */}
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ModalAdminMaster;
