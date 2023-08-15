import { useEffect, useState } from "react";
import { FaRegFolderOpen } from "react-icons/fa";
import Medicos from "./medicos";


const Medico = (props, clinica) => {
  const [medicos, setmedicos] = useState<any[]>([]);

  const pegarMedicos = () => {
    let item;
    let item_parse;
    if (localStorage.getItem("medicos") != null) {
      item = localStorage.getItem("medicos");

      item_parse = JSON.parse(item);
      setmedicos(item_parse);
    }
  };

  useEffect(() => {
    console.log('clinicamedicos', clinica)
  }, [])
  useEffect(() => {
    pegarMedicos();
  }, [props.atualizar]);

  return (
    <>
      {medicos.map((medico, key) => {
        return <Medicos key={key} medico={medico} id={key} />;
      })}
    </>
  );
};

export default Medico;
