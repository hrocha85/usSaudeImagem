/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Checkbox, Flex, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import Conclusoes from "../../../../../component/conclusoes";
import { Convert_Medida } from "../../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../../component/function_format_laudo";
import IndividualizarCistos from "./individualizar_cistos";

export default function Cistos({ Disable }) {
    const [FraseCisto, setFraseCisto] = useState<any>([]);
    const [ConclusoesCisto, setConclusoesCisto] = useState<any>([]);

    var ArrayConclusao = ['']

    const [numberArray, setNumberArray] = useState([1, 2, 3]);

    const [VariosCheckbox, setVariosCheckbox] = useState(false)
    const [InputVarios, setInputVarios] = useState('')
    const [DisableOptionsVarios, setDisableOptionsVarios] = useState(true)
    const [Select01Varios, setSelect01Varios] = useState('')
    const [Select02Varios, setSelect02Varios] = useState('')

    const [UpdateCalculos, setUpdateCalculos] = useState(false);

    function Calculos() {
        return (
            <>
                {numberArray.map((num, key) => {
                    return <IndividualizarCistos key={key} numCisto={num} />;
                })}
            </>
        );
    }

    useEffect(() => {
        if (UpdateCalculos) {
            setUpdateCalculos(false);
            setNumberArray([...numberArray, numberArray.length + 1]);
            Calculos();
        }
    }, [UpdateCalculos]);

    const subExame = "Rins e ureteres. Cistos";
    const titulo_exame = "Abdômen total";

    // const criaStringConclusao = () => {
    //     let conclusao = 'Cisto renal conclusão.'
    //     //  removeConclusao(conclusao)
    //     if (Cisto01Checkbox || Cisto02Checkbox || Cisto03Checkbox || Cisto04Checkbox || VariosCheckbox) {
    //         FraseCisto.map((e) => {
    //             if (e.includes("Cisto")) {
    //                 ArrayConclusao.shift()
    //                 ArrayConclusao.shift()
    //                 setConclusoesCisto([conclusao]);
    //                 ArrayConclusao.push(conclusao)

    //             }
    //         });
    //     } else {
    //         ArrayConclusao.shift()
    //         removeConclusao(conclusao)

    //     }

    // }

    const removeConclusao = (value) => {
        ConclusoesCisto.map((e) => {
            if (e.includes(value)) {
                var index = ConclusoesCisto.indexOf(e);

                if (index > -1) {
                    ConclusoesCisto.splice(index, 1);
                    setConclusoesCisto((arr) => [...arr]);
                    new Format_Laudo(titulo_exame).Remove_Conclusao(value);
                }
            }
        });
    };

    // useEffect(() => {
    //     criaStringConclusao()
    // }, [FraseCisto])

    // const criaStringCisto01 = () => {
    //     let string = 'Cisto 01: Cisto de conteúdo anecogênico, com paredes finas e contornos regulares, medindo'
    //     removeCisto01()
    //     var InputCisto01cm = new Convert_Medida(InputCisto01).Convert_Medida()
    //     if (Select01Cisto01 != '' && Select02Cisto01 != '' && InputCisto01 != '') {
    //         string = `${string}, medindo ${InputCisto01cm} cm, visível no ${Select01Cisto01} do ${Select02Cisto01}.`
    //         setFraseCisto((arr) => [...arr, string]);
    //     }
    // }

    // const removeCisto01 = () => {
    //     FraseCisto.map((e) => {
    //         if (e.includes("Cisto 01: Cisto de conteúdo anecogênico, com paredes finas e contornos regulares, medindo")) {
    //             var index = FraseCisto.indexOf(e);

    //             if (index > -1) {
    //                 FraseCisto.splice(index, 1);
    //                 setFraseCisto((arr) => [...arr]);
    //             }
    //         }
    //     });
    // };

    // useEffect(() => {
    //     if (Cisto01Checkbox) {
    //         criaStringCisto01()
    //         setDisableOptionsCisto01(false)
    //     } else {
    //         removeCisto01()
    //         setDisableOptionsCisto01(true)
    //         setInputCisto01('')
    //         setSelect01Cisto01('')
    //         setSelect02Cisto01('')
    //     }
    // }, [Cisto01Checkbox, InputCisto01, Select01Cisto01, Select02Cisto01])

    // const criaStringCisto02 = () => {
    //     let string = 'Cisto 02: Cisto de conteúdo anecogênico, com paredes finas e contornos regulares, medindo'
    //     removeCisto02()
    //     var InputCisto02cm = new Convert_Medida(InputCisto02).Convert_Medida()
    //     if (Select01Cisto02 != '' && Select02Cisto02 != '' && InputCisto02 != '') {

    //         string = `${string}, medindo ${InputCisto02cm} cm, visível no ${Select01Cisto02} do ${Select02Cisto02}.`
    //         setFraseCisto((arr) => [...arr, string]);
    //     }
    // }

    // const removeCisto02 = () => {
    //     FraseCisto.map((e) => {
    //         if (e.includes("Cisto 02: Cisto de conteúdo anecogênico, com paredes finas e contornos regulares, medindo")) {
    //             var index = FraseCisto.indexOf(e);

    //             if (index > -1) {
    //                 FraseCisto.splice(index, 1);
    //                 setFraseCisto((arr) => [...arr]);
    //             }
    //         }
    //     });
    // };

    // useEffect(() => {
    //     if (Cisto02Checkbox) {
    //         criaStringCisto02()
    //         setDisableOptionsCisto02(false)
    //     } else {
    //         removeCisto02()
    //         setDisableOptionsCisto02(true)
    //         setInputCisto02('')
    //         setSelect01Cisto02('')
    //         setSelect02Cisto02('')
    //     }
    // }, [Cisto02Checkbox, InputCisto02, Select01Cisto02, Select02Cisto02])

    // const criaStringCisto03 = () => {
    //     let string = 'Cisto 03: Cisto de conteúdo anecogênico, com paredes finas e contornos regulares, medindo'
    //     removeCisto03()
    //     var InputCisto03cm = new Convert_Medida(InputCisto03).Convert_Medida()
    //     if (Select01Cisto03 != '' && Select02Cisto03 != '' && InputCisto03 != '') {

    //         string = `${string}, medindo ${InputCisto03cm} cm, visível no ${Select01Cisto03} do ${Select02Cisto03}.`
    //         setFraseCisto((arr) => [...arr, string]);
    //     }
    // }

    // const removeCisto03 = () => {
    //     FraseCisto.map((e) => {
    //         if (e.includes("Cisto 03: Cisto de conteúdo anecogênico, com paredes finas e contornos regulares, medindo")) {
    //             var index = FraseCisto.indexOf(e);

    //             if (index > -1) {
    //                 FraseCisto.splice(index, 1);
    //                 setFraseCisto((arr) => [...arr]);
    //             }
    //         }
    //     });
    // };

    // useEffect(() => {
    //     if (Cisto03Checkbox) {
    //         criaStringCisto03()
    //         setDisableOptionsCisto03(false)
    //     } else {
    //         removeCisto03()
    //         setDisableOptionsCisto03(true)
    //         setInputCisto03('')
    //         setSelect01Cisto03('')
    //         setSelect02Cisto03('')
    //     }
    // }, [Cisto03Checkbox, InputCisto03, Select01Cisto03, Select02Cisto03])

    // const criaStringCisto04 = () => {
    //     let string = 'Cisto 04: Cisto de conteúdo anecogênico, com paredes finas e contornos regulares, medindo'
    //     removeCisto04()
    //     var InputCisto04cm = new Convert_Medida(InputCisto04).Convert_Medida()

    //     if (Select01Cisto04 != '' && Select02Cisto04 != '' && InputCisto04 != '') {

    //         string = `${string}, medindo ${InputCisto04cm} cm, visível no ${Select01Cisto04} do ${Select02Cisto04}.`
    //         setFraseCisto((arr) => [...arr, string]);
    //     }
    // }

    // const removeCisto04 = () => {
    //     FraseCisto.map((e) => {
    //         if (e.includes("Cisto 04: Cisto de conteúdo anecogênico, com paredes finas e contornos regulares, medindo")) {
    //             var index = FraseCisto.indexOf(e);

    //             if (index > -1) {
    //                 FraseCisto.splice(index, 1);
    //                 setFraseCisto((arr) => [...arr]);
    //             }
    //         }
    //     });
    // };

    // useEffect(() => {
    //     if (Cisto04Checkbox) {
    //         criaStringCisto04()
    //         setDisableOptionsCisto04(false)
    //     } else {
    //         removeCisto04()
    //         setDisableOptionsCisto04(true)
    //         setInputCisto04('')
    //         setSelect01Cisto04('')
    //         setSelect02Cisto04('')
    //     }
    // }, [Cisto04Checkbox, InputCisto04, Select01Cisto04, Select02Cisto04])

    const criaStringVarios = () => {
        let string = 'Varios: Cisto de conteúdo anecogênico, com paredes finas e contornos regulares, medindo'
        removeVarios()
        var InputVarioscm = new Convert_Medida(InputVarios).Convert_Medida()

        if (Select01Varios != '' && Select02Varios != '' && InputVarios != '') {

            string = `${string} ${Select01Varios} ${Select02Varios} ${InputVarioscm}`
            setFraseCisto((arr) => [...arr, string]);
        }
    }

    const removeVarios = () => {
        FraseCisto.map((e) => {
            if (e.includes("Varios: Cisto de conteúdo anecogênico, com paredes finas e contornos regulares, medindo")) {
                var index = FraseCisto.indexOf(e);

                if (index > -1) {
                    FraseCisto.splice(index, 1);
                    setFraseCisto((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (VariosCheckbox) {
            criaStringVarios()
            setDisableOptionsVarios(false)
        } else {
            removeVarios()
            setDisableOptionsVarios(true)
            setInputVarios('')
            setSelect01Varios('')
            setSelect02Varios('')
        }
    }, [VariosCheckbox, InputVarios, Select01Varios, Select02Varios])



    useEffect(() => {
        if (Object.keys(FraseCisto).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FraseCisto,
                ArrayConclusao
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FraseCisto,
                ArrayConclusao
            ).Format_Laudo_Create_Storage();
        }
    }, [FraseCisto]);
    return (
        <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" p='5px' mt='5px' >
            <Text fontWeight="bold" >Cistos</Text>
            <Box gap="25px" display="flex" flexWrap="wrap">
                <Box gap="25px" display="flex" flexWrap="wrap">
                    {Calculos()}
                    <Button
                        isDisabled={Disable}
                        colorScheme="blue"
                        onClick={() => {
                            setUpdateCalculos(true);
                        }}
                    >
                        +1 Nódulo
                    </Button>

                </Box>
                <Box w='150px'>
                    <Checkbox isDisabled={Disable} onChange={() => {
                        setVariosCheckbox(!VariosCheckbox)
                    }}
                    >
                        Vários bilaterais, o maior
                    </Checkbox>
                    <Input onChange={(e) => {
                        setInputVarios(e.target.value)
                    }}
                        value={InputVarios}
                        isDisabled={DisableOptionsVarios}
                        placeholder="mm"
                    />
                    <Select onChange={(e) => {
                        setSelect01Varios(e.target.value)
                    }}
                        value={Select01Varios}
                        isDisabled={DisableOptionsVarios}
                    >
                        <option value="" disabled selected>
                            No
                        </option>
                        <option value="terço superior">terço superior</option>
                        <option value="terço médio">terço médio</option>
                        <option value="terço inferior">terço inferior</option>
                    </Select>
                    <Select onChange={(e) => {
                        setSelect02Varios(e.target.value)
                    }}
                        value={Select02Varios}
                        isDisabled={DisableOptionsVarios}
                    >
                        <option value="" disabled selected>
                            Do
                        </option>
                        <option value="rim direito">Rim direito</option>
                        <option value="rim esquerdo">Rim esquerdo</option>
                    </Select>
                </Box>
            </Box>
        </Box >
    )
}