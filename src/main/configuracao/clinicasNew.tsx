import { useEffect, useState } from "react";
import { FaRegFolderOpen } from "react-icons/fa";
import FieldDefaultIcon from "../component/field_default_icon";
import { Box, Text } from "@chakra-ui/react";

const ClinicaNew = (props) => {
  const [listaClinicas, setListaClinicas] = useState<any[]>([]);

  const pegarClinicas = () => {
    let item;
    let item_parse;
    if (localStorage.getItem("minhasClinicas") != null) {
      item = localStorage.getItem("minhasClinicas");

      item_parse = JSON.parse(item);
      setListaClinicas(item_parse);
    }
  };

  useEffect(() => {
    pegarClinicas();
  }, [props.atualizar]);

  return (
    <>
      {listaClinicas.map((item, key) => (
        <Box>
          <Text>{item.nome}</Text>
        </Box>
      ))}
    </>
  );
};

export default ClinicaNew;
