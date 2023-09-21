import { Box, Button, Image, Link, Text } from "@chakra-ui/react"
import { Header } from "../LandingPage/header/Header"
import { Footer } from "../LandingPage/footer/Footer"
import error from "../images//landing/error.svg";


const Error = () => {
    return (
        <Box>
            <Header />
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
                    Pagina não encontrada...
                </Text>
                <Link href={`#/`}>
                    <Button
                        border="1px solid #1C49B0"
                        color="#FFF"
                        bg="#1C49B0"
                        fontFamily={'Sora, sans-serif'}
                        fontWeight={'600'}
                        fontStyle={'normal'}
                        height="50px"
                        fontSize={'16px'}
                        _hover={{
                            background: '#1C49B0',
                            color: '#FFF',
                        }}
                        mt={'8%'}
                    >
                        Voltar para a Home

                    </Button>
                </Link>
                <Image
                    src={error}
                    rounded={15}
                />
            </Box>
            <Footer />
        </Box>
    )
}

export default (Error)