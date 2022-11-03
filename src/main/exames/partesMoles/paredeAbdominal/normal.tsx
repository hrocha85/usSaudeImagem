/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function ParedeAbdominalNormal() {
    const altura = "100%";
    const largura = "225px";

    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

    const [inputLocalNormal, setInputLocalNormal] = useState('')
    const [LocalNormalCheckbox, setCheckboxLocalNormal] = useState(false)
    const [disableInputLocalNormal, setDisableInputLocalNormal] = useState(true)

    return (
        <Box
            bg="#FAFAFA"
            w={largura}
            h={altura}
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="10.85px"
            boxShadow="md"
            padding="15px 15px 20px 15px"
            mt="10px"
        >
            <TituloNomeExame titulo="Parede Abdominal" />

            <Box gap="15px" display="flex" flexWrap="wrap">
                <Box
                    w="100%">
                    <Checkbox
                        mr='30px'
                    >Normal</Checkbox>
                </Box>
            </Box >

        </Box >
    );
}
export default ParedeAbdominalNormal;
