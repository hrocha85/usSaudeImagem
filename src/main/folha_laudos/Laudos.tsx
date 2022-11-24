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
import Format_PDF from "./format_pdf";
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
  const [urlB, setUrl] = useState<any>();
  const [edit, setEdit] = useState(false);

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

  const styles = StyleSheet.create({
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
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
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
  });

  const Laudo = () => {
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
          <ViewPDF>
            <TextPDF style={styles.laudo}>{laudoPrin}</TextPDF>
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

  var editTextLaudo: string[] = [];

  const update = (laudos) => {
    var array = JSON.parse(localStorage.getItem("medicos")!);
    array.map((medi) => {
      if (medi.nome == getUserMedico().nome) {
        medi.laudos = laudos;
      }
      localStorage.setItem("medicos", JSON.stringify(array));
    });
  };

  const AddLaudoSalvo = (urlPDF) => {
    const getCurrentDate = {
      paciente: getPaciente(),
      laudo: urlB,
      data: getCurrentDateLaudo(),
    };
    laudos.map((e) => {
      if (e.laudo == undefined || e.laudo == "") {
        laudos.shift();
      }
    });
    laudos.push(getCurrentDate);
    update(laudos);
  };

  useEffect(() => {
    AddLaudoSalvo(urlB);
  }, [urlB]);

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
        <Box overflow="auto" h="35%" margin="20px">
          {edit == false ? (
            <Text>{laudoPrin}</Text>
          ) : (
            <Textarea
              defaultValue={laudoPrin}
              h='100%'
              onChange={(e) => {
                setLaudoPrin(() => [e.target.value]);
                console.log(editTextLaudo);
              }}
            ></Textarea>
          )}
        </Box>
        <Box position="absolute" bottom="5px" w="100%">
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
        marginBottom='10px'
        justify="space-around"
      >
        <Link
          display="block"
          href={`#/Format_PDF`}
          style={{ textDecoration: "none" }}
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
            <Circle size="50px" bg="gray.300">
              <Icon
                w={30}
                h={30}
                as={BsEye}
                color="black"
                size="30px"
                onClick={() => {
                  <Format_PDF />;
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
                <Circle size="50px" bg="gray.300">
                  <Icon
                    as={GoDesktopDownload}
                    w={30}
                    h={30}
                    color="black"
                    onClick={() => {
                      setUrl(URL.createObjectURL(blob!));
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
          <Circle size="50px" bg="gray.300">
            <Icon
              w={30}
              h={30}
              as={FiEdit}
              color="black"
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
