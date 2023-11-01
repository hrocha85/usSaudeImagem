import React, { useState } from 'react';
import { Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button, Center, Input, Link, HStack } from '@chakra-ui/react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { IoIosArrowBack } from 'react-icons/io';




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
                        <Input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Pesquisar perguntas"
                        />
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
