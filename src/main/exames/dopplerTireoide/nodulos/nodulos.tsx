/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Checkbox, Flex, Input, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import IndividualizarNodulos from "./individualizarNodulos";

function Nodulos() {
  const altura = "100%";
  const largura = "66%";


  const [FraseNodulos, setFraseNodulos] = useState<any>([]);
  const [ConclusaoNodulosDireito, setConclusaoNodulosDireito] = useState<any>([]);

  const subExame = "Nódulos";
  const titulo_exame = "Doppler da Tireóide";

  var soma = 5

  var numberArray = [1, 2, 3, 4, 5];

  const [contador, setContador] = useState(6);
  const [elementos, setElementos] = useState<any>([]);

  const [TamanhoInput1, setTamanhoInput1] = useState("");
  const [TamanhoInput2, setTamanhoInput2] = useState("");
  const [SelectLocalizado, setSelectLocalizado] = useState("");
  const [SelectDo, setSelectDo] = useState("");
  const [SelectConsistencia, setSelectConsistencia] = useState("");
  const [SelectEcogenicidade, setSelectEcogenicidade] = useState("");
  const [SelectMargens, setSelectMargens] = useState("");
  const [SelectOrientacao, setSelectOrientacao] = useState("");
  const [SelectCalcificacoes, setSelectCalcificacoes] = useState("");
  const [SelectDoppler, setSelectDoppler] = useState("");

  const [multiplosCalculosCheckBox, setmultiplosCalculosCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  function adicionarArray() {
    numberArray.push(soma += 1)

    console.log(numberArray)

  }

  // useEffect(() => {
  //   console.log("aqaa")
  // }, [Nodulos()])
  function Nodulos() {
    return (
      <>
        {numberArray.map((num, key) => {
          return (
            <IndividualizarNodulos
              key={key}
              numCalculo={num}

            />
          );
        })}
      </>
    )
  }

  // const criaStringMultiplosNodulos = () => {
  //   removeMultiplosCalculos();
  //   removeConclusao()
  //   var conclusao = `Falta conclusao ${contador}`
  //   if (TamanhoInput1 !== '' && TamanhoInput2 !== '' && SelectLocalizado !== '' && SelectDo !== '' && SelectConsistencia !== '' && SelectEcogenicidade
  //     !== '' && SelectMargens !== '' && SelectOrientacao !== '' && SelectCalcificacoes !== '' && SelectDoppler) {
  //     const medida = new Convert_Medida(TamanhoInput1).Convert_Medida()
  //     const medida2 = new Convert_Medida(TamanhoInput2).Convert_Medida()
  //     var string = `Falta Frase ${contador} ${medida} x ${medida2} ${SelectLocalizado} ${SelectDo} ${SelectConsistencia} ${SelectEcogenicidade}
  //     ${SelectMargens} ${SelectOrientacao} ${SelectCalcificacoes} ${SelectDoppler}.`;
  //     setFraseNodulos((arr) => [...arr, string]);
  //     setConclusaoNodulosDireito((arr) => [...arr, conclusao]);
  //   }
  // };

  // const removeMultiplosCalculos = () => {
  //   FraseNodulos.map((e) => {
  //     if (e.includes(`Falta Frase ${contador}`)) {
  //       var index = FraseNodulos.indexOf(e);

  //       if (index > -1) {
  //         FraseNodulos.splice(index, 1);
  //         setFraseNodulos((arr) => [...arr]);
  //       }
  //     }
  //   });
  // };
  // const removeConclusao = () => {
  //   ConclusaoNodulosDireito.map((e) => {
  //     if (e.includes(`Falta conclusao ${contador}`)) {
  //       var index = ConclusaoNodulosDireito.indexOf(e);

  //       if (index > -1) {
  //         ConclusaoNodulosDireito.splice(index, 1);
  //         setConclusaoNodulosDireito((arr) => [...arr]);
  //         new Format_Laudo(titulo_exame).Remove_Conclusao_Select(`Falta conclusao ${contador}`)
  //       }
  //     }
  //   });
  // };

  // useEffect(() => {
  //   if (multiplosCalculosCheckBox) {
  //     setDisableSelect(false)
  //     criaStringMultiplosNodulos();
  //   } else {
  //     removeConclusao()
  //     setDisableSelect(true)
  //     removeMultiplosCalculos();
  //     setTamanhoInput1("");
  //     setTamanhoInput2("");
  //     setSelectLocalizado("");
  //     setSelectDo("");
  //     setSelectConsistencia("");
  //     setSelectEcogenicidade("");
  //     setSelectMargens("");
  //     setSelectOrientacao("");
  //     setSelectCalcificacoes("");
  //     setSelectDoppler("");
  //   }
  // }, [multiplosCalculosCheckBox, TamanhoInput1, TamanhoInput2, SelectLocalizado, SelectDo, SelectConsistencia, SelectEcogenicidade, SelectMargens, SelectOrientacao, SelectCalcificacoes, SelectDoppler]);



  // function adicionarElemento() {
  //   const novoElemento = <Box gap="25px" display="flex" flexWrap="wrap" mt="20px" mb="10px">
  //     <Box w="160px">
  //       <Checkbox onChange={() => setmultiplosCalculosCheckBox(!multiplosCalculosCheckBox)}        >
  //         Nódulo {contador}
  //       </Checkbox>

  //       <Select
  //         onChange={(e) => {
  //           setSelectLocalizado(e.target.value);
  //         }}
  //         value={SelectLocalizado}
  //         mt="5px"
  //       >
  //         <option value="" disabled selected>
  //           Localizado no
  //         </option>
  //         <option value="terço Superior">Terço superior</option>
  //         <option value="terço Medio">Terço medio</option>
  //         <option value="terço Inferior">Terço inferior</option>
  //         <option value="no istmo">Terço inferior</option>
  //       </Select>
  //       <Select
  //         onChange={(e) => {
  //           setSelectDo(e.target.value);
  //         }}
  //         value={SelectDo}
  //         mt="5px"
  //       >
  //         <option value="" disabled selected>
  //           Do
  //         </option>
  //         <option value="Lobo direito">Lobo direito</option>
  //         <option value="Lobo esquerdo">Lobo esquerdo</option>
  //         <option value="Istmo">Istmo</option>
  //       </Select>
  //       <Box mt="5px">
  //         <Input
  //           onChange={(e) => setTamanhoInput1(e.target.value)}
  //           value={TamanhoInput1}
  //           w="55px"
  //           placeholder="00"
  //         />
  //         x
  //         <Input
  //           onChange={(e) => setTamanhoInput2(e.target.value)}
  //           value={TamanhoInput2}
  //           w="55px"
  //           placeholder="00"
  //         />
  //         mm
  //       </Box>
  //       <Select
  //         onChange={(e) => {
  //           setSelectConsistencia(e.target.value);
  //         }}
  //         value={SelectConsistencia}
  //         mt="5px"
  //       >
  //         <option value="" disabled selected>
  //           Consistência
  //         </option>
  //         <option value="sólida">Sólida</option>
  //         <option value="cística com componente sólido">
  //           Cística com componente sólido
  //         </option>
  //         <option value="sólida com componente cístico">
  //           Sólida com componente cístico
  //         </option>
  //         <option value="espongiforme">Espongiforme</option>
  //       </Select>
  //       <Select
  //         onChange={(e) => {
  //           setSelectEcogenicidade(e.target.value);
  //         }}
  //         value={SelectEcogenicidade}
  //         mt="5px"
  //       >
  //         <option value="" disabled selected>
  //           Ecogenicidade
  //         </option>
  //         <option value="hipoecogenico">Hipoecogênico</option>
  //         <option value="hiperecogenico">Hiperecogênico</option>
  //         <option value="isoecogenico">Isoecogênico</option>
  //       </Select>
  //       <Select
  //         onChange={(e) => {
  //           setSelectMargens(e.target.value);
  //         }}
  //         value={SelectMargens}
  //         mt="5px"
  //       >
  //         <option value="" disabled selected>
  //           Margens
  //         </option>
  //         <option value="regulares com halo">Regulares com halo</option>
  //         <option value="regulares sem halo">Regulares sem halo</option>
  //         <option value="irregulares com halo">Irregulares com halo</option>
  //         <option value="irregulares sem halo">Irregulares sem halo</option>
  //         <option value="microlobuladas com halo">
  //           Microlobuladas com halo
  //         </option>
  //         <option value="microlobuladas sem halo">
  //           Microlobuladas sem halo
  //         </option>
  //       </Select>

  //       <Select
  //         onChange={(e) => {
  //           setSelectOrientacao(e.target.value);
  //         }}
  //         value={SelectOrientacao}
  //         mt="5px"
  //       >
  //         <option value="" disabled selected>
  //           Orientação
  //         </option>
  //         <option value="paralelo à pele">Paralelo à pele</option>
  //         <option value="não paralelo à pele">Não paralelo à pele</option>
  //       </Select>
  //       <Select
  //         onChange={(e) => {
  //           setSelectCalcificacoes(e.target.value);
  //         }}
  //         value={SelectCalcificacoes}
  //         mt="5px"
  //       >
  //         <option value="" disabled selected>
  //           Calcificações
  //         </option>
  //         <option value="sem calcificações">Sem calcificações</option>
  //         <option value="com calcificações casca de ovo">
  //           Com calcificações casca de ovo
  //         </option>
  //         <option value="com calcificações grosseiras">
  //           Com calcificações grosseiras
  //         </option>
  //         <option value="com microcalcificações">
  //           Com microcalcificações
  //         </option>
  //       </Select>
  //       <Select
  //         onChange={(e) => {
  //           setSelectDoppler(e.target.value);
  //         }}
  //         value={SelectDoppler}
  //         mt="5px"        >
  //         <option value="" disabled selected>
  //           Doppler
  //         </option>
  //         <option value="Chammas I">Chammas I</option>
  //         <option value="Chammas II">Chammas II</option>
  //         <option value="Chammas III">Chammas III</option>
  //         <option value="Chammas IV">Chammas IV</option>
  //         <option value="Chammas V">Chammas V</option>
  //       </Select>
  //     </Box>
  //   </Box>
  //   setContador(contador + 1);
  //   setElementos([...elementos, novoElemento]);
  // }

  useEffect(() => {
    if (Object.keys(FraseNodulos).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseNodulos
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseNodulos
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseNodulos]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 24px 15px"
      mt="20px"
    >

      <TituloNomeExame titulo="Nódulos" />
      <Box display='flex' flexWrap='wrap' >


        {Nodulos()}

        {/* <>
          {numberArray.map((num, key) => {
            return (
              <IndividualizarNodulos
                key={key}
                numCalculo={num}

              />
            );
          })}
        </> */}
        {/* {elementos.map((elemento, index) => (
          <Box key={index}>{elemento}</Box>
        ))} */}
      </Box>
      <Button colorScheme='blue' onClick={() => {
        adicionarArray();
        Nodulos()
      }}>+1 Nódulo</Button>
    </Box>
  );
}

export default Nodulos;
