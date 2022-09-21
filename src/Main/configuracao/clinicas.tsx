import { useEffect, useState } from "react";
import { FaRegFolderOpen } from "react-icons/fa";
import FieldDefaultIcon from "../component/field_default_icon";

const Clinica = (props) => {
  const [listaClinicas, setListaClinicas] = useState<any[]>([]);

  const pegarClinicas = () => {
    var item;
    var item_parse;
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
      {listaClinicas.map((item) => (
        <FieldDefaultIcon
          text={item.nomeClinica}
          textColor="#4A5568"
          icon={FaRegFolderOpen}
          clinica={item}
          clinicas={listaClinicas}
        />
      ))}
    </>
  );
};

export default Clinica;
