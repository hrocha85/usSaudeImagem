/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function BolsaOlecreaneanaDireito({ Disable }) {
    const altura = "100%";
    const largura = "100%";

    const [fraseBolsaOlecreaneanaDireito, setFraseBolsaOlecreaneanaDireito] = useState<any>([]);
    const [ConclusaoBolsaOlecreaneanaDireito, setConclusaoBolsaOlecreaneanaDireito] = useState<any>([]);

    const subExame = 'Tendão biceps braquial direito'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseBolsaOlecreaneanaDireito).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseBolsaOlecreaneanaDireito,
                ConclusaoBolsaOlecreaneanaDireito
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseBolsaOlecreaneanaDireito,
                ConclusaoBolsaOlecreaneanaDireito
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseBolsaOlecreaneanaDireito]);

    const [disableSemLiquido, setdisableSemLiquido] = useState(false);
    const [disableComLiquidoEspessado, setdisableComLiquidoEspessado] = useState(false);

    const [SemLiquidoCheckbox, setSemLiquidoCheckbox] = useState(false);
    const [ComLiquidoEspessadoCheckbox, setComLiquidoEspessadoCheckbox] = useState(false);


    const criaStringComLiquidoEspessado = () => {
        var string = "Pequena quantidade de líquido no interior da bolsa sinovial subcutânea do olécrano, associada a espessamento parietal.";
        const conclusao = 'Bursite olecraniana.'
        if (ComLiquidoEspessadoCheckbox) {
            setFraseBolsaOlecreaneanaDireito((arr) => [...arr, string])
            setConclusaoBolsaOlecreaneanaDireito((arr) => [...arr, conclusao])
        } else {
            removeItemString(string);
            removeItemConclusao(conclusao)
        }
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
    const removeItemConclusao = (value) => {
        var index = ConclusaoBolsaOlecreaneanaDireito.indexOf(value);
        if (index > -1) {
            ConclusaoBolsaOlecreaneanaDireito.splice(index, 1);
            setConclusaoBolsaOlecreaneanaDireito((arr) => [...arr]);
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
                    isDisabled={Disable || disableSemLiquido}
                    onChange={() => {
                        setSemLiquidoCheckbox(!SemLiquidoCheckbox);
                    }}
                >
                    Sem líquido
                </Checkbox>
                <Checkbox
                    isDisabled={Disable || disableComLiquidoEspessado}
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
