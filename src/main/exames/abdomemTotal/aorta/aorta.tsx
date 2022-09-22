import { Box, Text, Checkbox, Select, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Aorta() {
    const altura = '100%'
    const largura = '66%'

    return (

        <Box
            bg="#FAFAFA"
            w={largura}
            h={altura}
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="10.85px"
            boxShadow="md"
            padding='24px 15px 20px 15px'
            mt='15px'
        >
            <Box
                borderBottom='1px'>

                <TituloNomeExame titulo='Aorta' />

                <Box
                    gap='30px'
                    display='flex'
                    flexWrap='wrap'
                    mb='20px'
                >
                    <Checkbox >Normal</Checkbox>
                    <Checkbox >Não Visibilizado</Checkbox>
                    <Checkbox >Ateromatosa</Checkbox>
                    <Checkbox>Aneurisma</Checkbox>
                </Box>

            </Box>
            {/* ------------------------------------------------------------------------------------------------------------ */}

            <Box
                gap='30px'
                display='flex'
                flexWrap='wrap'
                mt='20px'
            >

                <Box >
                    <Text>Localização:</Text>

                    <Select >
                        <option value='' disabled selected>Localização</option>
                        <option value='supra-renal'>Supra-renal</option>
                        <option value='tercoProximal'>terço proximal</option>
                        <option value='tercoMedio'>Terço médio</option>
                        <option value='tercoDistal'>Terço distal</option>
                        <option value='bifurcacao'>Bifurcação</option>
                        <option value='infraRenal'>Infra-renal</option>
                    </Select>
                </Box>

                <Box w='200px'>
                    <Text>Calire máximo:</Text>

                    <Input w='100%' placeholder='mm' />
                </Box>

                <Box w='200px'>
                    <Text>Extensão:</Text>

                    <Input w='100%' placeholder='mm' />
                </Box>
            </Box>
        </Box >
    );
}

export default Aorta;