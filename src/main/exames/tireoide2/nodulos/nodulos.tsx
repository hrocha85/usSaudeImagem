import { Box, Checkbox, Input, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Nodulos() {
  const altura = "100%";
  const largura = "66%";

  let input01Nodulo01 = document.querySelector(
    "#Input01Nodulo01"
  ) as HTMLInputElement;
  let input02Nodulo01 = document.querySelector(
    "#Input02Nodulo01"
  ) as HTMLInputElement;
  let select01Nodulo01 = document.querySelector(
    "#Select01Nodulo01"
  ) as HTMLInputElement;
  let select02Nodulo01 = document.querySelector(
    "#Select02Nodulo01"
  ) as HTMLInputElement;
  let select03Nodulo01 = document.querySelector(
    "#Select03Nodulo01"
  ) as HTMLInputElement;
  let select04Nodulo01 = document.querySelector(
    "#Select04Nodulo01"
  ) as HTMLInputElement;
  let select05Nodulo01 = document.querySelector(
    "#Select05Nodulo01"
  ) as HTMLInputElement;
  let select06Nodulo01 = document.querySelector(
    "#Select06Nodulo01"
  ) as HTMLInputElement;
  let select07Nodulo01 = document.querySelector(
    "#Select07Nodulo01"
  ) as HTMLInputElement;

  let input01Nodulo02 = document.querySelector(
    "#Input01Nodulo02"
  ) as HTMLInputElement;
  let input02Nodulo02 = document.querySelector(
    "#Input02Nodulo02"
  ) as HTMLInputElement;
  let select01Nodulo02 = document.querySelector(
    "#Select01Nodulo02"
  ) as HTMLInputElement;
  let select02Nodulo02 = document.querySelector(
    "#Select02Nodulo02"
  ) as HTMLInputElement;
  let select03Nodulo02 = document.querySelector(
    "#Select03Nodulo02"
  ) as HTMLInputElement;
  let select04Nodulo02 = document.querySelector(
    "#Select04Nodulo02"
  ) as HTMLInputElement;
  let select05Nodulo02 = document.querySelector(
    "#Select05Nodulo02"
  ) as HTMLInputElement;
  let select06Nodulo02 = document.querySelector(
    "#Select06Nodulo02"
  ) as HTMLInputElement;
  let select07Nodulo02 = document.querySelector(
    "#Select07Nodulo02"
  ) as HTMLInputElement;

  let input01Nodulo03 = document.querySelector(
    "#Input01Nodulo03"
  ) as HTMLInputElement;
  let input02Nodulo03 = document.querySelector(
    "#Input02Nodulo03"
  ) as HTMLInputElement;
  let select01Nodulo03 = document.querySelector(
    "#Select01Nodulo03"
  ) as HTMLInputElement;
  let select02Nodulo03 = document.querySelector(
    "#Select02Nodulo03"
  ) as HTMLInputElement;
  let select03Nodulo03 = document.querySelector(
    "#Select03Nodulo03"
  ) as HTMLInputElement;
  let select04Nodulo03 = document.querySelector(
    "#Select04Nodulo03"
  ) as HTMLInputElement;
  let select05Nodulo03 = document.querySelector(
    "#Select05Nodulo03"
  ) as HTMLInputElement;
  let select06Nodulo03 = document.querySelector(
    "#Select06Nodulo03"
  ) as HTMLInputElement;
  let select07Nodulo03 = document.querySelector(
    "#Select07Nodulo03"
  ) as HTMLInputElement;

  let input01Nodulo04 = document.querySelector(
    "#Input01Nodulo04"
  ) as HTMLInputElement;
  let input02Nodulo04 = document.querySelector(
    "#Input02Nodulo04"
  ) as HTMLInputElement;
  let select01Nodulo04 = document.querySelector(
    "#Select01Nodulo04"
  ) as HTMLInputElement;
  let select02Nodulo04 = document.querySelector(
    "#Select02Nodulo04"
  ) as HTMLInputElement;
  let select03Nodulo04 = document.querySelector(
    "#Select03Nodulo04"
  ) as HTMLInputElement;
  let select04Nodulo04 = document.querySelector(
    "#Select04Nodulo04"
  ) as HTMLInputElement;
  let select05Nodulo04 = document.querySelector(
    "#Select05Nodulo04"
  ) as HTMLInputElement;
  let select06Nodulo04 = document.querySelector(
    "#Select06Nodulo04"
  ) as HTMLInputElement;
  let select07Nodulo04 = document.querySelector(
    "#Select07Nodulo04"
  ) as HTMLInputElement;

  let input01Nodulo05 = document.querySelector(
    "#Input01Nodulo05"
  ) as HTMLInputElement;
  let input02Nodulo05 = document.querySelector(
    "#Input02Nodulo05"
  ) as HTMLInputElement;
  let select01Nodulo05 = document.querySelector(
    "#Select01Nodulo05"
  ) as HTMLInputElement;
  let select02Nodulo05 = document.querySelector(
    "#Select02Nodulo05"
  ) as HTMLInputElement;
  let select03Nodulo05 = document.querySelector(
    "#Select03Nodulo05"
  ) as HTMLInputElement;
  let select04Nodulo05 = document.querySelector(
    "#Select04Nodulo05"
  ) as HTMLInputElement;
  let select05Nodulo05 = document.querySelector(
    "#Select05Nodulo05"
  ) as HTMLInputElement;
  let select06Nodulo05 = document.querySelector(
    "#Select06Nodulo05"
  ) as HTMLInputElement;
  let select07Nodulo05 = document.querySelector(
    "#Select07Nodulo05"
  ) as HTMLInputElement;

  let input01Nodulo06 = document.querySelector(
    "#Input01Nodulo06"
  ) as HTMLInputElement;
  let input02Nodulo06 = document.querySelector(
    "#Input02Nodulo06"
  ) as HTMLInputElement;
  let select01Nodulo06 = document.querySelector(
    "#Select01Nodulo06"
  ) as HTMLInputElement;
  let select02Nodulo06 = document.querySelector(
    "#Select02Nodulo06"
  ) as HTMLInputElement;
  let select03Nodulo06 = document.querySelector(
    "#Select03Nodulo06"
  ) as HTMLInputElement;
  let select04Nodulo06 = document.querySelector(
    "#Select04Nodulo06"
  ) as HTMLInputElement;
  let select05Nodulo06 = document.querySelector(
    "#Select05Nodulo06"
  ) as HTMLInputElement;
  let select06Nodulo06 = document.querySelector(
    "#Select06Nodulo06"
  ) as HTMLInputElement;
  let select07Nodulo06 = document.querySelector(
    "#Select07Nodulo06"
  ) as HTMLInputElement;

  let input01MultiplosDireito = document.querySelector(
    "#Input01MultiplosDireito"
  ) as HTMLInputElement;
  let input02MultiplosDireito = document.querySelector(
    "#Input02MultiplosDireito"
  ) as HTMLInputElement;
  let select01MultiplosDireito = document.querySelector(
    "#Select01MultiplosDireito"
  ) as HTMLInputElement;
  let select02MultiplosDireito = document.querySelector(
    "#Select02MultiplosDireito"
  ) as HTMLInputElement;
  let select03MultiplosDireito = document.querySelector(
    "#Select03MultiplosDireito"
  ) as HTMLInputElement;
  let select04MultiplosDireito = document.querySelector(
    "#Select04MultiplosDireito"
  ) as HTMLInputElement;
  let select05MultiplosDireito = document.querySelector(
    "#Select05MultiplosDireito"
  ) as HTMLInputElement;
  let select06MultiplosDireito = document.querySelector(
    "#Select06MultiplosDireito"
  ) as HTMLInputElement;
  let select07MultiplosDireito = document.querySelector(
    "#Select07MultiplosDireito"
  ) as HTMLInputElement;

  let input01MultiplosEsquerdo = document.querySelector(
    "#Input01MultiplosEsquerdo"
  ) as HTMLInputElement;
  let input02MultiplosEsquerdo = document.querySelector(
    "#Input02MultiplosEsquerdo"
  ) as HTMLInputElement;
  let select01MultiplosEsquerdo = document.querySelector(
    "#Select01MultiplosEsquerdo"
  ) as HTMLInputElement;
  let select02MultiplosEsquerdo = document.querySelector(
    "#Select02MultiplosEsquerdo"
  ) as HTMLInputElement;
  let select03MultiplosEsquerdo = document.querySelector(
    "#Select03MultiplosEsquerdo"
  ) as HTMLInputElement;
  let select04MultiplosEsquerdo = document.querySelector(
    "#Select04MultiplosEsquerdo"
  ) as HTMLInputElement;
  let select05MultiplosEsquerdo = document.querySelector(
    "#Select05MultiplosEsquerdo"
  ) as HTMLInputElement;
  let select06MultiplosEsquerdo = document.querySelector(
    "#Select06MultiplosEsquerdo"
  ) as HTMLInputElement;
  let select07MultiplosEsquerdo = document.querySelector(
    "#Select07MultiplosEsquerdo"
  ) as HTMLInputElement;

  const [frasesNodulos, setFrasesNodulos] = useState<any>([]);

  const [fraseNodulo01, setFraseNodulo01] = useState("");
  const [valueInput01Nodulo01, setValueInput01Nodulo01] = useState("");
  const [valueInput02Nodulo01, setValueInput02Nodulo01] = useState("");
  const [valueSelect01Nodulo01, setValueSelect01Nodulo01] = useState("");
  const [valueSelect02Nodulo01, setValueSelect02Nodulo01] = useState("");
  const [valueSelect03Nodulo01, setValueSelect03Nodulo01] = useState("");
  const [valueSelect04Nodulo01, setValueSelect04Nodulo01] = useState("");
  const [valueSelect05Nodulo01, setValueSelect05Nodulo01] = useState("");
  const [valueSelect06Nodulo01, setValueSelect06Nodulo01] = useState("");

  const [fraseNodulo02, setFraseNodulo02] = useState("");
  const [valueInput01Nodulo02, setValueInput01Nodulo02] = useState("");
  const [valueInput02Nodulo02, setValueInput02Nodulo02] = useState("");
  const [valueSelect01Nodulo02, setValueSelect01Nodulo02] = useState("");
  const [valueSelect02Nodulo02, setValueSelect02Nodulo02] = useState("");
  const [valueSelect03Nodulo02, setValueSelect03Nodulo02] = useState("");
  const [valueSelect04Nodulo02, setValueSelect04Nodulo02] = useState("");
  const [valueSelect05Nodulo02, setValueSelect05Nodulo02] = useState("");
  const [valueSelect06Nodulo02, setValueSelect06Nodulo02] = useState("");

  const [fraseNodulo03, setFraseNodulo03] = useState("");
  const [valueInput01Nodulo03, setValueInput01Nodulo03] = useState("");
  const [valueInput02Nodulo03, setValueInput02Nodulo03] = useState("");
  const [valueSelect01Nodulo03, setValueSelect01Nodulo03] = useState("");
  const [valueSelect02Nodulo03, setValueSelect02Nodulo03] = useState("");
  const [valueSelect03Nodulo03, setValueSelect03Nodulo03] = useState("");
  const [valueSelect04Nodulo03, setValueSelect04Nodulo03] = useState("");
  const [valueSelect05Nodulo03, setValueSelect05Nodulo03] = useState("");
  const [valueSelect06Nodulo03, setValueSelect06Nodulo03] = useState("");

  const [fraseNodulo04, setFraseNodulo04] = useState("");
  const [valueInput01Nodulo04, setValueInput01Nodulo04] = useState("");
  const [valueInput02Nodulo04, setValueInput02Nodulo04] = useState("");
  const [valueSelect01Nodulo04, setValueSelect01Nodulo04] = useState("");
  const [valueSelect02Nodulo04, setValueSelect02Nodulo04] = useState("");
  const [valueSelect03Nodulo04, setValueSelect03Nodulo04] = useState("");
  const [valueSelect04Nodulo04, setValueSelect04Nodulo04] = useState("");
  const [valueSelect05Nodulo04, setValueSelect05Nodulo04] = useState("");
  const [valueSelect06Nodulo04, setValueSelect06Nodulo04] = useState("");

  const [fraseNodulo05, setFraseNodulo05] = useState("");
  const [valueInput01Nodulo05, setValueInput01Nodulo05] = useState("");
  const [valueInput02Nodulo05, setValueInput02Nodulo05] = useState("");
  const [valueSelect01Nodulo05, setValueSelect01Nodulo05] = useState("");
  const [valueSelect02Nodulo05, setValueSelect02Nodulo05] = useState("");
  const [valueSelect03Nodulo05, setValueSelect03Nodulo05] = useState("");
  const [valueSelect04Nodulo05, setValueSelect04Nodulo05] = useState("");
  const [valueSelect05Nodulo05, setValueSelect05Nodulo05] = useState("");
  const [valueSelect06Nodulo05, setValueSelect06Nodulo05] = useState("");

  const [fraseNodulo06, setFraseNodulo06] = useState("");
  const [valueInput01Nodulo06, setValueInput01Nodulo06] = useState("");
  const [valueInput02Nodulo06, setValueInput02Nodulo06] = useState("");
  const [valueSelect01Nodulo06, setValueSelect01Nodulo06] = useState("");
  const [valueSelect02Nodulo06, setValueSelect02Nodulo06] = useState("");
  const [valueSelect03Nodulo06, setValueSelect03Nodulo06] = useState("");
  const [valueSelect04Nodulo06, setValueSelect04Nodulo06] = useState("");
  const [valueSelect05Nodulo06, setValueSelect05Nodulo06] = useState("");
  const [valueSelect06Nodulo06, setValueSelect06Nodulo06] = useState("");

  const [fraseMultiplosDireito, setFraseMultiplosDireito] = useState("");
  const [valueInput01MultiplosDireito, setValueInput01MultiplosDireito] =
    useState("");
  const [valueInput02MultiplosDireito, setValueInput02MultiplosDireito] =
    useState("");
  const [valueSelect01MultiplosDireito, setValueSelect01MultiplosDireito] =
    useState("");
  const [valueSelect02MultiplosDireito, setValueSelect02MultiplosDireito] =
    useState("");
  const [valueSelect03MultiplosDireito, setValueSelect03MultiplosDireito] =
    useState("");
  const [valueSelect04MultiplosDireito, setValueSelect04MultiplosDireito] =
    useState("");
  const [valueSelect05MultiplosDireito, setValueSelect05MultiplosDireito] =
    useState("");
  const [valueSelect06MultiplosDireito, setValueSelect06MultiplosDireito] =
    useState("");

  const [fraseMultiplosEsquerdo, setFraseMultiplosEsquerdo] = useState("");
  const [valueInput01MultiplosEsquerdo, setValueInput01MultiplosEsquerdo] =
    useState("");
  const [valueInput02MultiplosEsquerdo, setValueInput02MultiplosEsquerdo] =
    useState("");
  const [valueSelect01MultiplosEsquerdo, setValueSelect01MultiplosEsquerdo] =
    useState("");
  const [valueSelect02MultiplosEsquerdo, setValueSelect02MultiplosEsquerdo] =
    useState("");
  const [valueSelect03MultiplosEsquerdo, setValueSelect03MultiplosEsquerdo] =
    useState("");
  const [valueSelect04MultiplosEsquerdo, setValueSelect04MultiplosEsquerdo] =
    useState("");
  const [valueSelect05MultiplosEsquerdo, setValueSelect05MultiplosEsquerdo] =
    useState("");
  const [valueSelect06MultiplosEsquerdo, setValueSelect06MultiplosEsquerdo] =
    useState("");

  const [valueNodulo01, setValueNodulo01] = useState({
    inputNodulo01: true,
    selectNodulo01: true,
  });
  const [valueNodulo02, setValueNodulo02] = useState({
    inputNodulo02: true,
    selectNodulo02: true,
  });
  const [valueNodulo03, setValueNodulo03] = useState({
    inputNodulo03: true,
    selectNodulo03: true,
  });
  const [valueNodulo04, setValueNodulo04] = useState({
    inputNodulo04: true,
    selectNodulo04: true,
  });
  const [valueNodulo05, setValueNodulo05] = useState({
    inputNodulo05: true,
    selectNodulo05: true,
  });
  const [valueNodulo06, setValueNodulo06] = useState({
    inputNodulo06: true,
    selectNodulo06: true,
  });
  const [valueMultiplosDireito, setValueMultiplosDireito] = useState({
    inputMultiplosDireito: true,
    selectMultiplosDireito: true,
  });
  const [valueMultiplosEsquerdo, setValueMultiplosEsquerdo] = useState({
    inputMultiplosEsquerdo: true,
    selectMultiplosEsquerdo: true,
  });

  const removeItemString = (value) => {
    var index = frasesNodulos.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      frasesNodulos.splice(index, 1);
      setFrasesNodulos((arr) => [...arr]);
    }
  };

  const criaStringNodulo01 = (value) => {
    let valueSelect07Nodulo01 = value;
    const Frase = `Nódulo 01 no  
            ${valueSelect01Nodulo01}   do
            ${valueSelect02Nodulo01}, medindo   
             ${valueInput01Nodulo01} x ${valueInput02Nodulo01}
             com consistência ${valueSelect03Nodulo01}, ${valueSelect04Nodulo01},
             margens ${valueSelect05Nodulo01}, com seu eixo ${valueSelect06Nodulo01}
             e com ${valueSelect07Nodulo01}`;

    setFrasesNodulos((arr) => [...arr, Frase]);
    setFraseNodulo01(Frase);
  };

  const removeStringNodulo01 = () => {
    const index = frasesNodulos.indexOf(fraseNodulo01);
    if (index > -1) {
      frasesNodulos.splice(index, 1);
      setFrasesNodulos((arr) => [...arr]);
    }
    input01Nodulo01.value = "";
    input02Nodulo01.value = "";
    select01Nodulo01.value = "";
    select01Nodulo01.value = "";
    select02Nodulo01.value = "";
    select03Nodulo01.value = "";
    select04Nodulo01.value = "";
    select05Nodulo01.value = "";
    select06Nodulo01.value = "";
    select07Nodulo01.value = "";
  };

  const criaStringNodulo02 = (value) => {
    let valueSelect07Nodulo02 = value;
    const Frase = `Nódulo 02 no  
            ${valueSelect01Nodulo02}   do
            ${valueSelect02Nodulo02}, medindo   
             ${valueInput01Nodulo02} x ${valueInput02Nodulo02}
             com consistência ${valueSelect03Nodulo02}, ${valueSelect04Nodulo02},
             margens ${valueSelect05Nodulo02}, com seu eixo ${valueSelect06Nodulo02}
             e com ${valueSelect07Nodulo02}`;
    setFrasesNodulos((arr) => [...arr, Frase]);
    setFraseNodulo02(Frase);
  };

  const removeStringNodulo02 = () => {
    const index = frasesNodulos.indexOf(fraseNodulo02);
    if (index > -1) {
      frasesNodulos.splice(index, 1);
      setFrasesNodulos((arr) => [...arr]);
    }
    input01Nodulo02.value = "";
    input02Nodulo02.value = "";
    select01Nodulo02.value = "";
    select01Nodulo02.value = "";
    select02Nodulo02.value = "";
    select03Nodulo02.value = "";
    select04Nodulo02.value = "";
    select05Nodulo02.value = "";
    select06Nodulo02.value = "";
    select07Nodulo02.value = "";
  };
  const criaStringNodulo03 = (value) => {
    let valueSelect07Nodulo03 = value;
    const Frase = `Nódulo 03 no  
            ${valueSelect01Nodulo03}   do
            ${valueSelect02Nodulo03}, medindo   
             ${valueInput01Nodulo03} x ${valueInput02Nodulo03}
             com consistência ${valueSelect03Nodulo03}, ${valueSelect04Nodulo03},
             margens ${valueSelect05Nodulo03}, com seu eixo ${valueSelect06Nodulo03}
             e com ${valueSelect07Nodulo03}`;
    setFrasesNodulos((arr) => [...arr, Frase]);
    setFraseNodulo03(Frase);
  };

  const removeStringNodulo03 = () => {
    const index = frasesNodulos.indexOf(fraseNodulo03);
    if (index > -1) {
      frasesNodulos.splice(index, 1);
      setFrasesNodulos((arr) => [...arr]);
    }
    input01Nodulo03.value = "";
    input02Nodulo03.value = "";
    select01Nodulo03.value = "";
    select01Nodulo03.value = "";
    select02Nodulo03.value = "";
    select03Nodulo03.value = "";
    select04Nodulo03.value = "";
    select05Nodulo03.value = "";
    select06Nodulo03.value = "";
    select07Nodulo03.value = "";
  };

  const criaStringNodulo04 = (value) => {
    let valueSelect07Nodulo04 = value;
    const Frase = `Nódulo 04 no  
            ${valueSelect01Nodulo04}   do
            ${valueSelect02Nodulo04}, medindo   
             ${valueInput01Nodulo04} x ${valueInput02Nodulo04}
             com consistência ${valueSelect03Nodulo04}, ${valueSelect04Nodulo04},
             margens ${valueSelect05Nodulo04}, com seu eixo ${valueSelect06Nodulo04}
             e com ${valueSelect07Nodulo04}`;
    setFrasesNodulos((arr) => [...arr, Frase]);
    setFraseNodulo04(Frase);
  };

  const removeStringNodulo04 = () => {
    const index = frasesNodulos.indexOf(fraseNodulo04);
    if (index > -1) {
      frasesNodulos.splice(index, 1);
      setFrasesNodulos((arr) => [...arr]);
    }
    input01Nodulo04.value = "";
    input02Nodulo04.value = "";
    select01Nodulo04.value = "";
    select01Nodulo04.value = "";
    select02Nodulo04.value = "";
    select03Nodulo04.value = "";
    select04Nodulo04.value = "";
    select05Nodulo04.value = "";
    select06Nodulo04.value = "";
    select07Nodulo04.value = "";
  };

  const criaStringNodulo05 = (value) => {
    let valueSelect07Nodulo05 = value;
    const Frase = `Nódulo 05 no  
            ${valueSelect01Nodulo05}   do
            ${valueSelect02Nodulo05}, medindo   
             ${valueInput01Nodulo05} x ${valueInput02Nodulo05}
             com consistência ${valueSelect03Nodulo05}, ${valueSelect04Nodulo05},
             margens ${valueSelect05Nodulo05}, com seu eixo ${valueSelect06Nodulo05}
             e com ${valueSelect07Nodulo05}`;
    setFrasesNodulos((arr) => [...arr, Frase]);
    setFraseNodulo05(Frase);
  };

  const removeStringNodulo05 = () => {
    const index = frasesNodulos.indexOf(fraseNodulo05);
    if (index > -1) {
      frasesNodulos.splice(index, 1);
      setFrasesNodulos((arr) => [...arr]);
    }
    input01Nodulo05.value = "";
    input02Nodulo05.value = "";
    select01Nodulo05.value = "";
    select01Nodulo05.value = "";
    select02Nodulo05.value = "";
    select03Nodulo05.value = "";
    select04Nodulo05.value = "";
    select05Nodulo05.value = "";
    select06Nodulo05.value = "";
    select07Nodulo05.value = "";
  };

  const criaStringNodulo06 = (value) => {
    let valueSelect07Nodulo06 = value;
    const Frase = `Nódulo 06 no  
            ${valueSelect01Nodulo06}   do
            ${valueSelect02Nodulo06}, medindo   
             ${valueInput01Nodulo06} x ${valueInput02Nodulo06}
             com consistência ${valueSelect03Nodulo06}, ${valueSelect04Nodulo06},
             margens ${valueSelect05Nodulo06}, com seu eixo ${valueSelect06Nodulo06}
             e com ${valueSelect07Nodulo06}`;
    setFrasesNodulos((arr) => [...arr, Frase]);
    setFraseNodulo06(Frase);
  };

  const removeStringNodulo06 = () => {
    const index = frasesNodulos.indexOf(fraseNodulo06);
    if (index > -1) {
      frasesNodulos.splice(index, 1);
      setFrasesNodulos((arr) => [...arr]);
    }
    input01Nodulo06.value = "";
    input02Nodulo06.value = "";
    select01Nodulo06.value = "";
    select01Nodulo06.value = "";
    select02Nodulo06.value = "";
    select03Nodulo06.value = "";
    select04Nodulo06.value = "";
    select05Nodulo06.value = "";
    select06Nodulo06.value = "";
    select07Nodulo06.value = "";
  };

  const criaStringMultiplosDireito = (value) => {
    let valueSelect07MultiplosDireito = value;
    const Frase = `Multiplos Nódulos no  
            ${valueSelect01MultiplosDireito}   do
            ${valueSelect02MultiplosDireito}, medindo   
             ${valueInput01MultiplosDireito} x ${valueInput02MultiplosDireito}
             com consistência ${valueSelect03MultiplosDireito}, ${valueSelect04MultiplosDireito},
             margens ${valueSelect05MultiplosDireito}, com seu eixo ${valueSelect06MultiplosDireito}
             e com ${valueSelect07MultiplosDireito}`;
    setFrasesNodulos((arr) => [...arr, Frase]);
    setFraseMultiplosDireito(Frase);
  };

  const removeStringMultiplosDireito = () => {
    const index = frasesNodulos.indexOf(fraseMultiplosDireito);
    if (index > -1) {
      frasesNodulos.splice(index, 1);
      setFrasesNodulos((arr) => [...arr]);
    }
    input01MultiplosDireito.value = "";
    input02MultiplosDireito.value = "";
    select01MultiplosDireito.value = "";
    select01MultiplosDireito.value = "";
    select02MultiplosDireito.value = "";
    select03MultiplosDireito.value = "";
    select04MultiplosDireito.value = "";
    select05MultiplosDireito.value = "";
    select06MultiplosDireito.value = "";
    select07MultiplosDireito.value = "";
  };
  const criaStringMultiplosEsquerdo = (value) => {
    let valueSelect07MultiplosEsquerdo = value;
    const Frase = `Multiplos Nódulos no  
            ${valueSelect01MultiplosEsquerdo}   do
            ${valueSelect02MultiplosEsquerdo}, medindo   
             ${valueInput01MultiplosEsquerdo} x ${valueInput02MultiplosEsquerdo}
             com consistência ${valueSelect03MultiplosEsquerdo}, ${valueSelect04MultiplosEsquerdo},
             margens ${valueSelect05MultiplosEsquerdo}, com seu eixo ${valueSelect06MultiplosEsquerdo}
             e com ${valueSelect07MultiplosEsquerdo}`;
    setFrasesNodulos((arr) => [...arr, Frase]);
    setFraseMultiplosEsquerdo(Frase);
  };

  const removeStringMultiplosEsquerdo = () => {
    const index = frasesNodulos.indexOf(fraseMultiplosEsquerdo);
    if (index > -1) {
      frasesNodulos.splice(index, 1);
      setFrasesNodulos((arr) => [...arr]);
    }
    input01MultiplosEsquerdo.value = "";
    input02MultiplosEsquerdo.value = "";
    select01MultiplosEsquerdo.value = "";
    select01MultiplosEsquerdo.value = "";
    select02MultiplosEsquerdo.value = "";
    select03MultiplosEsquerdo.value = "";
    select04MultiplosEsquerdo.value = "";
    select05MultiplosEsquerdo.value = "";
    select06MultiplosEsquerdo.value = "";
    select07MultiplosEsquerdo.value = "";
  };

  const caseSelect01 = (value) => {
    if (value.value === "terço Superior") {
      removeItemString("terço Medio");
      removeItemString("terço Inferior");
      if (value.id === "Select01Nodulo01") {
        setValueSelect01Nodulo01(value.value);
      } else if (value.id === "Select01Nodulo02") {
        setValueSelect01Nodulo02(value.value);
      } else if (value.id === "Select01Nodulo03") {
        setValueSelect01Nodulo03(value.value);
      } else if (value.id === "Select01Nodulo04") {
        setValueSelect01Nodulo04(value.value);
      } else if (value.id === "Select01Nodulo05") {
        setValueSelect01Nodulo05(value.value);
      } else if (value.id === "Select01Nodulo06") {
        setValueSelect01Nodulo06(value.value);
      } else if (value.id === "Select01MultiplosDireito") {
        setValueSelect01MultiplosDireito(value.value);
      } else if (value.id === "Select01MultiplosEsquerdo") {
        setValueSelect01MultiplosEsquerdo(value.value);
      }
    } else if (value.value === "terço Medio") {
      removeItemString("terço Superior");
      removeItemString("terço Inferior");
      if (value.id === "Select01Nodulo01") {
        setValueSelect01Nodulo01(value.value);
      } else if (value.id === "Select01Nodulo02") {
        setValueSelect01Nodulo02(value.value);
      } else if (value.id === "Select01Nodulo03") {
        setValueSelect01Nodulo03(value.value);
      } else if (value.id === "Select01Nodulo04") {
        setValueSelect01Nodulo04(value.value);
      } else if (value.id === "Select01Nodulo05") {
        setValueSelect01Nodulo05(value.value);
      } else if (value.id === "Select01Nodulo06") {
        setValueSelect01Nodulo06(value.value);
      } else if (value.id === "Select01MultiplosDireito") {
        setValueSelect01MultiplosDireito(value.value);
      } else if (value.id === "Select01MultiplosEsquerdo") {
        setValueSelect01MultiplosEsquerdo(value.value);
      }
    } else if (value.value === "terço Inferior") {
      removeItemString("terço Superior");
      removeItemString("terço Medio");
      if (value.id === "Select01Nodulo01") {
        setValueSelect01Nodulo01(value.value);
      } else if (value.id === "Select01Nodulo02") {
        setValueSelect01Nodulo02(value.value);
      } else if (value.id === "Select01Nodulo03") {
        setValueSelect01Nodulo03(value.value);
      } else if (value.id === "Select01Nodulo04") {
        setValueSelect01Nodulo04(value.value);
      } else if (value.id === "Select01Nodulo05") {
        setValueSelect01Nodulo05(value.value);
      } else if (value.id === "Select01Nodulo06") {
        setValueSelect01Nodulo06(value.value);
      } else if (value.id === "Select01MultiplosDireito") {
        setValueSelect01MultiplosDireito(value.value);
      } else if (value.id === "Select01MultiplosEsquerdo") {
        setValueSelect01MultiplosEsquerdo(value.value);
      }
    } else {
      removeItemString("terço Inferior");
      removeItemString("terço Superior");
      removeItemString("terço Medio");
      if (value.id === "Select01Nodulo01") {
        setValueSelect01Nodulo01(value.value);
      } else if (value.id === "Select01Nodulo02") {
        setValueSelect01Nodulo02(value.value);
      } else if (value.id === "Select01Nodulo03") {
        setValueSelect01Nodulo03(value.value);
      } else if (value.id === "Select01Nodulo04") {
        setValueSelect01Nodulo04(value.value);
      } else if (value.id === "Select01Nodulo05") {
        setValueSelect01Nodulo05(value.value);
      } else if (value.id === "Select01Nodulo06") {
        setValueSelect01Nodulo06(value.value);
      } else if (value.id === "Select01MultiplosDireito") {
        setValueSelect01MultiplosDireito(value.value);
      } else if (value.id === "Select01MultiplosEsquerdo") {
        setValueSelect01MultiplosEsquerdo(value.value);
      }
    }
  };

  const caseSelect02 = (value) => {
    if (value.value === "Lobo direito") {
      removeItemString("Lobo esquerdo");
      removeItemString("Istmo");
      if (value.id === "Select02Nodulo01") {
        setValueSelect02Nodulo01(value.value);
      } else if (value.id === "Select02Nodulo02") {
        setValueSelect02Nodulo02(value.value);
      } else if (value.id === "Select02Nodulo03") {
        setValueSelect02Nodulo03(value.value);
      } else if (value.id === "Select02Nodulo04") {
        setValueSelect02Nodulo04(value.value);
      } else if (value.id === "Select02Nodulo05") {
        setValueSelect02Nodulo05(value.value);
      } else if (value.id === "Select02Nodulo06") {
        setValueSelect02Nodulo06(value.value);
      } else if (value.id === "Select02MultiplosDireito") {
        setValueSelect02MultiplosDireito(value.value);
      } else if (value.id === "Select02MultiplosEsquerdo") {
        setValueSelect02MultiplosEsquerdo(value.value);
      }
    } else if (value.value === "Lobo esquerdo") {
      removeItemString("Lobo direito");
      removeItemString("Istmo");
      if (value.id === "Select02Nodulo01") {
        setValueSelect02Nodulo01(value.value);
      } else if (value.id === "Select02Nodulo02") {
        setValueSelect02Nodulo02(value.value);
      } else if (value.id === "Select02Nodulo03") {
        setValueSelect02Nodulo03(value.value);
      } else if (value.id === "Select02Nodulo04") {
        setValueSelect02Nodulo04(value.value);
      } else if (value.id === "Select02Nodulo05") {
        setValueSelect02Nodulo05(value.value);
      } else if (value.id === "Select02Nodulo06") {
        setValueSelect02Nodulo06(value.value);
      } else if (value.id === "Select02MultiplosDireito") {
        setValueSelect02MultiplosDireito(value.value);
      } else if (value.id === "Select02MultiplosEsquerdo") {
        setValueSelect02MultiplosEsquerdo(value.value);
      }
    } else {
      removeItemString("Lobo direito");
      removeItemString("Lobo esquerdo");
      if (value.id === "Select02Nodulo01") {
        setValueSelect02Nodulo01(value.value);
      } else if (value.id === "Select02Nodulo02") {
        setValueSelect02Nodulo02(value.value);
      } else if (value.id === "Select02Nodulo03") {
        setValueSelect02Nodulo03(value.value);
      } else if (value.id === "Select02Nodulo04") {
        setValueSelect02Nodulo04(value.value);
      } else if (value.id === "Select02Nodulo05") {
        setValueSelect02Nodulo05(value.value);
      } else if (value.id === "Select02Nodulo06") {
        setValueSelect02Nodulo06(value.value);
      } else if (value.id === "Select02MultiplosDireito") {
        setValueSelect02MultiplosDireito(value.value);
      } else if (value.id === "Select02MultiplosEsquerdo") {
        setValueSelect02MultiplosEsquerdo(value.value);
      }
    }
  };
  const caseSelect03 = (value) => {
    if (value.value === "sólida") {
      removeItemString("cística com componente sólido");
      removeItemString("sólida com componente cístico");
      removeItemString("espongiforme");
      if (value.id === "Select03Nodulo01") {
        setValueSelect03Nodulo01(value.value);
      } else if (value.value === "Select03Nodulo02") {
        setValueSelect03Nodulo02(value.value);
      } else if (value.value === "Select03Nodulo03") {
        setValueSelect03Nodulo03(value.value);
      } else if (value.id === "Select03Nodulo04") {
        setValueSelect03Nodulo04(value.value);
      } else if (value.id === "Select02Nodulo05") {
        setValueSelect02Nodulo05(value.value);
      } else if (value.id === "Select02Nodulo06") {
        setValueSelect02Nodulo06(value.value);
      } else if (value.id === "Select03MultiplosDireito") {
        setValueSelect03MultiplosDireito(value.value);
      } else if (value.id === "Select03MultiplosEsquerdo") {
        setValueSelect03MultiplosEsquerdo(value.value);
      }
    } else if (value.value === "cística com componente sólido") {
      removeItemString("sólida");
      removeItemString("sólida com componente cístico");
      removeItemString("espongiforme");
      if (value.id === "Select03Nodulo01") {
        setValueSelect03Nodulo01(value.value);
      } else if (value.value === "Select03Nodulo02") {
        setValueSelect03Nodulo02(value.value);
      } else if (value.value === "Select03Nodulo03") {
        setValueSelect03Nodulo03(value.value);
      } else if (value.id === "Select03Nodulo04") {
        setValueSelect03Nodulo04(value.value);
      } else if (value.id === "Select02Nodulo05") {
        setValueSelect02Nodulo05(value.value);
      } else if (value.id === "Select02Nodulo06") {
        setValueSelect02Nodulo06(value.value);
      } else if (value.id === "Select03MultiplosDireito") {
        setValueSelect03MultiplosDireito(value.value);
      } else if (value.id === "Select03MultiplosEsquerdo") {
        setValueSelect03MultiplosEsquerdo(value.value);
      }
    } else if (value.value === "sólida com componente cístico") {
      removeItemString("sólida");
      removeItemString("cística com componente sólido");
      removeItemString("espongiforme");
      if (value.id === "Select03Nodulo01") {
        setValueSelect03Nodulo01(value.value);
      } else if (value.value === "Select03Nodulo02") {
        setValueSelect03Nodulo02(value.value);
      } else if (value.value === "Select03Nodulo03") {
        setValueSelect03Nodulo03(value.value);
      } else if (value.id === "Select03Nodulo04") {
        setValueSelect03Nodulo04(value.value);
      } else if (value.id === "Select02Nodulo05") {
        setValueSelect02Nodulo05(value.value);
      } else if (value.id === "Select02Nodulo06") {
        setValueSelect02Nodulo06(value.value);
      } else if (value.id === "Select03MultiplosDireito") {
        setValueSelect03MultiplosDireito(value.value);
      } else if (value.id === "Select03MultiplosEsquerdo") {
        setValueSelect03MultiplosEsquerdo(value.value);
      }
    } else {
      removeItemString("sólida");
      removeItemString("cística com componente sólido");
      removeItemString("sólida com componente cístico");
      if (value.id === "Select03Nodulo01") {
        setValueSelect03Nodulo01(value.value);
      } else if (value.value === "Select03Nodulo02") {
        setValueSelect03Nodulo02(value.value);
      } else if (value.value === "Select03Nodulo03") {
        setValueSelect03Nodulo03(value.value);
      } else if (value.id === "Select03Nodulo04") {
        setValueSelect03Nodulo04(value.value);
      } else if (value.id === "Select03Nodulo05") {
        setValueSelect03Nodulo05(value.value);
      } else if (value.id === "Select03Nodulo06") {
        setValueSelect03Nodulo06(value.value);
      } else if (value.id === "Select03MultiplosDireito") {
        setValueSelect03MultiplosDireito(value.value);
      } else if (value.id === "Select03MultiplosEsquerdo") {
        setValueSelect03MultiplosEsquerdo(value.value);
      }
    }
  };
  const caseSelect04 = (value) => {
    if (value.value === "hipoecogenico") {
      removeItemString("hiperecogenico");
      removeItemString("isoecogenico");
      if (value.id === "Select04Nodulo01") {
        setValueSelect04Nodulo01(value.value);
      } else if (value.id === "Select04Nodulo02") {
        setValueSelect04Nodulo02(value.value);
      } else if (value.value === "Select04Nodulo03") {
        setValueSelect04Nodulo03(value.value);
      } else if (value.id === "Select04Nodulo04") {
        setValueSelect04Nodulo04(value.value);
      } else if (value.id === "Select04Nodulo05") {
        setValueSelect04Nodulo05(value.value);
      } else if (value.id === "Select04Nodulo06") {
        setValueSelect04Nodulo06(value.value);
      } else if (value.id === "Select04MultiplosDireito") {
        setValueSelect04MultiplosDireito(value.value);
      } else if (value.id === "Select04MultiplosEsquerdo") {
        setValueSelect04MultiplosEsquerdo(value.value);
      }
    } else if (value.value === "hiperecogenico") {
      removeItemString("isoecogenico");
      removeItemString("hipoecogenico");
      if (value.id === "Select04Nodulo01") {
        setValueSelect04Nodulo01(value.value);
      } else if (value.id === "Select04Nodulo02") {
        setValueSelect04Nodulo02(value.value);
      } else if (value.value === "Select04Nodulo03") {
        setValueSelect04Nodulo03(value.value);
      } else if (value.id === "Select04Nodulo04") {
        setValueSelect04Nodulo04(value.value);
      } else if (value.id === "Select04Nodulo05") {
        setValueSelect04Nodulo05(value.value);
      } else if (value.id === "Select04Nodulo06") {
        setValueSelect04Nodulo06(value.value);
      } else if (value.id === "Select04MultiplosDireito") {
        setValueSelect04MultiplosDireito(value.value);
      } else if (value.id === "Select04MultiplosEsquerdo") {
        setValueSelect04MultiplosEsquerdo(value.value);
      }
    } else {
      removeItemString("hipoecogenico");
      removeItemString("hiperecogenico");
      if (value.id === "Select04Nodulo01") {
        setValueSelect04Nodulo01(value.value);
      } else if (value.id === "Select04Nodulo02") {
        setValueSelect04Nodulo02(value.value);
      } else if (value.value === "Select04Nodulo03") {
        setValueSelect04Nodulo03(value.value);
      } else if (value.id === "Select04Nodulo04") {
        setValueSelect04Nodulo04(value.value);
      } else if (value.id === "Select04Nodulo05") {
        setValueSelect04Nodulo05(value.value);
      } else if (value.id === "Select04Nodulo06") {
        setValueSelect04Nodulo06(value.value);
      } else if (value.id === "Select04MultiplosDireito") {
        setValueSelect04MultiplosDireito(value.value);
      } else if (value.id === "Select04MultiplosEsquerdo") {
        setValueSelect04MultiplosEsquerdo(value.value);
      }
    }
  };
  const caseSelect05 = (value) => {
    if (value.value === "regulares com halo") {
      removeItemString("regulares sem halo");
      removeItemString("irregulares com halo");
      removeItemString("irregulares sem halo");
      removeItemString("microlobuladas com halo");
      removeItemString("microlobuladas sem halo");
      if (value.id === "Select05Nodulo01") {
        setValueSelect05Nodulo01(value.value);
      } else if (value.id === "Select05Nodulo01") {
        setValueSelect05Nodulo02(value.value);
      } else if (value.value === "Select05Nodulo03") {
        setValueSelect05Nodulo03(value.value);
      } else if (value.id === "Select05Nodulo04") {
        setValueSelect05Nodulo04(value.value);
      } else if (value.id === "Select05Nodulo05") {
        setValueSelect05Nodulo05(value.value);
      } else if (value.id === "Select05Nodulo06") {
        setValueSelect05Nodulo06(value.value);
      } else if (value.id === "Select05MultiplosDireito") {
        setValueSelect05MultiplosDireito(value.value);
      } else if (value.id === "Select05MultiplosEsquerdo") {
        setValueSelect05MultiplosEsquerdo(value.value);
      }
    } else if (value.value === "regulares sem halo") {
      removeItemString("regulares com halo");
      removeItemString("irregulares com halo");
      removeItemString("irregulares sem halo");
      removeItemString("microlobuladas com halo");
      removeItemString("microlobuladas sem halo");
      if (value.id === "Select05Nodulo01") {
        setValueSelect05Nodulo01(value.value);
      } else if (value.id === "Select05Nodulo01") {
        setValueSelect05Nodulo02(value.value);
      } else if (value.value === "Select05Nodulo03") {
        setValueSelect05Nodulo03(value.value);
      } else if (value.id === "Select05Nodulo04") {
        setValueSelect05Nodulo04(value.value);
      } else if (value.id === "Select05Nodulo05") {
        setValueSelect05Nodulo05(value.value);
      } else if (value.id === "Select05Nodulo06") {
        setValueSelect05Nodulo06(value.value);
      } else if (value.id === "Select05MultiplosDireito") {
        setValueSelect05MultiplosDireito(value.value);
      } else if (value.id === "Select05MultiplosEsquerdo") {
        setValueSelect05MultiplosEsquerdo(value.value);
      }
    } else if (value.value === "irregulares com halo") {
      removeItemString("regulares com halo");
      removeItemString("regulares sem halo");
      removeItemString("irregulares sem halo");
      removeItemString("microlobuladas com halo");
      removeItemString("microlobuladas sem halo");
      if (value.id === "Select05Nodulo01") {
        setValueSelect05Nodulo01(value.value);
      } else if (value.id === "Select05Nodulo01") {
        setValueSelect05Nodulo02(value.value);
      } else if (value.value === "Select05Nodulo03") {
        setValueSelect05Nodulo03(value.value);
      } else if (value.id === "Select05Nodulo04") {
        setValueSelect05Nodulo04(value.value);
      } else if (value.id === "Select05Nodulo05") {
        setValueSelect05Nodulo05(value.value);
      } else if (value.id === "Select05Nodulo06") {
        setValueSelect05Nodulo06(value.value);
      } else if (value.id === "Select05MultiplosDireito") {
        setValueSelect05MultiplosDireito(value.value);
      } else if (value.id === "Select05MultiplosEsquerdo") {
        setValueSelect05MultiplosEsquerdo(value.value);
      }
    } else if (value.value === "irregulares sem halo") {
      removeItemString("regulares com halo");
      removeItemString("regulares sem halo");
      removeItemString("irregulares com halo");
      removeItemString("microlobuladas com halo");
      removeItemString("microlobuladas sem halo");
      if (value.id === "Select05Nodulo01") {
        setValueSelect05Nodulo01(value.value);
      } else if (value.id === "Select05Nodulo01") {
        setValueSelect05Nodulo02(value.value);
      } else if (value.value === "Select05Nodulo03") {
        setValueSelect05Nodulo03(value.value);
      } else if (value.id === "Select05Nodulo04") {
        setValueSelect05Nodulo04(value.value);
      } else if (value.id === "Select05Nodulo05") {
        setValueSelect05Nodulo05(value.value);
      } else if (value.id === "Select05Nodulo06") {
        setValueSelect05Nodulo06(value.value);
      } else if (value.id === "Select05MultiplosDireito") {
        setValueSelect05MultiplosDireito(value.value);
      } else if (value.id === "Select05MultiplosEsquerdo") {
        setValueSelect05MultiplosEsquerdo(value.value);
      }
    } else if (value.value === "microlobuladas com halo") {
      removeItemString("regulares com halo");
      removeItemString("regulares sem halo");
      removeItemString("irregulares com halo");
      removeItemString("irregulares sem halo");
      removeItemString("microlobuladas sem halo");
      if (value.id === "Select05Nodulo01") {
        setValueSelect05Nodulo01(value.value);
      } else if (value.id === "Select05Nodulo01") {
        setValueSelect05Nodulo02(value.value);
      } else if (value.value === "Select05Nodulo03") {
        setValueSelect05Nodulo03(value.value);
      } else if (value.id === "Select05Nodulo04") {
        setValueSelect05Nodulo04(value.value);
      } else if (value.id === "Select05Nodulo05") {
        setValueSelect05Nodulo05(value.value);
      } else if (value.id === "Select05Nodulo06") {
        setValueSelect05Nodulo06(value.value);
      } else if (value.id === "Select05MultiplosDireito") {
        setValueSelect05MultiplosDireito(value.value);
      } else if (value.id === "Select05MultiplosEsquerdo") {
        setValueSelect05MultiplosEsquerdo(value.value);
      }
    } else {
      removeItemString("regulares com halo");
      removeItemString("regulares sem halo");
      removeItemString("irregulares com halo");
      removeItemString("irregulares sem halo");
      removeItemString("microlobuladas com halo");
      if (value.id === "Select05Nodulo01") {
        setValueSelect05Nodulo01(value.value);
      } else if (value.id === "Select05Nodulo01") {
        setValueSelect05Nodulo02(value.value);
      } else if (value.value === "Select05Nodulo03") {
        setValueSelect05Nodulo03(value.value);
      } else if (value.id === "Select05Nodulo04") {
        setValueSelect05Nodulo04(value.value);
      } else if (value.id === "Select05Nodulo05") {
        setValueSelect05Nodulo05(value.value);
      } else if (value.id === "Select05Nodulo06") {
        setValueSelect05Nodulo06(value.value);
      } else if (value.id === "Select05MultiplosDireito") {
        setValueSelect05MultiplosDireito(value.value);
      } else if (value.id === "Select05MultiplosEsquerdo") {
        setValueSelect05MultiplosEsquerdo(value.value);
      }
    }
  };
  const caseSelect06 = (value) => {
    if (value.value === "paralelo à pele") {
      removeItemString("não paralelo à pele");
      if (value.id === "Select06Nodulo01") {
        setValueSelect06Nodulo01(value.value);
      } else if (value.id === "Select06Nodulo02") {
        setValueSelect06Nodulo02(value.value);
      } else if (value.value === "Select06Nodulo03") {
        setValueSelect06Nodulo03(value.value);
      } else if (value.id === "Select06Nodulo04") {
        setValueSelect06Nodulo04(value.value);
      } else if (value.id === "Select06Nodulo05") {
        setValueSelect06Nodulo05(value.value);
      } else if (value.id === "Select06Nodulo06") {
        setValueSelect06Nodulo06(value.value);
      } else if (value.id === "Select06MultiplosDireito") {
        setValueSelect06MultiplosDireito(value.value);
      } else if (value.id === "Select06MultiplosEsquerdo") {
        setValueSelect06MultiplosEsquerdo(value.value);
      }
    } else {
      removeItemString("paralelo à pele");
      if (value.id === "Select06Nodulo01") {
        setValueSelect06Nodulo01(value.value);
      } else if (value.id === "Select06Nodulo02") {
        setValueSelect06Nodulo02(value.value);
      } else if (value.value === "Select06Nodulo03") {
        setValueSelect06Nodulo03(value.value);
      } else if (value.id === "Select06Nodulo04") {
        setValueSelect06Nodulo04(value.value);
      } else if (value.id === "Select06Nodulo05") {
        setValueSelect06Nodulo05(value.value);
      } else if (value.id === "Select06Nodulo06") {
        setValueSelect06Nodulo06(value.value);
      }
    }
  };

  const verificaChecked = (value) => {
    switch (value.id) {
      case "Nodulo01":
        if (value.checked === true) {
          setValueNodulo01({
            inputNodulo01: false,
            selectNodulo01: false,
          });
        } else {
          setValueNodulo01({
            inputNodulo01: true,
            selectNodulo01: true,
          });
          removeStringNodulo01();
        }
        break;
      case "Select01Nodulo01":
        caseSelect01(value);
        break;
      case "Select02Nodulo01":
        caseSelect02(value);
        break;
      case "Input01Nodulo01":
        setValueInput01Nodulo01(value.value);
        break;
      case "Input02Nodulo01":
        setValueInput02Nodulo01(value.value);
        break;
      case "Select03Nodulo01":
        caseSelect03(value);
        break;
      case "Select04Nodulo01":
        caseSelect04(value);
        break;
      case "Select05Nodulo01":
        caseSelect05(value);
        break;
      case "Select06Nodulo01":
        caseSelect06(value);
        break;
      case "Select07Nodulo01":
        criaStringNodulo01(value.value);
        break;
      case "Nodulo02":
        if (value.checked === true) {
          setValueNodulo02({
            inputNodulo02: false,
            selectNodulo02: false,
          });
        } else {
          setValueNodulo02({
            inputNodulo02: true,
            selectNodulo02: true,
          });
          removeStringNodulo02();
        }
        break;
      case "Select01Nodulo02":
        caseSelect01(value);
        break;
      case "Select02Nodulo02":
        caseSelect02(value);
        break;
      case "Input01Nodulo02":
        setValueInput01Nodulo02(value.value);
        break;
      case "Input02Nodulo02":
        setValueInput02Nodulo02(value.value);
        break;
      case "Select03Nodulo02":
        caseSelect03(value);
        break;
      case "Select04Nodulo02":
        caseSelect04(value);
        break;
      case "Select05Nodulo02":
        caseSelect05(value);
        break;
      case "Select06Nodulo02":
        caseSelect06(value);
        break;
      case "Select07Nodulo02":
        criaStringNodulo02(value.value);
        break;
      case "Nodulo03":
        if (value.checked === true) {
          setValueNodulo03({
            inputNodulo03: false,
            selectNodulo03: false,
          });
        } else {
          setValueNodulo03({
            inputNodulo03: true,
            selectNodulo03: true,
          });
          removeStringNodulo03();
        }
        break;
      case "Select01Nodulo03":
        caseSelect01(value);
        break;
      case "Select02Nodulo03":
        caseSelect02(value);
        break;
      case "Input01Nodulo03":
        setValueInput01Nodulo03(value.value);
        break;
      case "Input02Nodulo03":
        setValueInput02Nodulo03(value.value);
        break;
      case "Select03Nodulo03":
        caseSelect03(value);
        break;
      case "Select04Nodulo03":
        caseSelect04(value);
        break;
      case "Select05Nodulo03":
        caseSelect05(value);
        break;
      case "Select06Nodulo03":
        caseSelect06(value);
        break;
      case "Select07Nodulo03":
        criaStringNodulo03(value.value);
        break;
      case "Nodulo04":
        if (value.checked === true) {
          setValueNodulo04({
            inputNodulo04: false,
            selectNodulo04: false,
          });
        } else {
          setValueNodulo04({
            inputNodulo04: true,
            selectNodulo04: true,
          });
          removeStringNodulo04();
        }
        break;
      case "Select01Nodulo04":
        caseSelect01(value);
        break;
      case "Select02Nodulo04":
        caseSelect02(value);
        break;
      case "Input01Nodulo04":
        setValueInput01Nodulo04(value.value);
        break;
      case "Input02Nodulo04":
        setValueInput02Nodulo04(value.value);
        break;
      case "Select03Nodulo04":
        caseSelect03(value);
        break;
      case "Select04Nodulo04":
        caseSelect04(value);
        break;
      case "Select05Nodulo04":
        caseSelect05(value);
        break;
      case "Select06Nodulo04":
        caseSelect06(value);
        break;
      case "Select07Nodulo04":
        criaStringNodulo04(value.value);
        break;
      case "Nodulo05":
        if (value.checked === true) {
          setValueNodulo05({
            inputNodulo05: false,
            selectNodulo05: false,
          });
        } else {
          setValueNodulo05({
            inputNodulo05: true,
            selectNodulo05: true,
          });
          removeStringNodulo05();
        }
        break;
      case "Select01Nodulo05":
        caseSelect01(value);
        break;
      case "Select02Nodulo05":
        caseSelect02(value);
        break;
      case "Input01Nodulo05":
        setValueInput01Nodulo05(value.value);
        break;
      case "Input02Nodulo05":
        setValueInput02Nodulo05(value.value);
        break;
      case "Select03Nodulo05":
        caseSelect03(value);
        break;
      case "Select04Nodulo05":
        caseSelect04(value);
        break;
      case "Select05Nodulo05":
        caseSelect05(value);
        break;
      case "Select06Nodulo05":
        caseSelect06(value);
        break;
      case "Select07Nodulo05":
        criaStringNodulo05(value.value);
        break;
      case "Nodulo06":
        if (value.checked === true) {
          setValueNodulo06({
            inputNodulo06: false,
            selectNodulo06: false,
          });
        } else {
          setValueNodulo06({
            inputNodulo06: true,
            selectNodulo06: true,
          });
          removeStringNodulo06();
        }
        break;
      case "Select01Nodulo06":
        caseSelect01(value);
        break;
      case "Select02Nodulo06":
        caseSelect02(value);
        break;
      case "Input01Nodulo06":
        setValueInput01Nodulo06(value.value);
        break;
      case "Input02Nodulo06":
        setValueInput02Nodulo06(value.value);
        break;
      case "Select03Nodulo06":
        caseSelect03(value);
        break;
      case "Select04Nodulo06":
        caseSelect04(value);
        break;
      case "Select05Nodulo06":
        caseSelect05(value);
        break;
      case "Select06Nodulo06":
        caseSelect06(value);
        break;
      case "Select07Nodulo06":
        criaStringNodulo06(value.value);
        break;
      case "MultiplosDireito":
        if (value.checked === true) {
          setValueMultiplosDireito({
            inputMultiplosDireito: false,
            selectMultiplosDireito: false,
          });
        } else {
          setValueMultiplosDireito({
            inputMultiplosDireito: true,
            selectMultiplosDireito: true,
          });
          removeStringMultiplosDireito();
        }
        break;
      case "Select01MultiplosDireito":
        caseSelect01(value);
        break;
      case "Select02MultiplosDireito":
        caseSelect02(value);
        break;
      case "Input01MultiplosDireito":
        setValueInput01MultiplosDireito(value.value);
        break;
      case "Input02MultiplosDireito":
        setValueInput02MultiplosDireito(value.value);
        break;
      case "Select03MultiplosDireito":
        caseSelect03(value);
        break;
      case "Select04MultiplosDireito":
        caseSelect04(value);
        break;
      case "Select05MultiplosDireito":
        caseSelect05(value);
        break;
      case "Select06MultiplosDireito":
        caseSelect06(value);
        break;
      case "Select07MultiplosDireito":
        criaStringMultiplosDireito(value.value);
        break;
      case "MultiplosEsquerdo":
        if (value.checked === true) {
          setValueMultiplosEsquerdo({
            inputMultiplosEsquerdo: false,
            selectMultiplosEsquerdo: false,
          });
        } else {
          setValueMultiplosEsquerdo({
            inputMultiplosEsquerdo: true,
            selectMultiplosEsquerdo: true,
          });
          removeStringMultiplosEsquerdo();
        }
        break;
      case "Select01MultiplosEsquerdo":
        caseSelect01(value);
        break;
      case "Select02MultiplosEsquerdo":
        caseSelect02(value);
        break;
      case "Input01MultiplosEsquerdo":
        setValueInput01MultiplosEsquerdo(value.value);
        break;
      case "Input02MultiplosEsquerdo":
        setValueInput02MultiplosEsquerdo(value.value);
        break;
      case "Select03MultiplosEsquerdo":
        caseSelect03(value);
        break;
      case "Select04MultiplosEsquerdo":
        caseSelect04(value);
        break;
      case "Select05MultiplosEsquerdo":
        caseSelect05(value);
        break;
      case "Select06MultiplosEsquerdo":
        caseSelect06(value);
        break;
      case "Select07MultiplosEsquerdo":
        criaStringMultiplosEsquerdo(value.value);
        break;
    }
  };

  const subExame = "Nódulos";
  const titulo_exame = "Tireóide 2";

  useEffect(() => {
    if (Object.keys(frasesNodulos).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesNodulos
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesNodulos
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesNodulos]);

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
      <Box h="100%">
        <TituloNomeExame titulo="Nódulos" />

        <Box gap="25px" display="flex" flexWrap="wrap" mt="20px" mb="10px">
          <Box w="160px">
            <Checkbox
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              id="Nodulo01"
            >
              Nódulo 01
            </Checkbox>

            <Select
              mt="5px"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo01.selectNodulo01}
              id="Select01Nodulo01"
            >
              <option value="" disabled selected>
                Localizado no
              </option>
              <option value="terço Superior">Terço superior</option>
              <option value="terço Medio">Terço medio</option>
              <option value="terço Inferior">Terço inferior</option>
              <option value="no istmo">Terço inferior</option>
            </Select>
            <Select
              mt="5px"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo01.selectNodulo01}
              id="Select02Nodulo01"
            >
              <option value="" disabled selected>
                Do
              </option>
              <option value="Lobo direito">Lobo direito</option>
              <option value="Lobo esquerdo">Lobo esquerdo</option>
              <option value="Istmo">Istmo</option>
            </Select>
            <Box mt="5px">
              <Input
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={valueNodulo01.inputNodulo01}
                id="Input01Nodulo01"
                w="55px"
                placeholder="00"
              />
              x
              <Input
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={valueNodulo01.inputNodulo01}
                id="Input02Nodulo01"
                w="55px"
                placeholder="00"
              />
              mm
            </Box>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo01.selectNodulo01}
              mt="5px"
              id="Select03Nodulo01"
            >
              <option value="" disabled selected>
                Consistência
              </option>
              <option value="sólida">Sólida</option>
              <option value="cística com componente sólido">
                Cística com componente sólido
              </option>
              <option value="sólida com componente cístico">
                Sólida com componente cístico
              </option>
              <option value="espongiforme">Espongiforme</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo01.selectNodulo01}
              mt="5px"
              id="Select04Nodulo01"
            >
              <option value="" disabled selected>
                Ecogenicidade
              </option>
              <option value="hipoecogenico">Hipoecogênico</option>
              <option value="hiperecogenico">Hiperecogênico</option>
              <option value="isoecogenico">Isoecogênico</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo01.selectNodulo01}
              mt="5px"
              id="Select05Nodulo01"
            >
              <option value="" disabled selected>
                Margens
              </option>
              <option value="regulares com halo">Regulares com halo</option>
              <option value="regulares sem halo">Regulares sem halo</option>
              <option value="irregulares com halo">Irregulares com halo</option>
              <option value="irregulares sem halo">Irregulares sem halo</option>
              <option value="microlobuladas com halo">
                Microlobuladas com halo
              </option>
              <option value="microlobuladas sem halo">
                Microlobuladas sem halo
              </option>
            </Select>

            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo01.selectNodulo01}
              mt="5px"
              id="Select06Nodulo01"
            >
              <option value="" disabled selected>
                Orientação
              </option>
              <option value="paralelo à pele">Paralelo à pele</option>
              <option value="não paralelo à pele">Não paralelo à pele</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo01.selectNodulo01}
              mt="5px"
              id="Select07Nodulo01"
            >
              <option value="" disabled selected>
                Calcificações
              </option>
              <option value="sem calcificações">Sem calcificações</option>
              <option value="com calcificações casca de ovo">
                Com calcificações casca de ovo
              </option>
              <option value="com calcificações grosseiras">
                Com calcificações grosseiras
              </option>
              <option value="com microcalcificações">
                Com microcalcificações
              </option>
            </Select>
          </Box>

          <Box w="160px">
            <Checkbox
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              id="Nodulo02"
            >
              Nódulo 02
            </Checkbox>

            <Select
              mt="5px"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo02.selectNodulo02}
              id="Select01Nodulo02"
            >
              <option value="" disabled selected>
                Localizado no
              </option>
              <option value="terço Superior">Terço superior</option>
              <option value="terço Medio">Terço medio</option>
              <option value="terço Inferior">Terço inferior</option>
              <option value="no istmo">Terço inferior</option>
            </Select>
            <Select
              mt="5px"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo02.selectNodulo02}
              id="Select02Nodulo02"
            >
              <option value="" disabled selected>
                Do
              </option>
              <option value="Lobo direito">Lobo direito</option>
              <option value="Lobo esquerdo">Lobo esquerdo</option>
              <option value="Istmo">Istmo</option>
            </Select>
            <Box mt="5px">
              <Input
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={valueNodulo02.inputNodulo02}
                id="Input01Nodulo02"
                w="55px"
                placeholder="00"
              />
              x
              <Input
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={valueNodulo02.inputNodulo02}
                id="Input02Nodulo02"
                w="55px"
                placeholder="00"
              />
              mm
            </Box>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo02.selectNodulo02}
              mt="5px"
              id="Select03Nodulo02"
            >
              <option value="" disabled selected>
                Consistência
              </option>
              <option value="sólida">Sólida</option>
              <option value="cística com componente sólido">
                Cística com componente sólido
              </option>
              <option value="sólida com componente cístico">
                Sólida com componente cístico
              </option>
              <option value="espongiforme">Espongiforme</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo02.selectNodulo02}
              mt="5px"
              id="Select04Nodulo02"
            >
              <option value="" disabled selected>
                Ecogenicidade
              </option>
              <option value="hipoecogenico">Hipoecogênico</option>
              <option value="hiperecogenico">Hiperecogênico</option>
              <option value="isoecogenico">Isoecogênico</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo02.selectNodulo02}
              mt="5px"
              id="Select05Nodulo02"
            >
              <option value="" disabled selected>
                Margens
              </option>
              <option value="regulares com halo">Regulares com halo</option>
              <option value="regulares sem halo">Regulares sem halo</option>
              <option value="irregulares com halo">Irregulares com halo</option>
              <option value="irregulares sem halo">Irregulares sem halo</option>
              <option value="microlobuladas com halo">
                Microlobuladas com halo
              </option>
              <option value="microlobuladas sem halo">
                Microlobuladas sem halo
              </option>
            </Select>

            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo02.selectNodulo02}
              mt="5px"
              id="Select06Nodulo02"
            >
              <option value="" disabled selected>
                Orientação
              </option>
              <option value="paralelo à pele">Paralelo à pele</option>
              <option value="não paralelo à pele">Não paralelo à pele</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo02.selectNodulo02}
              mt="5px"
              id="Select07Nodulo02"
            >
              <option value="" disabled selected>
                Calcificações
              </option>
              <option value="sem calcificações">Sem calcificações</option>
              <option value="com calcificações casca de ovo">
                Com calcificações casca de ovo
              </option>
              <option value="com calcificações grosseiras">
                Com calcificações grosseiras
              </option>
              <option value="com microcalcificações">
                Com microcalcificações
              </option>
            </Select>
          </Box>

          <Box w="160px">
            <Checkbox
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              id="Nodulo03"
            >
              Nódulo 03
            </Checkbox>

            <Select
              mt="5px"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo03.selectNodulo03}
              id="Select01Nodulo03"
            >
              <option value="" disabled selected>
                Localizado no
              </option>
              <option value="terço Superior">Terço superior</option>
              <option value="terço Medio">Terço medio</option>
              <option value="terço Inferior">Terço inferior</option>
              <option value="no istmo">Terço inferior</option>
            </Select>
            <Select
              mt="5px"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo03.selectNodulo03}
              id="Select02Nodulo03"
            >
              <option value="" disabled selected>
                Do
              </option>
              <option value="Lobo direito">Lobo direito</option>
              <option value="Lobo esquerdo">Lobo esquerdo</option>
              <option value="Istmo">Istmo</option>
            </Select>
            <Box mt="5px">
              <Input
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={valueNodulo03.inputNodulo03}
                id="Input01Nodulo03"
                w="55px"
                placeholder="00"
              />
              x
              <Input
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={valueNodulo03.inputNodulo03}
                id="Input02Nodulo03"
                w="55px"
                placeholder="00"
              />
              mm
            </Box>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo03.selectNodulo03}
              mt="5px"
              id="Select03Nodulo03"
            >
              <option value="" disabled selected>
                Consistência
              </option>
              <option value="sólida">Sólida</option>
              <option value="cística com componente sólido">
                Cística com componente sólido
              </option>
              <option value="sólida com componente cístico">
                Sólida com componente cístico
              </option>
              <option value="espongiforme">Espongiforme</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo03.selectNodulo03}
              mt="5px"
              id="Select04Nodulo03"
            >
              <option value="" disabled selected>
                Ecogenicidade
              </option>
              <option value="hipoecogenico">Hipoecogênico</option>
              <option value="hiperecogenico">Hiperecogênico</option>
              <option value="isoecogenico">Isoecogênico</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo03.selectNodulo03}
              mt="5px"
              id="Select05Nodulo03"
            >
              <option value="" disabled selected>
                Margens
              </option>
              <option value="regulares com halo">Regulares com halo</option>
              <option value="regulares sem halo">Regulares sem halo</option>
              <option value="irregulares com halo">Irregulares com halo</option>
              <option value="irregulares sem halo">Irregulares sem halo</option>
              <option value="microlobuladas com halo">
                Microlobuladas com halo
              </option>
              <option value="microlobuladas sem halo">
                Microlobuladas sem halo
              </option>
            </Select>

            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo03.selectNodulo03}
              mt="5px"
              id="Select06Nodulo03"
            >
              <option value="" disabled selected>
                Orientação
              </option>
              <option value="paralelo à pele">Paralelo à pele</option>
              <option value="não paralelo à pele">Não paralelo à pele</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo03.selectNodulo03}
              mt="5px"
              id="Select07Nodulo03"
            >
              <option value="" disabled selected>
                Calcificações
              </option>
              <option value="sem calcificações">Sem calcificações</option>
              <option value="com calcificações casca de ovo">
                Com calcificações casca de ovo
              </option>
              <option value="com calcificações grosseiras">
                Com calcificações grosseiras
              </option>
              <option value="com microcalcificações">
                Com microcalcificações
              </option>
            </Select>
          </Box>

          <Box w="160px">
            <Checkbox
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              id="Nodulo04"
            >
              Nódulo 04
            </Checkbox>

            <Select
              mt="5px"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo04.selectNodulo04}
              id="Select01Nodulo04"
            >
              <option value="" disabled selected>
                Localizado no
              </option>
              <option value="terço Superior">Terço superior</option>
              <option value="terço Medio">Terço medio</option>
              <option value="terço Inferior">Terço inferior</option>
              <option value="no istmo">Terço inferior</option>
            </Select>
            <Select
              mt="5px"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo04.selectNodulo04}
              id="Select02Nodulo04"
            >
              <option value="" disabled selected>
                Do
              </option>
              <option value="Lobo direito">Lobo direito</option>
              <option value="Lobo esquerdo">Lobo esquerdo</option>
              <option value="Istmo">Istmo</option>
            </Select>
            <Box mt="5px">
              <Input
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={valueNodulo04.inputNodulo04}
                id="Input01Nodulo04"
                w="55px"
                placeholder="00"
              />
              x
              <Input
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={valueNodulo04.inputNodulo04}
                id="Input02Nodulo04"
                w="55px"
                placeholder="00"
              />
              mm
            </Box>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo04.selectNodulo04}
              mt="5px"
              id="Select03Nodulo04"
            >
              <option value="" disabled selected>
                Consistência
              </option>
              <option value="sólida">Sólida</option>
              <option value="cística com componente sólido">
                Cística com componente sólido
              </option>
              <option value="sólida com componente cístico">
                Sólida com componente cístico
              </option>
              <option value="espongiforme">Espongiforme</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo04.selectNodulo04}
              mt="5px"
              id="Select04Nodulo04"
            >
              <option value="" disabled selected>
                Ecogenicidade
              </option>
              <option value="hipoecogenico">Hipoecogênico</option>
              <option value="hiperecogenico">Hiperecogênico</option>
              <option value="isoecogenico">Isoecogênico</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo04.selectNodulo04}
              mt="5px"
              id="Select05Nodulo04"
            >
              <option value="" disabled selected>
                Margens
              </option>
              <option value="regulares com halo">Regulares com halo</option>
              <option value="regulares sem halo">Regulares sem halo</option>
              <option value="irregulares com halo">Irregulares com halo</option>
              <option value="irregulares sem halo">Irregulares sem halo</option>
              <option value="microlobuladas com halo">
                Microlobuladas com halo
              </option>
              <option value="microlobuladas sem halo">
                Microlobuladas sem halo
              </option>
            </Select>

            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo04.selectNodulo04}
              mt="5px"
              id="Select06Nodulo04"
            >
              <option value="" disabled selected>
                Orientação
              </option>
              <option value="paralelo à pele">Paralelo à pele</option>
              <option value="não paralelo à pele">Não paralelo à pele</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo04.selectNodulo04}
              mt="5px"
              id="Select07Nodulo04"
            >
              <option value="" disabled selected>
                Calcificações
              </option>
              <option value="sem calcificações">Sem calcificações</option>
              <option value="com calcificações casca de ovo">
                Com calcificações casca de ovo
              </option>
              <option value="com calcificações grosseiras">
                Com calcificações grosseiras
              </option>
              <option value="com microcalcificações">
                Com microcalcificações
              </option>
            </Select>
          </Box>

          <Box w="160px">
            <Checkbox
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              id="Nodulo05"
            >
              Nódulo 05
            </Checkbox>

            <Select
              mt="5px"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo05.selectNodulo05}
              id="Select01Nodulo05"
            >
              <option value="" disabled selected>
                Localizado no
              </option>
              <option value="terço Superior">Terço superior</option>
              <option value="terço Medio">Terço medio</option>
              <option value="terço Inferior">Terço inferior</option>
              <option value="no istmo">Terço inferior</option>
            </Select>
            <Select
              mt="5px"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo05.selectNodulo05}
              id="Select02Nodulo05"
            >
              <option value="" disabled selected>
                Do
              </option>
              <option value="Lobo direito">Lobo direito</option>
              <option value="Lobo esquerdo">Lobo esquerdo</option>
              <option value="Istmo">Istmo</option>
            </Select>
            <Box mt="5px">
              <Input
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={valueNodulo05.inputNodulo05}
                id="Input01Nodulo05"
                w="55px"
                placeholder="00"
              />
              x
              <Input
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={valueNodulo05.inputNodulo05}
                id="Input02Nodulo05"
                w="55px"
                placeholder="00"
              />
              mm
            </Box>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo05.selectNodulo05}
              mt="5px"
              id="Select03Nodulo05"
            >
              <option value="" disabled selected>
                Consistência
              </option>
              <option value="sólida">Sólida</option>
              <option value="cística com componente sólido">
                Cística com componente sólido
              </option>
              <option value="sólida com componente cístico">
                Sólida com componente cístico
              </option>
              <option value="espongiforme">Espongiforme</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo05.selectNodulo05}
              mt="5px"
              id="Select04Nodulo05"
            >
              <option value="" disabled selected>
                Ecogenicidade
              </option>
              <option value="hipoecogenico">Hipoecogênico</option>
              <option value="hiperecogenico">Hiperecogênico</option>
              <option value="isoecogenico">Isoecogênico</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo05.selectNodulo05}
              mt="5px"
              id="Select05Nodulo05"
            >
              <option value="" disabled selected>
                Margens
              </option>
              <option value="regulares com halo">Regulares com halo</option>
              <option value="regulares sem halo">Regulares sem halo</option>
              <option value="irregulares com halo">Irregulares com halo</option>
              <option value="irregulares sem halo">Irregulares sem halo</option>
              <option value="microlobuladas com halo">
                Microlobuladas com halo
              </option>
              <option value="microlobuladas sem halo">
                Microlobuladas sem halo
              </option>
            </Select>

            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo05.selectNodulo05}
              mt="5px"
              id="Select06Nodulo05"
            >
              <option value="" disabled selected>
                Orientação
              </option>
              <option value="paralelo à pele">Paralelo à pele</option>
              <option value="não paralelo à pele">Não paralelo à pele</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo05.selectNodulo05}
              mt="5px"
              id="Select07Nodulo05"
            >
              <option value="" disabled selected>
                Calcificações
              </option>
              <option value="sem calcificações">Sem calcificações</option>
              <option value="com calcificações casca de ovo">
                Com calcificações casca de ovo
              </option>
              <option value="com calcificações grosseiras">
                Com calcificações grosseiras
              </option>
              <option value="com microcalcificações">
                Com microcalcificações
              </option>
            </Select>
          </Box>

          <Box w="160px">
            <Checkbox
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              id="Nodulo06"
            >
              Nódulo 06
            </Checkbox>

            <Select
              mt="5px"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo06.selectNodulo06}
              id="Select01Nodulo06"
            >
              <option value="" disabled selected>
                Localizado no
              </option>
              <option value="terço Superior">Terço superior</option>
              <option value="terço Medio">Terço medio</option>
              <option value="terço Inferior">Terço inferior</option>
              <option value="no istmo">Terço inferior</option>
            </Select>
            <Select
              mt="5px"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo06.selectNodulo06}
              id="Select02Nodulo06"
            >
              <option value="" disabled selected>
                Do
              </option>
              <option value="Lobo direito">Lobo direito</option>
              <option value="Lobo esquerdo">Lobo esquerdo</option>
              <option value="Istmo">Istmo</option>
            </Select>
            <Box mt="5px">
              <Input
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={valueNodulo06.inputNodulo06}
                id="Input01Nodulo06"
                w="55px"
                placeholder="00"
              />
              x
              <Input
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={valueNodulo06.inputNodulo06}
                id="Input02Nodulo06"
                w="55px"
                placeholder="00"
              />
              mm
            </Box>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo06.selectNodulo06}
              mt="5px"
              id="Select03Nodulo06"
            >
              <option value="" disabled selected>
                Consistência
              </option>
              <option value="sólida">Sólida</option>
              <option value="cística com componente sólido">
                Cística com componente sólido
              </option>
              <option value="sólida com componente cístico">
                Sólida com componente cístico
              </option>
              <option value="espongiforme">Espongiforme</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo06.selectNodulo06}
              mt="5px"
              id="Select04Nodulo06"
            >
              <option value="" disabled selected>
                Ecogenicidade
              </option>
              <option value="hipoecogenico">Hipoecogênico</option>
              <option value="hiperecogenico">Hiperecogênico</option>
              <option value="isoecogenico">Isoecogênico</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo06.selectNodulo06}
              mt="5px"
              id="Select05Nodulo06"
            >
              <option value="" disabled selected>
                Margens
              </option>
              <option value="regulares com halo">Regulares com halo</option>
              <option value="regulares sem halo">Regulares sem halo</option>
              <option value="irregulares com halo">Irregulares com halo</option>
              <option value="irregulares sem halo">Irregulares sem halo</option>
              <option value="microlobuladas com halo">
                Microlobuladas com halo
              </option>
              <option value="microlobuladas sem halo">
                Microlobuladas sem halo
              </option>
            </Select>

            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo06.selectNodulo06}
              mt="5px"
              id="Select06Nodulo06"
            >
              <option value="" disabled selected>
                Orientação
              </option>
              <option value="paralelo à pele">Paralelo à pele</option>
              <option value="não paralelo à pele">Não paralelo à pele</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo06.selectNodulo06}
              mt="5px"
              id="Select07Nodulo06"
            >
              <option value="" disabled selected>
                Calcificações
              </option>
              <option value="sem calcificações">Sem calcificações</option>
              <option value="com calcificações casca de ovo">
                Com calcificações casca de ovo
              </option>
              <option value="com calcificações grosseiras">
                Com calcificações grosseiras
              </option>
              <option value="com microcalcificações">
                Com microcalcificações
              </option>
            </Select>
          </Box>

          <Box w="160px">
            <Checkbox
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              id="MultiplosDireito"
            >
              Múltiplos Nódulos Lobo Direito
            </Checkbox>

            <Select
              mt="5px"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueMultiplosDireito.selectMultiplosDireito}
              id="Select01MultiplosDireito"
            >
              <option value="" disabled selected>
                Localizado no
              </option>
              <option value="terço Superior">Terço superior</option>
              <option value="terço Medio">Terço medio</option>
              <option value="terço Inferior">Terço inferior</option>
              <option value="no istmo">Terço inferior</option>
            </Select>
            <Select
              mt="5px"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueMultiplosDireito.selectMultiplosDireito}
              id="Select02MultiplosDireito"
            >
              <option value="" disabled selected>
                Do
              </option>
              <option value="Lobo direito">Lobo direito</option>
              <option value="Lobo esquerdo">Lobo esquerdo</option>
              <option value="Istmo">Istmo</option>
            </Select>
            <Box mt="5px">
              <Input
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={valueMultiplosDireito.inputMultiplosDireito}
                id="Input01MultiplosDireito"
                w="55px"
                placeholder="00"
              />
              x
              <Input
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={valueMultiplosDireito.inputMultiplosDireito}
                id="Input02MultiplosDireito"
                w="55px"
                placeholder="00"
              />
              mm
            </Box>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueMultiplosDireito.selectMultiplosDireito}
              mt="5px"
              id="Select03MultiplosDireito"
            >
              <option value="" disabled selected>
                Consistência
              </option>
              <option value="sólida">Sólida</option>
              <option value="cística com componente sólido">
                Cística com componente sólido
              </option>
              <option value="sólida com componente cístico">
                Sólida com componente cístico
              </option>
              <option value="espongiforme">Espongiforme</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueMultiplosDireito.selectMultiplosDireito}
              mt="5px"
              id="Select04MultiplosDireito"
            >
              <option value="" disabled selected>
                Ecogenicidade
              </option>
              <option value="hipoecogenico">Hipoecogênico</option>
              <option value="hiperecogenico">Hiperecogênico</option>
              <option value="isoecogenico">Isoecogênico</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueMultiplosDireito.selectMultiplosDireito}
              mt="5px"
              id="Select05MultiplosDireito"
            >
              <option value="" disabled selected>
                Margens
              </option>
              <option value="regulares com halo">Regulares com halo</option>
              <option value="regulares sem halo">Regulares sem halo</option>
              <option value="irregulares com halo">Irregulares com halo</option>
              <option value="irregulares sem halo">Irregulares sem halo</option>
              <option value="microlobuladas com halo">
                Microlobuladas com halo
              </option>
              <option value="microlobuladas sem halo">
                Microlobuladas sem halo
              </option>
            </Select>

            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueMultiplosDireito.selectMultiplosDireito}
              mt="5px"
              id="Select06MultiplosDireito"
            >
              <option value="" disabled selected>
                Orientação
              </option>
              <option value="paralelo à pele">Paralelo à pele</option>
              <option value="não paralelo à pele">Não paralelo à pele</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueMultiplosDireito.selectMultiplosDireito}
              mt="5px"
              id="Select07MultiplosDireito"
            >
              <option value="" disabled selected>
                Calcificações
              </option>
              <option value="sem calcificações">Sem calcificações</option>
              <option value="com calcificações casca de ovo">
                Com calcificações casca de ovo
              </option>
              <option value="com calcificações grosseiras">
                Com calcificações grosseiras
              </option>
              <option value="com microcalcificações">
                Com microcalcificações
              </option>
            </Select>
          </Box>
          <Box w="160px">
            <Checkbox
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              id="MultiplosEsquerdo"
            >
              Múltiplos Nódulos Lobo Esquerdo
            </Checkbox>

            <Select
              mt="5px"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueMultiplosEsquerdo.selectMultiplosEsquerdo}
              id="Select01MultiplosEsquerdo"
            >
              <option value="" disabled selected>
                Localizado no
              </option>
              <option value="terço Superior">Terço superior</option>
              <option value="terço Medio">Terço medio</option>
              <option value="terço Inferior">Terço inferior</option>
              <option value="no istmo">Terço inferior</option>
            </Select>
            <Select
              mt="5px"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueMultiplosEsquerdo.selectMultiplosEsquerdo}
              id="Select02MultiplosEsquerdo"
            >
              <option value="" disabled selected>
                Do
              </option>
              <option value="Lobo Esquerdo">Lobo Esquerdo</option>
              <option value="Lobo esquerdo">Lobo esquerdo</option>
              <option value="Istmo">Istmo</option>
            </Select>
            <Box mt="5px">
              <Input
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={valueMultiplosEsquerdo.inputMultiplosEsquerdo}
                id="Input01MultiplosEsquerdo"
                w="55px"
                placeholder="00"
              />
              x
              <Input
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={valueMultiplosEsquerdo.inputMultiplosEsquerdo}
                id="Input02MultiplosEsquerdo"
                w="55px"
                placeholder="00"
              />
              mm
            </Box>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueMultiplosEsquerdo.selectMultiplosEsquerdo}
              mt="5px"
              id="Select03MultiplosEsquerdo"
            >
              <option value="" disabled selected>
                Consistência
              </option>
              <option value="sólida">Sólida</option>
              <option value="cística com componente sólido">
                Cística com componente sólido
              </option>
              <option value="sólida com componente cístico">
                Sólida com componente cístico
              </option>
              <option value="espongiforme">Espongiforme</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueMultiplosEsquerdo.selectMultiplosEsquerdo}
              mt="5px"
              id="Select04MultiplosEsquerdo"
            >
              <option value="" disabled selected>
                Ecogenicidade
              </option>
              <option value="hipoecogenico">Hipoecogênico</option>
              <option value="hiperecogenico">Hiperecogênico</option>
              <option value="isoecogenico">Isoecogênico</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueMultiplosEsquerdo.selectMultiplosEsquerdo}
              mt="5px"
              id="Select05MultiplosEsquerdo"
            >
              <option value="" disabled selected>
                Margens
              </option>
              <option value="regulares com halo">Regulares com halo</option>
              <option value="regulares sem halo">Regulares sem halo</option>
              <option value="irregulares com halo">Irregulares com halo</option>
              <option value="irregulares sem halo">Irregulares sem halo</option>
              <option value="microlobuladas com halo">
                Microlobuladas com halo
              </option>
              <option value="microlobuladas sem halo">
                Microlobuladas sem halo
              </option>
            </Select>

            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueMultiplosEsquerdo.selectMultiplosEsquerdo}
              mt="5px"
              id="Select06MultiplosEsquerdo"
            >
              <option value="" disabled selected>
                Orientação
              </option>
              <option value="paralelo à pele">Paralelo à pele</option>
              <option value="não paralelo à pele">Não paralelo à pele</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueMultiplosEsquerdo.selectMultiplosEsquerdo}
              mt="5px"
              id="Select07MultiplosEsquerdo"
            >
              <option value="" disabled selected>
                Calcificações
              </option>
              <option value="sem calcificações">Sem calcificações</option>
              <option value="com calcificações casca de ovo">
                Com calcificações casca de ovo
              </option>
              <option value="com calcificações grosseiras">
                Com calcificações grosseiras
              </option>
              <option value="com microcalcificações">
                Com microcalcificações
              </option>
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Nodulos;
