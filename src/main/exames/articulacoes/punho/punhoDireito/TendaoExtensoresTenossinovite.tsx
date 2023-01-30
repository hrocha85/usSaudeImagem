/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { PunhoDireitoNormalContext } from "../../../../../context/PunhoDireitoNormalContext"
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoExtensoresTenossinoviteDireito() {
    const altura = "100%";
    const largura = "95%";

    let { PunhoDireitoLaudoNormal } = useContext(PunhoDireitoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)

    const [fraseTendaoExtensoresTenossinoviteDireito, setFraseTendaoExtensoresTenossinoviteDireito] = useState<any>([]);

    const subExame = "Tendões Extensores com tenossinovite Direito";
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

    //Funcoes Padrao Micropolicistico - Inicio
    const criaStringI = () => {
        var string = "Punho direito com I";
        ICheckbox ? setFraseTendaoExtensoresTenossinoviteDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringI()
    }, [ICheckbox])

    const criaStringII = () => {
        var string = "Punho direito com I";
        IICheckbox ? setFraseTendaoExtensoresTenossinoviteDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringII()
    }, [IICheckbox])

    const criaStringIII = () => {
        var string = "Punho direito com I";
        IIICheckbox ? setFraseTendaoExtensoresTenossinoviteDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringIII()
    }, [IIICheckbox])

    const criaStringIV = () => {
        var string = "Punho direito com I";
        IVCheckbox ? setFraseTendaoExtensoresTenossinoviteDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringIV()
    }, [IVCheckbox])

    const criaStringV = () => {
        var string = "Punho direito com I";
        VCheckbox ? setFraseTendaoExtensoresTenossinoviteDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringV()
    }, [VCheckbox])

    const criaStringVI = () => {
        var string = "Punho direito com I";
        VICheckbox ? setFraseTendaoExtensoresTenossinoviteDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringVI()
    }, [VICheckbox])

    const removeItemString = (value) => {
        var index = fraseTendaoExtensoresTenossinoviteDireito.indexOf(value);

        if (index > -1) {
            fraseTendaoExtensoresTenossinoviteDireito.splice(index, 1);
            setFraseTendaoExtensoresTenossinoviteDireito((arr) => [...arr]);
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
export default TendaoExtensoresTenossinoviteDireito;


{/* <Radio value="I = Abdoturo longo do polegar + extensor curto do polegar">I = Abdoturo longo do polegar + extensor curto do polegar</Radio>
<Radio value="II = Extensor longo radial do carpo + extensor curto radial do carpo">Flexor</Radio>
<Radio value="III = Extensor longo do polegar">III = Extensor longo do polegar</Radio>
<Radio value="IV = Extensor comum dos dedos e extensor do indicador">IV = Extensor comum dos dedos e extensor do indicador</Radio>
<Radio value="V = extensor do V dedo">V = extensor do V dedo</Radio>
<Radio value="VI = extensor ulnar ">VI = extenros ulnar </Radio> 
TendaoExtensoresTenossinoviteDireito

    const subExame = "Tendões Extensores com tenossinovite Direito";
    const titulo_exame = "Articulações";
*/}