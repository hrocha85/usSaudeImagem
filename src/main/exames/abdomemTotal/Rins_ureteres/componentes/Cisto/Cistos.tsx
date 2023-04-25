/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Checkbox, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../../component/function_format_laudo";
import IndividualizarCistos from "./individualizar_cistos";

export default function Cistos({ Disable }) {
    const [FraseCisto, setFraseCisto] = useState<any>([]);
    const [ConclusoesCisto, setConclusoesCisto] = useState<any>([]);

    var ArrayConclusao = ['']

    const [numberArray, setNumberArray] = useState([1]);

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

    const criaStringVarios = () => {
        let string = 'Varios: Cisto de conteúdo anecogênico, com paredes finas e contornos regulares, medindo'
        removeVarios()
        if (Select01Varios != '' && Select02Varios != '' && InputVarios != '') {

            string = `${string} ${Select01Varios} ${Select02Varios} ${InputVarios}`
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

                        colorScheme="blue"
                        onClick={() => {
                            setUpdateCalculos(true);
                        }}
                    >
                        +1 Cisto
                    </Button>

                </Box>
                <Box w='150px'>
                    <Checkbox onChange={() => {
                        setVariosCheckbox(!VariosCheckbox)
                    }}
                    >
                        Vários bilaterais, o maior
                    </Checkbox>
                    <Input
                        p='0'
                        textAlign='center'
                        onChange={(e) => {
                            setInputVarios(e.target.value)
                        }}
                        value={InputVarios}
                        isDisabled={DisableOptionsVarios}
                        placeholder="cm"
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