/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function IndividualizarNodulos({ numCalculo }) {

    const [FrasesFigado, setFrasesFigado] = useState<any>([]);
    const [ConclusoesFigado, setConclusoesFigado] = useState<any>([]);

    const [NoduloCheckbox, setNoduloCheckbox] = useState(false)
    const [NoduloSelect1, setNoduloSelect1] = useState('')
    const [NoduloSelect2, setNoduloSelect2] = useState('')
    const [NoduloInput1, setNoduloInput1] = useState('')
    const [NoduloSelect3, setNoduloSelect3] = useState('')


    const removeFraseConclusaoNodulo = () => {
        ConclusoesFigado.map((e) => {
            if (e.includes("Nódulo hepático.")) {
                var index = ConclusoesFigado.indexOf(e);

                if (index > -1) {
                    ConclusoesFigado.splice(index, 1);
                    setConclusoesFigado((arr) => [...arr]);
                    new Format_Laudo(titulo_exame).Remove_Conclusao('Nódulo hepático.');
                }
            }
        });
    };

    const criaStringNodulo = (select1, select2, select3, input1) => {
        var string = `${numCalculo} Nódulo`
        const conclusaoNodulos = 'Nódulo hepático.'

        removeFraseNodulo()
        if (select1 !== '' && input1 !== '' && select2 !== '' && select3 !== '') {
            string = `${string} ${select1} de contornos ${select2}, medindo ${input1} cm, situado no ${select3}`;
            setFrasesFigado((arr) => [...arr, string]);
            removeFraseConclusaoNodulo()
            setConclusoesFigado((arr) => [...arr, conclusaoNodulos]);
        }
    };
    const removeFraseNodulo = () => {
        FrasesFigado.map((e) => {
            if (e.includes(`${numCalculo} Nódulo`)) {
                var index = FrasesFigado.indexOf(e);

                if (index > -1) {
                    FrasesFigado.splice(index, 1);
                    setFrasesFigado((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (NoduloCheckbox) {
            criaStringNodulo(NoduloSelect1, NoduloSelect2, NoduloSelect3, NoduloInput1)
        } else {
            removeFraseConclusaoNodulo()
            removeFraseNodulo()
            setNoduloSelect1('')
            setNoduloSelect2('')
            setNoduloSelect3('')
            setNoduloInput1('')
        }
    }, [NoduloCheckbox, NoduloSelect1, NoduloSelect2, NoduloSelect3, NoduloInput1])

    const subExame = `Fígado. Nódulo ${numCalculo}`;
    const titulo_exame = "Abdômen total";

    useEffect(() => {
        if (Object.keys(FrasesFigado).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FrasesFigado,
                ConclusoesFigado
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FrasesFigado,
                ConclusoesFigado
            ).Format_Laudo_Create_Storage();
        }
    }, [FrasesFigado]);

    return (

        <Box display='flex' flexWrap='wrap'>

            <Checkbox

                onChange={(e) => {
                    setNoduloCheckbox(!NoduloCheckbox);
                }}
            >
                {numCalculo} Nódulo
            </Checkbox>
            <Select
                w='150px'
                isDisabled={!NoduloCheckbox}
                value={NoduloSelect1}
                onChange={(e) => {
                    setNoduloSelect1(e.target.value);
                }}
            >
                <option value="" disabled selected>
                    Selecione
                </option>
                <option value="hiperecongênico">Hiperecongênico</option>
                <option value="hipoecogênico">Hipoecogênico</option>
                <option value="hipoecogênico (hemangioma)">Hipoecogênico (hemangioma)</option>

            </Select>
            <Text alignSelf='center'>de contornos</Text>
            <Select
                w='150px'
                isDisabled={!NoduloCheckbox}
                value={NoduloSelect2}
                onChange={(e) => {
                    setNoduloSelect2(e.target.value);
                }}
            >
                <option value="" disabled selected>
                    Contornos
                </option>
                <option value="Regulares">Regulares</option>
                <option value="Lobulados">Lobulados</option>
                <option value="Irregulares">Irregulares</option>
            </Select>
            <Text alignSelf='center'>medindo</Text>
            <Input
                p='0px'
                textAlign='center'
                w='60px'
                isDisabled={!NoduloCheckbox}
                value={NoduloInput1}
                onChange={(e) => {
                    setNoduloInput1(e.target.value);
                }}
                placeholder="cm"
            />
            <Text alignSelf='center'>cm, situado no</Text>
            <Select
                w='150px'
                isDisabled={!NoduloCheckbox}
                value={NoduloSelect3}
                onChange={(e) => {
                    setNoduloSelect3(e.target.value);
                }}
            >
                <option value="" disabled selected>
                    Selecione
                </option>
                <option value="Segmento I">Segmento I</option>
                <option value="Segmento II">Segmento II</option>
                <option value="Segmento III">Segmento III</option>
                <option value="Segmento IV">Segmento IV</option>
                <option value="Segmento V">Segmento V</option>
                <option value="Segmento VI">Segmento VI</option>
                <option value="Segmento VII">Segmento VII</option>
                <option value="Segmento VIII">Segmento VIII</option>
            </Select>
        </Box >
    );
}
