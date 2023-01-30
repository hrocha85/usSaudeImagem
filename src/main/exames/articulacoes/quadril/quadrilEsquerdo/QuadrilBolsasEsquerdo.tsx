/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { PunhoEsquerdoNormalContext } from "../../../../../context/PunhoEsquerdoNormalContext";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function QuadrilBolsasEsquerdo() {
    const altura = "100%";
    const largura = "95%";

    let { PunhoEsquerdoLaudoNormal } = useContext(PunhoEsquerdoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)

    const [QuadrilBolsasEsquerdo, setQuadrilBolsasEsquerdo] = useState<any>([]);

    const subExame = 'Bolsas Esquerdo'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(QuadrilBolsasEsquerdo).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                QuadrilBolsasEsquerdo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                QuadrilBolsasEsquerdo
            ).Format_Laudo_Create_Storage();
        }
    }, [QuadrilBolsasEsquerdo]);


    const [SemLiuqidoCheckbox, setSemLiuqidoCheckbox] = useState(false);
    const [LiquidoBolsaTrocantericaCheckbox, setLiquidoBolsaTrocantericaCheckbox] = useState(false);
    const [LiquidoBolsaSubgluteaMediaCheckbox, setLiquidoBolsaSubgluteaMediaCheckbox] = useState(false);
    const [LiquidoBolsaSubgluteaMinimaCheckbox, setLiquidoBolsaSubgluteaMinimaCheckbox] = useState(false);
    const [LiquidoBolsaIlipsoasCheckbox, setLiquidoBolsaIlipsoasCheckbox] = useState(false);

    //Funcoes Padrao Micropolicistico - Inicio
    const criaStringSemLiuqido = () => {
        var string = "Punho Esquerdo com SemLiuqido";
        SemLiuqidoCheckbox ? setQuadrilBolsasEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringSemLiuqido()
    }, [SemLiuqidoCheckbox])

    const criaStringLiquidoBolsaTrocanterica = () => {
        var string = "Punho Esquerdo com SemLiuqido";
        LiquidoBolsaTrocantericaCheckbox ? setQuadrilBolsasEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringLiquidoBolsaTrocanterica()
    }, [LiquidoBolsaTrocantericaCheckbox])

    const criaStringLiquidoBolsaSubgluteaMedia = () => {
        var string = "Punho Esquerdo com SemLiuqido";
        LiquidoBolsaSubgluteaMediaCheckbox ? setQuadrilBolsasEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringLiquidoBolsaSubgluteaMedia()
    }, [LiquidoBolsaSubgluteaMediaCheckbox])

    const criaStringFlexoresProfundos = () => {
        var string = "Punho Esquerdo com SemLiuqido";
        LiquidoBolsaSubgluteaMinimaCheckbox ? setQuadrilBolsasEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringFlexoresProfundos()
    }, [LiquidoBolsaSubgluteaMinimaCheckbox])

    const criaStringLiquidoBolsaIlipsoas = () => {
        var string = "Punho Esquerdo com SemLiuqido";
        LiquidoBolsaIlipsoasCheckbox ? setQuadrilBolsasEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringLiquidoBolsaIlipsoas()
    }, [LiquidoBolsaIlipsoasCheckbox])

    const removeItemString = (value) => {
        var index = QuadrilBolsasEsquerdo.indexOf(value);

        if (index > -1) {
            QuadrilBolsasEsquerdo.splice(index, 1);
            setQuadrilBolsasEsquerdo((arr) => [...arr]);
        }
    };


    useEffect(() => {
        PunhoEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

    }, [PunhoEsquerdoLaudoNormal])

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
export default QuadrilBolsasEsquerdo;



// <Radio value="1">Não citar</Radio>
// <Radio value="Flexor longo do polegar">Flexor longo do polegar</Radio>
// <Radio value="Flexor radial do carpo">Flexor radial do carpo</Radio>
// <Radio value="Flexores superficiais dos dedos">Flexores superficiais dos dedos</Radio>
// <Radio value="Flexores profundos dos dedos">Flexores profundos dos dedos</Radio>
// <Radio value="Flexor palmar longo">Flexor palmar longo</Radio>