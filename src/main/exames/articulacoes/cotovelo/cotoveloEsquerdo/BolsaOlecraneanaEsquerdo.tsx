/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { CotoveloEsquerdoNormalContext } from "../../../../../context/CotoveloEsquerdoNormalContext";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function BolsaOlecreaneanaEsquerdo() {
    const altura = "100%";
    const largura = "95%";

    let { CotoveloEsquerdoLaudoNormal } = useContext(CotoveloEsquerdoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)


    const [fraseBolsaOlecreaneanaEsquerdo, setFraseBolsaOlecreaneanaEsquerdo] = useState<any>([]);

    const subExame = 'Tendão biceps braquial Esquerdo'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseBolsaOlecreaneanaEsquerdo).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseBolsaOlecreaneanaEsquerdo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseBolsaOlecreaneanaEsquerdo
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseBolsaOlecreaneanaEsquerdo]);

    const [disableSemLiquido, setdisableSemLiquido] = useState(false);
    const [disableComLiquidoEspessado, setdisableComLiquidoEspessado] = useState(false);

    const [SemLiquidoCheckbox, setSemLiquidoCheckbox] = useState(false);
    const [ComLiquidoEspessadoCheckbox, setComLiquidoEspessadoCheckbox] = useState(false);


    const criaStringComLiquidoEspessado = () => {
        var string = "Pequena quantidade de líquido no interior da bolsa sinovial subcutânea do olécrano, associada a espessamento parietal.";
        ComLiquidoEspessadoCheckbox ? setFraseBolsaOlecreaneanaEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringComLiquidoEspessado()
    }, [ComLiquidoEspessadoCheckbox])

    const removeItemString = (value) => {
        var index = fraseBolsaOlecreaneanaEsquerdo.indexOf(value);
        if (index > -1) {
            fraseBolsaOlecreaneanaEsquerdo.splice(index, 1);
            setFraseBolsaOlecreaneanaEsquerdo((arr) => [...arr]);
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
        CotoveloEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

    }, [CotoveloEsquerdoLaudoNormal])

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
            <TituloNomeExame titulo="Bolsa olecraneana Esquerdo" />

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
export default BolsaOlecreaneanaEsquerdo;
