import { FaRegFolderOpen } from "react-icons/fa";
import FieldDefaultIcon from "../component/field_default_icon";
import React, { useEffect, useState } from "react";

const Clinica = (data) => {

  let clinicas = [
  {nome: 'Clínica1'}
 
  ]
  
    clinicas.push(data)

console.log(clinicas)

  return (
    <>
      
      {        
        clinicas.map((item) => (
        <FieldDefaultIcon
          text={item.nome}
          textColor="#4A5568"
          icon={FaRegFolderOpen}
        />
      ))}
    </>
  );
};

export default Clinica;


