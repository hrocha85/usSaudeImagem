/* eslint-disable array-callback-return */

import { Box, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoFlexoresTenossinoviteEsquerdo({ Disable }) {
    const altura = "100%";
    const largura = "100%";


    const [fraseTendaoFlexoreTenossinoviteEsquerdo, setFraseTendaoFlexoreTenossinoviteEsquerdo] = useState<any>([]);

    const subExame = 'Punho- Tendões Flexores com tenossinovite Esquerdo'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseTendaoFlexoreTenossinoviteEsquerdo).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseTendaoFlexoreTenossinoviteEsquerdo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseTendaoFlexoreTenossinoviteEsquerdo
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseTendaoFlexoreTenossinoviteEsquerdo]);


    const [FlexorLongoPolegarCheckbox, setFlexorLongoPolegarCheckbox] = useState(false);
    const [FlexorRadialCarpoCheckbox, setFlexorRadialCarpoCheckbox] = useState(false);
    const [FlexoresSuperficiaisCheckbox, setFlexoresSuperficiaisCheckbox] = useState(false);
    const [FlexoresProfundosCheckbox, setFlexoresProfundosCheckbox] = useState(false);
    const [FlexorPalmarLongoCheckbox, setFlexorPalmarLongoCheckbox] = useState(false);


    useEffect(() => {
        const string = "Tendão flexor longo do polegar com alteração ecotextural, espessado e com líquido na bainha sinovial.";
        FlexorLongoPolegarCheckbox ? setFraseTendaoFlexoreTenossinoviteEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    }, [FlexorLongoPolegarCheckbox])


    useEffect(() => {
        const string = "Tendão flexor radial do carpo com alteração ecotextural, espessado e com líquido na bainha sinovial.";
        FlexorRadialCarpoCheckbox ? setFraseTendaoFlexoreTenossinoviteEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    }, [FlexorRadialCarpoCheckbox])

    useEffect(() => {
        const string = "Tendões flexores superficiais dos dedos com alteração ecotextural, espessados e com líquido na bainha sinovial.";
        FlexoresSuperficiaisCheckbox ? setFraseTendaoFlexoreTenossinoviteEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    }, [FlexoresSuperficiaisCheckbox])

    useEffect(() => {
        const string = "Tendões flexores profundos dos dedos com alteração ecotextural, espessados e com líquido na bainha sinovial.";
        FlexoresProfundosCheckbox ? setFraseTendaoFlexoreTenossinoviteEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    }, [FlexoresProfundosCheckbox])

    useEffect(() => {
        const string = "Tendão flexor palmar longo com alteração ecotextural, espessado e com líquido na bainha sinovial.";
        FlexorPalmarLongoCheckbox ? setFraseTendaoFlexoreTenossinoviteEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    }, [FlexorPalmarLongoCheckbox])

    const removeItemString = (value) => {
        const index = fraseTendaoFlexoreTenossinoviteEsquerdo.indexOf(value);

        if (index > -1) {
            fraseTendaoFlexoreTenossinoviteEsquerdo.splice(index, 1);
            setFraseTendaoFlexoreTenossinoviteEsquerdo((arr) => [...arr]);
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
            <TituloNomeExame titulo="Tendões flexores com tenossinovite" />

            <Box display="flex" flexWrap="wrap" gap='20px'>


                <Checkbox

                    onChange={() => {
                        setFlexorLongoPolegarCheckbox(!FlexorLongoPolegarCheckbox);
                    }}
                >
                    Flexor longo do polegar
                </Checkbox>
                <Checkbox

                    onChange={() => {
                        setFlexorRadialCarpoCheckbox(!FlexorRadialCarpoCheckbox);
                    }}
                >
                    Flexor radial do carpo
                </Checkbox>
                <Checkbox

                    onChange={() => {
                        setFlexoresSuperficiaisCheckbox(!FlexoresSuperficiaisCheckbox);
                    }}
                >
                    Flexores superficiais dos dedos
                </Checkbox>
                <Checkbox

                    onChange={() => {
                        setFlexoresProfundosCheckbox(!FlexoresProfundosCheckbox);
                    }}
                >
                    Flexores profundos dos dedos
                </Checkbox>
                <Checkbox

                    onChange={() => {
                        setFlexorPalmarLongoCheckbox(!FlexorPalmarLongoCheckbox);
                    }}
                >
                    Flexor palmar longo
                </Checkbox>

            </Box>
        </Box>

    );
}
export default TendaoFlexoresTenossinoviteEsquerdo;

