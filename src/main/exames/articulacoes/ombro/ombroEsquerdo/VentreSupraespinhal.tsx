/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Stack, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { OmbroEsquerdoNormalContext } from "../../../../../context/OmbroEsquerdoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";
import { Format_Laudo } from "../../../../component/function_format_laudo";


function VentreSupraespinhalEsquerdo() {
    const altura = "100%";
    const largura = "95%";

    let { OmbroEsquerdoLaudoNormal } = useContext(OmbroEsquerdoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)
    const [fraseVentreSupraespinhalEsquerdo, setFraseVentreSupraespinhalEsquerdo] = useState<any>([]);

    const subExame = 'Ventre Supraespinhal Esquerdo'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseVentreSupraespinhalEsquerdo).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseVentreSupraespinhalEsquerdo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseVentreSupraespinhalEsquerdo
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseVentreSupraespinhalEsquerdo]);


    const [disableNormal, setdisableNormal] = useState(false);
    const [disableSubstituicaoAdiposa, setdisableSubstituicaoAdiposa] = useState(false);

    const [NormalCheckbox, setNormalCheckbox] = useState(false);
    const [SubstituicaoAdiposaCheckbox, setSubstituicaoAdiposaCheckbox] = useState(false);




    const criaStringNormal = () => {
        var string = "FALTA";
        if (NormalCheckbox) {
            setFraseVentreSupraespinhalEsquerdo((arr) => [...arr, string]);
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
            setFraseVentreSupraespinhalEsquerdo((arr) => [...arr, string]);
        } else {
            removeItemString(string);
        }
    };
    useEffect(() => {
        criaStringSubstituicaoAdiposa()
    }, [SubstituicaoAdiposaCheckbox])


    const removeItemString = (value) => {
        var index = fraseVentreSupraespinhalEsquerdo.indexOf(value);
        if (index > -1) {
            fraseVentreSupraespinhalEsquerdo.splice(index, 1);
            setFraseVentreSupraespinhalEsquerdo((arr) => [...arr]);
        }
    };

    useEffect(() => {
        NormalCheckbox ? setdisableSubstituicaoAdiposa(true) : setdisableSubstituicaoAdiposa(false)
    }, [NormalCheckbox])

    useEffect(() => {
        SubstituicaoAdiposaCheckbox ? setdisableNormal(true) : setdisableNormal(false)
    }, [SubstituicaoAdiposaCheckbox])

    useEffect(() => {
        OmbroEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

    }, [OmbroEsquerdoLaudoNormal])

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
export default VentreSupraespinhalEsquerdo;
