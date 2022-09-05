import { Box, Button, Checkbox, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import BGImage from "../images/fundoazul.svg";

function Home() {

const ListaExame = {
    exames: [
      {
        key: 1,
        nomeExame: "Abdomen total",
      }, 
      { key: 2, 
        nomeExame: "Abdomen Superior",
      }
    ]
  }


    return (
        <Box
            w="100%"
            h="100%"
            verticalAlign="center"
            alignSelf="center"
            alignItems="center"
            backgroundImage={BGImage}
            backgroundPosition="fixed"
            backgroundSize="cover"
            backgroundClip="padding-box"
            backgroundRepeat="no-repeat"
            paddingBottom="10px"
        >
            <Box> 
                {ListaExame.exames.map(exame =>{
                    return(
                        <Link to={exame.key.toString()}>  
                         {exame.nomeExame}
                        </Link> 
                    )
                })}
            
            </Box>
        </Box>
    );
}

export default Home;