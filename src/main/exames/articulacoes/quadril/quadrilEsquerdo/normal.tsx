

import { Box, Checkbox } from "@chakra-ui/react";
import { useContext, } from "react";
import { QuadrilEsquerdoNormalContext } from "../../../../../context/QuadrilEsquerdoNormalContext";


export function NormalEsquerdo() {
    const altura = '100%'
    const largura = '250px'

    let { setQuadrilEsquerdoLaudoNormal } = useContext(QuadrilEsquerdoNormalContext)

    const verificaChecked = (value) => {
        value.checked === true ? setQuadrilEsquerdoLaudoNormal(true) : setQuadrilEsquerdoLaudoNormal(false);
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
                >Quadril Esquerdo normal</Checkbox>
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

//     let { setQuadrilEsquerdoLaudoNormal } = useContext(NormalContext)


//     const verificaChecked = (value) => {
//         value.checked === true ? setQuadrilEsquerdoLaudoNormal(true) : setQuadrilEsquerdoLaudoNormal(false);
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
//                 >Quadril Esquerdo normal</Checkbox>
//             </Box>
//         </Box >
//     );
// }

// export default NormalEsquerdo;