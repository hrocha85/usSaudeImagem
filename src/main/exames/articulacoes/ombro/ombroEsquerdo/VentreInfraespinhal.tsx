/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Stack, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { OmbroEsquerdoNormalContext } from "../../../../../context/OmbroEsquerdoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";
import { Format_Laudo } from "../../../../component/function_format_laudo";


function VentreInfraespinhalEsquerdo() {
    const altura = "100%";
    const largura = "95%";

    let { OmbroEsquerdoLaudoNormal } = useContext(OmbroEsquerdoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)
    const [fraseVentreInfraespinhalEsquerdo, setFraseVentreInfraespinhalEsquerdo] = useState<any>([]);

    const subExame = 'Ventre Infraespinhal Esquerdo'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseVentreInfraespinhalEsquerdo).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseVentreInfraespinhalEsquerdo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseVentreInfraespinhalEsquerdo
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseVentreInfraespinhalEsquerdo]);


    const [disableNormal, setdisableNormal] = useState(false);
    const [disableSubstituicaoAdiposa, setdisableSubstituicaoAdiposa] = useState(false);

    const [NormalCheckbox, setNormalCheckbox] = useState(false);
    const [SubstituicaoAdiposaCheckbox, setSubstituicaoAdiposaCheckbox] = useState(false);




    const criaStringNormal = () => {
        var string = "FALTA";
        if (NormalCheckbox) {
            setFraseVentreInfraespinhalEsquerdo((arr) => [...arr, string]);
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
            setFraseVentreInfraespinhalEsquerdo((arr) => [...arr, string]);
        } else {
            removeItemString(string);
        }
    };
    useEffect(() => {
        criaStringSubstituicaoAdiposa()
    }, [SubstituicaoAdiposaCheckbox])


    const removeItemString = (value) => {
        var index = fraseVentreInfraespinhalEsquerdo.indexOf(value);
        if (index > -1) {
            fraseVentreInfraespinhalEsquerdo.splice(index, 1);
            setFraseVentreInfraespinhalEsquerdo((arr) => [...arr]);
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
            <TituloNomeExame titulo="Ventre do Infraespinhal" />

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
export default VentreInfraespinhalEsquerdo;
