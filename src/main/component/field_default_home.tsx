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
    const existingFormatLaudo = localStorage.getItem("format_laudo");

    const newFormatLaudo = {
      titulo_exame: text,
      subExames: [{ subExameNome: "", frases: [], image: "" }],
      conclusoes: [""],
      observacoes: [""],
    };

    let updatedFormatLaudo: any = [];

    if (existingFormatLaudo !== null) {
      updatedFormatLaudo = JSON.parse(existingFormatLaudo).map((exame) => {
        if (exame.titulo_exame === text) {
          return {
            ...exame,
            observacoes: [...exame.observacoes, obs],
          };
        }
        return exame;
      });
    }

    if (updatedFormatLaudo.every((exame) => exame.titulo_exame !== text)) {
      updatedFormatLaudo.push(newFormatLaudo);
    }

    localStorage.setItem("format_laudo", JSON.stringify(updatedFormatLaudo));

    const existingObservacoes = localStorage.getItem("observacoes");

    if (obs != null) {
      const newObservacao = {
        id: id,
        titulo_observacao: text,
        observacao: obs!,
      };

      if (existingObservacoes !== null) {
        const parsedObservacoes = JSON.parse(existingObservacoes);
        const existingObservacao = parsedObservacoes.find(
          (obs) => obs.titulo_observacao === text
        );
        if (existingObservacao) {
          existingObservacao.observacao = obs!;
          localStorage.setItem(
            "observacoes",
            JSON.stringify(parsedObservacoes)
          );
        } else {
          const mergedObservacoes = [...parsedObservacoes, newObservacao];
          localStorage.setItem(
            "observacoes",
            JSON.stringify(mergedObservacoes)
          );
        }
      } else {
        localStorage.setItem("observacoes", JSON.stringify([newObservacao]));
      }
    }
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
        nomeExame: "Doppler Venoso de MMII",
        link: `#/Home/${7}`,
      },
      {
        key: 8,
        nomeExame: "Tireóide",
        link: `#/Home/${8}`,
      },
      {
        key: 9,
        nomeExame: "Doppler das Carótidas",
        link: `#/Home/${9}`,
      },

      {
        key: 10,
        nomeExame: "Doppler Arterial de MMII",
        link: `#/Home/${10}`,
      },

      {
        key: 11,
        nomeExame: "Rins e Vias Urinárias",
        link: `#/Home/${11}`,
      },

      {
        key: 12,
        nomeExame: "Doppler da Tireóide",
        link: `#/Home/${12}`,
      },
      {
        key: 13,
        nomeExame: "Partes Moles",
        link: `#/Home/${13}`,
      },
      {
        key: 14,
        nomeExame: "Testículo",
        link: `#/Home/${14}`,
      },
      {
        key: 15,
        nomeExame: "Doppler de Bolsa Testicular",
        link: `#/Home/${15}`,
      },

      {
        key: 16,
        nomeExame: "Pélvico",
        link: `#/Home/${16}`,
      },
      {
        key: 17,
        nomeExame: "Próstata",
        link: `#/Home/${17}`,
      },
      {
        key: 18,
        nomeExame: "Articulações",
        link: `#/Home/${18}`,
      },
      {
        key: 19,
        nomeExame: "Região Inguinal",
        link: `#/Home/${19}`,
      },
      {
        key: 20,
        nomeExame: "Axila",
        link: `#/Home/${20}`,
      },
    ];

    const exameEncontrado = exames.find(
      (e) => e.key.toString() === id.toString()
    );

    if (exameEncontrado) {
      setTabExames((tabExames) => [...tabExames, exameEncontrado]);
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
          z-index="1"
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
              _hover={{ bg: "blue.100", padding: "3px" }}
              isDisabled={!enableExames}
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
