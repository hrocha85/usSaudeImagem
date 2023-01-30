/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Format_Laudo } from "../../../../../component/function_format_laudo";

export default function IndividualizarOssos({ numCalculo, desabilita }) {
  const [OssosMaoDireita, setOssosMaoDireita] = useState<any>([]);

  const subExame = `${numCalculo + 1} - Ossos mão direita`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(OssosMaoDireita).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        OssosMaoDireita
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        OssosMaoDireita
      ).Format_Laudo_Create_Storage();
    }
  }, [OssosMaoDireita]);



  const [multiplosDedosCheckbox, setmultiplosDedosCheckbox] = useState(false);
  const [FalangeProximal, setFalangeProximal] = useState(false);
  const [FalangeMedia, setFalangeMedia] = useState(false);
  const [FalangeDistal, setFalangeDistal] = useState(false);
  const [DisableCheckbox, setDisableCheckbox] = useState(true);

  const criaStringMultiplosCalculos = () => {
    removeMultiplosCalculos();
    var string = `Dedo ${numCalculo + 1} com descontinuidade das Ossos: `
    if (multiplosDedosCheckbox) {
      if (FalangeProximal) {
        string = `${string} falange Proximal`
      }
      if (FalangeDistal) {
        string = `${string} falange Distal`
      }
      if (FalangeMedia) {
        string = `${string} falange Media`
      }
      setOssosMaoDireita((arr) => [...arr, string]);
    } else {
      removeMultiplosCalculos();
    }
  };

  const removeMultiplosCalculos = () => {
    OssosMaoDireita.map((e) => {
      if (e.includes(`Dedo ${numCalculo + 1} com descontinuidade das Ossos: `)) {
        var index = OssosMaoDireita.indexOf(e);

        if (index > -1) {
          OssosMaoDireita.splice(index, 1);
          setOssosMaoDireita((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosDedosCheckbox) {
      setDisableCheckbox(false)
      criaStringMultiplosCalculos();
    } else {
      setDisableCheckbox(true)
      removeMultiplosCalculos();
    }
  }, [multiplosDedosCheckbox, FalangeMedia, FalangeProximal, FalangeDistal]);

  return (
    <Box gap="10px" display="flex" flexWrap="wrap" mt="20px">
      <Checkbox isDisabled={desabilita}
        onChange={() => setmultiplosDedosCheckbox(!multiplosDedosCheckbox)}
      >
        {numCalculo + 1}º dedo
      </Checkbox>
      <Checkbox
        isDisabled={DisableCheckbox}
        onChange={() => setFalangeProximal(!FalangeProximal)}
      >
        FalangeProximal
      </Checkbox>
      <Checkbox
        isDisabled={DisableCheckbox}
        onChange={() => setFalangeMedia(!FalangeMedia)}
      >
        FalangeMedia
      </Checkbox>
      <Checkbox
        isDisabled={DisableCheckbox}
        onChange={() => setFalangeDistal(!FalangeDistal)}
      >
        FalangeDistal
      </Checkbox>
    </Box>
  );
}
