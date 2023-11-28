import React, { useEffect, useState } from 'react';
import { Box, Text, Accordion, Image, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button, Center, Input, Link, HStack, InputGroup, InputRightElement, Flex, Heading, Stack } from '@chakra-ui/react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { IoIosArrowBack } from 'react-icons/io';
import { SearchIcon } from '@chakra-ui/icons';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import laudo1 from '../../images/usgEmaxe4.png'
import laudo2 from '../../images/usgExame5.png'
import laudo3 from '../../images/usgExame6.png'
import { Carousel } from 'react-responsive-carousel';
import background from '../../images/landing/background2.jpeg'

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <AccordionItem fontFamily={'Rubik, sans-serif'}>
            <h2>
                <AccordionButton fontWeight={'700'}>
                    <Box flex="1" textAlign="left">
                        {question}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{answer}</AccordionPanel>
        </AccordionItem>
    );
}

function PerguntaFreq() {
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(0);

    const [searchQuery, setSearchQuery] = useState('');

    const faqData = [
        {
            question: "Para que serve a Assinatura digital? ",
            answer: `Uma assinatura digital é um método seguro de autenticar
            eletronicamente o laudo médico. contribuindo para a segurança e
            confiabilidade dos laudos, com autenticidade é fundamental em
            ambientes médicos.` },

        {
            question: "Como faço para acessar o sistema de laudos de ultrassom?",
            answer: `Para acessar o sistema de laudos de ultrassom, basta fazer login
            usando suas credenciais de usuário` },

        {
            question: "Posso personalizar os modelos de laudos?",
            answer: `Sim o sistema permite a personalização dos modelos de laudos
            para atender às necessidades medicas` },

        {
            question: "Como o software garante a segurança dos dados do paciente?",
            answer: ` Os softwares de laudos de ultrassom implementam medidas
            rigorosas de segurança, controle de acesso e conformidade, para proteger
            os dados do paciente.` },

        {
            question: "Há treinamento disponível para usar o software efetivamente? ",
            answer: `Sim, nosso software oferece treinamento para ajudar os
            usuários a utilizar o nosso software de forma rápida e eficaz, temos um
            vídeo demonstrativo de como funciona nosso software.` },
        {
            question: "O que é um sistema de laudos de ultrassom? ",
            answer: `É um software projetado para criar, gerenciar e arquivar laudos médicos
            gerados a partir de exames de ultrassom. Ele simplifica o processo de criação de laudos, armazenamentos e 
            informações médicas.` },
        {
            question: "O sistema é pago? ",
            answer: `Sim, nosso sistema  de ultrassom oferece opções tanto gratuita quanto paga para atender às
            diversas necessidades dos usuários.` },
        {
            question: "Posso compartilhar minha senha do sistema de ultrassom com outro médico? ",
            answer: `Não é recomendado compartilhar login e senha do sistema de ultrassom, para a segurança dos dados
            do paciente e violar protocolos de privacidade.` },
        {
            question: "O sistema é compatível com vários tipos de equipamentos de ultrassom?",
            answer: `Sim, é compatível com uma variedade de equipamentos de ultrassom, mas é importante verificar
            a compatibilidade com seu equipamento específico.` },
        {
            question: "Caso falte algumas opção de laudo, consigo adicionar?",
            answer: `Sim, o sistema conta com diversas frases pré-definidas para diversas situações de laudo, caso
            o usuário ache necessário adicionar uma nova frase ao sistema, será possível adicionar em configurações.` },
    ];

    const filteredFAQData = faqData.filter((item) => {
        return item.question.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const totalPages = Math.ceil(filteredFAQData.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredFAQData.length);
    const visibleFAQData = filteredFAQData.slice(startIndex, endIndex);

        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const overlayColor = 'rgba(28,73,176, 0.9)'
    return (
        <Box>
            <Box>
                <Header />
                <Link href="/">
                    <HStack p='10px'>
                        <IoIosArrowBack /><Text fontWeight={'bold'} >Voltar</Text>
                    </HStack>
                </Link>
                <Box pt={'2%'} pb={'2%'}>
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
                        Perguntas Frequentes
                    </Text>
                    <Box px={'3%'}>
                        <Box px={'5%'} py={'2%'}>
                            <InputGroup mb={'2%'} width="50vw">
                                <Input
                                    type="text"
                                    placeholder="Pesquisar"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    borderBottom="2px"
                                    borderColor="gray.500"
                                    variant='flushed'

                                />
                                <InputRightElement pointerEvents="none" width="40px" lineHeight="inherit">
                                    <SearchIcon color="gray.500" />
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                        <Accordion allowMultiple px={'3%'}>
                            {visibleFAQData.map((item, index) => (
                                <FAQItem key={index} question={item.question} answer={item.answer} />
                            ))}
                        </Accordion>
                        <Center mt={4}>
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <Button
                                    key={index}
                                    size="sm"
                                    colorScheme={currentPage === index ? 'blue' : 'gray'}
                                    onClick={() => handlePageChange(index)}
                                    ml={'1%'}
                                >
                                    {index + 1}
                                </Button>
                            ))}
                        </Center>
                    </Box>
                </Box>
                <Box
                    backgroundImage={background}
                    backgroundSize="100% 100%"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    pos="relative"
                    px="2%"
                    pt="5%"
                    pb="5%"
                    mb="5%"
                >
                    <Box pos="relative" zIndex={1} mx="auto" maxWidth={['100%', '80%']}>
                        <Text
                            color="#fff"
                            textAlign="center"
                            fontFamily="Inter"
                            fontSize="35px"
                            fontStyle="normal"
                            fontWeight={900}
                            lineHeight="normal"
                        >
                            Resultado do laudo concluído
                        </Text>

                        <Flex justifyContent={'center'} alignItems={'center'} mt="5%" flexDir={{ base: 'column', md: 'row' }}>
                            <Box width={['100%', '50%']} px={'1%'}>
                                <Carousel
                                    showThumbs={false}
                                    showStatus={false}
                                    infiniteLoop={true}
                                    autoPlay={true}
                                    interval={3000}
                                    transitionTime={500}
                                >
                                    <Box h={'600px'} w={'600px'}>
                                        <Image src={laudo1} alt="Imagem 1" h={['100%', '100%']} />
                                    </Box>
                                    <Box w={'600px'} h={'600px'}>
                                        <Image src={laudo2} alt="Imagem 1" h={['100%', '100%']} />
                                    </Box>
                                    <Box h={'600px'} w={'600px'}>
                                        <Image src={laudo3} alt="Imagem 1" h={['100%', '100%']} />
                                    </Box>

                                </Carousel>
                            </Box>
                        </Flex>
                    </Box>

                    <Box
                        pos="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        width="100%"
                        height="100%"
                        backgroundColor={overlayColor}
                        zIndex={0}
                    />
                </Box>
                <Footer />
            </Box>
        </Box>
    );
}

export default PerguntaFreq;
