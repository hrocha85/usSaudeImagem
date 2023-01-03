import { Box, Button, GridItem, Image, Link, Tooltip } from "@chakra-ui/react";
import PropsTypes from "prop-types";
import { useContext } from "react";
import { EnableExamesContext } from "../../context/ExamesEnableContext";
import FormatLaudo from "../../Data/Format_Laudo.json";
import ExameID from "../../Data/ExameID.json";
import reghd_2 from "../images/reghd_2.png";

const FieldDefaultHome = ({ text, textColor, id }) => {
  let { enableExames, setEnableExames } = useContext(EnableExamesContext);

  const format_laudo = FormatLaudo.format_laudo;
  let exameID = ExameID.exameID;

  const AddTituloLaudo = () => {
    const obj = {
      titulo_exame: text,
      subExames: [{ subExameNome: "", frases: [] }],
    };
    format_laudo.push(obj);
    format_laudo.map((e) => {
      if (e.titulo_exame == "") {
        format_laudo.shift();
      }
    });

    localStorage.setItem("format_laudo", JSON.stringify(format_laudo));
  };
  const AddExameID = () => {
    exameID = id;

    localStorage.setItem("exameID", JSON.stringify(exameID));
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
