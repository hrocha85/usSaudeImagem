

import { Box, Checkbox } from "@chakra-ui/react";
import { useContext, } from "react";
import { AntebracoDireitoNormalContext } from "../../../../../context/AntebracoDireitoNormalContext";


export function NormalDireito() {
    const altura = '100%'
    const largura = '250px'

    let { setAntebracoDireitoLaudoNormal } = useContext(AntebracoDireitoNormalContext)

    const verificaChecked = (value) => {
        value.checked === true ? setAntebracoDireitoLaudoNormal(true) : setAntebracoDireitoLaudoNormal(false);
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
                >Antebraço direito normal</Checkbox>
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

//     let { setAntebracoDireitoLaudoNormal } = useContext(NormalContext)


//     const verificaChecked = (value) => {
//         value.checked === true ? setAntebracoDireitoLaudoNormal(true) : setAntebracoDireitoLaudoNormal(false);
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
//                 >Antebraco direito normal</Checkbox>
//             </Box>
//         </Box >
//     );
// }

// export default NormalDireito;