import { Box, Checkbox, Select, Grid, GridItem, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import {useState} from 'react';

function Baco() {
    const altura = '100%'
    const largura = '890px'

    const [baco, setBaco]= useState({ 
        normal: false, 
        aumentadoComEcotextura:"",
        naoVisibilizado:"",
        bacoAcessorio:"", 
        calcificacoes:""
    })
    const [checkValue, setCheckvalue] = useState({ 
        normal: false, 
        aumentadoComEcotextura:false,
        naoVisibilizado:false,
        bacoAcessorio:false, 
        calcificacoes:false
    })



    const criarString = (value) =>{
        console.log(value.id, "valor recebio")

    }

    const verificaChecked = (value) => {
        console.log(value, value.checked, "value recebido")

        switch (value.id) {
            case 'normal':
                if(value.checked == true){
                setCheckvalue({
                    aumentadoComEcotextura:true,
                    normal:false,
                    naoVisibilizado:true,
                    bacoAcessorio:true,
                    calcificacoes:true
                    })
                }else{
                    setCheckvalue({
                    aumentadoComEcotextura:false,
                    normal:false,
                    naoVisibilizado:false,
                    bacoAcessorio:false,
                    calcificacoes:false
                 })}
            
              break;
            case 'aumentadoComEcotextura':
                if(value.checked == true){
                    setCheckvalue({
                        aumentadoComEcotextura:false,
                        normal:true,
                        naoVisibilizado:true,
                        bacoAcessorio:true,
                        calcificacoes:true
                        })
                    }else{
                        setCheckvalue({
                        aumentadoComEcotextura:false,
                        normal:false,
                        naoVisibilizado:false,
                        bacoAcessorio:false,
                        calcificacoes:false
                     })}
                break;
            case 'naoVisibilizado':
                if(value.checked == true){
                    setCheckvalue({
                        aumentadoComEcotextura:true,
                        normal:true,
                        naoVisibilizado:false,
                        bacoAcessorio:true,
                        calcificacoes:true
                        })
                    }else{
                        setCheckvalue({
                        aumentadoComEcotextura:false,
                        normal:false,
                        naoVisibilizado:false,
                        bacoAcessorio:false,
                        calcificacoes:false
                     })}
                break;
              case 'calcificacoes':
                if(value.checked == true){
                    setCheckvalue({
                        aumentadoComEcotextura:true,
                        normal:true,
                        naoVisibilizado:true,
                        bacoAcessorio:true,
                        calcificacoes:false
                        })
                    }else{
                        setCheckvalue({
                        aumentadoComEcotextura:false,
                        normal:false,
                        naoVisibilizado:false,
                        bacoAcessorio:false,
                        calcificacoes:false
                     })}
                break;
            default:
              console.log("nao achou o id");
              break;
          }
          
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
            padding='24px 15px 0px 15px'
            mt='15px'
        >
            <Box
                borderBottom='1px'>

                <TituloNomeExame titulo='Baço' />

                <Box
                    mt='10px'
                    mb='20px'
                    display='flex'
                >
                    <Grid
                        templateColumns='repeat(5, 1fr)'
                        templateRows='repeat(2, 1fr)'
                        gap={3}
                    >
                        <GridItem w='100%' h='28px'>
                            <Checkbox 
                            disabled={checkValue.normal}
                            id="normal"
                            onChange={(e) =>{verificaChecked(e.target)}}
                            >Normal</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px'>
                            <Checkbox ml='-65px'
                            disabled={checkValue.aumentadoComEcotextura}
                            id="aumentadoComEcotextura"
                            onChange={(e) =>{verificaChecked(e.target)}}
                            >Aumentado com ecotextura</Checkbox>
                        </GridItem>



                        <GridItem w='100%' h='28px'>
                            <Checkbox
                              disabled={checkValue.naoVisibilizado}
                              id="naoVisibilizado"
                              onChange={(e) =>{verificaChecked(e.target)}}
                            >Não visibilizado</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px' ml='10px'>
                            <Checkbox
                              disabled={checkValue.bacoAcessorio}
                              id="bacoAcessorio"
                              onChange={(e) =>{verificaChecked(e.target)}}
                            >Baço Acessório</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px'>
                            <Checkbox
                              disabled={checkValue.calcificacoes}
                              id="calcificacoes"
                              onChange={(e) =>{verificaChecked(e.target)}}>Calcificalções</Checkbox>
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px'>

                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px' ml='-65px'>
                            <Select
                                w='160px'>
                                <option value='' disabled selected>Homogênea</option>
                                <option value='Homogênea'>Homogênea</option>
                                <option value='Heterogênea'>Heterogênea</option>
                            </Select>
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px'>
                            <Select
                                w='160px'>
                                <option value='ausenciaCirurgica'>ausência cirúrgica</option>
                                <option value='interposicaoGasosa'>interposição gasosa</option>
                            </Select>
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px' ml='10px'>
                            <Input w='160px' placeholder='mm' />
                        </GridItem>

                        <GridItem w='100%' h='28px' mt='-8px'>
                            <Input w='160px' placeholder='mm' />
                        </GridItem>

                    </Grid>
                </Box>
            </Box >

            <Box
                mt='20px'
                h='100px'
            >
                <Grid
                    templateColumns='repeat(1, 1fr)'
                    templateRows='repeat(2, 1fr)'
                    gap={3}
                >
                    <GridItem w='100%' h='28px'>
                        <Checkbox>Cisto</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px'>
                        <Input w='200px' placeholder='mm' />
                    </GridItem>
                </Grid>
            </Box>
        </Box >
    );
}

export default Baco;