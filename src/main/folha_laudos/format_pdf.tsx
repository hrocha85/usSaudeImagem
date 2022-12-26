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
import { textSpanEnd } from "typescript";
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

    return `${timeStamp.getDate()}/${
      timeStamp.getMonth() + 1
    }/${timeStamp.getFullYear()}  ${timeStamp.getHours()}:${timeStamp.getMinutes()}:${timeStamp.getSeconds()}h`;
  };

  const getUserMedico = () => {
    if (localStorage.getItem("user") != null) {
      var medico = JSON.parse(localStorage.getItem("user")!);
    }
    return medico.medico;
  };

  const renderFrases = () => {
    var arrayLocal = JSON.parse(localStorage.getItem("format_laudo")!);

    arrayLocal.map((e) => {
      setTitulo_Exame(e.titulo_exame);
    });

    return arrayLocal.map((Exames) => {
      return Exames.subExames.map((sub) => {
        return sub.subExameNome != null && sub.subExameNome != "" ? (
          <View style={styles.inline}>
            <Text style={styles.textNomeSubExame}>{sub.subExameNome}:</Text>
            <Text style={styles.frasesSubExame}>{sub.frases}</Text>
          </View>
        ) : null;
      });
    });
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
      width: window.screen.availWidth, //the pdf viewer will take up all of the width and height
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
      marginBottom:"30px"
    },
    laudo_viewer: {
      margin: 20,
      marginBottom: "35%",
    },
  });

  //TODO FAZER A FOLHA DE LAUDO CRESCER CONFORME O LAUDO FOR CRESCENDO

  const Laudo = () => {
    return (
      <PDFViewer style={styles.viewer} showToolbar={true}>
        <Document
          title={`Laudo Paciente ${getPaciente()} Data - ${getCurrentDate()}`}
          author={`Dr.${medico.nome}`}
        >
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <View style={styles.viewAssinatura}>
                <Image style={styles.imageClinica} src={clinicaSet.foto} />
              </View>

              <View style={styles.sectionColuna}>
                <Text>{clinicaSet.nomeClinica}</Text>
                <Text>{getPaciente()}</Text>
                <Text>{getCurrentDate()}</Text>
                <Text>{`Dr. ${medico.nome}`}</Text>
              </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.laudo_viewer}>
              <Text style={styles.textTituloExame}>
                {titulo_exame.toUpperCase()}
              </Text>
              <View>{renderFrases()}</View>
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
                "A impressão diagnóstica em exames de imagem não é absoluta,
                devendo ser correlacionada com dados clínicos, laboratorias e
                outros métodos de imagem complementares"
              </Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  };

  return <Laudo />;
}
