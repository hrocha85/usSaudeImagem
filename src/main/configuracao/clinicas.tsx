import { FaRegFolderOpen } from "react-icons/fa";
import FieldDefaultIcon from "../component/field_default_icon";
import React, { useEffect, useState } from "react";

import InfoClinicas from "../../Data/Clinicas.json"


const Clinica = (data) => {

  const [listaClinicas, setListaClinicas]<undefined> = useState()


const pegarClinicas = () =>{
  var item = localStorage.getItem("minhasClinicas");

  setListaClinicas(item)

}

useEffect(() => {
  pegarClinicas()
}, [])


  return (
    <>
      {        
        InfoClinicas.clinicas.map((item) => (
        <FieldDefaultIcon
          text={item.nomeClinica}
          textColor="#4A5568"
          icon={FaRegFolderOpen}
        />
      ))}
    </>
  );
};

export default Clinica;


