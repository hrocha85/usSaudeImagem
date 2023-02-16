/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Flex, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { Convert_Medida } from "../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../component/function_format_laudo";

export default function Calculo({ Disable }) {
    const [FraseCalculo, setFraseCalculo] = useState<any>([]);
    const [ConclusoesCalculo, setConclusoesCalculo] = useState<any>([]);

    const [Calculo01Checkbox, setCalculo01Checkbox] = useState(false)
    const [InputCalculo01, setInputCalculo01] = useState('')
    const [DisableOptionsCalculo01, setDisableOptionsCalculo01] = useState(true)
    const [Select01Calculo01, setSelect01Calculo01] = useState('')
    const [Select02Calculo01, setSelect02Calculo01] = useState('')

    const [Calculo02Checkbox, setCalculo02Checkbox] = useState(false)
    const [InputCalculo02, setInputCalculo02] = useState('')
    const [DisableOptionsCalculo02, setDisableOptionsCalculo02] = useState(true)
    const [Select01Calculo02, setSelect01Calculo02] = useState('')
    const [Select02Calculo02, setSelect02Calculo02] = useState('')

    const [Calculo03Checkbox, setCalculo03Checkbox] = useState(false)
    const [InputCalculo03, setInputCalculo03] = useState('')
    const [DisableOptionsCalculo03, setDisableOptionsCalculo03] = useState(true)
    const [Select01Calculo03, setSelect01Calculo03] = useState('')
    const [Select02Calculo03, setSelect02Calculo03] = useState('')

    const [Calculo04Checkbox, setCalculo04Checkbox] = useState(false)
    const [InputCalculo04, setInputCalculo04] = useState('')
    const [DisableOptionsCalculo04, setDisableOptionsCalculo04] = useState(true)
    const [Select01Calculo04, setSelect01Calculo04] = useState('')
    const [Select02Calculo04, setSelect02Calculo04] = useState('')

    const [VariosCheckbox, setVariosCheckbox] = useState(false)
    const [InputVarios, setInputVarios] = useState('')
    const [DisableOptionsVarios, setDisableOptionsVarios] = useState(true)
    const [Select01Varios, setSelect01Varios] = useState('')
    const [Select02Varios, setSelect02Varios] = useState('')

    const [MicrocalculosCheckbox, setMicrocalculosCheckbox] = useState(false)

    const subExame = "Rins e ureteres. Cálculo";
    const titulo_exame = "Abdômen total";

    useEffect(() => {
        const conclusaoDireita = 'Litíase ureteral à direita.'
        const conclusaoEsquerda = 'Litíase ureteral à esquerda.'
        if (Select02Calculo01 == 'rim direito' || Select02Calculo02 == 'rim direito' || Select02Calculo03 == 'rim direito' || Select02Calculo04 == 'rim direito') {
            setConclusoesCalculo((arr) => [...arr, conclusaoDireita]);
        } else {
            removeItemString(conclusaoDireita)
        }
        if (Select02Calculo01 == 'rim esquerdo' || Select02Calculo02 == 'rim esquerdo' || Select02Calculo03 == 'rim esquerdo' || Select02Calculo04 == 'rim esquerdo') {
            setConclusoesCalculo((arr) => [...arr, conclusaoEsquerda]);
        } else {
            removeItemString(conclusaoEsquerda)
        }
    }, [Select02Calculo01, Select02Calculo02, Select02Calculo03, Select02Calculo04])


    const criaStringCalculo01 = () => {
        let string = 'Cálculo 01: Cálculo de'
        removeCalculo01()
        var InputCalculo01cm = new Convert_Medida(InputCalculo01).Convert_Medida()

        if (Select01Calculo01 != '' && Select02Calculo01 != '' && InputCalculo01 != '') {
            string = `${string} ${InputCalculo01cm} cm no grupamento calicinal ${Select01Calculo01} do ${Select02Calculo01}`
            setFraseCalculo((arr) => [...arr, string]);
        }
    }

    const removeCalculo01 = () => {
        FraseCalculo.map((e) => {
            if (e.includes("Cálculo 01: Cálculo de")) {
                var index = FraseCalculo.indexOf(e);

                if (index > -1) {
                    FraseCalculo.splice(index, 1);
                    setFraseCalculo((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (Calculo01Checkbox) {
            criaStringCalculo01()
            setDisableOptionsCalculo01(false)
        } else {
            removeCalculo01()
            setDisableOptionsCalculo01(true)
            setInputCalculo01('')
            setSelect01Calculo01('')
            setSelect02Calculo01('')
        }
    }, [Calculo01Checkbox, InputCalculo01, Select01Calculo01, Select02Calculo01])

    const criaStringCalculo02 = () => {
        let string = 'Cálculo 02: Cálculo de'
        removeCalculo02()
        var InputCalculo02cm = new Convert_Medida(InputCalculo02).Convert_Medida()

        if (Select01Calculo02 != '' && Select02Calculo02 != '' && InputCalculo02 != '') {
            string = `${string} ${InputCalculo02cm} cm no grupamento calicinal ${Select01Calculo02} do ${Select02Calculo02}`
            setFraseCalculo((arr) => [...arr, string]);
        }
    }

    const removeCalculo02 = () => {
        FraseCalculo.map((e) => {
            if (e.includes('Cálculo 02: Cálculo de')) {
                var index = FraseCalculo.indexOf(e);

                if (index > -1) {
                    FraseCalculo.splice(index, 1);
                    setFraseCalculo((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (Calculo02Checkbox) {
            criaStringCalculo02()
            setDisableOptionsCalculo02(false)
        } else {
            removeCalculo02()
            setDisableOptionsCalculo02(true)
            setInputCalculo02('')
            setSelect01Calculo02('')
            setSelect02Calculo02('')
        }
    }, [Calculo02Checkbox, InputCalculo02, Select01Calculo02, Select02Calculo02])

    const criaStringCalculo03 = () => {
        let string = 'Cálculo 03: Cálculo de'
        removeCalculo03()
        var InputCalculo03cm = new Convert_Medida(InputCalculo03).Convert_Medida()

        if (Select01Calculo03 != '' && Select02Calculo03 != '' && InputCalculo03 != '') {
            string = `${string} ${InputCalculo03cm} cm no grupamento calicinal ${Select01Calculo03} do ${Select02Calculo03}`
            setFraseCalculo((arr) => [...arr, string]);
        }
    }

    const removeCalculo03 = () => {
        FraseCalculo.map((e) => {
            if (e.includes(('Cálculo 03: Cálculo de'))) {
                var index = FraseCalculo.indexOf(e);

                if (index > -1) {
                    FraseCalculo.splice(index, 1);
                    setFraseCalculo((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (Calculo03Checkbox) {
            criaStringCalculo03()
            setDisableOptionsCalculo03(false)
        } else {
            removeCalculo03()
            setDisableOptionsCalculo03(true)
            setInputCalculo03('')
            setSelect01Calculo03('')
            setSelect02Calculo03('')
        }
    }, [Calculo03Checkbox, InputCalculo03, Select01Calculo03, Select02Calculo03])

    const criaStringCalculo04 = () => {
        let string = 'Cálculo 04: Cálculo de'
        removeCalculo04()
        var InputCalculo04cm = new Convert_Medida(InputCalculo04).Convert_Medida()

        if (Select01Calculo04 != '' && Select02Calculo04 != '' && InputCalculo04 != '') {
            string = `${string} ${InputCalculo04cm} cm no grupamento calicinal ${Select01Calculo04} do ${Select02Calculo04}`
            setFraseCalculo((arr) => [...arr, string]);
        }
    }

    const removeCalculo04 = () => {
        FraseCalculo.map((e) => {
            if (e.includes("Cálculo 04: Cálculo de")) {
                var index = FraseCalculo.indexOf(e);

                if (index > -1) {
                    FraseCalculo.splice(index, 1);
                    setFraseCalculo((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (Calculo04Checkbox) {
            criaStringCalculo04()
            setDisableOptionsCalculo04(false)
        } else {
            removeCalculo04()
            setDisableOptionsCalculo04(true)
            setInputCalculo04('')
            setSelect01Calculo04('')
            setSelect02Calculo04('')
        }
    }, [Calculo04Checkbox, InputCalculo04, Select01Calculo04, Select02Calculo04])

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
                <Box w='150px'>
                    <Checkbox isDisabled={Disable} onChange={() => {
                        setCalculo01Checkbox(!Calculo01Checkbox)
                    }}
                    >
                        Cálculo 01
                    </Checkbox>
                    <Input onChange={(e) => {
                        setInputCalculo01(e.target.value)
                    }}
                        value={InputCalculo01}
                        isDisabled={DisableOptionsCalculo01}
                        placeholder="mm"
                    />
                    <Select onChange={(e) => {
                        setSelect01Calculo01(e.target.value)
                    }}
                        value={Select01Calculo01}
                        isDisabled={DisableOptionsCalculo01}
                    >
                        <option value="" disabled selected>
                            No
                        </option>
                        <option value="superior">superior</option>
                        <option value="médio">médio</option>
                        <option value="inferior">inferior</option>
                    </Select>
                    <Select onChange={(e) => {
                        setSelect02Calculo01(e.target.value)
                    }}
                        value={Select02Calculo01}
                        isDisabled={DisableOptionsCalculo01}
                    >
                        <option value="" disabled selected>
                            Do
                        </option>
                        <option value="rim direito">Rim direito</option>
                        <option value="rim esquerdo">Rim esquerdo</option>
                    </Select>
                </Box>

                <Box w='150px'>
                    <Checkbox isDisabled={Disable} onChange={() => {
                        setCalculo02Checkbox(!Calculo02Checkbox)
                    }}
                    >
                        Cálculo 02
                    </Checkbox>
                    <Input onChange={(e) => {
                        setInputCalculo02(e.target.value)
                    }}
                        value={InputCalculo02}
                        isDisabled={DisableOptionsCalculo02}
                        placeholder="mm"
                    />
                    <Select onChange={(e) => {
                        setSelect01Calculo02(e.target.value)
                    }}
                        value={Select01Calculo02}
                        isDisabled={DisableOptionsCalculo02}
                    >
                        <option value="" disabled selected>
                            No
                        </option>
                        <option value="superior">superior</option>
                        <option value="médio">médio</option>
                        <option value="inferior">inferior</option>
                    </Select>
                    <Select onChange={(e) => {
                        setSelect02Calculo02(e.target.value)
                    }}
                        value={Select02Calculo02}
                        isDisabled={DisableOptionsCalculo02}
                    >
                        <option value="" disabled selected>
                            Do
                        </option>
                        <option value="rim direito">Rim direito</option>
                        <option value="rim esquerdo">Rim esquerdo</option>
                    </Select>
                </Box>

                <Box w='150px'>
                    <Checkbox isDisabled={Disable} onChange={() => {
                        setCalculo03Checkbox(!Calculo03Checkbox)
                    }}
                    >
                        Cálculo 03
                    </Checkbox>
                    <Input onChange={(e) => {
                        setInputCalculo03(e.target.value)
                    }}
                        value={InputCalculo03}
                        isDisabled={DisableOptionsCalculo03}
                        placeholder="mm"
                    />
                    <Select onChange={(e) => {
                        setSelect01Calculo03(e.target.value)
                    }}
                        value={Select01Calculo03}
                        isDisabled={DisableOptionsCalculo03}
                    >
                        <option value="" disabled selected>
                            No
                        </option>
                        <option value="superior">superior</option>
                        <option value="médio">médio</option>
                        <option value="inferior">inferior</option>
                    </Select>
                    <Select onChange={(e) => {
                        setSelect02Calculo03(e.target.value)
                    }}
                        value={Select02Calculo03}
                        isDisabled={DisableOptionsCalculo03}
                    >
                        <option value="" disabled selected>
                            Do
                        </option>
                        <option value="rim direito">Rim direito</option>
                        <option value="rim esquerdo">Rim esquerdo</option>
                    </Select>
                </Box>

                <Box w='150px'>
                    <Checkbox isDisabled={Disable} onChange={() => {
                        setCalculo04Checkbox(!Calculo04Checkbox)
                    }}
                    >
                        Cálculo 04
                    </Checkbox>
                    <Input onChange={(e) => {
                        setInputCalculo04(e.target.value)
                    }}
                        value={InputCalculo04}
                        isDisabled={DisableOptionsCalculo04}
                        placeholder="mm"
                    />
                    <Select onChange={(e) => {
                        setSelect01Calculo04(e.target.value)
                    }}
                        value={Select01Calculo04}
                        isDisabled={DisableOptionsCalculo04}
                    >
                        <option value="" disabled selected>
                            No
                        </option>
                        <option value="superior">superior</option>
                        <option value="médio">médio</option>
                        <option value="inferior">inferior</option>
                    </Select>
                    <Select onChange={(e) => {
                        setSelect02Calculo04(e.target.value)
                    }}
                        value={Select02Calculo04}
                        isDisabled={DisableOptionsCalculo04}
                    >
                        <option value="" disabled selected>
                            Do
                        </option>
                        <option value="rim direito">Rim direito</option>
                        <option value="rim esquerdo">Rim esquerdo</option>
                    </Select>
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
                </Box>
                <Box>
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