/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Stack, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { OmbroDireitoNormalContext } from "../../../../../context/OmbroDireitoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";
import { Format_Laudo } from "../../../../component/function_format_laudo";


function VentreInfraespinhalDireito() {
    const altura = "100%";
    const largura = "95%";

    let { OmbroDireitoLaudoNormal } = useContext(OmbroDireitoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)
    const [fraseVentreInfraespinhalDireito, setFraseVentreInfraespinhalDireito] = useState<any>([]);

    const subExame = 'Ventre Infraespinhal Direito'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseVentreInfraespinhalDireito).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseVentreInfraespinhalDireito
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseVentreInfraespinhalDireito
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseVentreInfraespinhalDireito]);


    const [disableNormal, setdisableNormal] = useState(false);
    const [disableSubstituicaoAdiposa, setdisableSubstituicaoAdiposa] = useState(false);

    const [NormalCheckbox, setNormalCheckbox] = useState(false);
    const [SubstituicaoAdiposaCheckbox, setSubstituicaoAdiposaCheckbox] = useState(false);




    const criaStringNormal = () => {
        var string = "Ventres musculares do supraespinhal e infraespinhal de arquitetura, contornos e ecotextura preservados.";
        NormalCheckbox ? setFraseVentreInfraespinhalDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringNormal()
    }, [NormalCheckbox])

    const criaStringSubstituicaoAdiposa = () => {
        var string = "FALTA";
        SubstituicaoAdiposaCheckbox ? setFraseVentreInfraespinhalDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringSubstituicaoAdiposa()
    }, [SubstituicaoAdiposaCheckbox])


    const removeItemString = (value) => {
        var index = fraseVentreInfraespinhalDireito.indexOf(value);
        if (index > -1) {
            fraseVentreInfraespinhalDireito.splice(index, 1);
            setFraseVentreInfraespinhalDireito((arr) => [...arr]);
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
export default VentreInfraespinhalDireito;
