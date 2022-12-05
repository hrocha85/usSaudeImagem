

import { Box, Checkbox } from "@chakra-ui/react";
import { useContext, } from "react";
import { BracoDireitoNormalContext } from "../../../../../context/BracoDireitoNormalContext";


export function NormalDireito() {
    const altura = '100%'
    const largura = '250px'

    let { setBracoDireitoLaudoNormal } = useContext(BracoDireitoNormalContext)

    const verificaChecked = (value) => {
        value.checked === true ? setBracoDireitoLaudoNormal(true) : setBracoDireitoLaudoNormal(false);
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
                >Braço direito normal</Checkbox>
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

//     let { setBracoDireitoLaudoNormal } = useContext(NormalContext)


//     const verificaChecked = (value) => {
//         value.checked === true ? setBracoDireitoLaudoNormal(true) : setBracoDireitoLaudoNormal(false);
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
//                 >Braco direito normal</Checkbox>
//             </Box>
//         </Box >
//     );
// }

// export default NormalDireito;