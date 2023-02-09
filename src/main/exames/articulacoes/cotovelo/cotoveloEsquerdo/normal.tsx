import { Box, Center, Checkbox } from "@chakra-ui/react";
import { useContext } from "react";
import { CotoveloEsquerdoNormalContext } from "../../../../../context/CotoveloEsquerdoNormalContext";

export function NormalEsquerdo() {
  const altura = "100%";
  const largura = "100%";

  let { setCotoveloEsquerdoLaudoNormal } = useContext(
    CotoveloEsquerdoNormalContext
  );

  const verificaChecked = (value) => {
    value.checked === true
      ? setCotoveloEsquerdoLaudoNormal(true)
      : setCotoveloEsquerdoLaudoNormal(false);
  };

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 20px 15px"
      mt="15px"
      marginBottom="10px"
    >
      <Center>
        <Checkbox
          id="tudoNormal"
          onChange={(e) => {
            verificaChecked(e.target);
          }}
        >
          Cotovelo Esquerdo normal
        </Checkbox>
      </Center>
    </Box>
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

//     let { setCotoveloEsquerdoLaudoNormal } = useContext(NormalContext)

//     const verificaChecked = (value) => {
//         value.checked === true ? setCotoveloEsquerdoLaudoNormal(true) : setCotoveloEsquerdoLaudoNormal(false);
//     }

/**
 * 
 *   <Checkbox
                    id="tudoNormal"
                    onChange={(e) => { verificaChecked(e.target) }}
                >Cotovelo Esquerdo normal</Checkbox>
 * 
 */

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
//                 >Cotovelo Esquerdo normal</Checkbox>
//             </Box>
//         </Box >
//     );
// }

// export default NormalEsquerdo;
