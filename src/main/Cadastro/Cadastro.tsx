import {
    Box,
    Button,
    Center,
    Link,
    Select,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Cadastro() {


    return (
        <Box
            w="100%"
            h="100vh"
            height={'100vh'} bgGradient='linear(to-b, blue.100, #fff)'
            backgroundSize="cover"
            backgroundClip="padding-box"
            backgroundRepeat="no-repeat"
            paddingBottom="10px"
            alignItems="center"
        >
            <Center>
                <Box
                    position="absolute"
                    top="30%"
                    bg="#FAFAFA"
                    w="auto"
                    h="auto"
                    borderRadius="10.85px"
                    boxShadow="md"
                    padding="30px"
                >
                    <Text fontSize={'50px'}
                        fontWeight={'bold'}
                    >Form de preenchimento e aceite dos termos de uso</Text>

                    <Text>caso tenha aceitado termos de uso, botão liberado</Text>
                    <Text>Aqui vai jogar para versão free</Text>
                    <Link
                        href={`#/Splash`}
                    >
                        <Button>
                            Acessar versão free
                        </Button>
                    </Link>
                </Box>
            </Center>
        </Box>
    );
}

export default Cadastro;
