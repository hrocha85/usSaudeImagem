/* eslint-disable array-callback-return */

import { Box, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoExtensoresTenossinoviteDireito({ Disable }) {
    const altura = "100%";
    const largura = "100%";
    const [fraseTendaoExtensoresTenossinoviteDireito, setFraseTendaoExtensoresTenossinoviteDireito] = useState<any>([]);

    const subExame = "Punho- Tendões Extensores com tenossinovite Direito";
    const titulo_exame = "Articulações";

    useEffect(() => {
        if (Object.keys(fraseTendaoExtensoresTenossinoviteDireito).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseTendaoExtensoresTenossinoviteDireito
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseTendaoExtensoresTenossinoviteDireito
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseTendaoExtensoresTenossinoviteDireito]);


    const [ICheckbox, setICheckbox] = useState(false);
    const [IICheckbox, setIICheckbox] = useState(false);
    const [IIICheckbox, setIIICheckbox] = useState(false);
    const [IVCheckbox, setIVCheckbox] = useState(false);
    const [VCheckbox, setVCheckbox] = useState(false);
    const [VICheckbox, setVICheckbox] = useState(false);

    useEffect(() => {
        const string = "Tendões abdutor longo do polegar e extensor curto do polegar com alteração ecotextural, espessados e com líquido na bainha sinovial.";
        ICheckbox ? setFraseTendaoExtensoresTenossinoviteDireito((arr) => [...arr, string]) : removeItemString(string);
    }, [ICheckbox])

    useEffect(() => {
        const string = "Tendões extensor longo radial do carpo e extensor curto radial do carpo com alteração ecotextural, espessados e com líquido na bainha sinovial.";
        IICheckbox ? setFraseTendaoExtensoresTenossinoviteDireito((arr) => [...arr, string]) : removeItemString(string);
    }, [IICheckbox])

    useEffect(() => {
        const string = "Tendão extensor longo do polegar com alteração ecotextural, espessado e com líquido na bainha sinovial.";
        IIICheckbox ? setFraseTendaoExtensoresTenossinoviteDireito((arr) => [...arr, string]) : removeItemString(string);
    }, [IIICheckbox])

    useEffect(() => {
        const string = "Tendões extensor comum dos dedos e extensor do indicador com alteração ecotextural, espessados e com líquido na bainha sinovial.";
        IVCheckbox ? setFraseTendaoExtensoresTenossinoviteDireito((arr) => [...arr, string]) : removeItemString(string);
    }, [IVCheckbox])

    useEffect(() => {
        const string = "Tendão extensor do V dedo com alteração ecotextural, espessado e com líquido na bainha sinovial.";
        VCheckbox ? setFraseTendaoExtensoresTenossinoviteDireito((arr) => [...arr, string]) : removeItemString(string);
    }, [VCheckbox])

    useEffect(() => {
        const string = "Tendão extensor ulnar do carpo com alteração ecotextural, espessado e com líquido na bainha sinovial.";
        VICheckbox ? setFraseTendaoExtensoresTenossinoviteDireito((arr) => [...arr, string]) : removeItemString(string);
    }, [VICheckbox])

    const removeItemString = (value) => {
        const index = fraseTendaoExtensoresTenossinoviteDireito.indexOf(value);

        if (index > -1) {
            fraseTendaoExtensoresTenossinoviteDireito.splice(index, 1);
            setFraseTendaoExtensoresTenossinoviteDireito((arr) => [...arr]);
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
            <TituloNomeExame titulo="Tendões Extensores com tenossinovite" />

            <Box display="flex" flexWrap="wrap" gap='20px'>


                <Checkbox

                    onChange={() => {
                        setICheckbox(!ICheckbox);
                    }}
                >
                    I = Abdoturo longo do polegar + extensor curto do polegar
                </Checkbox>
                <Checkbox

                    onChange={() => {
                        setIICheckbox(!IICheckbox);
                    }}
                >
                    II = Extensor longo radial do carpo + extensor curto radial do carpo
                </Checkbox>
                <Checkbox

                    onChange={() => {
                        setIIICheckbox(!IIICheckbox);
                    }}
                >
                    III = Extensor longo do polegar
                </Checkbox>
                <Checkbox

                    onChange={() => {
                        setIVCheckbox(!IVCheckbox);
                    }}
                >
                    IV = Extensor comum dos dedos e extensor do indicador
                </Checkbox>
                <Checkbox

                    onChange={() => {
                        setVCheckbox(!VCheckbox);
                    }}
                >
                    V = extensor do V dedo
                </Checkbox>
                <Checkbox

                    onChange={() => {
                        setVICheckbox(!VICheckbox);
                    }}
                >
                    VI = extenros ulnar
                </Checkbox>

            </Box>
        </Box>

    );
}
export default TendaoExtensoresTenossinoviteDireito;
