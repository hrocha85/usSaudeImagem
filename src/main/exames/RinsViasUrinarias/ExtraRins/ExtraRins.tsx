/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Checkbox,
  Select
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import RimDireito from "../rim_direito/rim_direito";
import RimEsquerdo from "../rim_esquerdo/rim_esquerdo";

function ExtraRins() {
  const altura = "100%";
  const largura = "66%";

  const [FrasesExtraRins, setFrasesExtraRins] = useState<any>([]);
  const [ConclusaoExtraRins, setConclusaoExtraRins] = useState<any>([]);

  const [checkboxNefropatiaCronica, setCheckboxNefropatiaCronica] = useState(false);
  const [SelectNefropatiaCronica, setSelectNefropatiaCronica] = useState('');

  const [checkboxRimFerradura, setCheckboxRimFerradura] = useState(false);

  const [checkboxRimPelvico, setCheckboxRimPelvico] = useState(false);
  const [SelectRimPelvico, setSelectRimPelvico] = useState('');

  const [ValueRimNefropatia, setValueRimNefropatia] = useState('');


  const criaStringNefropatiaCronica = () => {
    let string = "de morfologia e topografia habitual, com dimensões reduzidas, contornos lobulados, aumento da ecogenicidade e perda da diferenciação corticomedular.";
    let conclusao = "Sinais de nefropatia parenquimatosa crônica";
    removeItemString(string);
    removeConclusaoSelect(conclusao);
    if (checkboxNefropatiaCronica) {
      if (SelectNefropatiaCronica !== '') {
        setValueRimNefropatia(SelectNefropatiaCronica);
        conclusao = `${conclusao} ${SelectNefropatiaCronica}.`
        setConclusaoExtraRins((arr) => [...arr, conclusao]);
        if (SelectNefropatiaCronica === 'bilateral') setFrasesExtraRins((arr) => [...arr, string]);
      }
    } else {
      setSelectNefropatiaCronica('')
    }
  };

  useEffect(() => {
    criaStringNefropatiaCronica();
  }, [checkboxNefropatiaCronica, SelectNefropatiaCronica]);


  const criaStringRimPelvico = () => {
    let conclusao = "pélvico."
    removeConclusaoSelect(conclusao)
    if (checkboxRimPelvico) {
      if (SelectRimPelvico !== '') {
        conclusao = `${SelectRimPelvico} ${conclusao}`
        setConclusaoExtraRins((arr) => [...arr, conclusao])
      }
    } else {
      setSelectRimPelvico('')
    }
  };
  useEffect(() => {
    criaStringRimPelvico();
  }, [checkboxRimPelvico, SelectRimPelvico]);

  const criaStringRimFerradura = () => {
    let string = "Rim topografia ectópica, na fossa ilíaca direita, de morfologia, contornos e ecotextura normais.";
    let conclusao = "Sinais ecográfico compatíveis com rins em ferradura.";
    removeItemString(string);
    removeItemConclusao(conclusao);
    if (checkboxRimFerradura) {
      setFrasesExtraRins((arr) => [...arr, string]);
      setConclusaoExtraRins((arr) => [...arr, conclusao]);
    }
  };

  useEffect(() => {
    criaStringRimFerradura();
  }, [checkboxRimFerradura]);


  const removeItemString = (value) => {
    var index = FrasesExtraRins.indexOf(value);

    if (index > -1) {
      FrasesExtraRins.splice(index, 1);
      setFrasesExtraRins((arr) => [...arr]);
    }
  };
  const removeItemConclusao = (value) => {
    var index = ConclusaoExtraRins.indexOf(value);

    if (index > -1) {
      ConclusaoExtraRins.splice(index, 1);
      setConclusaoExtraRins((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };

  const removeConclusaoSelect = (value) => {
    ConclusaoExtraRins.map((e) => {
      if (e.includes(value)) {
        let index = ConclusaoExtraRins.indexOf(e);

        if (index > -1) {
          ConclusaoExtraRins.splice(index, 1);
          setConclusaoExtraRins((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select(value);
        }
      }
    });
  };

  const subExameEmpy = "";
  const subExame = "Rins";
  const titulo_exame = "Rins e Vias Urinárias";

  useEffect(() => {
    if ((Object.keys(FrasesExtraRins).length == 0) && (Object.keys(ConclusaoExtraRins).length == 0)) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesExtraRins,
        ConclusaoExtraRins
      ).Format_Laudo_Create_Storage();
    } else if ((Object.keys(FrasesExtraRins).length == 0) && (Object.keys(ConclusaoExtraRins).length > 0)) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesExtraRins,
        ConclusaoExtraRins
      ).Format_Laudo_Create_Storage();
      new Format_Laudo(
        titulo_exame,
        subExameEmpy,
        false,
        FrasesExtraRins,
        ConclusaoExtraRins
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesExtraRins,
        ConclusaoExtraRins
      ).Format_Laudo_Create_Storage();
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesExtraRins,
        ConclusaoExtraRins
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesExtraRins, ConclusaoExtraRins]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 10px 15px"
      mt="20px"
    >
      <Box mb="20px">
        <RimDireito
          Nefropatia={ValueRimNefropatia}
          CheckboxNefropatia={checkboxNefropatiaCronica}
          RimPelvico={SelectRimPelvico}
          CheckboxRimPelvico={checkboxRimPelvico}
          RimFerradura={checkboxRimFerradura}
        />
        <RimEsquerdo
          Nefropatia={ValueRimNefropatia}
          CheckboxNefropatia={checkboxNefropatiaCronica}
          RimPelvico={SelectRimPelvico}
          CheckboxRimPelvico={checkboxRimPelvico}
          RimFerradura={checkboxRimFerradura} />
        <Box mt='10px' gap="25px" display="flex" flexWrap="wrap">
          <Box w="160px">
            <Checkbox
              onChange={(e) => {
                setCheckboxRimFerradura(!checkboxRimFerradura);
              }}
            >
              Rim em Ferradura
            </Checkbox>

          </Box>

          <Box w="160px">
            <Checkbox
              onChange={(e) => {
                setCheckboxNefropatiaCronica(!checkboxNefropatiaCronica);
              }}
            >
              Nefropatia Crônica
            </Checkbox>
            <Select
              isDisabled={!checkboxNefropatiaCronica}
              onChange={(e) => {
                setSelectNefropatiaCronica(e.target.value);
              }}
              value={SelectNefropatiaCronica}
              w="100%"
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="direito">Rim direito</option>
              <option value="esquerdo">Rim esquerdo</option>
              <option value="bilateral">Bilateral</option>
            </Select>
          </Box>

          <Box w="160px">
            <Checkbox
              onChange={(e) => {
                setCheckboxRimPelvico(!checkboxRimPelvico);
              }}
            >
              Rim Pélvico
            </Checkbox>
            <Select
              isDisabled={!checkboxRimPelvico}
              onChange={(e) => {
                setSelectRimPelvico(e.target.value);
              }}
              value={SelectRimPelvico}
              w="100%"
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="Rim direito">Rim direito</option>
              <option value="Rim esquerdo">Rim esquerdo</option>
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ExtraRins;
