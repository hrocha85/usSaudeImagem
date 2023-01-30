/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { PunhoDireitoNormalContext } from "../../../../../context/PunhoDireitoNormalContext";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function QuadrilBolsasDireito() {
    const altura = "100%";
    const largura = "95%";

    let { PunhoDireitoLaudoNormal } = useContext(PunhoDireitoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)

    const [QuadrilBolsasDireito, setQuadrilBolsasDireito] = useState<any>([]);

    const subExame = 'Bolsas direito'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(QuadrilBolsasDireito).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                QuadrilBolsasDireito
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                QuadrilBolsasDireito
            ).Format_Laudo_Create_Storage();
        }
    }, [QuadrilBolsasDireito]);


    const [SemLiuqidoCheckbox, setSemLiuqidoCheckbox] = useState(false);
    const [LiquidoBolsaTrocantericaCheckbox, setLiquidoBolsaTrocantericaCheckbox] = useState(false);
    const [LiquidoBolsaSubgluteaMediaCheckbox, setLiquidoBolsaSubgluteaMediaCheckbox] = useState(false);
    const [LiquidoBolsaSubgluteaMinimaCheckbox, setLiquidoBolsaSubgluteaMinimaCheckbox] = useState(false);
    const [LiquidoBolsaIlipsoasCheckbox, setLiquidoBolsaIlipsoasCheckbox] = useState(false);

    //Funcoes Padrao Micropolicistico - Inicio
    const criaStringSemLiuqido = () => {
        var string = "Punho direito com SemLiuqido";
        SemLiuqidoCheckbox ? setQuadrilBolsasDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringSemLiuqido()
    }, [SemLiuqidoCheckbox])

    const criaStringLiquidoBolsaTrocanterica = () => {
        var string = "Punho direito com SemLiuqido";
        LiquidoBolsaTrocantericaCheckbox ? setQuadrilBolsasDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringLiquidoBolsaTrocanterica()
    }, [LiquidoBolsaTrocantericaCheckbox])

    const criaStringLiquidoBolsaSubgluteaMedia = () => {
        var string = "Punho direito com SemLiuqido";
        LiquidoBolsaSubgluteaMediaCheckbox ? setQuadrilBolsasDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringLiquidoBolsaSubgluteaMedia()
    }, [LiquidoBolsaSubgluteaMediaCheckbox])

    const criaStringFlexoresProfundos = () => {
        var string = "Punho direito com SemLiuqido";
        LiquidoBolsaSubgluteaMinimaCheckbox ? setQuadrilBolsasDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringFlexoresProfundos()
    }, [LiquidoBolsaSubgluteaMinimaCheckbox])

    const criaStringLiquidoBolsaIlipsoas = () => {
        var string = "Punho direito com SemLiuqido";
        LiquidoBolsaIlipsoasCheckbox ? setQuadrilBolsasDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringLiquidoBolsaIlipsoas()
    }, [LiquidoBolsaIlipsoasCheckbox])

    const removeItemString = (value) => {
        var index = QuadrilBolsasDireito.indexOf(value);

        if (index > -1) {
            QuadrilBolsasDireito.splice(index, 1);
            setQuadrilBolsasDireito((arr) => [...arr]);
        }
    };


    useEffect(() => {
        PunhoDireitoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

    }, [PunhoDireitoLaudoNormal])

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
            <TituloNomeExame titulo="Bolsas" />

            <Box display="flex" flexWrap="wrap" gap='20px'>


                <Checkbox
                    isDisabled={disableTudo}
                    onChange={() => {
                        setSemLiuqidoCheckbox(!SemLiuqidoCheckbox);
                    }}
                >
                    Sem líquido
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo}
                    onChange={() => {
                        setLiquidoBolsaTrocantericaCheckbox(!LiquidoBolsaTrocantericaCheckbox);
                    }}
                >
                    Líquido na bolsa trocantérica
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo}
                    onChange={() => {
                        setLiquidoBolsaSubgluteaMediaCheckbox(!LiquidoBolsaSubgluteaMediaCheckbox);
                    }}
                >
                    Líquido na bolsa subglútea média
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo}
                    onChange={() => {
                        setLiquidoBolsaSubgluteaMinimaCheckbox(!LiquidoBolsaSubgluteaMinimaCheckbox);
                    }}
                >
                    Líquido na bolsa subglútea mínima
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo}
                    onChange={() => {
                        setLiquidoBolsaIlipsoasCheckbox(!LiquidoBolsaIlipsoasCheckbox);
                    }}
                >
                    Líquido na bolsa do iliopsoas
                </Checkbox>

            </Box>
        </Box>

    );
}
export default QuadrilBolsasDireito;



// <Radio value="1">Não citar</Radio>
// <Radio value="Flexor longo do polegar">Flexor longo do polegar</Radio>
// <Radio value="Flexor radial do carpo">Flexor radial do carpo</Radio>
// <Radio value="Flexores superficiais dos dedos">Flexores superficiais dos dedos</Radio>
// <Radio value="Flexores profundos dos dedos">Flexores profundos dos dedos</Radio>
// <Radio value="Flexor palmar longo">Flexor palmar longo</Radio>