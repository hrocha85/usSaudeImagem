

import { Box, Checkbox } from "@chakra-ui/react";
import { useContext, } from "react";
import { QuadrilDireitoNormalContext } from "../../../../../context/QuadrilDireitoNormalContext";


export function NormalDireito() {
    const altura = '100%'
    const largura = '250px'

    let { setQuadrilDireitoLaudoNormal } = useContext(QuadrilDireitoNormalContext)

    const verificaChecked = (value) => {
        value.checked === true ? setQuadrilDireitoLaudoNormal(true) : setQuadrilDireitoLaudoNormal(false);
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
                >Quadril direito normal</Checkbox>
            </Box>
        </Box >
    );
}
export default NormalDireito;


// export default NormalDireito;
// import { Box, Checkbox } from "@chakra-ui/react";
// import { useContext, } from "react";
// import { NormalContext } from "../../../../../context/NormalContext";

// export function NormalDireito() {
//     const altura = '100%'
//     const largura = '250px'

//     let { setQuadrilDireitoLaudoNormal } = useContext(NormalContext)


//     const verificaChecked = (value) => {
//         value.checked === true ? setQuadrilDireitoLaudoNormal(true) : setQuadrilDireitoLaudoNormal(false);
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
//                 >Quadril direito normal</Checkbox>
//             </Box>
//         </Box >
//     );
// }

// export default NormalDireito;