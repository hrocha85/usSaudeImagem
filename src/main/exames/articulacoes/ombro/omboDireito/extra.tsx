/* eslint-disable array-callback-return */

import { Box, Checkbox, HStack, Select, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { OmbroDireitoNormalContext } from "../../../../../context/OmbroDireitoNormalContext";

function ExtraOmbroDireito() {
  const altura = "100%";
  const largura = "100%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  const { OmbroDireitoLaudoNormal } = useContext(OmbroDireitoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

  const [disableDerrameSelect, setdisableDerrameSelect] = useState(true);
  const [DerrameCheckBox, setDerrameCheckBox] = useState(false);
  const [DerrameSelect, setDerrameSelect] = useState("");

  const [BursiteCheckBox, setBursiteCheckBox] = useState(true);
  const [HillSachsCheckBox, setHillSachsCheckBox] = useState(true);
  const [ArtroseCheckBox, setArtroseCheckBox] = useState(true);
  const [CapsuliteAdesivaCheckBox, setCapsuliteAdesivaCheckBox] = useState(true);
  const [InstabilidadeGlenoUmeralCheckBox, setInstabilidadeGlenoUmeralCheckBox] = useState(true);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringBursite = () => {
    const string = "Ombro direito com Bursite";
    if (BursiteCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setBursiteCheckBox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringHillSachs = () => {
    const string = "Ombro direito com Hill Sachs";
    if (HillSachsCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setHillSachsCheckBox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringArtrose = () => {
    const string = "Ombro direito com Artrose";
    if (ArtroseCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setArtroseCheckBox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringCapsuliteAdesiva = () => {
    const string = "Ombro direito com Capsulite Adesiva";
    if (CapsuliteAdesivaCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setCapsuliteAdesivaCheckBox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringInstabilidadeGlenoUmeral = () => {
    const string = "Ombro direito com Instabilidade gleno-umeral";
    if (InstabilidadeGlenoUmeralCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setInstabilidadeGlenoUmeralCheckBox(false);
    } else {
      removeItemString(string);
    }
  };
  //Funcoes Padrao Micropolicistico - Fim


  const criaStringDerrame = (Derrame) => {
    removeDerrame();
    if (Derrame !== "") {
      const string = `Ombro direito com Derrame ${Derrame}  `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeDerrame = () => {
    laudoPrin.map((e) => {
      if (e.includes("Ombro direito com Derrame")) {
        const index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  const removeItemString = (value) => {
    const index = laudoPrin.indexOf(value);

    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
    }
  };



  useEffect(() => {
    if (DerrameCheckBox) {
      setdisableDerrameSelect(false);
    } else {
      removeDerrame();
      setdisableDerrameSelect(true);
    }
  }, [DerrameCheckBox]);


  useEffect(() => {
    criaStringDerrame(DerrameSelect);
  }, [DerrameSelect]);

  useEffect(() => {
    OmbroDireitoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [OmbroDireitoLaudoNormal])


  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px"
      mt="15px"
    >
      <Box columnGap='10px' display="flex" flexWrap="wrap">

        <HStack>
          <Checkbox
            isDisabled={disableTudo} onChange={() => setDerrameCheckBox(!DerrameCheckBox)}>
            Derrame
          </Checkbox>
          <Select
            w='130px'
            isDisabled={disableDerrameSelect}
            onChange={(e) => {
              setDerrameSelect(e.target.value);
            }}
          >
            <option value="leve">total</option>
            <option value="moderado">moderado</option>
            <option value="acentuado">acentuado</option>
          </Select>
        </HStack>

        <Checkbox isDisabled={disableTudo}
          onChange={() => {
            setBursiteCheckBox(true);
            criaStringBursite();
          }}
        >
          Bursite
        </Checkbox>
        <Checkbox isDisabled={disableTudo}
          onChange={() => {
            setHillSachsCheckBox(true);
            criaStringHillSachs();
          }}
        >
          Hill Sachs
        </Checkbox>
        <Checkbox isDisabled={disableTudo}
          onChange={() => {
            setArtroseCheckBox(true);
            criaStringArtrose();
          }}
        >
          Artrose
        </Checkbox>
        <Checkbox isDisabled={disableTudo}
          onChange={() => {
            setCapsuliteAdesivaCheckBox(true);
            criaStringCapsuliteAdesiva();
          }}
        >
          Capsulite Adesiva
        </Checkbox>
        <Checkbox isDisabled={disableTudo}
          onChange={() => {
            setInstabilidadeGlenoUmeralCheckBox(true);
            criaStringInstabilidadeGlenoUmeral();
          }}
        >
          Instabilidade gleno-umeral
        </Checkbox>
      </Box>
    </Box>

  );
}
export default ExtraOmbroDireito;
