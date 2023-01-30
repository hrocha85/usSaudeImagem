/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { PunhoDireitoNormalContext } from "../../../../../context/PunhoDireitoNormalContext"
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoFlexoresTenossinoviteDireito() {
    const altura = "100%";
    const largura = "95%";

    let { PunhoDireitoLaudoNormal } = useContext(PunhoDireitoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)

    const [fraseTendaoFlexoreTenossinoviteDireito, setFraseTendaoFlexoreTenossinoviteDireito] = useState<any>([]);

    const subExame = 'Tendões Flexores com tenossinovite direito'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseTendaoFlexoreTenossinoviteDireito).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseTendaoFlexoreTenossinoviteDireito
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseTendaoFlexoreTenossinoviteDireito
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseTendaoFlexoreTenossinoviteDireito]);


    const [FlexorLongoPolegarCheckbox, setFlexorLongoPolegarCheckbox] = useState(false);
    const [FlexorRadialCarpoCheckbox, setFlexorRadialCarpoCheckbox] = useState(false);
    const [FlexoresSuperficiaisCheckbox, setFlexoresSuperficiaisCheckbox] = useState(false);
    const [FlexoresProfundosCheckbox, setFlexoresProfundosCheckbox] = useState(false);
    const [FlexorPalmarLongoCheckbox, setFlexorPalmarLongoCheckbox] = useState(false);

    //Funcoes Padrao Micropolicistico - Inicio
    const criaStringFlexorLongoPolegar = () => {
        var string = "Punho direito com FlexorLongoPolegar";
        FlexorLongoPolegarCheckbox ? setFraseTendaoFlexoreTenossinoviteDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringFlexorLongoPolegar()
    }, [FlexorLongoPolegarCheckbox])

    const criaStringFlexorRadialCarpo = () => {
        var string = "Punho direito com FlexorLongoPolegar";
        FlexorRadialCarpoCheckbox ? setFraseTendaoFlexoreTenossinoviteDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringFlexorRadialCarpo()
    }, [FlexorRadialCarpoCheckbox])

    const criaStringFlexoresSuperficiais = () => {
        var string = "Punho direito com FlexorLongoPolegar";
        FlexoresSuperficiaisCheckbox ? setFraseTendaoFlexoreTenossinoviteDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringFlexoresSuperficiais()
    }, [FlexoresSuperficiaisCheckbox])

    const criaStringFlexoresProfundos = () => {
        var string = "Punho direito com FlexorLongoPolegar";
        FlexoresProfundosCheckbox ? setFraseTendaoFlexoreTenossinoviteDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringFlexoresProfundos()
    }, [FlexoresProfundosCheckbox])

    const criaStringFlexorPalmarLongo = () => {
        var string = "Punho direito com FlexorLongoPolegar";
        FlexorPalmarLongoCheckbox ? setFraseTendaoFlexoreTenossinoviteDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringFlexorPalmarLongo()
    }, [FlexorPalmarLongoCheckbox])

    const removeItemString = (value) => {
        var index = fraseTendaoFlexoreTenossinoviteDireito.indexOf(value);

        if (index > -1) {
            fraseTendaoFlexoreTenossinoviteDireito.splice(index, 1);
            setFraseTendaoFlexoreTenossinoviteDireito((arr) => [...arr]);
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
export default TendaoFlexoresTenossinoviteDireito;



// <Radio value="1">Não citar</Radio>
// <Radio value="Flexor longo do polegar">Flexor longo do polegar</Radio>
// <Radio value="Flexor radial do carpo">Flexor radial do carpo</Radio>
// <Radio value="Flexores superficiais dos dedos">Flexores superficiais dos dedos</Radio>
// <Radio value="Flexores profundos dos dedos">Flexores profundos dos dedos</Radio>
// <Radio value="Flexor palmar longo">Flexor palmar longo</Radio>