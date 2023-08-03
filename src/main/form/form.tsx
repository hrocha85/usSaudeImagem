import {
    Box,
    Button,
    Center,
    Link,
    Select,
    Stack,
    Text,
    Radio, RadioGroup
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import BGImage from "../images/bg_img.png";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';


function Form() {

    const form = useRef();

    const navigate = useNavigate();
    const [dadoTeste, setDadoteste] = useState('verdade')
    const [value, setValue] = useState('1')
    const [valuenovo, setValuenovo] = useState('1')

    const finalizaForm = (e) => {

        emailjs.sendForm('outlookMessage', 'template_6j5xp3j', e.target, 'qNFyg3V_FW8DLmNjL')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });


        localStorage.setItem("formPreenchido", dadoTeste)
        navigate("/Exames/")


    }

    return (


        <form onSubmit={finalizaForm}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );

    //     return (
    //         <Box
    //             w="100%"
    //             h="100vh"
    //             height={'100vh'} bgGradient='linear(to-b, blue.100, #fff)'
    //             backgroundSize="cover"
    //             backgroundClip="padding-box"
    //             backgroundRepeat="no-repeat"
    //             paddingBottom="10px"
    //             alignItems="center"
    //         >

    //             <Center>
    //                 <Box
    //                     position="absolute"
    //                     top="30%"
    //                     bg="#FAFAFA"
    //                     w="auto"
    //                     h="auto"
    //                     borderRadius="10.85px"
    //                     boxShadow="md"
    //                     padding="30px"
    //                 >
    //                     <RadioGroup onChange={setValue} value={value}>
    //                         <Text> exemplo questionario</Text>
    //                         <Stack direction='row'>
    //                             <Radio value='1'>First</Radio>
    //                             <Radio value='2'>Second</Radio>
    //                             <Radio value='3'>Third</Radio>
    //                         </Stack>
    //                     </RadioGroup>
    //                     <RadioGroup onChange={setValuenovo} value={valuenovo}>
    //                         <Text> exemplo questionario</Text>
    //                         <Stack direction='row'>
    //                             <Radio value='1'>First</Radio>
    //                             <Radio value='2'>Second</Radio>
    //                             <Radio value='3'>Third</Radio>
    //                         </Stack>
    //                     </RadioGroup>

    //                     <Button
    //                         bg='green'
    //                         onClick={() => finalizaForm()}
    //                     >
    //                         Finalizar pesquisa
    //                     </Button>
    //                 </Box>
    //             </Center>
    //         </Box>
    //     );
}

export default Form;
