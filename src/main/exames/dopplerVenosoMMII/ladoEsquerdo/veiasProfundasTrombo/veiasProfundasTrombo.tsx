import { Box, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function VeiasProfundasTromboEsquerdo() {
  const altura = "100%";
  const largura = "95%";

  const [frasesReflluxoVD, setFrasesRefluxoVD] = useState<any>([]);

  const [arrayCheckbox, setArrayCheckbox] = useState<any>([]);

  const [FemoralComumCheckbox, setFemoralComumCheckbox] = useState(false);
  const [FemoralSuperficialCheckbox, setFemoralSuperficialCheckbox] =
    useState(false);
  const [FemoralProfundaCheckbox, setFemoralProfundaCheckbox] = useState(false);

  const [TibialAnteriorCheckbox, setTibialAnteriorCheckbox] = useState(false);
  const [TibialPosteriorCheckbox, setTibialPosteriorCheckbox] = useState(false);
  const [FibularCheckbox, setFibularCheckbox] = useState(false);
  const [PopliteaCheckbox, setPopliteaCheckbox] = useState(false);

  const criaString = () => {
    var string = `Insuficiência das veias ${arrayCheckbox}`;
    console.log(arrayCheckbox);

    setFrasesRefluxoVD((arr) => [...arr, string]);
  };

  const adicionaItemArray = (value) => {
    setArrayCheckbox((arr) => [...arr, value]);
    criaString();

    console.log(arrayCheckbox);
  };

  useEffect(() => {
    if (FemoralComumCheckbox) {
      console.log("femoral checked");
      setArrayCheckbox((arr) => [...arr, "Femoral Comum"]);
      criaString();
    } else {
      console.log("femoral nao checked");
    }
  }, [FemoralComumCheckbox]);

  useEffect(() => {
    if (FemoralSuperficialCheckbox) {
      console.log("femoral superficial checked");

      setArrayCheckbox((arr) => [...arr, "Femoral Superficial"]);
      criaString();
    } else {
      console.log("femoral nao checked");
    }
  }, [FemoralSuperficialCheckbox]);

  const removeString = (value) => {
    console.log("removendo");
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
    var index = frasesReflluxoVD.indexOf(value);

    if (index > -1) {
      frasesReflluxoVD.splice(index, 1);
      setFrasesRefluxoVD((arr) => [...arr]);
    }
  };
  const subExame = "Veias Profundas com trombo Esquerdo";
  const titulo_exame = "Doppler Venoso de MMII";

  useEffect(() => {
    if (Object.keys(frasesReflluxoVD).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesReflluxoVD
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesReflluxoVD
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesReflluxoVD]);
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
      <TituloNomeExame titulo="Veias Profundas com trombo" />

      <Box gap="30px">
        <Box>
          <Checkbox
            value="Femoral comum"
            onChange={(e) => {
              setFemoralComumCheckbox(!FemoralComumCheckbox);
            }}
          >
            Femoral Comum
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            value="Femoral Superficial"
            onChange={(e) => {
              setFemoralSuperficialCheckbox(!FemoralSuperficialCheckbox);
            }}
          >
            Femoral Superficial
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            value="Femoral Profunda"
            onChange={(e) => {
              setFemoralProfundaCheckbox(!FemoralProfundaCheckbox);
            }}
          >
            Femoral Profunda
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            value="Tibial Anterior"
            onChange={(e) => {
              setTibialAnteriorCheckbox(!TibialAnteriorCheckbox);
            }}
          >
            Tibial Anterior
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            onChange={() => {
              setTibialPosteriorCheckbox(!TibialPosteriorCheckbox);
            }}
          >
            Tibial Posterir
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            onChange={() => {
              setFibularCheckbox(!FibularCheckbox);
            }}
          >
            Fibular
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            onChange={() => {
              setPopliteaCheckbox(!PopliteaCheckbox);
            }}
          >
            Poplítea
          </Checkbox>
        </Box>
      </Box>
    </Box>
  );
}
export default VeiasProfundasTromboEsquerdo;
