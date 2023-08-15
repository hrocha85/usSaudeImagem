import { useEffect, useState } from "react";
import { FaRegFolderOpen } from "react-icons/fa";
import FieldDefaultIconCardClinicas from "../component/field_default_icon_card_clinicas";

const Clinica = (props) => {
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
        <FieldDefaultIconCardClinicas
          key={key}
          text={item.nomeClinica}
          textColor="#4A5568"
          icon={FaRegFolderOpen}
          clinica={item}
          clinicas={listaClinicas}
          onClickModal={true}
          id={key}
          isMedic={false}
        />
      ))}
    </>
  );
};

export default Clinica;
