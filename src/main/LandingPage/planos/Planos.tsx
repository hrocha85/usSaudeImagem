import { Box, Button, Flex, HStack, Image, Input, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, useMediaQuery, useToast } from "@chakra-ui/react"
import premiun from '../../images/landing/premium.svg'
import free from '../../images/landing/free.svg'
import checkfree from '../../images/landing/CheckFree.svg'
import checkPremium from '../../images/landing/CheckPremium.svg'
import { useState } from "react"
import api from "../../../api"

function Planos() {
    const [isLargerThan600] = useMediaQuery('(min-width: 900px)')
    let width = ""
    isLargerThan600 ? width = "30%" : width = "100%"
    const [isOpen, setIsOpen] = useState(false);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const toast = useToast();

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const formatPhoneNumber = (value) => {
        const cleanedValue = value.replace(/\D/g, '');
        const match = cleanedValue.match(/^(\d{2})(\d{5})(\d{4})$/);
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        }
        return cleanedValue;
    };
    const enviarEmail = async () => {
        const dest = { email, telefone, nome }
        const response = await api.post('Leads', dest)
        console.log('response', response.data)

        if(response.status===200){
            setTimeout(() => {
                toast({
                    duration: 3000,
                    title: `Usuário já Cadastrado na nossa lista exclusiva`,
                    position: "top",
                    isClosable: true,
                });
            }, 500);
            return
        }
        if (response.status === 201) {

            setTimeout(() => {
                toast({
                    duration: 3000,
                    title: `Agradecemos interesse pelo plano pago, em breve lhe retornaremos!`,
                    position: "top",
                    isClosable: true,
                });
            }, 500);
        } else {
            setTimeout(() => {
                toast({
                    duration: 3000,
                    title: `Ops, algo deu errado!`,
                    position: "top",
                    isClosable: true,
                });
            }, 500);
        }
    }
    return (
        <Box mb={'2%'} id="planos">
            <Text
                fontSize={"35px"}
                fontFamily={'Rubik, sans-serif'}
                fontStyle={'normal'}
                fontWeight={'700'}
                lineHeight={'normal'}
                textColor={'#101E40'}
                alignSelf={'stretch'}
                textAlign={'center'}
                w={'100%'}
            >
                Cadastre-se e se surpreenda!
            </Text>
            {/* <Text
                fontSize={"14px"}
                fontFamily={'Inter, sans-serif'}
                fontStyle={'normal'}
                fontWeight={'600'}
                textAlign={'center'}
                lineHeight={'normal'}
                textColor={'#000'}
                alignSelf={'stretch'}
                pt={6}

            >
                lorem ipsum sit amet
            </Text> */}
            <Box>
                <Flex pt={10} justifyContent={'center'} flexDirection={['column', 'row']} px={'5%'}>
                    <Box
                        w={width}
                        h={'100%'}
                        border="3px solid #1C49B0"
                        rounded={10} py={'1%'} mb={['5%', '0']} mx={'2%'} px={'3%'}
                    >
                        <Image
                            src={premiun}
                            bg={'#8fa5f5'}
                            mb={4}
                            p={'4%'}
                            rounded={15}
                        />
                        <Text
                            fontSize={"35px"}
                            fontFamily={'Outfit, sans-serif'}
                            fontStyle={'normal'}
                            fontWeight={'600'}
                            lineHeight={'normal'}
                            textColor={'#1B223C'}
                            letterSpacing={'-1px'}
                            w={'100%'}
                            mb={4}
                        >
                            Teste Grátis
                        </Text>
                        <HStack mb={4}>
                            <Image
                                src={checkfree}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#000'}
                                alignSelf={'stretch'}
                            >
                                Limite de 2 médicos
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkfree}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#000'}
                                alignSelf={'stretch'}
                            >
                                Limite de 2 clinica
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkfree}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#000'}
                                alignSelf={'stretch'}
                            >
                                Laudos ilimitados
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkfree}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#000'}
                                alignSelf={'stretch'}
                            >
                                Pré visualização do laudo
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkfree}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#000'}
                                alignSelf={'stretch'}
                            >
                                Edição dos laudos
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkfree}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#000'}
                                alignSelf={'stretch'}
                            >
                                Download dos laudos
                            </Text>
                        </HStack>

                        <Link href={`#/Cadastro`} target="_blank">
                            <Button
                                border="1px solid #1C49B0"
                                color="#1C49B0"
                                bg="transparent"
                                height="50px"
                                fontSize={'22px'}
                                _hover={{
                                    background: 'transparent',
                                    color: '#1C49B0',
                                }}
                                width={'100%'}

                                my={3}
                            >
                                Cadastro

                            </Button>
                        </Link>
                    </Box>
                    {<Box w={['100%', '30%']} h={'100%'} border="3px solid #1C49B0" rounded={10} py={'1%'} mx={'2%'} px={'3%'} bg={'#1C49B0'}>
                        <Image
                            src={free}
                            bg={'#FFF'}
                            mb={4}
                            p={'4%'}
                            rounded={15}
                        />
                        <Text
                            fontSize={"35px"}
                            fontFamily={'Outfit, sans-serif'}
                            fontStyle={'normal'}
                            fontWeight={'600'}
                            lineHeight={'normal'}
                            letterSpacing={'-1px'}
                            textColor={'#FFF'}
                            w={'100%'}
                            mb={4}
                        >
                            Versão Integral
                        </Text>
                        {/* <HStack gap={'10%'}>
                            <Text
                                fontSize={"35px"}
                                fontFamily={'Outfit, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                lineHeight={'normal'}
                                textColor={'#FFF'}
                                letterSpacing={'-1px'}
                                mb={4}
                            >
                                R$34
                            </Text>
                            <Text
                                fontSize={"14px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'500'}
                                textAlign={'center'}
                                lineHeight={'normal'}
                                textColor={'#FFF'}
                                alignSelf={'stretch'}
                                pt={4}
                            >
                                por mês
                            </Text>
                        </HStack> */}
                        <HStack mb={4}>
                            <Image
                                src={checkPremium}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#FFF'}
                                alignSelf={'stretch'}
                            >
                                7 dias ou seu dinheiro de volta
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkPremium}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#FFF'}
                                alignSelf={'stretch'}
                            >
                                Cadastro de clinicas ilimitado
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkPremium}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#FFF'}
                                alignSelf={'stretch'}
                            >
                                90 dias de acompanhamento
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkPremium}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#FFF'}
                                alignSelf={'stretch'}
                            >
                                1 ano de suporte para atualizações
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkPremium}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#FFF'}
                                alignSelf={'stretch'}
                            >
                                Acesso ao treinamento
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkPremium}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#FFF'}
                                alignSelf={'stretch'}
                            >
                                Suporte para instalação
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkPremium}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#FFF'}
                                alignSelf={'stretch'}
                            >
                                Pré visualização do laudo
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkPremium}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#FFF'}
                                alignSelf={'stretch'}
                            >
                                Edição dos laudos
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkPremium}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#FFF'}
                                alignSelf={'stretch'}
                            >
                                Download de laudos
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkPremium}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#FFF'}
                                alignSelf={'stretch'}
                            >
                                Histórico de laudos
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkPremium}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#FFF'}
                                alignSelf={'stretch'}
                            >
                                Impressão dos laudos
                            </Text>
                        </HStack>

                        <Link href={`#/`}>
                            <Button
                                onClick={openModal}
                                border="1px solid #1C49B0"
                                color="#1C49B0"
                                height="50px"
                                fontSize={'22px'}
                                _hover={{
                                    color: '#1C49B0',
                                }}
                                width={'100%'}

                                my={3}
                            >
                                Cadastro

                            </Button>
                        </Link>
                    </Box>}
                </Flex>
            </Box>

            <Modal isOpen={isOpen} onClose={closeModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontFamily={'Rubik, sans-serif'}>Agradecemos pelo seu Interesse</ModalHeader>
                    <Text
                    textAlign={'center'}
                    px={'2%'}
                    >
                        Temos uma oportunidade <strong>Limitada</strong> para o acesso a <strong>Versão Integral</strong>, deixe seu melhor contato
                        para está na lista exclusiva e receber as novidades do nosso sistema. Não deixe pra depois,
                         garanta seu lugar na <strong>lista exclusiva</strong> do nosso sistema.
                    </Text>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input type="text" placeholder="Nome" mb={2} onChange={(e) => setNome(e.target.value)} />
                        <Input type="email" placeholder="Email" mb={2} onChange={(e) => setEmail(e.target.value)} />
                        <Input
                            type="text" placeholder="Telefone"
                            mb={2}
                            value={telefone}
                            onChange={(e) => setTelefone(formatPhoneNumber(e.target.value))}
                            maxLength={14}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button fontFamily={'Sora, sans-serif'}
                            bg="#1c49b0"
                            mr={3} onClick={enviarEmail}
                            textColor={'#fff'}
                            _hover={{
                                background: '#1C49B0',
                                color: '#FFF',
                            }}
                        >
                            Enviar
                        </Button>
                        <Button fontFamily={'Sora, sans-serif'} onClick={closeModal}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export { Planos }