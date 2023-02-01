/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { PunhoEsquerdoNormalContext } from "../../../../../context/PunhoEsquerdoNormalContext";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoExtensoresTenossinoviteEsquerdo() {
    const altura = "100%";
    const largura = "95%";

    let { PunhoEsquerdoLaudoNormal } = useContext(PunhoEsquerdoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)

    const [fraseTendaoExtensoresTenossinoviteEsquerdo, setFraseTendaoExtensoresTenossinoviteEsquerdo] = useState<any>([]);

    const subExame = "Tendões Extensores com tenossinovite Esquerdo";
    const titulo_exame = "Articulações";

    useEffect(() => {
        if (Object.keys(fraseTendaoExtensoresTenossinoviteEsquerdo).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseTendaoExtensoresTenossinoviteEsquerdo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseTendaoExtensoresTenossinoviteEsquerdo
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseTendaoExtensoresTenossinoviteEsquerdo]);


    const [ICheckbox, setICheckbox] = useState(false);
    const [IICheckbox, setIICheckbox] = useState(false);
    const [IIICheckbox, setIIICheckbox] = useState(false);
    const [IVCheckbox, setIVCheckbox] = useState(false);
    const [VCheckbox, setVCheckbox] = useState(false);
    const [VICheckbox, setVICheckbox] = useState(false);

    useEffect(() => {
        var string = "Tendões abdutor longo do polegar e extensor curto do polegar com alteração ecotextural, espessados e com líquido na bainha sinovial.";
        ICheckbox ? setFraseTendaoExtensoresTenossinoviteEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    }, [ICheckbox])

    useEffect(() => {
        var string = "Tendões extensor longo radial do carpo e extensor curto radial do carpo com alteração ecotextural, espessados e com líquido na bainha sinovial.";
        IICheckbox ? setFraseTendaoExtensoresTenossinoviteEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    }, [IICheckbox])

    useEffect(() => {
        var string = "Tendão extensor longo do polegar com alteração ecotextural, espessado e com líquido na bainha sinovial.";
        IIICheckbox ? setFraseTendaoExtensoresTenossinoviteEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    }, [IIICheckbox])

    useEffect(() => {
        var string = "Tendões extensor comum dos dedos e extensor do indicador com alteração ecotextural, espessados e com líquido na bainha sinovial.";
        IVCheckbox ? setFraseTendaoExtensoresTenossinoviteEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    }, [IVCheckbox])

    useEffect(() => {
        var string = "Tendão extensor do V dedo com alteração ecotextural, espessado e com líquido na bainha sinovial.";
        VCheckbox ? setFraseTendaoExtensoresTenossinoviteEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    }, [VCheckbox])

    useEffect(() => {
        var string = "Tendão extensor ulnar do carpo com alteração ecotextural, espessado e com líquido na bainha sinovial.";
        VICheckbox ? setFraseTendaoExtensoresTenossinoviteEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    }, [VICheckbox])

    const removeItemString = (value) => {
        var index = fraseTendaoExtensoresTenossinoviteEsquerdo.indexOf(value);

        if (index > -1) {
            fraseTendaoExtensoresTenossinoviteEsquerdo.splice(index, 1);
            setFraseTendaoExtensoresTenossinoviteEsquerdo((arr) => [...arr]);
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
            <TituloNomeExame titulo="Tendões Extensores com tenossinovite" />

            <Box display="flex" flexWrap="wrap" gap='20px'>


                <Checkbox
                    isDisabled={disableTudo}
                    onChange={() => {
                        setICheckbox(!ICheckbox);
                    }}
                >
                    I = Abdoturo longo do polegar + extensor curto do polegar
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo}
                    onChange={() => {
                        setIICheckbox(!IICheckbox);
                    }}
                >
                    II = Extensor longo radial do carpo + extensor curto radial do carpo
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo}
                    onChange={() => {
                        setIIICheckbox(!IIICheckbox);
                    }}
                >
                    III = Extensor longo do polegar
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo}
                    onChange={() => {
                        setIVCheckbox(!IVCheckbox);
                    }}
                >
                    IV = Extensor comum dos dedos e extensor do indicador
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo}
                    onChange={() => {
                        setVCheckbox(!VCheckbox);
                    }}
                >
                    V = extensor do V dedo
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo}
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
export default TendaoExtensoresTenossinoviteEsquerdo;
