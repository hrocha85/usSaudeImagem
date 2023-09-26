import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Circle,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Grid,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  Link,
  Modal,
  ModalContent,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Tooltip,
  useDisclosure,
  useEditableControls,
  useMediaQuery
} from "@chakra-ui/react";
import {
  Document,
  Font,
  Image as ImagePDF,
  PDFDownloadLink,
  Page,
  StyleSheet,
  Text as TextPDF,
  View,
  View as ViewPDF,
} from "@react-pdf/renderer";
import { Dispatch, useContext, useEffect, useRef, useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { BsEye, BsFillCheckCircleFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { GoDesktopDownload } from "react-icons/go";
import { RiCloseLine } from "react-icons/ri";
import LaudosJSON from "../../Data/Laudos.json";
import { LaudosContext } from "../../context/LuadosContext";
import { Navigate, useNavigate } from "react-router-dom";
import "./Laudos.css";
import emailjs from '@emailjs/browser';
import SubMenu from "../menu/subMenu";
import { AiOutlineShareAlt } from "react-icons/ai";
import { blob } from "stream/consumers";
import { url } from "inspector";

function Exames() {

  const getUserClinica = () => {
    let clinica;
    if (localStorage.getItem("user") != null) {
      clinica = localStorage.getItem("user");
    }
    // console.log('clinica', clinica)
    // const clinicaParse = JSON.parse(clinica)
    // setClinicaFoto(clinicaParse.foto)
    // console.log(clinicaParse)
    return clinica;
  };

  const [clinicaSet, setClinica] = useState<any>(getUserClinica());

  const ref = useRef<HTMLDivElement | null>(null);
  const laudos = LaudosJSON.laudo;
  const styles = StyleSheet.create({
    inline: {
      display: "flex",
      flexDirection: "row",
      paddingTop: "5px",
      marginLeft: 20,
      marginBottom: '2px',

    },
    page: {
      backgroundColor: "white",
      color: "black",

    },
    section: {
      margin: 2,
      padding: 5,
      flexDirection: "row",
      width: "100%",
    },
    viewer: {
      width: window.screen.availWidth,
      height: window.screen.availHeight,
    },
    imageClinica: {
      width: 100,
      height: 100,
      objectFit: "scale-down",
      alignContent: "center",
    },
    imageAssinatura: {
      width: 150,
      height: 40,
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
      marginTop: 10,
      marginLeft: 115,
      gap: '5px'
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
      marginBottom: 5,
      marginTop: 15,
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
      zIndex: 100,
      paddingTop: "80px"
    },
    footer: {
      flexDirection: "row",
      marginBottom: 10,
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
      margin: 10,
    },
    textDadosMedico: {
      // fontFamily: "MontserratBold",
      fontSize: 13,
      color: "black",
    },
    textSantaImagem: {
      marginTop: "10vh",
      marginLeft: 50,
      fontSize: "11",
      // fontFamily: "Montserrat",
    },
    textDiagnostico: {
      marginTop: 5,
      marginLeft: 10,
      marginRigh: 10,
      marginBottom: 10,
      fontSize: "10",
      // fontFamily: "Montserrat2",
    },
    textTituloExame: {
      fontWeigh: "bold",
      textAlign: "center",
      fontSize: "17",
      // fontFamily: "MontserratBold",
      marginTop: "5px",
    },
    textConclusao: {
      fontWeigh: "bold",
      textAlign: "center",
      fontSize: "17",
      // fontFamily: "MontserratBold",
      marginTop: "1%",
      marginBottom: "1%",
    },
    textNomeSubExame: {
      fontWeigh: "bold",
      textAlign: "center",
      fontSize: "12",
      // fontFamily: "MontserratBold",
      textDecoration: "underline",
      marginRight: "20px",
      maxWidth: "18%",

    },
    frasesSubExame: {
      textAlign: "justify",
      fontSize: "12",
      // fontFamily: "MontserratRegular",
      marginBottom: "5px",
      justifyContent: "space-between",
      lineHeight: 1.5,
    },
    frasesConclusoes: {
      textAlign: "justify",
      fontSize: "12",
      // fontFamily: "MontserratRegular",
      lineHeight: 1.5,
      marginLeft: 4,
    },
    laudo_viewer: {
      margin: 10,
    },
    view_frases: {
      marginLeft: "1px",
      marginRight: "20px",
      marginBottom: '5px',
      flex: 1,
    },
    box_view_frases: {
      marginBottom: "130px"
    },
    viewConclusoes: {
      marginTop: "10px",
      // marginBottom: "150px",
    },
  });

  // Font.register({
  //   family: "Montserrat",

  //   fonts: [
  //     {
  //       src: "http://fonts.gstatic.com/s/montserrat/v25/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jqw16aX9-p7K5ILg.ttf",
  //     },
  //   ],
  // });

  // Font.register({
  //   family: "Montserrat2",

  //   fonts: [
  //     {
  //       src: "http://fonts.gstatic.com/s/montserrat/v25/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq5Z9aX9-p7K5ILg.ttf",
  //     },
  //   ],
  // });

  // Font.register({
  //   family: "MontserratBold",

  //   fonts: [
  //     {
  //       src: "http://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu170w-Y3tcoqK5.ttf",
  //     },
  //   ],
  // });

  // Font.register({
  //   family: "MontserratRegular",

  //   fonts: [
  //     {
  //       src: "http://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-Y3tcoqK5.ttf",
  //     },
  //   ],
  // });
  const navigate = useNavigate();
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  const [isLargerThan6001] = useMediaQuery('(min-width: 600px)')
  let display = "block";
  let display1 = "flex";
  isLargerThan600 ? display = "block" : display = "none"
  isLargerThan6001 ? display1 = "flex" : display1 = "none"


  const clinFoto = () => {
    const clin = JSON.parse(clinicaSet)
    const clinFoto = clin.clinica.foto
    return clinFoto
  }
  const [clinicaFoto, setclinicaFoto] = useState(clinFoto())


  const Laudo = () => {
    const renderFrases = (exame) => {
      return exame.subExames.map((sub, key) => {
        return sub.subExameNome != null && sub.subExameNome != "" ? (
          <ViewPDF style={styles.inline} key={key} wrap={false}>
            <TextPDF style={styles.textNomeSubExame} orphans={3}>
              {sub.subExameNome}:
            </TextPDF>
            <ViewPDF style={styles.view_frases}>
              {typeof sub.frases != "string" && sub.frases != null ? (
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
            {sub.image != null && sub.image != "" ? (
              <ImagePDF src={sub.image} />
            ) : null}
          </ViewPDF>
        ) : null;
      });
    };

    const renderConclusoes = (exame) => {
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
              <ViewPDF fixed style={styles.section}>
                <ViewPDF style={styles.viewAssinatura}>
                  <ImagePDF style={styles.imageClinica} src={clinicaFoto} />
                </ViewPDF>

                <ViewPDF style={styles.sectionColuna}>
                  <TextPDF>{clinicaSet.nome}</TextPDF>
                  <TextPDF>{getPaciente()}</TextPDF>
                  <TextPDF>{getCurrentDate()}</TextPDF>
                  <TextPDF>{`Dr. ${getMedicoSolicitante()}`}</TextPDF>
                </ViewPDF>
              </ViewPDF>
              <ViewPDF fixed style={styles.line}></ViewPDF>

              <ViewPDF wrap={true} style={styles.laudo_viewer} break={false}>
                <TextPDF style={styles.textTituloExame}>
                  {exame.titulo_exame.toUpperCase()}
                </TextPDF>
                <ViewPDF>{renderFrases(exame)}</ViewPDF>

                {exame.observacoes != null &&
                  exame.observacoes != undefined &&
                  exame.observacoes.length > 1 ? (
                  <ViewPDF style={styles.inline}>
                    <TextPDF style={styles.textNomeSubExame}>
                      {`Observações ${exame.titulo_exame}:`}
                    </TextPDF>
                    <ViewPDF wrap={false} style={styles.view_frases}>
                      <ViewPDF>
                        {renderObservacoes(exame)}</ViewPDF>
                    </ViewPDF>
                  </ViewPDF>
                ) : null}

                {exame.conclusoes != null &&
                  exame.conclusoes != undefined &&

                  exame.conclusoes.filter((c) => c !== "").length > 0 ? (

                  <ViewPDF style={styles.viewConclusoes}>
                    <ViewPDF style={styles.lineConclusoes} break={true} />
                    <TextPDF style={styles.textConclusao}>
                      {`Conclusão ${exame.titulo_exame} aasda`}
                    </TextPDF>
                    <ViewPDF wrap={false}>{renderConclusoes(exame)}</ViewPDF>
                    <ViewPDF style={styles.lineConclusoes} />
                  </ViewPDF>
                ) : null}
              </ViewPDF>
              <ViewPDF fixed style={styles.box_view_frases} />
              <ViewPDF fixed style={styles.pageNumber}>
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
                        >{`CRM ${medico.CRMUF}`}</TextPDF>
                      </ViewPDF>
                    </ViewPDF>
                    <TextPDF style={styles.textSantaImagem}>
                      USG Diagnósticos por imagem
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

  const getUserMedico = () => {
    let medico;
    if (localStorage.getItem("user") != null) {
      medico = JSON.parse(localStorage.getItem("user")!);
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

  const getMedicoSolicitante = () => {
    if (localStorage.getItem("paciente") != null) {
      return JSON.parse(localStorage.getItem("paciente")!).medico_solicitante;
    } else {
      return "Médico Solicitante";
    }
  };

  const getCurrentDate = () => {
    const timeStamp = new Date();

    return `${timeStamp.getDate()}/${timeStamp.getMonth() + 1
      }/${timeStamp.getFullYear()}  ${timeStamp.getHours()}:${timeStamp.getMinutes()}:${timeStamp.getSeconds()}h`;
  };

  const getCurrentDateLaudo = () => {
    const timeStamp = new Date();

    return `${timeStamp.getDate()}/${timeStamp.getMonth() + 1
      }/${timeStamp.getFullYear()}`;
  };

  const [medico, setMedico] = useState(getUserMedico());
  const [urlLaudo, setUrlLaudo] = useState<any>();
  const [edit, setEdit] = useState(false);
  const [titulo_exame, setTitulo_Exame] = useState("TÍTULO EXAME");
  const [arrayLocal, setArrayLocal] = useState<any>(
    JSON.parse(localStorage.getItem("format_laudo")!)
  );
  const [laudo, setLaudo] = useState<any>(Laudo());


  const update = (laudos) => {
    const array = JSON.parse(localStorage.getItem("medicos")!);
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

  const sharePdf = async (title, url) => {
    console.log("url", url)
    if (navigator.share) {
      try {
        const pdfUrl = URL.createObjectURL(url);
        console.log(pdfUrl)
        await navigator.share({
          title: title,
          url: pdfUrl,
        });
        URL.revokeObjectURL(pdfUrl);
      } catch (error) {
        console.error("Erro ao compartilhar:", error);
      }
    } else {
      console.log("A API de compartilhamento não é suportada neste navegador.");
    }
  };

  const convertBlob = (blob) => {
    const file = new Blob([blob], { type: "application/pdf" });
    const fileURL = URL.createObjectURL(file);
    setUrlLaudo(fileURL);
  };

  const handleShareButtonClick = () => {
    // const file = new Blob([blob], { type: "application/pdf" });
    // const fileURL = URL.createObjectURL(file);
    const pdfUrl = `http://localhost:3000/eafec451-398a-4bc5-a1b5-d24c0c92958d`
    sharePdf("Emaxes", pdfUrl);
  };

  const getFormatLaudo = () => {
    setArrayLocal(JSON.parse(localStorage.getItem("format_laudo")!));
    arrayLocal.map((Exames) => {
      setTitulo_Exame(Exames.titulo_exame);
    });
    return arrayLocal;
  };

  const EditarLaudo = (
    defaultValue,
    IndexExame,
    Index_Sub_Exame,
    Index_Frase
  ) => {
    const handleSubmit = async (event) => {
      await updateLaudo(event, IndexExame, Index_Sub_Exame, Index_Frase);
    };
    return (
      <Editable
        defaultValue={defaultValue}
        isPreviewFocusable={true}
        selectAllOnFocus={false}
        onSubmit={handleSubmit}
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
        <Tooltip
          label="Confirmar Edição"
          fontSize="xl"
          backgroundColor="white"
          placement="bottom"
          hasArrow
          arrowSize={15}
          textColor="black"
        >
          <IconButton
            aria-label="Check"
            icon={<CheckIcon />}
            {...getSubmitButtonProps()}
          />
        </Tooltip>
        <Tooltip
          label="Cancelar Edição"
          fontSize="xl"
          backgroundColor="white"
          placement="bottom"
          hasArrow
          arrowSize={15}
          textColor="black"
        >
          <IconButton
            aria-label="Close"
            icon={<CloseIcon boxSize={3} />}
            {...getCancelButtonProps()}
          />
        </Tooltip>
      </ButtonGroup>
    ) : null;
  }

  const updateLaudo = async (
    event,
    IndexExame,
    Index_Sub_Exame,
    Index_Frase
  ) => {
    const array = JSON.parse(localStorage.getItem("format_laudo")!);

    array.map((Exames) => {
      Exames.subExames[Index_Sub_Exame].frases[Index_Frase] = event;
      localStorage.setItem("format_laudo", JSON.stringify(array));
    });

    setLaudo(Laudo());
  };

  const RenderLaudoEditTrue = () => {
    return (
      <>
        {JSON.parse(localStorage.getItem("format_laudo")!).map(
          (exame, key, IndexExame) => {
            return (
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
                          <Box w="100%">
                            {sub_exame.frases.map((frase, index) => {
                              return EditarLaudo(
                                frase,
                                IndexExame,
                                keys,
                                index
                              );
                            })}
                          </Box>
                        </Box>
                      </HStack>
                    </HStack>
                  ) : null;
                })}

                <HStack justify="space-evenly" marginTop="10px"></HStack>
              </Box>
            );
          }
        )}
      </>
    );
  };

  const RenderLaudoEditFalse = () => {
    return (
      <>
        {JSON.parse(localStorage.getItem("format_laudo")!).map(
          (exame, key, IndexExame) => {
            return (
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
                            sub_exame.subExameNome.length <= 20
                              ? "nowrap"
                              : "normal"
                          }
                        >
                          {sub_exame.subExameNome}:
                        </Text>
                        <Box w="100%">
                          {typeof sub_exame.frases != "string" &&
                            sub_exame.frases != null ? (
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
                      {sub_exame.image != null && sub_exame.image != "" ? (
                        <Image src={sub_exame.image} />
                      ) : null}
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
            );
          }
        )}
      </>
    );
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

  /* useEffect(() => {
    console.log("edit", edit);
    if (edit) {
      RenderLaudoEditTrue();
    } else {
      RenderLaudoEditFalse();
    }
  }, [edit, localStorage.getItem("format_laudo")!]);*/

  const [formPreenchido, setFormPreenchido] = useState(false)

  const {
    isOpen,
    onOpen,
    onClose,
  } = useDisclosure();

  useEffect(() => {
    if (localStorage.getItem("formPreenchido")) {
      setFormPreenchido(true)
    } else {
      setFormPreenchido(false)
    }
  }, [])

  const verificaForm = () => {
    formPreenchido ? navigate('/home') : onOpen()
  }
  const [opiniaoSoftware, setOpiniaoSoftware] = useState('');
  const [notaSoftware, setNotaSoftware] = useState('');

  const finalizaForm = (e) => {
    emailjs.send('outlookMessage', 'template_6j5xp3j',
      {
        to_email: 'barbozagarcia@yahoo.com.br',
        message: `Escolha a palavra que melhor identifica nosso Aplicativo: ${opiniaoSoftware}
         De 1(ruim) a 5(excelente), qual seria a nota que você dá ao nosso Aplicativo?: ${notaSoftware}`
      }, 'qNFyg3V_FW8DLmNjL')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setOpiniaoSoftware('')
    setNotaSoftware('')

    localStorage.setItem("formPreenchido", 'preenchido')
    setFormPreenchido(true)
    onClose()
  }

  const ModalForm = () => {
    return (
      <Modal
        isOpen={isOpen}
        onClose={onOpen}
        colorScheme="blackAlpha"
      >
        <ModalOverlay />
        <ModalContent>
          <Text textAlign={'center'} fontSize={'2rem'} fontWeight={'bold'}>Pesquisa de Satisfação</Text>
          <Box p={3} borderWidth="1px" borderRadius="md" boxShadow="md" justifyContent={'center'}>
            <RadioGroup onChange={(value) => setOpiniaoSoftware(value)} value={opiniaoSoftware} mb={4}>
              <Text mb={4}>1 -Escolha a palavra que melhor identifica nosso Aplicativo:</Text>
              <Flex justifyContent="center">
                <Radio value="bom" mx={2}>
                  Bom
                </Radio>
                <Radio value="regular" mx={2}>
                  Regular
                </Radio>
                <Radio value="ruim" mx={2}>
                  Ruim
                </Radio>
              </Flex>
            </RadioGroup>

            <RadioGroup onChange={(value) => setNotaSoftware(value)} value={notaSoftware} mb={4}>
              <Text mb={4}>2 - De 1 a 5, qual seria a nota que você dá ao Aplicativo:</Text>
              <Flex justifyContent="center">
                <Radio value="1" mx={2}>
                  1
                </Radio>
                <Radio value="2" mx={2}>
                  2
                </Radio>
                <Radio value="3" mx={2}>
                  3
                </Radio>
                <Radio value="4" mx={2}>
                  4
                </Radio>
                <Radio value="5" mx={2}>
                  5
                </Radio>
              </Flex>
            </RadioGroup>

            <Box textAlign="center">
              <Button onClick={(e) => finalizaForm(e)} color="white" bg={'#2e4ad4'} mt={4} w={'11rem'}>
                Enviar
              </Button>
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    );
  }

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
      zIndex={'999'}
    >
      <Center paddingBottom="30px">
        <Stack
          w="20%"
          justify="space-around"
          direction="row"
          h="70px"
          alignItems="center"
        >
          <Button
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
                />
              </Circle>
            </Tooltip>
          </Button>
          <Box>

            <PDFDownloadLink
              document={laudo != null ? laudo : Laudo()}
              fileName={`Laudo Paciente ${getPaciente()} Data - ${getCurrentDate()}`}
            >
              {({ blob, url, loading, error }) =>
                loading ? (
                  <Icon as={BiLoaderAlt} color="#4658fc" w={50} h={40} />
                ) : (

                  <Link
                    onClick={() => {
                      console.log('error', error)
                      convertBlob(blob!);
                    }}
                  >
                    <Tooltip
                      label="Baixar Laudo"
                      fontSize="xl"
                      backgroundColor="white"
                      placement="top"
                      hasArrow
                      arrowSize={15}
                      textColor="black"
                    >
                      <Circle
                        _hover={{ pointerEvents: 'auto' }}
                        size="50px" bg="gray.200">
                        <Icon
                          as={GoDesktopDownload}
                          w={30}
                          h={30}
                          color="twitter.600"

                        />
                      </Circle>
                    </Tooltip>
                  </Link>
                )
              }
            </PDFDownloadLink>
          </Box>
          {edit == false ? (
            <Tooltip
              label="Editar Laudo"
              fontSize="xl"
              backgroundColor="white"
              placement="top"
              hasArrow
              arrowSize={15}
              textColor="black"
            >
              <Button
                onClick={() => {
                  setEdit(true);
                }}>
                <Circle size="50px" bg="gray.200" display={display1}>
                  <Icon
                    w={30}
                    h={30}
                    as={FiEdit}
                    color="twitter.600"

                  />
                </Circle>
              </Button>
            </Tooltip>
          ) : (
            <Tooltip
              label="Sair Modo Edição"
              fontSize="xl"
              backgroundColor="white"
              placement="top"
              hasArrow
              arrowSize={15}
              textColor="black"
            >
              <Button
                onClick={() => {
                  setEdit(false);
                }}>
                <Circle size="50px" bg="gray.200">
                  <Icon
                    w={30}
                    h={30}
                    as={RiCloseLine}
                    color="twitter.600"

                  />
                </Circle>
              </Button>
            </Tooltip>
          )}
          <Tooltip
            label="Compartilhamento bloqueado para teste gratuito"
            fontSize="xl"
            backgroundColor="white"
            placement="top"
            hasArrow
            arrowSize={15}
            textColor="black"
          >
            <Button
              ml='3px'
              mr='3px'
              isDisabled={true}
              onClick={() => {
                handleShareButtonClick()
              }}
            >
              <Circle size="50px" bg="#e2e8f0">
                <Icon
                  w={30}
                  h={30}
                  as={AiOutlineShareAlt}
                  color="twitter.600"
                  size="30px"
                />
              </Circle>
            </Button>
          </Tooltip>
          <Tooltip
            label="Concluir laudo"
            fontSize="xl"
            backgroundColor="white"
            placement="top"
            hasArrow
            arrowSize={15}
            textColor="black"
          >
            <Button
              onClick={() => {
                verificaForm()
              }}>
              <Circle size="50px" bg="yellow.400">
                <Icon
                  w={30}
                  h={30}
                  as={BsFillCheckCircleFill}
                  color="green"
                  size="30px"

                />
              </Circle>
            </Button>
          </Tooltip>
        </Stack>
      </Center>

      <Box className="zoom" boxShadow="xl" ref={ref} height="80vh" display={display}>
        <Grid w="100%" gridTemplateRows={"15px 1fr 15px"} px={'3%'}>
          <Box>
            <Image
              src={clinicaFoto}
              alt="Imagem Clínica"
              boxSize="6.5rem"
              objectFit="scale-down"
              borderRadius="full"
              padding="5px"
              ml={2}
              mt={'2%'}
            />
          </Box>

          <Grid
            templateColumns="repeat(1, 1fr)"
            justifyItems="center"
            justifySelf="center"
            pl={'7rem'}
          >
            <Text fontWeight="bold">{clinicaSet.nome}</Text>
            <Text>{getPaciente()}</Text>
            <Text>{getCurrentDate()}</Text>
            <Text>{`Dr. ${getMedicoSolicitante()}`}</Text>
          </Grid>
        </Grid>
        <Center>
          <Divider
            inlineSize="95%"
            margin="5px"
            borderColor="black"
            marginTop="18px"
          />
        </Center>
        <Box margin="20px" key={+edit}>
          {edit ? RenderLaudoEditTrue() : RenderLaudoEditFalse()}
        </Box>
        <Box position="absolute" w="100%" px={'5%'}>
          <HStack w="100%" justify="space-between">
            <Grid templateColumns="repeat(1, 1fr)" justifyItems="center">
              <Image
                src={medico.assinatura}
                alt="Assinatura Médico"
                boxSize="100px"
                backgroundImage="none"
              />
              <Divider
                inlineSize="10rem"
                margin="5px"
                marginTop="0px"
                borderColor="black"
              />

              <Text fontWeight="bold">{`Dr. ${medico.nome}`}</Text>
              <Text fontWeight="bold">{`CRM ${medico.CRMUF}`}</Text>
            </Grid>

            <Text
              fontSize="11px"
              fontStyle="italic"
              fontWeight="bold"
              overflowWrap="break-word"
              paddingTop="12%"
              paddingEnd="10px"
            >
              USG Diagnósticos por imagem
            </Text>
          </HStack>
          <Text fontSize="10" overflowWrap="break-word" margin="10px">
            "A impressão diagnóstica em exames de imagem não é absoluta, devendo
            ser correlacionada com dados clínicos, laboratorias e outros métodos
            de imagem complementares"
          </Text>
        </Box>
      </Box>
      {ModalForm()}
    </Box>
  );
}

export default Exames;


