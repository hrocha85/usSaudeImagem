import React, { useState } from 'react';
import { Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button, Link } from '@chakra-ui/react';

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <AccordionItem>
            <AccordionButton onClick={toggleAccordion}>
                <Box flex="1" textAlign="left">
                    <Text fontSize="lg" fontWeight="bold">
                        {question}
                    </Text>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel display={isOpen ? 'block' : 'none'}>
                <Text fontSize="md">{answer}</Text>
            </AccordionPanel>
        </AccordionItem>
    );
}

function PerguntaFreqLand() {
    return (
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
            <Accordion defaultIndex={[]} allowMultiple px={'3%'} fontFamily={'Rubik, sans-serif'}>
                <FAQItem
                    question= "Para que serve a Assinatura digital? " 
                    answer= 'Uma assinatura digital é um método seguro de autenticar eletronicamente o laudo médico. contribuindo para a segurança e confiabilidade dos laudos, com autenticidade é fundamental em ambientes médicos.'
                />
                <FAQItem
                    question="Como faço para acessar o sistema de laudos de ultrassom?"
                    answer="Para acessar o sistema de laudos de ultrassom, basta fazer login
                    usando suas credenciais de usuário"
                />
                <FAQItem
                    question="Como o software garante a segurança dos dados do paciente?"
                    answer="Os softwares de laudos de ultrassom implementam medidas
                    rigorosas de segurança, controle de acesso e conformidade, para proteger
                    os dados do paciente."
                />
                {/* Adicione mais itens do FAQ conforme necessário */}
            </Accordion>
            <Box display={'flex'} justifyContent={'center'} pt={'2%'}>
                <Link href='#/PerguntaFrequente'>
                    <Button
                        border="1px solid #1C49B0"
                        color="#FFF"
                        bg="#1C49B0"
                        height="50px"
                        fontSize={'16px'}
                        w={'400px'}
                        _hover={{
                            background: '#1C49B0',
                            color: '#FFF',
                        }}
                    >
                        Ver Todas

                    </Button>
                </Link>
            </Box>
        </Box >
    );
}

export default PerguntaFreqLand;
