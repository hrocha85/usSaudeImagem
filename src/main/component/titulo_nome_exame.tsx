import { Box, Text } from "@chakra-ui/react";

const TituloNomeExame = ({ titulo }) => {
    return (
        <Box
            mb='10px'>
            <Text
                color="#1A202C"
                fontSize="20px"
                fontWeight="bold"
            >
                {titulo}
            </Text>
        </Box>
    );
};

export default TituloNomeExame;
