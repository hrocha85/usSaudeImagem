/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function RefluxoVeiasProfundas() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [arrayCheckbox, setArrayCheckbox] = useState<any>([]);

  const [FemoralComumCheckbox, setFemoralComumCheckbox] = useState(false);
  const [FemoralSuperficialCheckbox, setFemoralSuperficialCheckbox] = useState(false);
  const [FemoralProfundaCheckbox, setFemoralProfundaCheckbox] = useState(false);

  const [TibialAnteriorCheckbox, setTibialAnteriorCheckbox] = useState(false);
  const [TibialPosteriorCheckbox, setTibialPosteriorCheckbox] = useState(false);
  const [FibularCheckbox, setFibularCheckbox] = useState(false);
  const [PopliteaCheckbox, setPopliteaCheckbox] = useState(false);

  //Funcoes DIU Posicionado - Inicio
  // const criaStringFemoralComum = () => {
  //   var string = "Contornos prostáticos irregulares";
  //   if (FemoralComumCheckbox) {
  //     setLaudoPrin((arr) => [...arr, string]);
  //   } else {
  //     removeItemString(string)
  //   }
  // };

  // const criaStringFemoralSuperficial = () => {
  //   var string = "Próstata com ecotextura heterogênea";
  //   if (FemoralSuperficialCheckbox) {
  //     setLaudoPrin((arr) => [...arr, string]);
  //   } else {
  //     removeItemString(string)
  //   }
  // };

  // const criaStringFemoralProfunda = () => {
  //   var string = "Bexiga com esforço";
  //   if (FemoralProfundaCheckbox) {
  //     setLaudoPrin((arr) => [...arr, string]);
  //   } else {
  //     removeItemString(string)
  //   }
  // };

  // const criaStringTibialAnterior = () => {
  //   var string = "Bexiga com esforço";
  //   if (TibialAnteriorCheckbox) {
  //     setLaudoPrin((arr) => [...arr, string]);
  //   } else {
  //     removeItemString(string)
  //   }
  // };
  // const criaStringTibialPosterior = () => {
  //   var string = "Bexiga com esforço";
  //   if (TibialPosteriorCheckbox) {
  //     setLaudoPrin((arr) => [...arr, string]);
  //   } else {
  //     removeItemString(string)
  //   }
  // };
  // const criaStringFibular = () => {
  //   var string = "Bexiga com esforço";
  //   if (FibularCheckbox) {
  //     setLaudoPrin((arr) => [...arr, string]);
  //   } else {
  //     removeItemString(string)
  //   }
  // };
  // const criaStringPoplitea = () => {
  //   var string = "Bexiga com esforço";
  //   if (PopliteaCheckbox) {
  //     setLaudoPrin((arr) => [...arr, string]);
  //   } else {
  //     removeItemString(string)
  //   }
  // };

  const criaString = () => {
    var string = `Insuficiência das veias ${arrayCheckbox}`;
    console.log(arrayCheckbox)
    //   removeString()
    //if (arrayCheckbox.length >= 0) {
    //removeString()
    setLaudoPrin((arr) => [...arr, string]);
    // } else {
    //  removeString()
    //}
  };


  const adicionaItemArray = (value) => {

    setArrayCheckbox((arr) => [...arr, value])
    criaString()
    //setFemoralComumCheckbox(false)
    console.log(arrayCheckbox)

    // setArrayCheckbox((arr) => [...arr, value]);
    // if (arrayCheckbox.length >= 0) {
    //   setLaudoPrin((arr) => [...arr, arrayCheckbox]);

    // } else {
    //   //   removeString()
    // }
    // console.log(arrayCheckbox)
  };

  useEffect(() => {
    if (FemoralComumCheckbox) {
      console.log('femoral checked')
      setArrayCheckbox((arr) => [...arr, 'Femoral Comum'])
      criaString()
      //adicionaItemArray('Femoral Comum')
    } else {
      console.log('femoral nao checked')
      //removeString('Femoral Comum')
    }

  }, [FemoralComumCheckbox])

  useEffect(() => {
    if (FemoralSuperficialCheckbox) {
      console.log('femoral superficial checked')

      setArrayCheckbox((arr) => [...arr, 'Femoral Superficial'])
      criaString()
      //adicionaItemArray('Femoral Comum')
    } else {
      console.log('femoral nao checked')
      //removeString('Femoral Comum')
    }

  }, [FemoralSuperficialCheckbox])


  const removeString = (value) => {
    console.log('removendo')
    arrayCheckbox.map((e) => {
      if (e.includes(value)) {
        var index = arrayCheckbox.indexOf(e);

        if (index > -1) {
          arrayCheckbox.splice(index, 1);
          setArrayCheckbox((arr) => [...arr]);
        }
      }
    });
  };


  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    var index = laudoPrin.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
    }
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
    >
      <TituloNomeExame titulo="Refluxo Veias Profundas" />

      <Box gap="30px" >
        <Box>
          <Checkbox
            value='Femoral comum'
            onChange={(e) => {
              // adicionaItemArray(e.target.value)
              //criaStringFemoralComum()
              setFemoralComumCheckbox(!FemoralComumCheckbox)

            }}
          >
            Femoral Comum
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            value='Femoral Superficial'
            onChange={(e) => {
              setFemoralSuperficialCheckbox(!FemoralSuperficialCheckbox)
            }}
          >
            Femoral Superficial
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            value='Femoral Profunda'
            onChange={(e) => {
              // criaStringFemoralProfunda()
              setFemoralProfundaCheckbox(!FemoralProfundaCheckbox)
            }}
          >
            Femoral Profunda
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            value='Tibial Anterior'
            onChange={(e) => {

              //criaStringTibialAnterior()
              setTibialAnteriorCheckbox(!TibialAnteriorCheckbox)
            }}
          >
            Tibial Anterior
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            onChange={() => {
              //criaStringTibialPosterior()
              setTibialPosteriorCheckbox(!TibialPosteriorCheckbox)
            }}
          >
            Tibial Posterir
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            onChange={() => {
              //criaStringFibular()
              setFibularCheckbox(!FibularCheckbox)
            }}
          >
            Fibular
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            onChange={() => {
              //criaStringPoplitea()
              setPopliteaCheckbox(!PopliteaCheckbox)
            }}
          >
            Poplítea
          </Checkbox>
        </Box>
      </Box>
    </Box>
  );
}
export default RefluxoVeiasProfundas;