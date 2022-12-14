/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import { NormalContext } from "../../../../context/NormalContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function ParedeAbdominalNormal() {
    const altura = "100%";
    const largura = "225px";

    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

    let { laudoNormal, setLaudoNormal } = useContext(NormalContext)


    const verificaChecked = (value) => {
        if (value.checked === true) {
            setLaudoNormal(true)
            setLaudoPrin((arr) => [...arr, 'Parede Abdominal normal'])
        } else {
            removeItemString()
            setLaudoNormal(false);
        }
    }
    const removeItemString = () => {
        // console.log("valor remove = ", value);
        var index = laudoPrin.indexOf('Parede Abdominal normal');
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
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
            padding="15px 15px 20px 15px"
            mt="10px"
        >
            <TituloNomeExame titulo="Parede Abdominal" />

            <Box gap="15px" display="flex" flexWrap="wrap">
                <Box
                    w="100%">
                    <Checkbox
                        id='normal'
                        onChange={(e) => { verificaChecked(e.target) }}
                        mr='30px'
                    >Normal</Checkbox>
                </Box>
            </Box >

        </Box >
    );
}
export default ParedeAbdominalNormal;
