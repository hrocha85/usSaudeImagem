import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  ButtonGroup,
  Center,
  Circle,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  Grid,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  Link,
  Stack,
  Text,
  Tooltip,
  useEditableControls,
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

  const styles = StyleSheet.create({
    inline: {
      display: "flex",
      flexDirection: "row",
      paddingTop: "10%",
      marginLeft: 20,
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
    lineConclusoes: {
      border: 1,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      marginTop: 10,
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
      marginTop: "3%",
    },
    textConclusao: {
      fontWeigh: "bold",
      textAlign: "center",
      fontSize: "17",
      fontFamily: "MontserratBold",
      marginTop: "1%",
      marginBottom: "3%",
    },
    textNomeSubExame: {
      fontWeigh: "bold",
      textAlign: "center",
      fontSize: "12",
      fontFamily: "MontserratBold",
      textDecoration: "underline",
      marginRight: "20px",
      maxWidth: "35%",
    },
    frasesSubExame: {
      textAlign: "justify",
      fontSize: "12",
      fontFamily: "MontserratRegular",
      lineHeight: 3,
    },
    frasesConclusoes: {
      textAlign: "justify",
      fontSize: "12",
      fontFamily: "MontserratRegular",
      lineHeight: 3,
      marginLeft: 20,

    },
    laudo_viewer: {
      margin: 10,
    },
    view_frases: {
      marginLeft: "10px",
      marginRight: "30px",
      flex: 1,
    },
    viewConclusoes: {
      marginTop: "5%",
      marginBottom: "33%",
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
    const renderFrases = (exame) => {
      return exame.subExames.map((sub, key) => {
        return sub.subExameNome != null && sub.subExameNome != "" ? (
          <ViewPDF style={styles.inline} key={key} wrap={false}>
            <TextPDF style={styles.textNomeSubExame} orphans={3}>
              {sub.subExameNome}:
            </TextPDF>
            <ViewPDF style={styles.view_frases}>
              {typeof sub.frases != "string" ? (
                sub.frases.map((frase, key) => {
                  return (
                    <TextPDF
                      style={styles.frasesSubExame}
                      orphans={3}
                      key={key}
                    >
                      {frase}
                    </TextPDF>
                  );
                })
              ) : (
                <TextPDF style={styles.frasesSubExame} orphans={3}>
                  {sub.frases}
                </TextPDF>
              )}
            </ViewPDF>
          </ViewPDF>
        ) : null;
      });
    };

    const renderConclusoes = (exame) => {
      console.log(exame);
      if (exame.conclusoes != null && exame.conclusoes != undefined) {
        return exame.conclusoes.map((conclusao, key) => {
          return conclusao != null && conclusao != "" ? (
            <TextPDF style={styles.frasesConclusoes} orphans={3} key={key}>
              {conclusao}
            </TextPDF>
          ) : null;
        });
      }
    };

    const renderObservacoes = (exame) => {
      if (exame.observacoes != null && exame.observacoes != undefined) {
        return exame.observacoes.map((observacao, key) => {
          return observacao != null && observacao != "" ? (
            <TextPDF style={styles.frasesSubExame} orphans={3} key={key}>
              {observacao}
            </TextPDF>
          ) : null;
        });
      }
    };

    return (
      <Document
        title={`Laudo Paciente ${getPaciente()} Data - ${getCurrentDate()}`}
        author={`Dr.${medico.nome}`}
      >
        {arrayLocal.map((exame, key) => {
          return (
            <Page
              size="A4"
              style={styles.page}
              wrap={true}
              key={key}
              break={false}
            >
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

              <ViewPDF style={styles.laudo_viewer} break={false}>
                <TextPDF style={styles.textTituloExame}>
                  {exame.titulo_exame.toUpperCase()}
                </TextPDF>
                <ViewPDF>{renderFrases(exame)}</ViewPDF>

                {exame.observacoes != null &&
                exame.observacoes != undefined &&
                exame.observacoes.lenght > 1 ? (
                  <ViewPDF style={styles.inline}>
                    <TextPDF style={styles.textNomeSubExame}>
                      {`Observações ${exame.titulo_exame}:`}
                    </TextPDF>
                    <ViewPDF>{renderObservacoes(exame)}</ViewPDF>
                  </ViewPDF>
                ) : null}

                {exame.conclusoes != null && exame.conclusoes != undefined ? (
                  <ViewPDF style={styles.viewConclusoes}>
                    <ViewPDF style={styles.lineConclusoes} break={true} />
                    <TextPDF style={styles.textConclusao}>
                      {`Conclusão ${exame.titulo_exame}`}
                    </TextPDF>
                    <ViewPDF>{renderConclusoes(exame)}</ViewPDF>
                    <ViewPDF style={styles.lineConclusoes} />
                  </ViewPDF>
                ) : (
                  <Text>ss</Text>
                )}
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
          );
        })}
      </Document>
    );
  };

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
  const [arrayLocal, setArrayLocal] = useState<any>(
    JSON.parse(localStorage.getItem("format_laudo")!)
  );
  const [laudo, setLaudo] = useState<any>(Laudo());

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

  const EditarLaudo = (defaultValue, IndexExame, Index_Sub_Exame) => {
    return (
      <Editable
        defaultValue={defaultValue}
        isPreviewFocusable={true}
        selectAllOnFocus={false}
        onChange={(e) => {
          handleEditLaudoInput(e, IndexExame, Index_Sub_Exame);
        }}
      >
        <Tooltip
          label="Clique para editar"
          backgroundColor="white"
          placement="top"
          hasArrow
          arrowSize={15}
          textColor="black"
          fontSize="20px"
          margin="20px"
          textAlign="center"
        >
          <EditablePreview py={2} px={4} backgroundColor="gray.300" />
        </Tooltip>
        <Input py={2} px={4} as={EditableInput} />
        <EditableControls />
      </Editable>
    );
  };

  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="end" size="sm" w="full" spacing={2} mt={2}>
        <IconButton
          aria-label="Check"
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
        />

        <IconButton
          aria-label="Close"
          icon={<CloseIcon boxSize={3} />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : null;
  }

  const handleEditLaudoInput = async (event, IndexExame, Index_Sub_Exame) => {
    updateLaudo(event, IndexExame, Index_Sub_Exame);
  };

  const updateLaudo = (event, IndexExame, Index_Sub_Exame) => {
    var array = JSON.parse(localStorage.getItem("format_laudo")!);

    array.map((Exames) => {
      console.log("teste", Exames.subExames[Index_Sub_Exame]);

      Exames.subExames[Index_Sub_Exame].frases = event;
      localStorage.setItem("format_laudo", JSON.stringify(array));
    });
    setLaudo(Laudo());
  };

  useEffect(() => {
    if (urlLaudo != null) {
      AddLaudoSalvo();
    }
  }, [urlLaudo]);

  window.addEventListener("storage", () => {
    getFormatLaudo();
  });

  useEffect(() => {
    setLaudo(Laudo());
    getFormatLaudo();
  }, [localStorage.getItem("format_laudo")!]);

  return (
    <Box
      w="32%"
      h="40%"
      maxH="50%"
      float="right"
      position="sticky"
      top={1}
      transition="0.2"
      marginEnd="1%"
    >
      <Center paddingBottom="30px">
        <Stack
          w="20%"
          justify="space-around"
          direction="row"
          h="70px"
          alignItems="center"
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
          <Box>
            <PDFDownloadLink
              document={laudo != null ? laudo : Laudo()}
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
          </Box>
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
        </Stack>
      </Center>

      <Box className="zoom" boxShadow="xl" ref={ref} height="75vh">
        <Grid w="100%" gridTemplateRows={"15px 1fr 15px"}>
          <Box>
            <Image
              src={clinicaSet.foto}
              alt="Imagem Clínica"
              boxSize="130px"
              objectFit="scale-down"
              borderRadius="full"
              padding="5px"
              marginStart="20px"
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
        <Box margin="20px">
          {arrayLocal.map((exame, key, IndexExame) => {
            return edit == false ? (
              <Box key={key}>
                <Text
                  textDecoration="underline"
                  fontWeight="bold"
                  fontSize="19px"
                  textAlign="center"
                  textTransform="uppercase"
                >
                  {exame.titulo_exame}
                </Text>
                {exame.subExames.map((sub_exame, keys) => {
                  return sub_exame.subExameNome != null &&
                    sub_exame.subExameNome != "" ? (
                    <HStack
                      justifyContent="space-between"
                      marginBottom="30px"
                      marginTop="20px"
                      key={keys}
                    >
                      <HStack justify="space-between">
                        <Text
                          textDecoration="underline"
                          fontWeight="semibold"
                          whiteSpace={
                            sub_exame.subExameNome.length <= 24
                              ? "nowrap"
                              : "normal"
                          }
                        >
                          {sub_exame.subExameNome}:
                        </Text>
                        <Box w="100%">
                          {typeof sub_exame.frases != "string" ? (
                            sub_exame.frases.map((frase, key) => {
                              return (
                                <Stack key={key}>
                                  <Text
                                    wordBreak="break-word"
                                    w="100%"
                                    textAlign="start"
                                    marginStart="10px"
                                  >
                                    {frase}
                                  </Text>
                                </Stack>
                              );
                            })
                          ) : (
                            <Text w="100%" textAlign="start" marginStart="10px">
                              {exame.frases}
                            </Text>
                          )}
                        </Box>
                      </HStack>
                    </HStack>
                  ) : null;
                })}

                {exame.observacoes != undefined &&
                exame.observacoes.length > 1 ? (
                  <>
                    <HStack>
                      <Text textDecoration="underline" fontWeight="semibold">
                        Observações {exame.titulo_exame}:
                      </Text>
                      <Box w="100%">
                        {typeof exame.observacoes != "string"
                          ? exame.observacoes.map((frase, key) => {
                              return (
                                <Stack key={key}>
                                  <Text
                                    wordBreak="break-word"
                                    w="100%"
                                    textAlign="start"
                                    marginStart="10px"
                                  >
                                    {frase}
                                  </Text>
                                </Stack>
                              );
                            })
                          : null}
                      </Box>
                    </HStack>
                  </>
                ) : null}

                {exame.conclusoes != undefined &&
                exame.conclusoes.length > 1 ? (
                  <>
                    <Divider
                      marginBottom="10px"
                      borderWidth="1px"
                      borderColor="black"
                    />
                    <Text
                      textDecoration="underline"
                      fontWeight="bold"
                      fontSize="17px"
                      textAlign="center"
                      textTransform="uppercase"
                      marginBottom="10px"
                    >
                      {`Conclusão ${exame.titulo_exame}`}
                    </Text>

                    {exame.conclusoes.map((conclusao, key) => {
                      return conclusao != "" && conclusao != null ? (
                        <Text
                          w="100%"
                          textAlign="start"
                          marginStart="10px"
                          key={key}
                        >
                          {conclusao}
                        </Text>
                      ) : null;
                    })}
                    <Divider
                      marginTop="10px"
                      borderWidth="1px"
                      borderColor="black"
                    />
                  </>
                ) : null}

                <HStack justify="space-evenly" marginTop="10px"></HStack>
              </Box>
            ) : (
              <Box key={key}>
                <Text
                  textDecoration="underline"
                  fontWeight="bold"
                  fontSize="19px"
                  textAlign="center"
                  textTransform="uppercase"
                >
                  {exame.titulo_exame}
                </Text>

                {exame.subExames.map((sub_exame, keys) => {
                  return sub_exame.subExameNome != null &&
                    sub_exame.subExameNome != "" ? (
                    <HStack
                      justifyContent="space-between"
                      marginBottom="30px"
                      marginTop="20px"
                      key={keys}
                    >
                      <HStack justify="space-between">
                        <Text
                          textDecoration="underline"
                          fontWeight="semibold"
                          whiteSpace="nowrap"
                        >
                          {sub_exame.subExameNome}:
                        </Text>
                        <Box w="100%">
                          {EditarLaudo(sub_exame.frases, IndexExame, keys)}
                        </Box>
                      </HStack>
                    </HStack>
                  ) : null;
                })}

                <HStack justify="space-evenly" marginTop="10px"></HStack>
              </Box>
            );
          })}
        </Box>
        <Box position="absolute" w="100%">
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
    </Box>
  );
}

export default Exames;
