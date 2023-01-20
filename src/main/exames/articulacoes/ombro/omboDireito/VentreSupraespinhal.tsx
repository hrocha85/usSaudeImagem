/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Stack, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { OmbroDireitoNormalContext } from "../../../../../context/OmbroDireitoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function VentreSupraespinhalDireito() {
    const altura = "100%";
    const largura = "95%";

    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
    let { OmbroDireitoLaudoNormal } = useContext(OmbroDireitoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)



    const [disableNormal, setdisableNormal] = useState(false);
    const [disableSubstituicaoAdiposa, setdisableSubstituicaoAdiposa] = useState(false);

    const [NormalCheckbox, setNormalCheckbox] = useState(false);
    const [SubstituicaoAdiposaCheckbox, setSubstituicaoAdiposaCheckbox] = useState(false);



    const criaStringNormal = () => {
        var string = "FALTA";
        if (NormalCheckbox) {
            setLaudoPrin((arr) => [...arr, string]);
            setNormalCheckbox(false);
        } else {
            removeItemString(string);
        }
    };

    const criaStringSubstituicaoAdiposa = () => {
        var string = "FALTA";
        if (SubstituicaoAdiposaCheckbox) {
            setLaudoPrin((arr) => [...arr, string]);
            setSubstituicaoAdiposaCheckbox(false);
        } else {
            removeItemString(string);
        }
    };

    const removeItemString = (value) => {
        var index = laudoPrin.indexOf(value);
        if (index > -1) {
            laudoPrin.splice(index, 1);
            setLaudoPrin((arr) => [...arr]);
        }
    };

    useEffect(() => {
        NormalCheckbox ? setdisableSubstituicaoAdiposa(true) : setdisableSubstituicaoAdiposa(false)
    }, [NormalCheckbox])

    useEffect(() => {
        SubstituicaoAdiposaCheckbox ? setdisableNormal(true) : setdisableNormal(false)
    }, [SubstituicaoAdiposaCheckbox])

    useEffect(() => {
        OmbroDireitoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

    }, [OmbroDireitoLaudoNormal])

    return (
        <Box
            bg="#FAFAFA"
            w={largura}
            h={altura}
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="10.85px"
            boxShadow="md"
            padding="15px"
            mt="15px"
        >
            <TituloNomeExame titulo="Ventre do Supraespinhal" />

            <Box display="flex" flexWrap="wrap">

            </Box>

            <Box display="flex" flexWrap="wrap" gap='10px'>
                <Checkbox
                    isDisabled={disableTudo || disableNormal}
                    onChange={() => {
                        setNormalCheckbox(!NormalCheckbox);
                        criaStringNormal();
                    }}
                >
                    Normal
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo || disableSubstituicaoAdiposa}
                    onChange={() => {
                        setSubstituicaoAdiposaCheckbox(!SubstituicaoAdiposaCheckbox);
                        criaStringSubstituicaoAdiposa();
                    }}
                >
                    Substituição Adiposa
                </Checkbox>

            </Box >
        </Box >

    );
}
export default VentreSupraespinhalDireito;
