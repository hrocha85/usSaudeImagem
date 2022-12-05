

import { Box, Checkbox } from "@chakra-ui/react";
import { useContext, } from "react";
import { AntebracoEsquerdoNormalContext } from "../../../../../context/AntebracoEsquerdoNormalContext";


export function NormalEsquerdo() {
    const altura = '100%'
    const largura = '300px'

    let { setAntebracoEsquerdoLaudoNormal } = useContext(AntebracoEsquerdoNormalContext)

    const verificaChecked = (value) => {
        value.checked === true ? setAntebracoEsquerdoLaudoNormal(true) : setAntebracoEsquerdoLaudoNormal(false);
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
                >Antebraço esquerdo normal</Checkbox>
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

//     let { setAntebracoEsquerdoLaudoNormal } = useContext(NormalContext)


//     const verificaChecked = (value) => {
//         value.checked === true ? setAntebracoEsquerdoLaudoNormal(true) : setAntebracoEsquerdoLaudoNormal(false);
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
//                 >Antebraco Esquerdo normal</Checkbox>
//             </Box>
//         </Box >
//     );
// }

// export default NormalEsquerdo;