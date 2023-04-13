/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Conclusoes() {
  const altura = "100%";
  const largura = "500px";

  const [Frase, setFrase] = useState<any>([]);
  const [FraseConclu, setFraseConclu] = useState<any>([]);

  const [AchadosMamograficosCheckbox, setAchadosMamograficosCheckbox] = useState(false);

  const [AchadosInconclusivosCheckbox, setAchadosInconclusivosCheckbox] = useState(false);

  const [ImagensSugestivosBenignosCheckbox, setImagensSugestivosBenignosCheckbox] = useState(false);
  const [ProvavelmenteBenignosCheckbox, setProvavelmenteBenignosCheckbox] = useState(false);
  const [AchadosSuspeitosCheckbox, setAchadosSuspeitosCheckbox] = useState(false);
  const [AchadosAltamenteSuspeitosCheckbox, setAchadosAltamenteSuspeitosCheckbox] = useState(false);
  const [AchadosCancerCheckbox, setAchadosCancerCheckbox] = useState(false);



  const removeItemString = (value) => {
    var index = FraseConclu.indexOf(value);
    if (index > -1) {
      FraseConclu.splice(index, 1);
      setFraseConclu((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };

  useEffect(() => {
    const string = 'Achados inconclusivos.'
    AchadosInconclusivosCheckbox ? setFraseConclu((arr) => [...arr, string]) : removeItemString(string)
  }, [AchadosInconclusivosCheckbox]);


  useEffect(() => {
    const string = 'Achados mamográficos dentro dos limites da normalidade.'
    AchadosMamograficosCheckbox ? setFraseConclu((arr) => [...arr, string]) : removeItemString(string)
  }, [AchadosMamograficosCheckbox]);

  useEffect(() => {
    const string = 'Imagens sugestivos de achados benignos.'
    ImagensSugestivosBenignosCheckbox ? setFraseConclu((arr) => [...arr, string]) : removeItemString(string)
  }, [ImagensSugestivosBenignosCheckbox]);

  useEffect(() => {
    const string = 'Imagens sugestivos de achados provavelmente benignos.'
    ProvavelmenteBenignosCheckbox ? setFraseConclu((arr) => [...arr, string]) : removeItemString(string)
  }, [ProvavelmenteBenignosCheckbox]);

  useEffect(() => {
    const string = 'Imagens sugestiva achados suspeitos.'
    AchadosSuspeitosCheckbox ? setFraseConclu((arr) => [...arr, string]) : removeItemString(string)
  }, [AchadosSuspeitosCheckbox]);

  useEffect(() => {
    const string = 'Imagens sugestiva achados altamente suspeitos.'
    AchadosAltamenteSuspeitosCheckbox ? setFraseConclu((arr) => [...arr, string]) : removeItemString(string)
  }, [AchadosAltamenteSuspeitosCheckbox]);

  useEffect(() => {
    const string = 'Imagens sugestiva achado investigado previamente e com resultado positivo (câncer).'
    AchadosCancerCheckbox ? setFraseConclu((arr) => [...arr, string]) : removeItemString(string)
  }, [AchadosCancerCheckbox]);

  const subExame = "";
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(FraseConclu).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        Frase,
        FraseConclu
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        Frase,
        FraseConclu
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseConclu]);

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
      mt='20px'
    >


      <TituloNomeExame titulo="Conclusões" />
      <Box gap="10px" display="flex" flexWrap="wrap" mb="10px">
        <Checkbox
          onChange={(e) => {
            setAchadosInconclusivosCheckbox(
              !AchadosInconclusivosCheckbox
            );
          }}
        >
          Achados inconclusivos
        </Checkbox>
        <Checkbox
          onChange={(e) => {
            setAchadosMamograficosCheckbox(!AchadosMamograficosCheckbox);
          }}
        >
          Achados mamográficos dentro dos limites da normalidade
        </Checkbox>
        <Checkbox
          onChange={(e) => {
            setImagensSugestivosBenignosCheckbox(!ImagensSugestivosBenignosCheckbox);
          }}
        >
          Imagens sugestivos de achados benignos
        </Checkbox>
        <Checkbox
          onChange={(e) => {
            setProvavelmenteBenignosCheckbox(!ProvavelmenteBenignosCheckbox);
          }}
        >
          Imagens sugestivos de achados provavelmente benignos
        </Checkbox>
        <Checkbox
          onChange={(e) => {
            setAchadosSuspeitosCheckbox(!AchadosSuspeitosCheckbox);
          }}
        >
          Imagens sugestiva achados suspeitos
        </Checkbox>
        <Checkbox
          onChange={(e) => {
            setAchadosAltamenteSuspeitosCheckbox(!AchadosAltamenteSuspeitosCheckbox);
          }}
        >
          Imagens sugestiva achados altamente suspeitos
        </Checkbox>
        <Checkbox
          onChange={(e) => {
            setAchadosCancerCheckbox(!AchadosCancerCheckbox);
          }}
        >
          Imagens sugestiva achado investigado previamente e com resultado positivo (câncer)
        </Checkbox>
      </Box>
    </Box>
  );
}

export default Conclusoes;
