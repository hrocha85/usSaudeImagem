import { Box, Button, GridItem, Image, Link, Tooltip } from "@chakra-ui/react";
import PropsTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import FormatLaudo from "../../Data/Format_Laudo.json";
import Observacoes from "../../Data/Observacoes.json";
import { EnableExamesContext } from "../../context/ExamesEnableContext";
import { TabExamesContext } from "../../context/TabExameContext";
import reghd_2 from "../images/reghd_2.png";

const FieldDefaultHome = ({ text, textColor, id, obs, exame }) => {
  let { enableExames, setEnableExames } = useContext(EnableExamesContext);
  const { tabExames, setTabExames } = useContext(TabExamesContext);
  const [observacoes, SetObservacoes] = useState([])


  useEffect(() => {
    const existingObservacoes = localStorage.getItem("observacoes");
    if (existingObservacoes) {
      console.log('observacoesField', existingObservacoes)
    }

  }, [])



  const format_laudo = FormatLaudo.format_laudo;
  // const observacoes = Observacoes.observacoes;


  const exames = [
    {
      key: 1,
      nomeExame: "Abdômen total",
      link: `#/Exames/${1}`,
    },
    // {
    //   key: 2,
    //   nomeExame: "Doppler Transvaginal",
    //   link: `#/Home/${2}`,
    // },
    {
      key: 3,
      nomeExame: "Mamas",
      link: `#/Exames/${3}`,
    },
    // {
    //   key: 4,
    //   nomeExame: "Doppler Artrial do MMSS",
    //   link: `#/Exames/${4}`,
    // },
    {
      key: 5,
      nomeExame: "Abdomen Superior",
      link: `#/Exames/${5}`,
    },
    {
      key: 6,
      nomeExame: "Transvaginal",
      link: `#/Exames/${6}`,
    },

    // {
    //   key: 7,
    //   nomeExame: "Doppler Venoso de MMII",
    //   link: `#/Exames/${7}`,
    // },
    {
      key: 8,
      nomeExame: "Tireóide",
      link: `#/Exames/${8}`,
    },
    // {
    //   key: 9,
    //   nomeExame: "Doppler das Carótidas",
    //   link: `#/Exames/${9}`,
    // },

    // {
    //   key: 10,
    //   nomeExame: "Doppler Arterial de MMII",
    //   link: `#/Exames/${10}`,
    // },

    {
      key: 11,
      nomeExame: "Rins e Vias Urinárias",
      link: `#/Exames/${11}`,
    },

    // {
    //   key: 12,
    //   nomeExame: "Doppler da Tireóide",
    //   link: `#/Exames/${12}`,
    // },
    {
      key: 13,
      nomeExame: "Partes Moles",
      link: `#/Exames/${13}`,
    },
    {
      key: 14,
      nomeExame: "Testículo",
      link: `#/Exames/${14}`,
    },
    // {
    //   key: 15,
    //   nomeExame: "Doppler de Bolsa Testicular",
    //   link: `#/Exames/${15}`,
    // },

    {
      key: 16,
      nomeExame: "Pélvico",
      link: `#/Exames/${16}`,
    },
    {
      key: 17,
      nomeExame: "Próstata",
      link: `#/Exames/${17}`,
    },
    {
      key: 18,
      nomeExame: "Articulações",
      link: `#/Exames/${18}`,
    },
    {
      key: 19,
      nomeExame: "Região Inguinal",
      link: `#/Exames/${19}`,
    },
    {
      key: 20,
      nomeExame: "Axila",
      link: `#/Exames/${20}`,
    },
    {
      key: 21,
      nomeExame: "Torax",
      link: `#/Exames/${21}`,
    },
    {
      key: 22,
      nomeExame: "Parede Abdominal",
      link: `#/Exames/${21}`,
    },
  ];

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

    // if (obs != null) {
    //   const newObservacao = {
    //     id: id,
    //     titulo_observacao: text,
    //     observacao: obs!,
    //   };

    //   if (existingObservacoes !== null) {
    //     const parsedObservacoes = JSON.parse(existingObservacoes);
    //     const existingObservacao = parsedObservacoes.find(
    //       (obs) => obs.titulo_observacao === text
    //     );
    //     if (existingObservacao) {
    //       existingObservacao.observacao = obs!;
    //       localStorage.setItem(
    //         "observacoes",
    //         JSON.stringify(parsedObservacoes)
    //       );
    //     } else {
    //       const mergedObservacoes = [...parsedObservacoes, newObservacao];
    //       localStorage.setItem(
    //         "observacoes",
    //         JSON.stringify(mergedObservacoes)
    //       );
    //     }
    //   } else {
    //     localStorage.setItem("observacoes", JSON.stringify([newObservacao]));
    //   }
    // }
  };

  const AddExameID = (idExame) => {

    // const exameEncontrado = exames.find(
    //   (e) => e.key.toString() === id.toString()
    // );

    const exameEncontrado = exames.filter((e) => e.key == idExame)


    if (exameEncontrado) {
      setTabExames(exameEncontrado);
    }
  };

  return (
    <GridItem
      w="100%"
      h="70px"
      display="flex"
      flexWrap="wrap"
      onClick={() => {
        AddTituloLaudo()
        AddExameID(id)
      }}
    >
      <Box
        display="flex"
        h="70%"
        w="100%"
        margin="5px"
        alignItems={'center'}
        borderRadius={10}
        border={'1px'}
        bg={'#2e4ad4'}
        borderColor={'gray'}
      >
        {/* <Link
          href={`#/Exames/`}
          fontWeight="bold"
          fontSize="14px"
          position="relative"
          pl="80px"
          z-index="1"
        /> */}

        <Tooltip
          isDisabled={enableExames}
          label="Insira os dados do paciente"
          placement="top"
          bg={'whiteAlpha.700'}
          hasArrow
          arrowSize={15}
          textColor="black"
          fontSize="20px"
          fontWeight={'semibold'}
          margin="20px"
          textAlign="center"
        >
          <Link
            href={`#/Exames/`}
            fontWeight="bold"
            z-index="1"
            padding={19.9}
          >
            <Button
              _hover={{ padding: "3px" }}
              isDisabled={!enableExames}
              fontSize="15.9px"
              variant="link"
              alignContent={'center'}
              textAlign={'center'}
              w="130px"
              h="30px"
              textColor={'white'}
              style={{
                whiteSpace: "normal",
                wordWrap: "break-word",
              }}
              // onClick={() => console.log(id)}
              onClick={() => {
                // AddExameID(id)
              }}
            >

              {text}
            </Button>
          </Link>
        </Tooltip>
      </Box>
    </GridItem>

    // <Navigate to="/Exames/" />) :
    // (
    //   <GridItem
    //     w="200px"
    //     h="70px"
    //     display="flex"
    //     flexWrap="wrap"
    //     onClick={() => AddTituloLaudo()}
    //   >
    //     <Box
    //       display="flex"
    //       flexWrap="wrap"
    //       h="100%"
    //       w="100%"
    //       margin="5px"
    //       alignItems="center"
    //     >
    //       <Image
    //         position="absolute"
    //         h="100px"
    //         width="220px"
    //         z-index="-1"
    //         src={reghd_2}
    //         alt=""
    //       />
    //       {/* <Link
    //       href={`#/Exames/`}
    //       fontWeight="bold"
    //       fontSize="14px"
    //       position="relative"
    //       pl="80px"
    //       z-index="1"
    //     /> */}

    //       <Tooltip
    //         isDisabled={enableExames}
    //         label="Insira os dados do paciente"
    //         backgroundColor="white"
    //         placement="top"
    //         hasArrow
    //         arrowSize={15}
    //         textColor="black"
    //         fontSize="20px"
    //         margin="20px"
    //         textAlign="center"
    //       >
    //         {/* <Link
    //         href={`#/Exames/`}
    //         fontWeight="bold"
    //         position="absolute"
    //         pl="80px"
    //         z-index="1"
    //       > */}
    //         <Button
    //           _hover={{ bg: "blue.100", padding: "3px" }}
    //           isDisabled={!enableExames}
    //           fontSize="13.9px"
    //           variant="link"
    //           textAlign="center"
    //           textColor="black"
    //           w="110px"
    //           h="100%"
    //           style={{
    //             whiteSpace: "normal",
    //             wordWrap: "break-word",
    //           }}
    //           // onClick={() => console.log(id)}
    //           onClick={() => AddExameID(id)}
    //         >
    //           {text}
    //         </Button>
    //         {/* </Link> */}
    //       </Tooltip>
    //     </Box>
    //   </GridItem>

  )
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
