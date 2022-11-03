/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function HerniaIncisional() {
    const altura = "100%";
    const largura = "95%";

    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

    const [HerniaIncisional, setHerniaIncisional] = useState('')
    const [HerniaIncisionalCheckbox, setCheckboxHerniaIncisional] = useState(false)
    const [disableHerniaIncisional, setDisableHerniaIncisional] = useState(true)

    const [LocalSelect, setLocalSelect] = useState("");
    const [TercoSelect, setTercoSelect] = useState("");
    const [medida1Nodulo, setMedida1Nodulo] = useState('')
    const [medida2Nodulo, setMedida2Nodulo] = useState('')

    useEffect(() => {
        HerniaIncisionalCheckbox ? setDisableHerniaIncisional(false) :
            setDisableHerniaIncisional(true); removeHerniaIncisional(); setHerniaIncisional('');
        setLocalSelect(''); setTercoSelect(''); setMedida1Nodulo(''); setMedida2Nodulo('')
    }, [HerniaIncisionalCheckbox])


    const criaStringHerniaIncisional = (local, plano, medida1, medida2) => {
        removeHerniaIncisional()
        if (local !== '' && plano !== '' && medida1 !== '' && medida2 !== '') {
            let string = `Hérnia incisional ${local},  no plano ${plano},
      medindo ${medida1} x ${medida2} mm`
            setLaudoPrin((arr) => [...arr, string])
        }
    }

    const removeHerniaIncisional = () => {
        laudoPrin.map((e) => {
            if (e.includes("Hérnia incisional ")) {
                let index = laudoPrin.indexOf(e);
                //caso o valor enviado exista no array, vai remover com splice e setar array novamente
                if (index > -1) {
                    laudoPrin.splice(index, 1);
                    setLaudoPrin((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        criaStringHerniaIncisional(LocalSelect, TercoSelect, medida1Nodulo, medida2Nodulo)
    }, [LocalSelect, TercoSelect, medida1Nodulo, medida2Nodulo])

    return (
        <Box
            bg="#FAFAFA"
            w={largura}
            h={altura}
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="10.85px"
            boxShadow="md"
            padding="15px 15px 20px 15px"
            mt="10px"
        >
            <TituloNomeExame titulo="Hérnia incisional" />

            <Box gap="15px" display="flex" flexWrap="wrap">

                <Stack
                    w='100%'>

                    <Checkbox onChange={(e) => setCheckboxHerniaIncisional(!HerniaIncisionalCheckbox)}
                        mr='30px'
                    >Hérnia incisional</Checkbox>

                    <Box
                        display='flex'
                        flexWrap="wrap"
                    >
                        <Text w='80px'>Local</Text>
                        <Select
                            isDisabled={disableHerniaIncisional}
                            w='200px'
                            value={LocalSelect}
                            onChange={(e) => { setLocalSelect(e.target.value) }}
                        >
                            <option value='' disabled selected>Local</option>
                            <option value="no hipogástrio">no hipogástrio</option>
                            <option value="no hipocôndrio direito">no hipocôndrio direito</option>
                            <option value="no hipocôndrio esquerdo">no hipocôndrio esquerdo</option>
                            <option value="na região lombar direita">na região lombar direita</option>
                            <option value="na região lombar esquerda">na região lombar esquerda</option>
                            <option value="no flanco direito">no flanco direito</option>
                            <option value="no flanco esquerdo">no flanco esquerdo</option>
                            <option value="na fossa ilíaca direita">na fossa ilíaca direita</option>
                            <option value="no fossa ilíaca esquerda">no fossa ilíaca esquerda</option>
                        </Select>
                    </Box>
                    <Box
                        display='flex'>
                        <Text w='80px'>no terço</Text>
                        <Select
                            isDisabled={disableHerniaIncisional}
                            w='200px'
                            value={TercoSelect}
                            onChange={(e) => { setTercoSelect(e.target.value) }}
                        >
                            <option value='' disabled selected>no plano</option>
                            <option value="direito">direito</option>
                            <option value="medio">medio</option>
                            <option value="esquerdo">esquerdo</option>
                            <option value="superior">superior</option>
                            <option value="inferior">inferior</option>
                        </Select>
                    </Box>
                    <Box
                        display='flex'>
                        <Text>Medindo</Text>
                        <Input
                            isDisabled={disableHerniaIncisional}
                            w="35px"
                            h="30px"
                            value={medida1Nodulo}
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setMedida1Nodulo(e.target.value) }}
                        />
                        <Text>x</Text>
                        <Input
                            isDisabled={disableHerniaIncisional}
                            w="35px"
                            h="30px"
                            value={medida2Nodulo}
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setMedida2Nodulo(e.target.value) }}
                        />
                        <Text>mm</Text>
                    </Box>
                </Stack>
            </Box >

        </Box >
    );
}
export default HerniaIncisional;
