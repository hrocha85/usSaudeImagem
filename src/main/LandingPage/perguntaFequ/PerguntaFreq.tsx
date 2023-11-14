import React, { useState } from 'react';
import { Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button, Center, Input, Link, HStack, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { IoIosArrowBack } from 'react-icons/io';
import { SearchIcon } from '@chakra-ui/icons';




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

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <Box>
            <Header />
            <Link href="/">
                <HStack p='10px'>
                    <IoIosArrowBack /><Text fontWeight={'bold'} >Voltar</Text>
                </HStack>
            </Link>
            <Box pt={'5%'}>
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
                    pb={'3%'}
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
            <Footer />
        </Box>
    );
}

export default PerguntaFreq;
