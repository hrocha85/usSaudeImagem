/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Flex, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { Convert_Medida } from "../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../component/function_format_laudo";

export default function Cistos({ Disable }) {
    const [FraseCisto, setFraseCisto] = useState<any>([]);
    const [ConclusoesCisto, setConclusoesCisto] = useState<any>([]);

    const [Cisto01Checkbox, setCisto01Checkbox] = useState(false)
    const [InputCisto01, setInputCisto01] = useState('')
    const [DisableOptionsCisto01, setDisableOptionsCisto01] = useState(true)
    const [Select01Cisto01, setSelect01Cisto01] = useState('')
    const [Select02Cisto01, setSelect02Cisto01] = useState('')

    const [Cisto02Checkbox, setCisto02Checkbox] = useState(false)
    const [InputCisto02, setInputCisto02] = useState('')
    const [DisableOptionsCisto02, setDisableOptionsCisto02] = useState(true)
    const [Select01Cisto02, setSelect01Cisto02] = useState('')
    const [Select02Cisto02, setSelect02Cisto02] = useState('')

    const [Cisto03Checkbox, setCisto03Checkbox] = useState(false)
    const [InputCisto03, setInputCisto03] = useState('')
    const [DisableOptionsCisto03, setDisableOptionsCisto03] = useState(true)
    const [Select01Cisto03, setSelect01Cisto03] = useState('')
    const [Select02Cisto03, setSelect02Cisto03] = useState('')

    const [Cisto04Checkbox, setCisto04Checkbox] = useState(false)
    const [InputCisto04, setInputCisto04] = useState('')
    const [DisableOptionsCisto04, setDisableOptionsCisto04] = useState(true)
    const [Select01Cisto04, setSelect01Cisto04] = useState('')
    const [Select02Cisto04, setSelect02Cisto04] = useState('')

    const [VariosCheckbox, setVariosCheckbox] = useState(false)
    const [InputVarios, setInputVarios] = useState('')
    const [DisableOptionsVarios, setDisableOptionsVarios] = useState(true)
    const [Select01Varios, setSelect01Varios] = useState('')
    const [Select02Varios, setSelect02Varios] = useState('')

    const subExame = "Rins e ureteres. Cistos";
    const titulo_exame = "Abdômen total";

    const criaStringCisto01 = () => {
        let string = 'Cisto 01: Cisto de conteúdo anecogênico, com paredes finas e contornos regulares, medindo'
        removeCisto01()
        var InputCisto01cm = new Convert_Medida(InputCisto01).Convert_Medida()

        if (Select01Cisto01 != '' && Select02Cisto01 != '' && InputCisto01 != '') {
            string = `${string}, medindo ${InputCisto01cm} cm, visível no ${Select01Cisto01} do ${Select02Cisto01}.`
            setFraseCisto((arr) => [...arr, string]);
        }
    }

    const removeCisto01 = () => {
        FraseCisto.map((e) => {
            if (e.includes("Cisto 01: Cisto de conteúdo anecogênico, com paredes finas e contornos regulares, medindo")) {
                var index = FraseCisto.indexOf(e);

                if (index > -1) {
                    FraseCisto.splice(index, 1);
                    setFraseCisto((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (Cisto01Checkbox) {
            criaStringCisto01()
            setDisableOptionsCisto01(false)
        } else {
            removeCisto01()
            setDisableOptionsCisto01(true)
            setInputCisto01('')
            setSelect01Cisto01('')
            setSelect02Cisto01('')
        }
    }, [Cisto01Checkbox, InputCisto01, Select01Cisto01, Select02Cisto01])

    const criaStringCisto02 = () => {
        let string = 'Cisto 02: Cisto de conteúdo anecogênico, com paredes finas e contornos regulares, medindo'
        removeCisto02()
        var InputCisto02cm = new Convert_Medida(InputCisto02).Convert_Medida()

        if (Select01Cisto02 != '' && Select02Cisto02 != '' && InputCisto02 != '') {
            string = `${string}, medindo ${InputCisto02cm} cm, visível no ${Select01Cisto02} do ${Select02Cisto02}.`
            setFraseCisto((arr) => [...arr, string]);
        }
    }

    const removeCisto02 = () => {
        FraseCisto.map((e) => {
            if (e.includes("Cisto 02: Cisto de conteúdo anecogênico, com paredes finas e contornos regulares, medindo")) {
                var index = FraseCisto.indexOf(e);

                if (index > -1) {
                    FraseCisto.splice(index, 1);
                    setFraseCisto((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (Cisto02Checkbox) {
            criaStringCisto02()
            setDisableOptionsCisto02(false)
        } else {
            removeCisto02()
            setDisableOptionsCisto02(true)
            setInputCisto02('')
            setSelect01Cisto02('')
            setSelect02Cisto02('')
        }
    }, [Cisto02Checkbox, InputCisto02, Select01Cisto02, Select02Cisto02])

    const criaStringCisto03 = () => {
        let string = 'Cisto 03: Cisto de conteúdo anecogênico, com paredes finas e contornos regulares, medindo'
        removeCisto03()
        var InputCisto03cm = new Convert_Medida(InputCisto03).Convert_Medida()

        if (Select01Cisto03 != '' && Select02Cisto03 != '' && InputCisto03 != '') {
            string = `${string}, medindo ${InputCisto03cm} cm, visível no ${Select01Cisto03} do ${Select02Cisto03}.`
            setFraseCisto((arr) => [...arr, string]);
        }
    }

    const removeCisto03 = () => {
        FraseCisto.map((e) => {
            if (e.includes("Cisto 03: Cisto de conteúdo anecogênico, com paredes finas e contornos regulares, medindo")) {
                var index = FraseCisto.indexOf(e);

                if (index > -1) {
                    FraseCisto.splice(index, 1);
                    setFraseCisto((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (Cisto03Checkbox) {
            criaStringCisto03()
            setDisableOptionsCisto03(false)
        } else {
            removeCisto03()
            setDisableOptionsCisto03(true)
            setInputCisto03('')
            setSelect01Cisto03('')
            setSelect02Cisto03('')
        }
    }, [Cisto03Checkbox, InputCisto03, Select01Cisto03, Select02Cisto03])

    const criaStringCisto04 = () => {
        let string = 'Cisto 04: Cisto de conteúdo anecogênico, com paredes finas e contornos regulares, medindo'
        removeCisto04()
        var InputCisto04cm = new Convert_Medida(InputCisto04).Convert_Medida()

        if (Select01Cisto04 != '' && Select02Cisto04 != '' && InputCisto04 != '') {
            string = `${string}, medindo ${InputCisto04cm} cm, visível no ${Select01Cisto04} do ${Select02Cisto04}.`
            setFraseCisto((arr) => [...arr, string]);
        }
    }

    const removeCisto04 = () => {
        FraseCisto.map((e) => {
            if (e.includes("Cisto 04: Cisto de conteúdo anecogênico, com paredes finas e contornos regulares, medindo")) {
                var index = FraseCisto.indexOf(e);

                if (index > -1) {
                    FraseCisto.splice(index, 1);
                    setFraseCisto((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (Cisto04Checkbox) {
            criaStringCisto04()
            setDisableOptionsCisto04(false)
        } else {
            removeCisto04()
            setDisableOptionsCisto04(true)
            setInputCisto04('')
            setSelect01Cisto04('')
            setSelect02Cisto04('')
        }
    }, [Cisto04Checkbox, InputCisto04, Select01Cisto04, Select02Cisto04])

    const criaStringVarios = () => {
        let string = 'Varios: Cisto de conteúdo anecogênico, com paredes finas e contornos regulares, medindo'
        removeVarios()
        var InputVarioscm = new Convert_Medida(InputVarios).Convert_Medida()

        if (Select01Varios != '' && Select02Varios != '' && InputVarios != '') {
            string = `${string} ${Select01Varios}${Select02Varios}${InputVarioscm}`
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
                ConclusoesCisto
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FraseCisto,
                ConclusoesCisto
            ).Format_Laudo_Create_Storage();
        }
    }, [FraseCisto]);
    return (
        <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" p='5px' mt='5px' >
            <Text fontWeight="bold" >Cistos</Text>
            <Box gap="25px" display="flex" flexWrap="wrap">
                <Box w='150px'>
                    <Checkbox
                        isDisabled={Disable} onChange={() => {
                            setCisto01Checkbox(!Cisto01Checkbox)
                        }}
                    >
                        Cisto 01
                    </Checkbox>
                    <Input onChange={(e) => {
                        setInputCisto01(e.target.value)
                    }}
                        value={InputCisto01}
                        isDisabled={DisableOptionsCisto01}
                        placeholder="mm"
                    />
                    <Select onChange={(e) => {
                        setSelect01Cisto01(e.target.value)
                    }}
                        value={Select01Cisto01}
                        isDisabled={DisableOptionsCisto01}
                    >
                        <option value="" disabled selected>
                            No
                        </option>
                        <option value="terço superior">terço superior</option>
                        <option value="terço médio">terço médio</option>
                        <option value="terço inferior">terço inferior</option>
                    </Select>
                    <Select onChange={(e) => {
                        setSelect02Cisto01(e.target.value)
                    }}
                        value={Select02Cisto01}
                        isDisabled={DisableOptionsCisto01}
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
                        setCisto02Checkbox(!Cisto02Checkbox)
                    }}
                    >
                        Cisto 02
                    </Checkbox>
                    <Input onChange={(e) => {
                        setInputCisto02(e.target.value)
                    }}
                        value={InputCisto02}
                        isDisabled={DisableOptionsCisto02}
                        placeholder="mm"
                    />
                    <Select onChange={(e) => {
                        setSelect01Cisto02(e.target.value)
                    }}
                        value={Select01Cisto02}
                        isDisabled={DisableOptionsCisto02}
                    >
                        <option value="" disabled selected>
                            No
                        </option>
                        <option value="terço superior">terço superior</option>
                        <option value="terço médio">terço médio</option>
                        <option value="terço inferior">terço inferior</option>
                    </Select>
                    <Select onChange={(e) => {
                        setSelect02Cisto02(e.target.value)
                    }}
                        value={Select02Cisto02}
                        isDisabled={DisableOptionsCisto02}
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
                        setCisto03Checkbox(!Cisto03Checkbox)
                    }}
                    >
                        Cisto 03
                    </Checkbox>
                    <Input onChange={(e) => {
                        setInputCisto03(e.target.value)
                    }}
                        value={InputCisto03}
                        isDisabled={DisableOptionsCisto03}
                        placeholder="mm"
                    />
                    <Select onChange={(e) => {
                        setSelect01Cisto03(e.target.value)
                    }}
                        value={Select01Cisto03}
                        isDisabled={DisableOptionsCisto03}
                    >
                        <option value="" disabled selected>
                            No
                        </option>
                        <option value="terço superior">terço superior</option>
                        <option value="terço médio">terço médio</option>
                        <option value="terço inferior">terço inferior</option>
                    </Select>
                    <Select onChange={(e) => {
                        setSelect02Cisto03(e.target.value)
                    }}
                        value={Select02Cisto03}
                        isDisabled={DisableOptionsCisto03}
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
                        setCisto04Checkbox(!Cisto04Checkbox)
                    }}
                    >
                        Cisto 04
                    </Checkbox>
                    <Input onChange={(e) => {
                        setInputCisto04(e.target.value)
                    }}
                        value={InputCisto04}
                        isDisabled={DisableOptionsCisto04}
                        placeholder="mm"
                    />
                    <Select onChange={(e) => {
                        setSelect01Cisto04(e.target.value)
                    }}
                        value={Select01Cisto04}
                        isDisabled={DisableOptionsCisto04}
                    >
                        <option value="" disabled selected>
                            No
                        </option>
                        <option value="terço superior">terço superior</option>
                        <option value="terço médio">terço médio</option>
                        <option value="terço inferior">terço inferior</option>
                    </Select>
                    <Select onChange={(e) => {
                        setSelect02Cisto04(e.target.value)
                    }}
                        value={Select02Cisto04}
                        isDisabled={DisableOptionsCisto04}
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
        </Box>
    )
}