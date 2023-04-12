/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Checkbox, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../../component/function_format_laudo";
import IndividualizarCalculos from "./individualizar_calculos";

export default function Calculo({ Disable }) {

    const [numberArray, setNumberArray] = useState([1, 2, 3]);


    const [FraseCalculo, setFraseCalculo] = useState<any>([]);
    const [ConclusoesCalculo, setConclusoesCalculo] = useState<any>([]);

    const [UpdateCalculos, setUpdateCalculos] = useState(false);

    function Calculos() {
        return (
            <>
                {numberArray.map((num, key) => {
                    return <IndividualizarCalculos key={key} numCalculo={num} />;
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

    const [VariosCheckbox, setVariosCheckbox] = useState(false)
    const [InputVarios, setInputVarios] = useState('')
    const [DisableOptionsVarios, setDisableOptionsVarios] = useState(true)
    const [Select01Varios, setSelect01Varios] = useState('')
    const [Select02Varios, setSelect02Varios] = useState('')

    const [MicrocalculosCheckbox, setMicrocalculosCheckbox] = useState(false)

    const subExame = "Rins e ureteres. Cálculo";
    const titulo_exame = "Abdômen total";

    const criaStringVarios = () => {
        let string = 'Imagens calculosas bilaterais, medindo até'
        removeVarios()
        var InputVarioscm = new Convert_Medida(InputVarios).Convert_Medida()

        if (Select01Varios != '' && Select02Varios != '' && InputVarios != '') {
            string = `${string} ${InputVarioscm} cm, o maior localizada no grupamento calicinal  ${Select01Varios} do ${Select02Varios}`
            setFraseCalculo((arr) => [...arr, string]);
        }
    }

    const removeVarios = () => {
        FraseCalculo.map((e) => {
            if (e.includes("Imagens calculosas bilaterais, medindo até")) {
                var index = FraseCalculo.indexOf(e);

                if (index > -1) {
                    FraseCalculo.splice(index, 1);
                    setFraseCalculo((arr) => [...arr]);
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

    const removeItemString = (value) => {
        // console.log("valor remove = ", value);
        var index = FraseCalculo.indexOf(value);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
            FraseCalculo.splice(index, 1);
            setFraseCalculo((arr) => [...arr]);
        }
    };
    const removeItemStringConclusao = (value) => {
        // console.log("valor remove = ", value);
        var index = ConclusoesCalculo.indexOf(value);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
            ConclusoesCalculo.splice(index, 1);
            setConclusoesCalculo((arr) => [...arr]);
            new Format_Laudo(titulo_exame).Remove_Conclusao(value);
        }
    };
    useEffect(() => {
        var string = 'Nos seios renais são observados focos hiperecogênicos puntiformes sem sombra acústica definida, podendo corresponder a microcálculos calicinais ou calcificações vasculares.'
        MicrocalculosCheckbox ? setFraseCalculo((arr) => [...arr, string]) : removeItemString(string)
    }, [MicrocalculosCheckbox])

    useEffect(() => {
        if (Object.keys(FraseCalculo).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FraseCalculo,
                ConclusoesCalculo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FraseCalculo,
                ConclusoesCalculo
            ).Format_Laudo_Create_Storage();
        }
    }, [FraseCalculo]);
    return (
        <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" p='5px' mt='5px' >
            <Text fontWeight="bold" >Cálculo</Text>
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

            <Box gap='25px' display='flex' flexWrap="wrap">
                <Stack w='150px'>
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
                        <option value="superior">superior</option>
                        <option value="médio">médio</option>
                        <option value="inferior">inferior</option>
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
                </Stack>
                <Box >
                    <Checkbox isDisabled={Disable} onChange={() => {
                        setMicrocalculosCheckbox(!MicrocalculosCheckbox)
                    }}
                    >
                        Micrcálculos bilaterais X calcificações vasculares
                    </Checkbox>
                </Box>
            </Box>

        </Box>
    )
}