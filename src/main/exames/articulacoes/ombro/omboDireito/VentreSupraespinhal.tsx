/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Stack, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { OmbroDireitoNormalContext } from "../../../../../context/OmbroDireitoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";
import { Format_Laudo } from "../../../../component/function_format_laudo";


function VentreSupraespinhalDireito() {
    const altura = "100%";
    const largura = "95%";

    let { OmbroDireitoLaudoNormal } = useContext(OmbroDireitoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)
    const [fraseVentreSupraespinhalDireito, setFraseVentreSupraespinhalDireito] = useState<any>([]);

    const subExame = 'Ventre Supraespinhal Direito'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseVentreSupraespinhalDireito).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseVentreSupraespinhalDireito
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseVentreSupraespinhalDireito
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseVentreSupraespinhalDireito]);


    const [disableNormal, setdisableNormal] = useState(false);
    const [disableSubstituicaoAdiposa, setdisableSubstituicaoAdiposa] = useState(false);

    const [NormalCheckbox, setNormalCheckbox] = useState(false);
    const [SubstituicaoAdiposaCheckbox, setSubstituicaoAdiposaCheckbox] = useState(false);




    const criaStringNormal = () => {
        var string = "FALTA";
        if (NormalCheckbox) {
            setFraseVentreSupraespinhalDireito((arr) => [...arr, string]);
        } else {
            removeItemString(string);
        }
    };

    useEffect(() => {
        criaStringNormal()
    }, [NormalCheckbox])

    const criaStringSubstituicaoAdiposa = () => {
        var string = "FALTA";
        if (SubstituicaoAdiposaCheckbox) {
            setFraseVentreSupraespinhalDireito((arr) => [...arr, string]);
        } else {
            removeItemString(string);
        }
    };
    useEffect(() => {
        criaStringSubstituicaoAdiposa()
    }, [SubstituicaoAdiposaCheckbox])


    const removeItemString = (value) => {
        var index = fraseVentreSupraespinhalDireito.indexOf(value);
        if (index > -1) {
            fraseVentreSupraespinhalDireito.splice(index, 1);
            setFraseVentreSupraespinhalDireito((arr) => [...arr]);
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
                    }}
                >
                    Normal
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo || disableSubstituicaoAdiposa}
                    onChange={() => {
                        setSubstituicaoAdiposaCheckbox(!SubstituicaoAdiposaCheckbox);
                    }}
                >
                    Substituição Adiposa
                </Checkbox>

            </Box >
        </Box >

    );
}
export default VentreSupraespinhalDireito;
