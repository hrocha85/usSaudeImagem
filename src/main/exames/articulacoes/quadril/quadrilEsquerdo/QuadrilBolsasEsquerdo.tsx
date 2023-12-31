/* eslint-disable array-callback-return */

import { Box, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function QuadrilBolsasEsquerdo({ Disable }) {
    const altura = "100%";
    const largura = "100%";

    const [QuadrilBolsasEsquerdo, setQuadrilBolsasEsquerdo] = useState<any>([]);

    const subExame = 'Bolsas quadril esquerdo'
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


    useEffect(() => {
        const string = "Ausência de líquido nas bolsas trocantérica, subglútea média, subglútea mínima e do iliopsoas.";
        SemLiuqidoCheckbox ? setQuadrilBolsasEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    }, [SemLiuqidoCheckbox])

    const criaStringLiquidoBolsaTrocanterica = () => {
        let string = "Presença de líquido de aspecto anecoico na bolsa: ";
        removeLiquido()
        if (LiquidoBolsaTrocantericaCheckbox || LiquidoBolsaSubgluteaMediaCheckbox || LiquidoBolsaSubgluteaMinimaCheckbox || LiquidoBolsaIlipsoasCheckbox) {
            if (LiquidoBolsaTrocantericaCheckbox) {
                string = `${string} trocantéria`
            }
            if (LiquidoBolsaSubgluteaMediaCheckbox) {
                string = `${string} subglútea média`
            }
            if (LiquidoBolsaSubgluteaMinimaCheckbox) {
                string = `${string} subglútea mínima`
            }
            if (LiquidoBolsaIlipsoasCheckbox) {
                string = `${string} iliopsoas`
            }
            setQuadrilBolsasEsquerdo((arr) => [...arr, string])
        }
    };

    useEffect(() => {
        criaStringLiquidoBolsaTrocanterica()
    }, [LiquidoBolsaTrocantericaCheckbox, LiquidoBolsaSubgluteaMediaCheckbox, LiquidoBolsaSubgluteaMinimaCheckbox, LiquidoBolsaIlipsoasCheckbox])


    const removeLiquido = () => {
        QuadrilBolsasEsquerdo.map((e) => {
            if (e.includes("Presença de líquido de aspecto anecoico na bolsa:")) {
                const index = QuadrilBolsasEsquerdo.indexOf(e);

                if (index > -1) {
                    QuadrilBolsasEsquerdo.splice(index, 1);
                    setQuadrilBolsasEsquerdo((arr) => [...arr]);
                }
            }
        });
    };


    const removeItemString = (value) => {
        const index = QuadrilBolsasEsquerdo.indexOf(value);

        if (index > -1) {
            QuadrilBolsasEsquerdo.splice(index, 1);
            setQuadrilBolsasEsquerdo((arr) => [...arr]);
        }
    };

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

                    onChange={() => {
                        setSemLiuqidoCheckbox(!SemLiuqidoCheckbox);
                    }}
                >
                    Sem líquido
                </Checkbox>
                <Checkbox

                    onChange={() => {
                        setLiquidoBolsaTrocantericaCheckbox(!LiquidoBolsaTrocantericaCheckbox);
                    }}
                >
                    Líquido na bolsa trocantérica
                </Checkbox>
                <Checkbox

                    onChange={() => {
                        setLiquidoBolsaSubgluteaMediaCheckbox(!LiquidoBolsaSubgluteaMediaCheckbox);
                    }}
                >
                    Líquido na bolsa subglútea média
                </Checkbox>
                <Checkbox

                    onChange={() => {
                        setLiquidoBolsaSubgluteaMinimaCheckbox(!LiquidoBolsaSubgluteaMinimaCheckbox);
                    }}
                >
                    Líquido na bolsa subglútea mínima
                </Checkbox>
                <Checkbox

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
