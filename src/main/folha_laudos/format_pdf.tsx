import {
  Document,
  Font,
  Image,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { useContext, useState } from "react";
import { LaudosContext } from "../../context/LuadosContext";

export default function Format_PDF() {
  const [titulo_exame, setTitulo_Exame] = useState("TÍTULO EXAME");

  const getUserClinica = () => {
    if (localStorage.getItem("user") != null) {
      var clinica = JSON.parse(localStorage.getItem("user")!);
    }
    return clinica.clinica;
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

  const getUserMedico = () => {
    if (localStorage.getItem("user") != null) {
      var medico = JSON.parse(localStorage.getItem("user")!);
    }
    return medico.medico;
  };

  const renderFrases = (exame) => {
    var arrayLocal = JSON.parse(localStorage.getItem("format_laudo")!);

    arrayLocal.map((e) => {
      setTitulo_Exame(e.titulo_exame);
    });

    return exame.subExames.map((sub, key) => {
      return sub.subExameNome != null && sub.subExameNome != "" ? (
        <View style={styles.inline} wrap={false} key={key}>
          <Text style={styles.textNomeSubExame}>{sub.subExameNome}:</Text>
          <View style={styles.view_frases}>
            {typeof sub.frases != "string" && sub.frases != null ? (
              sub.frases.map((frase, key) => {
                return (
                  <Text style={styles.frasesSubExame} key={key}>
                    {frase}
                  </Text>
                );
              })
            ) : (
              <Text style={styles.frasesSubExame}>{sub.frases}</Text>
            )}
          </View>
          {sub.image != null && sub.image != "" ? (
            <Image src={sub.image} />
          ) : null}
        </View>
      ) : null;
    });
  };

  const renderConclusoes = (exame) => {
    if (exame.conclusoes != null && exame.conclusoes != undefined) {
      return exame.conclusoes.map((conclusao, key) => {
        return conclusao != null && conclusao != "" ? (
          <Text style={styles.frasesConclusoes} orphans={3} key={key}>
            {conclusao}
          </Text>
        ) : null;
      });
    }
  };

  const renderObservacoes = (exame) => {
    if (exame.observacoes != null && exame.observacoes != undefined) {
      return exame.observacoes.map((observacao, key) => {
        return observacao != null && observacao != "" ? (
          <Text style={styles.frasesSubExame} orphans={3} key={key}>
            {observacao}
          </Text>
        ) : null;
      });
    }
  };

  const { laudoPrin } = useContext(LaudosContext);
  const [clinicaSet, setClinica] = useState<any>(JSON.parse(getUserClinica()));
  const [medico, setMedico] = useState(getUserMedico());

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
      fontFamily: "MontserratBold",
      fontSize: 13,
      color: "black",
    },
    textSantaImagem: {
      marginTop: "10vh",
      marginLeft: 50,
      fontSize: "11",
      fontFamily: "Montserrat",
    },
    textDiagnostico: {
      marginTop: 5,
      marginLeft: 10,
      marginRigh: 10,
      marginBottom: 10,
      fontSize: "10",
      fontFamily: "Montserrat2",
    },
    textTituloExame: {
      fontWeigh: "bold",
      textAlign: "center",
      fontSize: "17",
      fontFamily: "MontserratBold",
      marginTop: "5px",
    },
    textConclusao: {
      fontWeigh: "bold",
      textAlign: "center",
      fontSize: "17",
      fontFamily: "MontserratBold",
      marginTop: "1%",
      marginBottom: "1%",
    },
    textNomeSubExame: {
      fontWeigh: "bold",
      textAlign: "center",
      fontSize: "12",
      fontFamily: "MontserratBold",
      textDecoration: "underline",
      marginRight: "20px",
      maxWidth: "18%",

    },
    frasesSubExame: {
      textAlign: "justify",
      fontSize: "12",
      fontFamily: "MontserratRegular",
      marginBottom: "5px",
      justifyContent: "space-between",
      lineHeight: 1.5,
    },
    frasesConclusoes: {
      textAlign: "justify",
      fontSize: "12",
      fontFamily: "MontserratRegular",
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

  const Laudo = () => {
    return (
      <PDFViewer style={styles.viewer} showToolbar={true}>
        <Document
          title={`Laudo Paciente ${getPaciente()} Data - ${getCurrentDate()}`}
          author={`Dr.${medico.nome}`}
        >


          {JSON.parse(localStorage.getItem("format_laudo")!).map(
            (exame, key) => {
              return (
                <Page
                  size="A4"
                  style={styles.page}
                  wrap={true}
                  key={key}
                  break={false}
                >

                  <View fixed style={styles.section}>
                    <View style={styles.viewAssinatura}>
                      <Image
                        style={styles.imageClinica}
                        src={clinicaSet.foto}
                      />
                    </View>

                    <View style={styles.sectionColuna}>
                      <Text>{clinicaSet.nomeClinica}</Text>
                      <Text>{getPaciente()}</Text>
                      <Text>{getCurrentDate()}</Text>
                      <Text>{`Dr. ${getMedicoSolicitante()}`}</Text>
                    </View>
                  </View>
                  <View fixed style={styles.line}></View>

                  <View wrap={true} style={styles.laudo_viewer} break={false}>
                    <Text style={styles.textTituloExame}>
                      {exame.titulo_exame.toUpperCase()}
                    </Text>
                    <View >
                      <View >{renderFrases(exame)}</View>
                    </View>


                    {exame.observacoes != null &&
                      exame.observacoes.length > 1 &&
                      exame.observacoes != undefined ? (
                      <View style={styles.inline}>
                        <Text style={styles.textNomeSubExame}>
                          {`Observações ${exame.titulo_exame}:`}
                        </Text>
                        <View wrap={false} style={styles.view_frases}>
                          <View>{renderObservacoes(exame)}</View>
                        </View>
                      </View>
                    ) : null}

                    {exame.conclusoes != null &&
                      exame.conclusoes != undefined &&
                      exame.conclusoes.length > 1 ? (
                      <View style={styles.viewConclusoes}>
                        <View style={styles.lineConclusoes} break={true} />
                        <Text style={styles.textConclusao}>
                          {`Conclusão ${exame.titulo_exame}`}
                        </Text>
                        <View wrap={false}>{renderConclusoes(exame)}</View>
                        <View style={styles.lineConclusoes} />
                      </View>
                    ) : null}
                  </View>

                  <View fixed style={styles.box_view_frases} />
                  <View fixed style={styles.pageNumber}>
                    <View style={styles.pageNumber}>
                      <View style={styles.footer}>
                        <View style={styles.footerColuna}>
                          <Image
                            style={styles.imageAssinatura}
                            src={medico.assinatura}
                          />
                          <span style={styles.borderFooter}></span>
                          <View style={styles.viewdadosMedico}>
                            <Text
                              style={styles.textDadosMedico}
                            >{`Dr. ${medico.nome}`}</Text>
                            <Text
                              style={styles.textDadosMedico}
                            >{`CRM ${medico.crm}`}</Text>
                          </View>
                        </View>
                        <Text style={styles.textSantaImagem}>
                          Santa Imagem Diagnósticos por imagem
                        </Text>
                      </View>
                    </View>

                    <Text style={styles.textDiagnostico}>
                      "A impressão diagnóstica em exames de imagem não é
                      absoluta, devendo ser correlacionada com dados clínicos,
                      laboratorias e outros métodos de imagem complementares"
                    </Text>
                  </View>
                </Page>
              );
            }
          )}
        </Document>
      </PDFViewer>
    );
  };

  return <Laudo />;
}
