import { useState } from "react";
import { Box, Button, Link, Text } from "@chakra-ui/react";

const CaixaFlutuante = () => {
    const [showBox, setShowBox] = useState(true);
    return (
        <Box
            position="fixed"
            bottom="20px"
            right="20px"
            display={["none" , showBox ? "block" : "none"]}
            width="400px"
            backgroundColor="white"
            border="1px solid #ccc"
            padding="20px"
            zIndex={90}
            rounded={'15px'}

        >
            <Text
                fontFamily="Inter"
                fontSize="18px"
                fontWeight={900}
                pb={'3%'}
            >
                Inscreva-se para poder utilizar tudo o que nosso Sistema tem para oferecer para você.
            </Text>
            <Box display={'flex'} justifyContent={'center'} gap={'3%'}>
                <Button variant="outline" onClick={() => setShowBox(false)} textColor={'#3182ce'} border={'none'}>
                    Agora não
                </Button>
                <Link href='#/Cadastro' target="_blank">
                    <Button colorScheme="blue">
                        Inscreva-se
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

export default CaixaFlutuante;
