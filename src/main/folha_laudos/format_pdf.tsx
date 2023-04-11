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
import { exec } from "child_process";
import { relative } from "path";
import { useContext, useEffect, useState } from "react";
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
            {typeof sub.frases != "string" ? (
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
                  <View style={styles.section}>
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
                      <Text>{`Médico Solicitante: Dr. ${medico.nome}`}</Text>
                    </View>
                  </View>
                  <View style={styles.line}></View>

                  <View style={styles.laudo_viewer} break={false}>
                    <Text style={styles.textTituloExame}>
                      {exame.titulo_exame.toUpperCase()}
                    </Text>
                    <View>{renderFrases(exame)}</View>

                    {exame.observacoes != null &&
                      exame.observacoes.length > 1 &&
                      exame.observacoes != undefined ? (
                      <View style={styles.inline}>
                        <Text style={styles.textNomeSubExame}>
                          {`Observações ${exame.titulo_exame}:`}
                        </Text>
                        <View>{renderObservacoes(exame)}</View>
                      </View>
                    ) : null}

                    {exame.conclusoes != null &&
                      exame.conclusoes != undefined
                      ? (
                        <View style={styles.viewConclusoes}>
                          <View style={styles.lineConclusoes} break={true} />
                          <Text style={styles.textConclusao}>
                            {`Conclusão ${exame.titulo_exame}`}
                          </Text>
                          <View>{renderConclusoes(exame)}</View>
                          <View style={styles.lineConclusoes} />
                        </View>
                      ) : null}
                  </View>

                  <View style={styles.pageNumber}>
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
