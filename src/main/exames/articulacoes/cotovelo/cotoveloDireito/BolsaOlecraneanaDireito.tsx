/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Radio, RadioGroup, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { CotoveloDireitoNormalContext } from "../../../../../context/CotoveloDireitoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function BolsaOlecreaneanaDireito() {
    const altura = "100%";
    const largura = "95%";

    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
    let { CotoveloDireitoLaudoNormal } = useContext(CotoveloDireitoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)



    const [disableSemLiquido, setdisableSemLiquido] = useState(false);
    const [disableComLiquidoEspessado, setdisableComLiquidoEspessado] = useState(false);

    const [SemLiquidoCheckbox, setSemLiquidoCheckbox] = useState(false);
    const [ComLiquidoEspessadoCheckbox, setComLiquidoEspessadoCheckbox] = useState(false);



    const criaStringSemLiquido = () => {
        var string = "FALTA";
        if (SemLiquidoCheckbox) {
            setLaudoPrin((arr) => [...arr, string]);
            setSemLiquidoCheckbox(false);
        } else {
            removeItemString(string);
        }
    };

    const criaStringComLiquidoEspessado = () => {
        var string = "FALTA";
        if (ComLiquidoEspessadoCheckbox) {
            setLaudoPrin((arr) => [...arr, string]);
            setComLiquidoEspessadoCheckbox(false);
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
                        criaStringSemLiquido();
                    }}
                >
                    Sem líquido
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo || disableComLiquidoEspessado}
                    onChange={() => {
                        setComLiquidoEspessadoCheckbox(!ComLiquidoEspessadoCheckbox);
                        criaStringComLiquidoEspessado();
                    }}
                >
                    Com líquido e espessamento parietal
                </Checkbox>

            </Stack >
        </Box >

    );
}
export default BolsaOlecreaneanaDireito;
