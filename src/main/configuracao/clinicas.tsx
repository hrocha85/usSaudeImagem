import { FaRegFolderOpen } from "react-icons/fa";
import FieldDefaultIcon from "../component/field_default_icon";
import React, { useEffect, useState } from "react";

const Clinica = (cln) => {
  const [clinicas, setNewClinica] = useState([{}]);

  function addClinica() {
    const itensCopy = Array.from(clinicas);
    itensCopy.push(cln);
    setNewClinica(itensCopy);
  }

  return (
    <>
      {clinicas.map((cln) => (
        <FieldDefaultIcon
          text={"cln.nome_clinica"}
          textColor="#4A5568"
          icon={FaRegFolderOpen}
        />
      ))}
    </>
  );
};

export default Clinica;

/**
 * 
 *  let clinicas = [
    //{ id: 1, nome_clinica: "Clínica", endereco: "", cep: "", telefone: "" },
    //{ id: 2, nome_clinica: "Clínica", endereco: "", cep: "", telefone: "" },
    //{ id: 3, nome_clinica: "Clínica", endereco: "", cep: "", telefone: "" },
  ];
 * 


 {clinicas.map((cln) => (
          

        <FieldDefaultIcon
          text={cln.nome}
          textColor="#4A5568"
          icon={FaRegFolderOpen}
        />
      ))}


 {clinicaobjt.map((cln) => (
        console.log(cln),
        <FieldDefaultIcon
          text={'cln.nome_clinica'}
          textColor="#4A5568"
          icon={FaRegFolderOpen}
        />
      ))}


 */
