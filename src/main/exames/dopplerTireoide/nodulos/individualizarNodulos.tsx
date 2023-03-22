/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, Input, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function IndividualizarNodulos({ numCalculo }) {
  const [FraseNodulosDireito, setFraseNodulosDireito] = useState<any>([]);
  
  const [ConclusaoNodulosDireito, setConclusaoNodulosDireito] = useState<any>(
    []
  );

  const subExame = `Nódulo ${numCalculo}`;
  const titulo_exame = "Doppler da Tireóide";

  useEffect(() => {
    if (Object.keys(FraseNodulosDireito).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseNodulosDireito,
        ConclusaoNodulosDireito
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseNodulosDireito,
        ConclusaoNodulosDireito
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseNodulosDireito]);

  const [TamanhoInput1, setTamanhoInput1] = useState("");
  const [TamanhoInput2, setTamanhoInput2] = useState("");
  const [TamanhoParciais, setTamanhoParciais] = useState("");
  const [SelectLocalizado, setSelectLocalizado] = useState("");
  const [SelectContornos, setSelectContornos] = useState("");
  const [SelectPrecisos, setSelectPrecisos] = useState("");
  const [SelectDo, setSelectDo] = useState("");
  const [SelectConsistencia, setSelectConsistencia] = useState("");
  const [SelectFluxo, setSelectFluxo] = useState("");
  const [SelectEcogenicidade, setSelectEcogenicidade] = useState("");
  const [SelectMargens, setSelectMargens] = useState("");
  const [SelectOrientacao, setSelectOrientacao] = useState("");
  const [SelectCalcificacoes, setSelectCalcificacoes] = useState("");
  const [SelectDoppler, setSelectDoppler] = useState("");
  const [SelectLagalla, setSelectLagalla] = useState("");
  const [SelectRADS, setSelectRADS] = useState("");

  const [IR, setIR] = useState("");
  const [IP, setIP] = useState("");
  const [VEL, setVEL] = useState("");

  const [multiplosCalculosCheckBox, setmultiplosCalculosCheckBox] =
    useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringMultiplosNodulos = () => {
    removeMultiplosCalculos();
    removeConclusao();
    var conclusao = `Falta conclusao ${numCalculo}`;
    if (
      TamanhoInput1 !== "" &&
      TamanhoInput2 !== "" &&
      SelectLocalizado !== "" &&
      SelectDo !== "" &&
      SelectConsistencia !== "" &&
      SelectEcogenicidade !== "" &&
      SelectMargens !== "" &&
      SelectOrientacao !== "" &&
      SelectCalcificacoes !== "" &&
      SelectDoppler &&
      SelectContornos !== "" &&
      SelectPrecisos !== "" &&
      TamanhoParciais != "" &&
      SelectFluxo !== "" &&
      SelectLagalla !== "" &&
      SelectRADS !== "" &&
      IR !== "" &&
      IP !== "" &&
      VEL !== ""
    ) {
      const medida = new Convert_Medida(TamanhoInput1).Convert_Medida();
      const medida2 = new Convert_Medida(TamanhoInput2).Convert_Medida();

      var fluxo =
        SelectFluxo !== "não apresentando fluxo"
          ? `apresentando fluxo ${SelectFluxo}`
          : SelectFluxo;

      var string = `Formação nodular ${medida} x ${medida2} ${SelectEcogenicidade} de contornos ${SelectContornos}
       e bordos finos e limites parcialmente ${SelectPrecisos}  medindo ${TamanhoParciais} cm no seu maior eixo,
       relacionada ao ${SelectLocalizado} do ${SelectDo} ${fluxo}, com margens 
      ${SelectMargens} ${SelectOrientacao} ${SelectCalcificacoes}
       com IR - ${IR}, IP - ${IP} e VEL - ${VEL} cm/s (CHAMMAS - ${SelectDoppler}, LAGALLA - ${SelectLagalla}, TI-RADS - ${SelectRADS}).`;
      setFraseNodulosDireito((arr) => [...arr, string]);
      setConclusaoNodulosDireito((arr) => [...arr, conclusao]);
    }
  };

  const removeMultiplosCalculos = () => {
    FraseNodulosDireito.map((e) => {
      if (e.includes(`Formação nodular `)) {
        var index = FraseNodulosDireito.indexOf(e);

        if (index > -1) {
          FraseNodulosDireito.splice(index, 1);
          setFraseNodulosDireito((arr) => [...arr]);
        }
      }
    });
  };

  const removeConclusao = () => {
    ConclusaoNodulosDireito.map((e) => {
      if (e.includes(`Falta conclusao ${numCalculo}`)) {
        var index = ConclusaoNodulosDireito.indexOf(e);

        if (index > -1) {
          ConclusaoNodulosDireito.splice(index, 1);
          setConclusaoNodulosDireito((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select(
            `Falta conclusao ${numCalculo}`
          );
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosCalculosCheckBox) {
      setDisableSelect(false);
      criaStringMultiplosNodulos();
    } else {
      removeConclusao();
      setDisableSelect(true);
      removeMultiplosCalculos();
      setTamanhoInput1("");
      setTamanhoInput2("");
      setSelectLocalizado("");
      setSelectDo("");
      setSelectConsistencia("");
      setSelectEcogenicidade("");
      setSelectMargens("");
      setSelectOrientacao("");
      setSelectCalcificacoes("");
      setSelectDoppler("");
      setSelectRADS("");
      setSelectPrecisos("");
      setSelectLagalla("");
      setIP("");
      setIR("");
      setVEL("");
    }
  }, [
    multiplosCalculosCheckBox,
    TamanhoInput1,
    TamanhoInput2,
    SelectLocalizado,
    SelectDo,
    SelectConsistencia,
    SelectEcogenicidade,
    SelectMargens,
    SelectOrientacao,
    SelectCalcificacoes,
    SelectDoppler,
    SelectContornos,
    SelectRADS,
    SelectPrecisos,
    SelectLagalla,
    IR,
    IP,
    VEL,
  ]);

  return (
    <Box display="flex" flexWrap="wrap" mt="20px" mb="10px">
      <Box w="250px" padding="10px">
        <Checkbox
          onChange={() =>
            setmultiplosCalculosCheckBox(!multiplosCalculosCheckBox)
          }
        >
          Nódulo {numCalculo}
        </Checkbox>
        <Select
          isDisabled={DisableSelect}
          onChange={(e) => {
            setSelectLocalizado(e.target.value);
          }}
          value={SelectLocalizado}
          mt="5px"
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
          isDisabled={DisableSelect}
          onChange={(e) => {
            setSelectPrecisos(e.target.value);
          }}
          value={SelectPrecisos}
          mt="5px"
        >
          <option value="" disabled selected>
            Contornos
          </option>
          <option value="Regulares">Regulares</option>
          <option value="Irregulares">Irregulares</option>
        </Select>
        <Select
          isDisabled={DisableSelect}
          onChange={(e) => {
            setSelectContornos(e.target.value);
          }}
          value={SelectContornos}
          mt="5px"
        >
          <option value="" disabled selected>
            Limites Parciais
          </option>
          <option value="Precisos">Precisos</option>
          <option value="Imprecisos">Imprecisos</option>
        </Select>
        <Input
          maxLength={2}
          isDisabled={DisableSelect}
          onChange={(e) => setTamanhoParciais(e.target.value)}
          value={TamanhoParciais}
          w="150px"
          placeholder="Parciais CM"
        />
        <Select
          isDisabled={DisableSelect}
          onChange={(e) => {
            setSelectDo(e.target.value);
          }}
          value={SelectDo}
          mt="5px"
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
            isDisabled={DisableSelect}
            onChange={(e) => setTamanhoInput1(e.target.value)}
            value={TamanhoInput1}
            w="55px"
            placeholder="00"
          />
          x
          <Input
            isDisabled={DisableSelect}
            onChange={(e) => setTamanhoInput2(e.target.value)}
            value={TamanhoInput2}
            w="55px"
            placeholder="00"
          />
          mm
        </Box>
        <Select
          isDisabled={DisableSelect}
          onChange={(e) => {
            setSelectFluxo(e.target.value);
          }}
          value={SelectFluxo}
          mt="5px"
        >
          <option value="" disabled selected>
            Fluxo
          </option>
          <option value="fluxo periférico e central com predomínio periférico">
            Fluxo periférico e central com predomínio periférico
          </option>
          <option value="fluxo periférico e central com predomínio central">
            Fluxo periférico e central com predomínio central
          </option>
          <option value="exclusivamente periférico">
            Exclusivamente periférico
          </option>
          <option value="exclusivamente central">Exclusivamente central</option>
          <option value="não apresentando fluxo">Não apresentando fluxo</option>
        </Select>
        <Select
          isDisabled={DisableSelect}
          onChange={(e) => {
            setSelectConsistencia(e.target.value);
          }}
          value={SelectConsistencia}
          mt="5px"
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
          isDisabled={DisableSelect}
          onChange={(e) => {
            setSelectEcogenicidade(e.target.value);
          }}
          value={SelectEcogenicidade}
          mt="5px"
        >
          <option value="" disabled selected>
            Ecogenicidade
          </option>
          <option value="hipoecogenico">Hipoecogênico</option>
          <option value="hiperecogenico">Hiperecogênico</option>
          <option value="isoecogenico">Isoecogênico</option>
        </Select>
        <Select
          isDisabled={DisableSelect}
          onChange={(e) => {
            setSelectMargens(e.target.value);
          }}
          value={SelectMargens}
          mt="5px"
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
          isDisabled={DisableSelect}
          onChange={(e) => {
            setSelectOrientacao(e.target.value);
          }}
          value={SelectOrientacao}
          mt="5px"
        >
          <option value="" disabled selected>
            Orientação
          </option>
          <option value="paralelo à pele">Paralelo à pele</option>
          <option value="não paralelo à pele">Não paralelo à pele</option>
        </Select>
        <Select
          isDisabled={DisableSelect}
          onChange={(e) => {
            setSelectCalcificacoes(e.target.value);
          }}
          value={SelectCalcificacoes}
          mt="5px"
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
          <option value="com microcalcificações">Com microcalcificações</option>
        </Select>
        <Select
          isDisabled={DisableSelect}
          onChange={(e) => {
            setSelectDoppler(e.target.value);
          }}
          value={SelectDoppler}
          mt="5px"
        >
          <option value="" disabled selected>
            Chammas
          </option>
          <option value="Padrão I (ausência de vascularização)">
            padrão I (ausência de vascularização)
          </option>
          <option value="Padrão II (apenas vascularização periférica)">
            padrão II (apenas vascularização periférica)
          </option>
          <option value="Padrão III (vascularização periférica maior ou igual à central)">
            padrão III (vascularização periférica maior ou igual à central)
          </option>
          <option value="Padrão IV (vascularização central maior que a periférica)">
            padrão IV (vascularização central maior que a periférica)
          </option>
          <option value="Padrão V (apenas vascularização central)">
            padrão V (apenas vascularização central)
          </option>
        </Select>
        <Select
          isDisabled={DisableSelect}
          onChange={(e) => {
            setSelectLagalla(e.target.value);
          }}
          value={SelectLagalla}
          mt="5px"
        >
          <option value="" disabled selected>
            Lagalla
          </option>
          <option value="Tipo I (ausência de vascularização)">
            tipo I (ausência de vascularização)
          </option>
          <option value="Tipo II (vascularização perinodular)">
            tipo II (vascularização perinodular)
          </option>
          <option value="Tipo III (vascularização peri e intranodular)">
            tipo III (vascularização peri e intranodular) 
          </option>
        </Select>
        <Select
          isDisabled={DisableSelect}
          onChange={(e) => {
            setSelectRADS(e.target.value);
          }}
          value={SelectRADS}
          mt="5px"
        >
          <option value="" disabled selected>
            ACR TI-RADS
          </option>
          <option value="ACR TI-RADS 1">ACR TI-RADS 1</option>
          <option value="ACR TI-RADS 2">ACR TI-RADS 2</option>
          <option value="ACR TI-RADS 3">ACR TI-RADS 3</option>
          <option value="ACR TI-RADS 4">ACR TI-RADS 4</option>
          <option value="ACR TI-RADS 5">ACR TI-RADS 5</option>
        </Select>
        <Input
          isDisabled={DisableSelect}
          onChange={(e) => setIR(e.target.value)}
          value={IR}
          w="55px"
          placeholder="IR"
          marginEnd="5px"
        />
        <Input
          isDisabled={DisableSelect}
          onChange={(e) => setIP(e.target.value)}
          value={IP}
          w="55px"
          placeholder="IP"
        />
        <Input
          isDisabled={DisableSelect}
          onChange={(e) => setVEL(e.target.value)}
          value={VEL}
          w="120px"
          placeholder="VEL CM/S"
        />
      </Box>
    </Box>
  );
}
/***
 * Formação nodular hipoecogênica/isoecogenica/ hiperecogenica
 *  de contornos regulares/irregulares e bordos finos e limites parcialmente
 * precisos/ precisos / imprecisos medindo __ cm no seu maior eixo,
 * relacionada ao terço superior /médio/ inferior do lobo direito/esquerdo,
 * apresentando fluxo periférico e central com predomínio periférico/ apresentando fluxo periférico e
 * central com predomínio central / exclusivamente periférico/ exclusivamente central / não apresentando fluxo,
 * com IR 0,00    , IP 0,00    e Vel  000     cm/s (CHAMMAS __ , LAGALLA __, TIRADS __)
 *
 *
 *
 */
