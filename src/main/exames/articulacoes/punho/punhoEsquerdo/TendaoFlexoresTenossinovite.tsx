/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { PunhoEsquerdoNormalContext } from "../../../../../context/PunhoEsquerdoNormalContext"
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoFlexoresTenossinoviteEsquerdo() {
    const altura = "100%";
    const largura = "95%";

    let { PunhoEsquerdoLaudoNormal } = useContext(PunhoEsquerdoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)

    const [fraseTendaoFlexoreTenossinoviteEsquerdo, setFraseTendaoFlexoreTenossinoviteEsquerdo] = useState<any>([]);

    const subExame = 'Tendões Flexores com tenossinovite Esquerdo'
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

    //Funcoes Padrao Micropolicistico - Inicio
    const criaStringFlexorLongoPolegar = () => {
        var string = "Punho Esquerdo com FlexorLongoPolegar";
        FlexorLongoPolegarCheckbox ? setFraseTendaoFlexoreTenossinoviteEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringFlexorLongoPolegar()
    }, [FlexorLongoPolegarCheckbox])

    const criaStringFlexorRadialCarpo = () => {
        var string = "Punho Esquerdo com FlexorLongoPolegar";
        FlexorRadialCarpoCheckbox ? setFraseTendaoFlexoreTenossinoviteEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringFlexorRadialCarpo()
    }, [FlexorRadialCarpoCheckbox])

    const criaStringFlexoresSuperficiais = () => {
        var string = "Punho Esquerdo com FlexorLongoPolegar";
        FlexoresSuperficiaisCheckbox ? setFraseTendaoFlexoreTenossinoviteEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringFlexoresSuperficiais()
    }, [FlexoresSuperficiaisCheckbox])

    const criaStringFlexoresProfundos = () => {
        var string = "Punho Esquerdo com FlexorLongoPolegar";
        FlexoresProfundosCheckbox ? setFraseTendaoFlexoreTenossinoviteEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringFlexoresProfundos()
    }, [FlexoresProfundosCheckbox])

    const criaStringFlexorPalmarLongo = () => {
        var string = "Punho Esquerdo com FlexorLongoPolegar";
        FlexorPalmarLongoCheckbox ? setFraseTendaoFlexoreTenossinoviteEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringFlexorPalmarLongo()
    }, [FlexorPalmarLongoCheckbox])

    const removeItemString = (value) => {
        var index = fraseTendaoFlexoreTenossinoviteEsquerdo.indexOf(value);

        if (index > -1) {
            fraseTendaoFlexoreTenossinoviteEsquerdo.splice(index, 1);
            setFraseTendaoFlexoreTenossinoviteEsquerdo((arr) => [...arr]);
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
            <TituloNomeExame titulo="Tendões flexores com tenossinovite" />

            <Box display="flex" flexWrap="wrap" gap='20px'>


                <Checkbox
                    isDisabled={disableTudo}
                    onChange={() => {
                        setFlexorLongoPolegarCheckbox(!FlexorLongoPolegarCheckbox);
                    }}
                >
                    Flexor longo do polegar
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo}
                    onChange={() => {
                        setFlexorRadialCarpoCheckbox(!FlexorRadialCarpoCheckbox);
                    }}
                >
                    Flexor radial do carpo
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo}
                    onChange={() => {
                        setFlexoresSuperficiaisCheckbox(!FlexoresSuperficiaisCheckbox);
                    }}
                >
                    Flexores superficiais dos dedos
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo}
                    onChange={() => {
                        setFlexoresProfundosCheckbox(!FlexoresProfundosCheckbox);
                    }}
                >
                    Flexores profundos dos dedos
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo}
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
