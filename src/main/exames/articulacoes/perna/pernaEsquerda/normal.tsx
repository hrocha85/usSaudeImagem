

import { Box, Checkbox } from "@chakra-ui/react";
import { useContext, } from "react";
import { PernaEsquerdoNormalContext } from "../../../../../context/PernaEsquerdoNormalContext";


export function NormalEsquerdo() {
    const altura = '100%'
    const largura = '300px'

    let { setPernaEsquerdoLaudoNormal } = useContext(PernaEsquerdoNormalContext)

    const verificaChecked = (value) => {
        value.checked === true ? setPernaEsquerdoLaudoNormal(true) : setPernaEsquerdoLaudoNormal(false);
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
            <Box w='300px' >
                <Checkbox
                    id="tudoNormal"
                    onChange={(e) => { verificaChecked(e.target) }}
                >Perna esquerda normal</Checkbox>
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

//     let { setPernaEsquerdoLaudoNormal } = useContext(NormalContext)


//     const verificaChecked = (value) => {
//         value.checked === true ? setPernaEsquerdoLaudoNormal(true) : setPernaEsquerdoLaudoNormal(false);
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
//                 >Perna Esquerdo normal</Checkbox>
//             </Box>
//         </Box >
//     );
// }

// export default NormalEsquerdo;