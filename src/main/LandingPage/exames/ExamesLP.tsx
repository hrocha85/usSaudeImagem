import { Box, Flex, Text, Image } from "@chakra-ui/react";
import photoExam from '../../images/landing/Rectangle 8.png'

function ExamesLp() {
    return (
        <>
            <Box mb={'2%'}>
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
                <Box pt={'8%'}>
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
                                Lorem ipsum dolor sit amet consectetur. Eget sed varius nec quis eros convallis fermentum gravida diam. Natoque iaculis a sed risus. Laoreet odio augue donec aliquam et tortor. Risus diam pellentesque donec morbi tincidunt nulla consectetur. Neque eu semper augue vestibulum sodales blandit
                            </Text>
                        </Box>
                        <Box w={['90%', '50%']} pl={['0', '6%']} pb={'5%'} order={[0, 1]}>
                            <Image src={photoExam} />
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
                                Lorem ipsum dolor sit amet consectetur. Eget sed varius nec quis eros convallis fermentum gravida diam. Natoque iaculis a sed risus. Laoreet odio augue donec aliquam et tortor. Risus diam pellentesque donec morbi tincidunt nulla consectetur. Neque eu semper augue vestibulum sodales blandit
                            </Text>
                        </Box>
                        <Box w={['90%', '50%']} pl={['0', '6%']} pb={['0', '5%']} order={[0, 0]}>
                            <Image src={photoExam} />
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
                                Lorem ipsum dolor sit amet consectetur. Eget sed varius nec quis eros convallis fermentum gravida diam. Natoque iaculis a sed risus. Laoreet odio augue donec aliquam et tortor. Risus diam pellentesque donec morbi tincidunt nulla consectetur. Neque eu semper augue vestibulum sodales blandit
                            </Text>
                        </Box>
                        <Box w={['90%', '50%']} pl={['0', '6%']} pb={'5%'} order={[0, 1]}>
                            <Image src={photoExam} />
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
                                Lorem ipsum dolor sit amet consectetur. Eget sed varius nec quis eros convallis fermentum gravida diam. Natoque iaculis a sed risus. Laoreet odio augue donec aliquam et tortor. Risus diam pellentesque donec morbi tincidunt nulla consectetur. Neque eu semper augue vestibulum sodales blandit
                            </Text>
                        </Box>
                        <Box w={['90%', '50%']} pl={['0', '6%']} pb={['0', '5%']} order={[0, 0]}>
                            <Image src={photoExam} />
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}

export { ExamesLp }