import { Box, Button, GridItem, Image, Link, Tooltip } from "@chakra-ui/react";
import PropsTypes from "prop-types";
import { useContext } from "react";
import { EnableExamesContext } from "../../context/ExamesEnableContext";
import { TabExamesContext } from "../../context/TabExameContext";
import FormatLaudo from "../../Data/Format_Laudo.json";
import reghd_2 from "../images/reghd_2.png";
import Observacoes from "../../Data/Observacoes.json";

const FieldDefaultHome = ({ text, textColor, id, obs }) => {
  let { enableExames, setEnableExames } = useContext(EnableExamesContext);
  const { tabExames, setTabExames } = useContext(TabExamesContext);

  const format_laudo = FormatLaudo.format_laudo;
  const observacoes = Observacoes.observacoes;

  const AddTituloLaudo = () => {
    const obj = {
      titulo_exame: text,
      subExames: [{ subExameNome: "", frases: [] }],
      conclusoes: [""],
      observacoes: [""],
    };
    format_laudo.push(obj);
    format_laudo.map((e) => {
      if (e.titulo_exame == "") {
        format_laudo.shift();
      }
    });

    localStorage.setItem("format_laudo", JSON.stringify(format_laudo));

    const setObservacao = {
      id: id,
      titulo_observacao: text,
      observacao: obs!,
    };
    observacoes.push(setObservacao);

    localStorage.setItem("observacoes", JSON.stringify(observacoes));
  };
  const AddExameID = () => {
    const exames = [
      {
        key: 1,
        nomeExame: "Abdômen total",
        link: `#/Home/${1}`,
      },
      {
        key: 2,
        nomeExame: "Doppler Transvaginal",
        link: `#/Home/${2}`,
      },
      {
        key: 3,
        nomeExame: "Mamas",
        link: `#/Home/${3}`,
      },
      {
        key: 4,
        nomeExame: "Doppler Artrial do MMSS",
        link: `#/Home/${4}`,
      },
      {
        key: 5,
        nomeExame: "Abdomen Superior",
        link: `#/Home/${5}`,
      },
      {
        key: 6,
        nomeExame: "Transvaginal",
        link: `#/Home/${6}`,
      },
      {
        key: 7,
        nomeExame: "Doppler Renal",
        link: `#/Home/${7}`,
      },
      {
        key: 8,
        nomeExame: "Doppler Venoso de MMII",
        link: `#/Home/${8}`,
      },
      {
        key: 9,
        nomeExame: "Tireóide",
        link: `#/Home/${9}`,
      },
      {
        key: 10,
        nomeExame: "Doppler das Carótidas",
        link: `#/Home/${10}`,
      },
      {
        key: 11,
        nomeExame: "Doppler Hepático",
        link: `#/Home/${11}`,
      },
      {
        key: 12,
        nomeExame: "Doppler Arterial de MMII",
        link: `#/Home/${12}`,
      },
      {
        key: 13,
        nomeExame: "Tireóide 2",
        link: `#/Home/${13}`,
      },
      {
        key: 14,
        nomeExame: "Doppler das Carótidas 2",
        link: `#/Home/${14}`,
      },
      {
        key: 15,
        nomeExame: "Rins e Vias Urinárias",
        link: `#/Home/${15}`,
      },
      {
        key: 16,
        nomeExame: "Dopper Venoso de MMSS",
        link: `#/Home/${16}`,
      },
      {
        key: 17,
        nomeExame: "Doppler da Tireóide",
        link: `#/Home/${17}`,
      },
      {
        key: 18,
        nomeExame: "Partes Moles",
        link: `#/Home/${18}`,
      },
      {
        key: 19,
        nomeExame: "Testículo",
        link: `#/Home/${19}`,
      },
      {
        key: 20,
        nomeExame: "Doppler de Bolsa Testicular",
        link: `#/Home/${20}`,
      },
      {
        key: 21,
        nomeExame: "Doppler da Tireóide 2",
        link: `#/Home/${21}`,
      },
      {
        key: 22,
        nomeExame: "Pélvico",
        link: `#/Home/${22}`,
      },
      {
        key: 23,
        nomeExame: "Próstata",
        link: `#/Home/${23}`,
      },
      {
        key: 24,
        nomeExame: "Articulações",
        link: `#/Home/${24}`,
      },
    ];

    let exameEncontrado: any = null;

    while (!exameEncontrado) {
      if (typeof id !== "string" && typeof id !== "number") {
        break;
      }
      if (id <= 0 || id > exames.length) {
        break;
      }

      exameEncontrado = exames.find((e) => e.key.toString() === id.toString());

      if (
        exameEncontrado &&
        exameEncontrado !== null &&
        exameEncontrado !== undefined
      ) {
        setTabExames((tabExames) => [...tabExames, exameEncontrado]);
      }
    }
  };
  return (
    <GridItem
      w="200px"
      h="70px"
      display="flex"
      flexWrap="wrap"
      onClick={() => AddTituloLaudo()}
    >
      <Box
        display="flex"
        flexWrap="wrap"
        h="100%"
        w="100%"
        margin="5px"
        alignItems="center"
      >
        <Image
          position="absolute"
          h="100px"
          width="220px"
          z-index="-1"
          src={reghd_2}
          alt=""
        />
        <Link
          href={`#/Exames/`}
          fontWeight="bold"
          fontSize="14px"
          position="relative"
          pl="80px"
          // pt='30px'
          z-index="1"
          //onClick={(e) => clicando(id, text)}
        />

        <Tooltip
          isDisabled={enableExames}
          label="Insira os dados do paciente"
          backgroundColor="white"
          placement="top"
          hasArrow
          arrowSize={15}
          textColor="black"
          fontSize="20px"
          margin="20px"
          textAlign="center"
        >
          <Link
            href={`#/Exames/`}
            fontWeight="bold"
            position="absolute"
            pl="80px"
            z-index="1"
          >
            <Button
              isDisabled={
                id == 25 || id == 16 || id == 7 || id == 11
                  ? true
                  : !enableExames
              }
              fontSize="13.9px"
              variant="link"
              textAlign="center"
              textColor="black"
              w="110px"
              h="100%"
              style={{
                whiteSpace: "normal",
                wordWrap: "break-word",
              }}
              onClick={() => AddExameID()}
            >
              {text}
            </Button>
          </Link>
        </Tooltip>
      </Box>
    </GridItem>
  );
};

FieldDefaultHome.protoTypes = {
  text: PropsTypes.string,
  textColor: PropsTypes.string,
};

FieldDefaultHome.defaultProps = {
  text: "Título",
  textColor: "FFFFFF",
};

export default FieldDefaultHome;
