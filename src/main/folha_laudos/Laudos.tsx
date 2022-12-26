import {
  Box,
  Center,
  Circle,
  Divider,
  Grid,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  Textarea,
  Tooltip,
} from "@chakra-ui/react";
import {
  Document,
  Font,
  Image as ImagePDF,
  Page,
  PDFDownloadLink,
  StyleSheet,
  Text as TextPDF,
  View as ViewPDF,
} from "@react-pdf/renderer";
import { useContext, useEffect, useRef, useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { GoDesktopDownload } from "react-icons/go";
import { LaudosContext } from "../../context/LuadosContext";
import LaudosJSON from "../../Data/Laudos.json";
import "./Laudos.css";

function Exames() {
  const ref = useRef<HTMLDivElement | null>(null);
  const laudos = LaudosJSON.laudo;

  const getUserClinica = () => {
    if (localStorage.getItem("user") != null) {
      var clinica = JSON.parse(localStorage.getItem("user")!);
    }
    return clinica.clinica;
  };

  const getUserMedico = () => {
    if (localStorage.getItem("user") != null) {
      var medico = JSON.parse(localStorage.getItem("user")!);
    }
    return medico.medico;
  };

  const getPaciente = () => {
    if (localStorage.getItem("paciente") != null) {
      return JSON.parse(localStorage.getItem("paciente")!).nome;
    } else {
      return "Nome paciente";
    }
  };

  const getCurrentDate = () => {
    const timeStamp = new Date();

    return `${timeStamp.getDate()}/${
      timeStamp.getMonth() + 1
    }/${timeStamp.getFullYear()}  ${timeStamp.getHours()}:${timeStamp.getMinutes()}:${timeStamp.getSeconds()}h`;
  };

  const getCurrentDateLaudo = () => {
    const timeStamp = new Date();

    return `${timeStamp.getDate()}/${
      timeStamp.getMonth() + 1
    }/${timeStamp.getFullYear()}`;
  };

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  const [clinicaSet, setClinica] = useState<any>(JSON.parse(getUserClinica()));
  const [medico, setMedico] = useState(getUserMedico());
  const [urlLaudo, setUrlLaudo] = useState<any>();
  const [edit, setEdit] = useState(false);
  const [titulo_exame, setTitulo_Exame] = useState("TÍTULO EXAME");
  const [frasesExame, setFrasesExame] = useState([]);
  const [arrayLocal, setArrayLocal] = useState(
    JSON.parse(localStorage.getItem("format_laudo")!)
  );
  
  const styles = StyleSheet.create({
    inline: {
      display: "flex",
      flexDirection: "row",
      paddingBottom: 30,
      marginTop: "20px",
      marginBottom: "20px",
    },
    page: {
      backgroundColor: "white",
      color: "black",
    },
    section: {
      margin: 10,
      padding: 10,
      flexDirection: "row",
      width: "100%",
    },
    viewer: {
      width: window.screen.availWidth,
      height: window.screen.availHeight,
    },
    imageClinica: {
      width: 150,
      height: 150,
      objectFit: "scale-down",
      alignContent: "center",
    },
    imageAssinatura: {
      width: 100,
      height: 100,
      alignContent: "center",
      justifyContent: "center",
      alignSelf: "center",
    },
    viewAssinatura: {
      alignItems: "center",
      justifyContent: "center",
    },
    sectionColuna: {
      flexDirection: "column",
      alignItems: "center",
      marginTop: 30,
      marginLeft: 80,
    },

    line: {
      border: 1,
      marginLeft: 10,
      marginRight: 10,
    },
    laudo: {
      margin: 30,
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
      flex: "1",
      fontSize: 14,
    },
    pageNumber: {
      position: "absolute",
      bottom: 1,
    },
    footer: {
      flexDirection: "row",
      marginBottom: 20,
      width: "100%",
    },
    footerColuna: {
      flexDirection: "column",
      margin: 20,
    },
    borderFooter: {
      border: 1,
      width: "30vh",
    },
    viewdadosMedico: {
      alignItems: "center",
      margin: 20,
    },
    textDadosMedico: {
      fontFamily: "MontserratBold",
      fontSize: 16,
      color: "black",
    },
    textSantaImagem: {
      marginTop: "19vh",
      marginLeft: 50,
      fontSize: "11",
      fontFamily: "Montserrat",
    },
    textDiagnostico: {
      margin: 10,
      fontSize: "10",
      fontFamily: "Montserrat2",
    },
    textTituloExame: {
      fontWeigh: "bold",
      textAlign: "center",
      fontSize: "20",
      fontFamily: "MontserratBold",
      marginBottom: "50px",
    },
    textNomeSubExame: {
      fontWeigh: "bold",
      textAlign: "center",
      fontSize: "17",
      fontFamily: "MontserratBold",
      textDecoration: "underline",
      marginRight: "20px",
    },
    frasesSubExame: {
      textAlign: "justify",
      fontSize: "15",
      fontFamily: "MontserratRegular",
      flex: 1,
      marginBottom: "30px",
    },
    laudo_viewer: {
      margin: 20,
      marginBottom: "35%",
    },
  });

  Font.register({
    family: "Montserrat",

    fonts: [
      {
        src: "http://fonts.gstatic.com/s/montserrat/v25/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jqw16aX9-p7K5ILg.ttf",
      },
    ],
  });

  Font.register({
    family: "Montserrat2",

    fonts: [
      {
        src: "http://fonts.gstatic.com/s/montserrat/v25/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq5Z9aX9-p7K5ILg.ttf",
      },
    ],
  });

  Font.register({
    family: "MontserratBold",

    fonts: [
      {
        src: "http://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu170w-Y3tcoqK5.ttf",
      },
    ],
  });

  Font.register({
    family: "MontserratRegular",

    fonts: [
      {
        src: "http://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-Y3tcoqK5.ttf",
      },
    ],
  });

  const Laudo = () => {
    const renderFrases = () => {
      var arrayLocal = JSON.parse(localStorage.getItem("format_laudo")!);

      return arrayLocal.map((Exames) => {
        return Exames.subExames.map((sub) => {
          return sub.subExameNome != null && sub.subExameNome != "" ? (
            <ViewPDF style={styles.inline}>
              <TextPDF style={styles.textNomeSubExame}>
                {sub.subExameNome}:
              </TextPDF>
              <TextPDF style={styles.frasesSubExame}>{sub.frases}</TextPDF>
            </ViewPDF>
          ) : null;
        });
      });
    };

    return (
      <Document
        title={`Laudo Paciente ${getPaciente()} Data - ${getCurrentDate()}`}
        author={`Dr.${medico.nome}`}
      >
        <Page size="A4" style={styles.page}>
          <ViewPDF style={styles.section}>
            <ViewPDF style={styles.viewAssinatura}>
              <ImagePDF style={styles.imageClinica} src={clinicaSet.foto} />
            </ViewPDF>

            <ViewPDF style={styles.sectionColuna}>
              <TextPDF>{clinicaSet.nomeClinica}</TextPDF>
              <TextPDF>{getPaciente()}</TextPDF>
              <TextPDF>{getCurrentDate()}</TextPDF>
              <TextPDF>{`Dr. ${medico.nome}`}</TextPDF>
            </ViewPDF>
          </ViewPDF>
          <ViewPDF style={styles.line}></ViewPDF>
          <ViewPDF style={styles.laudo_viewer}>
            <TextPDF style={styles.textTituloExame}>
              {titulo_exame.toUpperCase()}
            </TextPDF>
            <ViewPDF>{renderFrases()}</ViewPDF>
          </ViewPDF>
          <ViewPDF style={styles.pageNumber}>
            <ViewPDF style={styles.pageNumber}>
              <ViewPDF style={styles.footer}>
                <ViewPDF style={styles.footerColuna}>
                  <ImagePDF
                    style={styles.imageAssinatura}
                    src={medico.assinatura}
                  />
                  <span style={styles.borderFooter}></span>
                  <ViewPDF style={styles.viewdadosMedico}>
                    <TextPDF
                      style={styles.textDadosMedico}
                    >{`Dr. ${medico.nome}`}</TextPDF>
                    <TextPDF
                      style={styles.textDadosMedico}
                    >{`CRM ${medico.crm}`}</TextPDF>
                  </ViewPDF>
                </ViewPDF>
                <TextPDF style={styles.textSantaImagem}>
                  Santa Imagem Diagnósticos por imagem
                </TextPDF>
              </ViewPDF>
            </ViewPDF>

            <TextPDF style={styles.textDiagnostico}>
              "A impressão diagnóstica em exames de imagem não é absoluta,
              devendo ser correlacionada com dados clínicos, laboratorias e
              outros métodos de imagem complementares"
            </TextPDF>
          </ViewPDF>
        </Page>
      </Document>
    );
  };

  const update = (laudos) => {
    var array = JSON.parse(localStorage.getItem("medicos")!);
    array.map((medi) => {
      if (medi.nome == getUserMedico().nome) {
        medi.laudos = laudos;
      }
      localStorage.setItem("medicos", JSON.stringify(array));
    });
  };

  const AddLaudoSalvo = () => {
    const getCurrentData = {
      paciente: getPaciente(),
      laudo: urlLaudo,
      data: getCurrentDateLaudo(),
    };
    laudos.map((e) => {
      if (e.laudo == undefined || e.laudo == "") {
        laudos.shift();
      }
    });
    laudos.push(getCurrentData);
    update(laudos);
  };

  const convertBlob = (blob) => {
    var file = new Blob([blob], { type: "application/pdf" });
    var fileURL = URL.createObjectURL(file);
    setUrlLaudo(fileURL);
  };

  const getFormatLaudo = () => {
    setArrayLocal(JSON.parse(localStorage.getItem("format_laudo")!));
    arrayLocal.map((Exames) => {
      setTitulo_Exame(Exames.titulo_exame);
    });
    return arrayLocal;
  };

  useEffect(() => {
    if (urlLaudo != null) {
      AddLaudoSalvo();
    }
  }, [urlLaudo]);

  window.addEventListener("storage", () => {
    getFormatLaudo();
  });

  /*useEffect(() => {
    console.log(Math.round(JSON.stringify(localStorage).length / 1024));
  }, []);*/

  return (
    <>
      <Box className="zoom" boxShadow="xl" ref={ref}>
        <Grid w="100%" gridTemplateRows={"15px 1fr 15px"}>
          <Box margin="5px" display="flex" marginStart="15px">
            <Image
              src={clinicaSet.foto}
              alt="Imagem Clínica"
              boxSize="130px"
              objectFit="scale-down"
            />
          </Box>

          <Grid
            templateColumns="repeat(1, 1fr)"
            marginStart="50px"
            justifyItems="center"
            justifySelf="center"
          >
            <Text fontWeight="bold">{clinicaSet.nomeClinica}</Text>
            <Text>{getPaciente()}</Text>
            <Text>{getCurrentDate()}</Text>
            <Text>{`Dr. ${medico.nome}`}</Text>
          </Grid>
        </Grid>
        <Center>
          <Divider
            inlineSize="95%"
            margin="5px"
            borderColor="black"
            marginTop="15px"
          />
        </Center>
        <Box overflow="auto" h="45%" margin="20px">
          {edit == false ? (
            <>
              <Text
                textDecoration="underline"
                fontWeight="bold"
                fontSize="19px"
                textAlign="center"
                textTransform="uppercase"
              >
                {titulo_exame}
              </Text>
              {arrayLocal.map((Exames) => {
                return Exames.subExames.map((sub) => {
                  return sub.subExameNome != null && sub.subExameNome != "" ? (
                    <HStack
                      justifyContent="space-between"
                      marginBottom="30px"
                      marginTop="20px"
                    >
                      <HStack justify="space-between">
                        <Text
                          textDecoration="underline"
                          fontWeight="semibold"
                          whiteSpace="nowrap"
                        >
                          {sub.subExameNome}:
                        </Text>
                        <Box w="100%">
                          {sub.frases.map((frase) => {
                            return (
                              <Stack>
                                <Text
                                  w="100%"
                                  textAlign="start"
                                  marginStart="10px"
                                >
                                  {frase}
                                </Text>
                              </Stack>
                            );
                          })}
                        </Box>
                      </HStack>
                    </HStack>
                  ) : null;
                });
              })}
              <HStack justify="space-evenly" marginTop="10px"></HStack>
            </>
          ) : (
            <Textarea
              defaultValue={frasesExame}
              h="100%"
              onChange={(e) => {
                setLaudoPrin(() => [e.target.value]);
              }}
            ></Textarea>
          )}
        </Box>
        <Box position="absolute" bottom="1px" w="100%">
          <HStack w="100%" justify="space-between">
            <Grid templateColumns="repeat(1, 1fr)" justifyItems="center">
              <Image
                src={medico.assinatura}
                alt="Assinatura Médico"
                boxSize="100px"
                backgroundImage="none"
              />
              <Divider
                inlineSize="30vh"
                margin="5px"
                marginTop="0px"
                borderColor="black"
              />

              <Text fontWeight="bold">{`Dr. ${medico.nome}`}</Text>
              <Text fontWeight="bold">{`CRM ${medico.crm}`}</Text>
            </Grid>

            <Text
              fontSize="11px"
              fontStyle="italic"
              fontWeight="bold"
              overflowWrap="break-word"
              paddingTop="12%"
              paddingEnd="10px"
            >
              Santa Imagem Diagnósticos por imagem
            </Text>
          </HStack>
          <Text fontSize="10" overflowWrap="break-word" margin="10px">
            "A impressão diagnóstica em exames de imagem não é absoluta, devendo
            ser correlacionada com dados clínicos, laboratorias e outros métodos
            de imagem complementares"
          </Text>
        </Box>
      </Box>
      <HStack
        alignItems="center"
        align="center"
        right="6.5%"
        bottom={1}
        position="fixed"
        w="20%"
        h="auto"
        marginBottom="1px"
        justify="space-around"
      >
        <Link
          //href={`#/Format_PDF`}
          //target="_blank"
          style={{ textDecoration: "none" }}
          onClick={() => window.open(`#/Format_PDF`, "_blank")}
        >
          <Tooltip
            label="Visualizar Laudo"
            fontSize="xl"
            backgroundColor="white"
            placement="top"
            hasArrow
            arrowSize={15}
            textColor="black"
          >
            <Circle size="50px" bg="gray.200">
              <Icon
                w={30}
                h={30}
                as={BsEye}
                color="twitter.600"
                size="30px"
                onClick={() => {
                  //<Format_PDF />;
                }}
              />
            </Circle>
          </Tooltip>
        </Link>

        <PDFDownloadLink
          document={Laudo()}
          fileName={`Laudo Paciente ${getPaciente()} Data - ${getCurrentDate()}`}
        >
          {({ blob, url, loading, error }) =>
            loading ? (
              <Icon as={BiLoaderAlt} color="#4658fc" w={50} h={40} />
            ) : (
              <Tooltip
                label="Baixar Laudo"
                fontSize="xl"
                backgroundColor="white"
                placement="top"
                hasArrow
                arrowSize={15}
                textColor="black"
              >
                <Circle size="50px" bg="gray.200">
                  <Icon
                    as={GoDesktopDownload}
                    w={30}
                    h={30}
                    color="twitter.600"
                    onClick={() => {
                      convertBlob(blob!);
                    }}
                  />
                </Circle>
              </Tooltip>
            )
          }
        </PDFDownloadLink>
        <Tooltip
          label="Editar Laudo"
          fontSize="xl"
          backgroundColor="white"
          placement="top"
          hasArrow
          arrowSize={15}
          textColor="black"
        >
          <Circle size="50px" bg="gray.200">
            <Icon
              w={30}
              h={30}
              as={FiEdit}
              color="twitter.600"
              onClick={() => {
                setEdit(true);
              }}
            />
          </Circle>
        </Tooltip>
      </HStack>
    </>
  );
}

export default Exames;
