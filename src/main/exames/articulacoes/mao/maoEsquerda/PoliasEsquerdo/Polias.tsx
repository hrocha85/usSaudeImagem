/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../../component/titulo_nome_exame";
import IndividualizarPolias from "./individualizarPolias";

function Polias({ Disable }) {

  const altura = "100%";
  const largura = "100%";


  const [FrasePoliasEsquerdo, setFrasePoliasEsquerdo] = useState<any>([]);

  const subExame = `Polias mão esquerda`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(FrasePoliasEsquerdo).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasePoliasEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasePoliasEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasePoliasEsquerdo]);

  const [DisablePrimeiroDedo, setDisablePrimeiroDedo] = useState(true);
  const [DisableCheckbox, setDisableCheckbox] = useState(true);
  const [AspectoNormal, setAspectoNormal] = useState(false);
  const [PrimeiroDedo, setPrimeiroDedo] = useState(false);
  const [disableDescontinuidade, setdisableDescontinuidade] = useState(false);
  const [disableApectNormal, setdisableApectNormal] = useState(false);

  const [A1, setA1] = useState(false);
  const [A2, setA2] = useState(false);
  const [AV, setAV] = useState(false);
  const [AO, setAO] = useState(false);

  var numberArray = [1, 2, 3, 4];

  const removeItemString = (value) => {
    var index = FrasePoliasEsquerdo.indexOf(value);
    if (index > -1) {
      FrasePoliasEsquerdo.splice(index, 1);
      setFrasePoliasEsquerdo((arr) => [...arr]);
    }
  };

  useEffect(() => {
    !DisableCheckbox ?
      setdisableApectNormal(true) :
      setdisableApectNormal(false)
  })

  useEffect(() => {
    var string = "Polias dos tendões flexores dos dedos sem anormalidades identificáveis."
    AspectoNormal ? setdisableDescontinuidade(true) : setdisableDescontinuidade(false)
    AspectoNormal ? setFrasePoliasEsquerdo((arr) => [...arr, string]) : removeItemString(string)

  }, [AspectoNormal])

  const criaStringMultiplosCalculos = () => {
    removeMultiplosCalculos()
    var string = 'Dedo 1 com descontinuidade das polias: '
    if (PrimeiroDedo) {
      if (A1 || A2 || AV || AO) {
        if (A1) {
          string = `${string} A1`
        }
        if (A2) {
          string = `${string} A2`
        }
        if (AV) {
          string = `${string} AV`
        }
        if (AO) {
          string = `${string} AO`
        }
        string = `${string}, com afastamento dos tendões flexores da cortical óssea na manobra de flexão e descontinuidade das polias:`
        setFrasePoliasEsquerdo((arr) => [...arr, string]);
      }
    } else {
      removeMultiplosCalculos()
    }
  };

  useEffect(() => {
    if (PrimeiroDedo) {
      setDisablePrimeiroDedo(false)
      criaStringMultiplosCalculos();
    } else {
      setDisablePrimeiroDedo(true)
      removeMultiplosCalculos();
    }
  }, [PrimeiroDedo, A1, A2, AV, AO]);

  const removeMultiplosCalculos = () => {
    FrasePoliasEsquerdo.map((e) => {
      if (e.includes(`Dedo 1 com descontinuidade das polias: `)) {
        var index = FrasePoliasEsquerdo.indexOf(e);

        if (index > -1) {
          FrasePoliasEsquerdo.splice(index, 1);
          setFrasePoliasEsquerdo((arr) => [...arr]);
        }
      }
    });
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
      <TituloNomeExame titulo="Polias" />
      <Box gap="10px" display="flex" flexWrap="wrap" mt="20px">
        <Checkbox
          isDisabled={disableApectNormal}
          onChange={() => setAspectoNormal(!AspectoNormal)}
        >
          Aspecto normal
        </Checkbox>

        <Checkbox
          isDisabled={disableDescontinuidade}
          onChange={() => setDisableCheckbox(!DisableCheckbox)}
        >
          Descontinuidade das seguintes polias
        </Checkbox>
      </Box>
      <Stack>
        <Box gap="10px" display="flex" flexWrap="wrap" mt="20px">
          <Checkbox
            isDisabled={DisableCheckbox}
            onChange={() => setPrimeiroDedo(!PrimeiroDedo)}
          >
            1º dedo
          </Checkbox>
          <Checkbox
            isDisabled={DisablePrimeiroDedo}
            onChange={() => setA1(!A1)}
          >
            A1
          </Checkbox>
          <Checkbox
            isDisabled={DisablePrimeiroDedo}
            onChange={() => setA2(!A2)}
          >
            A2
          </Checkbox>
          <Checkbox
            isDisabled={DisablePrimeiroDedo}
            onChange={() => setAV(!AV)}
          >
            AV
          </Checkbox>
          <Checkbox
            isDisabled={DisablePrimeiroDedo}
            onChange={() => setAO(!AO)}
          >
            AO
          </Checkbox>
        </Box>
        <>
          {numberArray.map((num, key) => {
            return (
              <IndividualizarPolias
                key={key}
                numCalculo={num}
                desabilita={DisableCheckbox}
              />
            );
          })}
        </>
      </Stack>
    </Box>
  );
}
export default Polias;
