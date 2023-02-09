import { Box, Center, Checkbox } from "@chakra-ui/react";
import { useContext } from "react";
import { OmbroDireitoNormalContext } from "../../../../../context/OmbroDireitoNormalContext";

export function NormalDireito() {
  const altura = "100%";
  const largura = "100%";

  let { setOmbroDireitoLaudoNormal } = useContext(OmbroDireitoNormalContext);

  const verificaChecked = (value) => {
    value.checked === true
      ? setOmbroDireitoLaudoNormal(true)
      : setOmbroDireitoLaudoNormal(false);
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
          Ombro direito normal
        </Checkbox>
      </Center>
    </Box>
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

//     let { setOmbroDireitoLaudoNormal } = useContext(NormalContext)

//     const verificaChecked = (value) => {
//         value.checked === true ? setOmbroDireitoLaudoNormal(true) : setOmbroDireitoLaudoNormal(false);
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
//                 >Ombro direito normal</Checkbox>
//             </Box>
//         </Box >
//     );
// }

/**
 * 
 * <Checkbox
          id="tudoNormal"
          onChange={(e) => {
            verificaChecked(e.target);
          }}
        >
          Ombro direito normal
        </Checkbox>
 * 
 * 
 * 
 */

// export default NormalDireito;
