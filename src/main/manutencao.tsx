import { Box, Button, Flex, Image, Link, Text, useMediaQuery } from "@chakra-ui/react"
import { Header } from "../main/LandingPage/header/Header"
import { Footer } from "../main/LandingPage/footer/Footer"
import manutencao from "../main/images/landing/manutencao.png"
import marca from "../main/images/Marca.png"


const Manutencao = () => {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
    let display = ""
    let width = ""
    let width1 = ""
    isLargerThan600 ? display = "flex" : display = "none"



    isLargerThan600 ? width = "20%" : width = "45%"
    isLargerThan600 ? width1 = "150px" : width1 = "110px"

    return (
        <Box>
            <Box
                top="0"
                left="0"
                right="0"
                bg="#FAFAFA"
                w="100%"
                borderRadius="0"
                boxShadow="md"
                padding="1%"
                px={5}
                py={'15px'}
                gap={5}
            >
                <Flex alignItems="center" justifyContent="space-around" p={0} m={0}>
                    <Image
                        src={marca}
                        w={width}

                    />

                </Flex>
            </Box>
            {/* <Header /> */}
            <Box pt={'2%'} display={'flex'} flexDir={'column'} alignItems={'center'}>
                <Text
                    fontSize={"40px"}
                    fontFamily={'Inter, sans-serif'}
                    fontStyle={'normal'}
                    fontWeight={'700'}
                    lineHeight={'normal'}
                    textColor={'#1C49B0'}
                    alignSelf={'stretch'}
                    textAlign={'center'}
                    w={'100%'}
                >
                    Estamos em manutenção.
                </Text>

                <Image
                    src={manutencao}
                    rounded={15}
                    width={'400px'}
                />
            </Box>
            <Footer />
        </Box>
    )
}

export default (Manutencao)