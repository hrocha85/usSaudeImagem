import { Box, Flex, Text, Image, ChakraProvider } from "@chakra-ui/react";
import photoExam from '../../images/landing/Rectangle 8.png'
import abmomen from '../../images/landing/abdomen.png'
import transvarginal from '../../images/landing/vagina.png'
import tireoide from '../../images/landing/tireoide.png'
import mama from '../../images/landing/seio.png'

function ExamesLp() {

    const words = [
        'Abdômen Superior', 'Partes moles', 'Parede abominal', 'Pélvico', 'Próstata', 'Articulações',
        'Rins e vias uninárias', 'Região inguinal', 'Axila', 'Torax'
      ];
    return (
        <>
            <Box display={'flex'} alignItems={'center'} flexDir={'column'}>
                <Box mt={10} px={{ base: '0rem', md: '15rem' }}>
                    <Text
                        fontSize={"35px"}
                        fontFamily={'Inter, sans-serif'}
                        fontStyle={'normal'}
                        fontWeight={'900'}
                        lineHeight={'normal'}
                        textColor={'#1C49B0'}
                        alignSelf={'stretch'}
                        textAlign={'center'}
                        w={'100%'}
                    >
                        Conheça alguns dos exames inclusos no sistema
                    </Text>

                </Box>
                <Box pt={'8%'} pl={'8%'}>
                    <Flex
                        flexDirection={['column', 'row']}
                        justifyItems={['center', 'stretch']}
                    >
                        <Box w={['100%', '50%']} px={'6%'} order={[1, 0]} pt={['10%', '2%']}>
                            <Text
                                fontSize={"25px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'700'}
                                lineHeight={'normal'}
                                textColor={'#1C49B0'}
                                alignSelf={['center', 'stretch']}
                                textAlign={['left', 'justify']}
                            >
                                Abdômen total
                            </Text>
                            <Text
                                fontSize={"18px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                lineHeight={'normal'}
                                textColor={'#101010'}
                                alignSelf={['center', 'stretch']}
                                textAlign={'justify'}
                                pt={'6%'}
                            >
                                Dentro de Abdmômen total sera possível encontrar diversos exames, dentre eles estão, Fígado, Vesícula biliar, Vias Biliares...
                            </Text>
                        </Box>
                        <Box w={['90%', '50%']} pl={['0', '6%']} pb={'5%'} order={[0, 1]} display={'flex'} justifyContent={['center', 'flex-start']}>
                            <Image src={abmomen} />
                        </Box>
                    </Flex>

                    <Flex
                        flexDirection={['column', 'row']}
                        alignItems={['center', 'stretch']}
                        pt={['10%', '2%']}
                    >
                        <Box w={['100%', '50%']} mr={'5%'} px={'8%'} order={[1, 1]} pt={['10%', '0%']}>
                            <Text
                                fontSize={"25px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'700'}
                                lineHeight={'normal'}
                                textColor={'#1C49B0'}
                                alignSelf={['center', 'stretch']}
                                textAlign={['left', 'justify']}
                            >
                                Transvaginal
                            </Text>
                            <Text
                                fontSize={"18px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                lineHeight={'normal'}
                                textColor={'#101010'}
                                alignSelf={['left', 'stretch']}
                                textAlign={'justify'}
                                pt={'6%'}
                            >
                                Dentro de Transvaginal sera possível encontrar diversos exames, dentre eles estão, Bexiga, Vagina, Útero...                            </Text>
                        </Box>
                        <Box w={['90%', '50%']} pl={['0', '6%']} pb={['0', '5%']} order={[0, 0]} display={'flex'} justifyContent={['center', 'flex-start']}>
                            <Image src={transvarginal} />
                        </Box>
                    </Flex>
                    <Flex
                        flexDirection={['column', 'row']}
                        alignItems={['center', 'stretch']}
                    >
                        <Box w={['100%', '50%']} px={'6%'} order={[1, 0]} pt={['10%', '2%']}>
                            <Text
                                fontSize={"25px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'700'}
                                lineHeight={'normal'}
                                textColor={'#1C49B0'}
                                alignSelf={['center', 'stretch']}
                                textAlign={['left', 'justify']}
                            >
                                Tireóide
                            </Text>
                            <Text
                                fontSize={"18px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                lineHeight={'normal'}
                                textColor={'#101010'}
                                alignSelf={['center', 'stretch']}
                                textAlign={'justify'}
                                pt={'6%'}
                            >
                                Dentro de Tireóide sera possível encontrar diversos exames, dentre eles estão, Ecotextura do Parênquima, Cirurgias, Linfonodomegalias...                            </Text>
                        </Box>
                        <Box w={['90%', '50%']} pl={['0', '6%']} pt={['5%', 0]} pb={['0', '5%']} order={[0, 1]} display={'flex'} justifyContent={['center', 'flex-start']}>
                            <Image src={tireoide} />
                        </Box>
                    </Flex>

                    <Flex
                        flexDirection={['column', 'row']}
                        alignItems={['center', 'stretch']}
                        pt={['10%', '2%']}
                    >
                        <Box w={['100%', '50%']} mr={'5%'} px={'8%'} order={[1, 1]} pt={['10%', '0%']} pb={'10%'}>
                            <Text
                                fontSize={"25px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'700'}
                                lineHeight={'normal'}
                                textColor={'#1C49B0'}
                                alignSelf={['center', 'stretch']}
                                textAlign={['left', 'justify']}
                            >
                                Mamas
                            </Text>
                            <Text
                                fontSize={"18px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                lineHeight={'normal'}
                                textColor={'#101010'}
                                alignSelf={['left', 'stretch']}
                                textAlign={'justify'}
                                pt={'6%'}
                            >
                                Dentro de Mamas sera possível encontrar diversos exames, dentre eles estão, Cistos, Nódulos, Microcalcificações...                            </Text>
                        </Box>
                        <Box w={['90%', '50%']} pl={['0', '6%']} pb={['0', '5%']} order={[0, 0]} display={'flex'} justifyContent={['center', 'flex-start']}>
                            <Image src={mama} />
                        </Box>
                    </Flex>
                </Box>
                <Box bg={'#677BC7'}>
                    <Text
                        fontSize={"35px"}
                        fontFamily={'Inter, sans-serif'}
                        fontStyle={'normal'}
                        fontWeight={'900'}
                        lineHeight={'normal'}
                        textColor={'#FFF'}
                        alignSelf={'stretch'}
                        textAlign={'center'}
                        w={'100%'}
                        pt={'5%'}
                    >
                        E muitos outros...
                    </Text>

                    <ChakraProvider>
                        <Box
                            display="flex"
                            flexWrap="wrap"
                            justifyContent="center"
                            alignItems="center"
                            height="100%"
                            p={'5%'}
                        >
                            {words.map((word, index) => (
                                <Text
                                    key={index}
                                    fontSize={['30px',Math.floor(Math.random() * 40) + 20]}
                                    fontWeight="extrabold"
                                    fontFamily={'Inter, sans-serif'}
                                    bg={'#FFF'}
                                    textColor={'#1C49B0'}
                                    lineHeight={'normal'}
                                    textAlign={'center'}
                                    p={'15px'}
                                    rounded={'50px'}
                                    m={2} 
                                >
                                    {word}
                                </Text>
                            ))}
                        </Box>
                    </ChakraProvider>

                </Box>

            </Box>
        </>
    )
}

export { ExamesLp }