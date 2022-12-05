

import { Box, Checkbox } from "@chakra-ui/react";
import { useContext, } from "react";
import { DedoEsquerdoNormalContext } from "../../../../../context/DedoEsquerdoNormalContext";


export function NormalEsquerdo() {
    const altura = '100%'
    const largura = '250px'

    let { setDedoEsquerdoLaudoNormal } = useContext(DedoEsquerdoNormalContext)

    const verificaChecked = (value) => {
        value.checked === true ? setDedoEsquerdoLaudoNormal(true) : setDedoEsquerdoLaudoNormal(false);
    }

    return (
        <Box
            bg="#FAFAFA"
            w={largura}
            h={altura}
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="10.85px"
            boxShadow="md"
            padding='10px 15px 10px 15px'
            mt='2px'
            mb='5px'>
            <Box w='100%' >
                <Checkbox
                    id="tudoNormal"
                    onChange={(e) => { verificaChecked(e.target) }}
                >Dedos mão direita normal</Checkbox>
            </Box>
        </Box >
    );
}
export default NormalEsquerdo;


// export default NormalEsquerdo;
// import { Box, Checkbox } from "@chakra-ui/react";
// import { useContext, } from "react";
// import { NormalContext } from "../../../../../context/NormalContext";

// export function NormalEsquerdo() {
//     const altura = '100%'
//     const largura = '250px'

//     let { setDedoEsquerdoLaudoNormal } = useContext(NormalContext)


//     const verificaChecked = (value) => {
//         value.checked === true ? setDedoEsquerdoLaudoNormal(true) : setDedoEsquerdoLaudoNormal(false);
//     }

//     return (
//         <Box
//             bg="#FAFAFA"
//             w={largura}
//             h={altura}
//             bgPosition="center"
//             bgRepeat="no-repeat"
//             borderRadius="10.85px"
//             boxShadow="md"
//             padding='10px 15px 10px 15px'
//             mt='2px'
//             mb='5px'>
//             <Box w='100%' >
//                 <Checkbox
//                     id="tudoNormal"
//                     onChange={(e) => { verificaChecked(e.target) }}
//                 >Dedo Esquerdo normal</Checkbox>
//             </Box>
//         </Box >
//     );
// }

// export default NormalEsquerdo;