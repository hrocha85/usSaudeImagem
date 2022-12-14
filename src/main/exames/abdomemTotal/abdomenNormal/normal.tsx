import { Box, Checkbox } from "@chakra-ui/react";
import { useContext, } from "react";
import { NormalContext } from "../../../../context/NormalContext";

export function Normal() {
    const altura = '100%'
    const largura = '180px'

    let { laudoNormal, setLaudoNormal } = useContext(NormalContext)


    const verificaChecked = (value) => {
        value.checked === true ? setLaudoNormal(true) : setLaudoNormal(false);
    }

    return (
        <Box
            bg="#FAFAFA"
            w={largura}
            h={altura}
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="10.85px"
            boxShadow="md"
            padding='10px 15px 10px 15px'
            mt='2px'
            mb='5px'>
            <Box w='150px' >
                <Checkbox
                    id="tudoNormal"
                    onChange={(e) => { verificaChecked(e.target) }}
                >Abdomen normal</Checkbox>
            </Box>
        </Box >
    );
}

export default Normal;