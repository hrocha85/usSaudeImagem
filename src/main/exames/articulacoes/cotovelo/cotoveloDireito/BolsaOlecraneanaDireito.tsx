/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Radio, RadioGroup, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { CotoveloDireitoNormalContext } from "../../../../../context/CotoveloDireitoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";
import { Format_Laudo } from "../../../../component/function_format_laudo";

function BolsaOlecreaneanaDireito() {
    const altura = "100%";
    const largura = "95%";

    let { CotoveloDireitoLaudoNormal } = useContext(CotoveloDireitoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)


    const [fraseBolsaOlecreaneanaDireito, setFraseBolsaOlecreaneanaDireito] = useState<any>([]);

    const subExame = 'Tendão biceps braquial direito'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseBolsaOlecreaneanaDireito).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseBolsaOlecreaneanaDireito
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseBolsaOlecreaneanaDireito
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseBolsaOlecreaneanaDireito]);

    const [disableSemLiquido, setdisableSemLiquido] = useState(false);
    const [disableComLiquidoEspessado, setdisableComLiquidoEspessado] = useState(false);

    const [SemLiquidoCheckbox, setSemLiquidoCheckbox] = useState(false);
    const [ComLiquidoEspessadoCheckbox, setComLiquidoEspessadoCheckbox] = useState(false);



    const criaStringSemLiquido = () => {
        var string = "FALTA";
        if (SemLiquidoCheckbox) {
            setFraseBolsaOlecreaneanaDireito((arr) => [...arr, string]);
        } else {
            removeItemString(string);
        }
    };

    useEffect(() => {
        criaStringSemLiquido()
    }, [SemLiquidoCheckbox])

    const criaStringComLiquidoEspessado = () => {
        var string = "Pequena quantidade de líquido no interior da bolsa sinovial subcutânea do olécrano, associada a espessamento parietal.";
        ComLiquidoEspessadoCheckbox ? setFraseBolsaOlecreaneanaDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringComLiquidoEspessado()
    }, [ComLiquidoEspessadoCheckbox])

    const removeItemString = (value) => {
        var index = fraseBolsaOlecreaneanaDireito.indexOf(value);
        if (index > -1) {
            fraseBolsaOlecreaneanaDireito.splice(index, 1);
            setFraseBolsaOlecreaneanaDireito((arr) => [...arr]);
        }
    };

    useEffect(() => {
        if (SemLiquidoCheckbox) {
            setdisableComLiquidoEspessado(true)

        } else {
            setdisableComLiquidoEspessado(false)

        }
    }, [SemLiquidoCheckbox])
    useEffect(() => {
        if (ComLiquidoEspessadoCheckbox) {
            setdisableSemLiquido(true)
        } else {
            setdisableSemLiquido(false)
        }
    }, [ComLiquidoEspessadoCheckbox])



    useEffect(() => {
        CotoveloDireitoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

    }, [CotoveloDireitoLaudoNormal])

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
            <TituloNomeExame titulo="Bolsa olecraneana direito" />

            <Box display="flex" flexWrap="wrap">

            </Box>

            <Stack>
                <Checkbox
                    isDisabled={disableTudo || disableSemLiquido}
                    onChange={() => {
                        setSemLiquidoCheckbox(!SemLiquidoCheckbox);
                    }}
                >
                    Sem líquido
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo || disableComLiquidoEspessado}
                    onChange={() => {
                        setComLiquidoEspessadoCheckbox(!ComLiquidoEspessadoCheckbox);
                    }}
                >
                    Com líquido e espessamento parietal
                </Checkbox>

            </Stack >
        </Box >

    );
}
export default BolsaOlecreaneanaDireito;
