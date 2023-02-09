/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Flex, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../component/function_format_laudo";

export default function NoduloSolido() {
    const [FraseNoduloSolido, setFraseNoduloSolido] = useState<any>([]);
    const [NoduloCheckbox, setNoduloCheckbox] = useState(false)
    const [ValueSelectNodulo1, setValueSelectNodulo1] = useState('')
    const [ValueSelectNodulo2, setValueSelectNodulo2] = useState('')
    const [ValueSelectNodulo3, setValueSelectNodulo3] = useState('')
    const [ValueSelectNodulo4, setValueSelectNodulo4] = useState('')
    const [DisableSelectNodulo, setDisableSelectNodulo] = useState(true)
    const [ValueInput1, setValueInput1] = useState('')
    const [ValueInput2, setValueInput2] = useState('')

    const subExame = "Rins e ureteres. Nódulo sólido";
    const titulo_exame = "Abdomen total";

    const criaStringNodulo = () => {
        let string = 'Presença de um nódulo '
        removeNodulo()
        var ValueInput1cm = new Convert_Medida(ValueInput1).Convert_Medida()
        var ValueInput2cm = new Convert_Medida(ValueInput2).Convert_Medida()
        if (ValueSelectNodulo1 != '' && ValueSelectNodulo2 != '' && ValueSelectNodulo3 != '' && ValueSelectNodulo4 != '' &&
            ValueInput1 != '' && ValueInput2 != '') {
            string = `${string} ${ValueSelectNodulo1} de ${ValueSelectNodulo2}, medindo ${ValueInput1cm}x${ValueInput2cm} cm 
            localizado no ${ValueSelectNodulo3} do ${ValueSelectNodulo4}.`
            setFraseNoduloSolido((arr) => [...arr, string]);
        }
    }

    const removeNodulo = () => {
        FraseNoduloSolido.map((e) => {
            if (e.includes("Presença de um nódulo ")) {
                var index = FraseNoduloSolido.indexOf(e);

                if (index > -1) {
                    FraseNoduloSolido.splice(index, 1);
                    setFraseNoduloSolido((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (NoduloCheckbox) {
            criaStringNodulo()
            setDisableSelectNodulo(false)
        } else {
            removeNodulo()
            setDisableSelectNodulo(true)
            setValueSelectNodulo1('')
            setValueSelectNodulo2('')
            setValueSelectNodulo3('')
            setValueSelectNodulo4('')
            setValueInput1('')
            setValueInput2('')
        }
    }, [NoduloCheckbox, ValueInput1, ValueInput2, ValueSelectNodulo1, ValueSelectNodulo2, ValueSelectNodulo3, ValueSelectNodulo4])

    useEffect(() => {
        if (Object.keys(FraseNoduloSolido).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FraseNoduloSolido
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FraseNoduloSolido
            ).Format_Laudo_Create_Storage();
        }
    }, [FraseNoduloSolido]);
    return (
        <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" p='5px' mt='5px' >
            <Text fontWeight="bold" >Nódulo sólido</Text>
            <Box display='flex' flexWrap='wrap' gap='10px'>
                <Checkbox
                    onChange={() => setNoduloCheckbox(!NoduloCheckbox)}>
                </Checkbox>
                <Select w='150px'
                    isDisabled={DisableSelectNodulo}
                    value={ValueSelectNodulo1}
                    onChange={(e) => setValueSelectNodulo1(e.target.value)}
                >
                    <option selected disabled value="">Selecione</option>
                    <option value="hipoecogênico">hipoecogênico</option>
                    <option value="hiperecogênico">hiperecogênico</option>
                    <option value="isoecogênico">isoecogênico</option>
                </Select>
                <Select w='150px'
                    isDisabled={DisableSelectNodulo}
                    value={ValueSelectNodulo2}
                    onChange={(e) => setValueSelectNodulo2(e.target.value)}
                >
                    <option selected disabled value="">Selecione</option>
                    <option value="contornos regulares">contornos regulares</option>
                    <option value="contornos irregulares">contornos irregulares</option>
                </Select>
                <Input w='60px'
                    isDisabled={DisableSelectNodulo}
                    value={ValueInput1}
                    placeholder="00"
                    onChange={(e) => setValueInput1(e.target.value)}
                />
                <Text alignSelf='center'>x</Text>
                <Input w='60px'
                    isDisabled={DisableSelectNodulo}
                    value={ValueInput2}
                    placeholder="00"
                    onChange={(e) => setValueInput2(e.target.value)}
                />
                <Text alignSelf='center'>mm</Text>
                <Text alignSelf='center'>no</Text>
                <Select w='150px'
                    isDisabled={DisableSelectNodulo}
                    value={ValueSelectNodulo3}
                    onChange={(e) => setValueSelectNodulo3(e.target.value)}
                >
                    <option selected disabled value="">Selecione</option>
                    <option value="terço superior">terço superior</option>
                    <option value="terço médio">terço médio</option>
                    <option value="terço inferior">terço inferior</option>
                    <option value="pólo superior">pólo superior</option>
                    <option value="pólo inferior">pólo inferior</option>
                </Select>
                <Select w='150px'
                    isDisabled={DisableSelectNodulo}
                    value={ValueSelectNodulo4}
                    onChange={(e) => setValueSelectNodulo4(e.target.value)}
                >
                    <option selected disabled value="">Selecione</option>
                    <option value="rim esquerdo">rim esquerdo</option>
                    <option value="rim direito">rim direito</option>
                </Select>
            </Box >
        </Box>
    )
}