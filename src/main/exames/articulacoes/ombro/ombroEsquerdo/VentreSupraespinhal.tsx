/* eslint-disable array-callback-return */

import { Box, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";


function VentreSupraespinhalEsquerdo({ Disable }) {
    const altura = "100%";
    const largura = "100%";


    const [fraseVentreSupraespinhalEsquerdo, setFraseVentreSupraespinhalEsquerdo] = useState<any>([]);

    const subExame = 'Ombro- Ventre Supraespinhal Esquerdo'
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
        const string = "Ventres musculares do supraespinhal e infraespinhal de arquitetura, contornos e ecotextura preservados.";
        NormalCheckbox ? setFraseVentreSupraespinhalEsquerdo((arr) => [...arr, string]) : removeItemString(string);

    };

    useEffect(() => {
        criaStringNormal()
    }, [NormalCheckbox])

    const criaStringSubstituicaoAdiposa = () => {
        const string = "Há sinais de infiltração adiposa do ventre muscular do supraespinhal.";
        SubstituicaoAdiposaCheckbox ? setFraseVentreSupraespinhalEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    };
    useEffect(() => {
        criaStringSubstituicaoAdiposa()
    }, [SubstituicaoAdiposaCheckbox])


    const removeItemString = (value) => {
        const index = fraseVentreSupraespinhalEsquerdo.indexOf(value);
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
    const [Normal, setNormal] = useState(false)

    useEffect(() => {
        Disable ? setNormal(true) : setNormal(false)
    }, [Disable])

    useEffect(() => {
        Normal ? setNormalCheckbox(true) : setNormalCheckbox(false)
    }, [Normal])


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
                    isChecked={Normal}
                    isDisabled={disableNormal}
                    onChange={() => {
                        setNormal(!Normal)
                        setNormalCheckbox(!NormalCheckbox);
                    }}
                >
                    Normal
                </Checkbox>
                <Checkbox
                    isDisabled={disableSubstituicaoAdiposa}
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
