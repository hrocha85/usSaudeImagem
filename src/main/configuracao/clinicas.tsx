import { FaRegFolderOpen } from "react-icons/fa";
import FieldDefaultIcon from "../component/field_default_icon";
import React, { useEffect, useState } from "react";

import InfoClinicas from "../../Data/Clinicas.json";
import userEvent from "@testing-library/user-event";

const Clinica = (data) => {

  var clinicas = [data]

clinicas.push(data)




  return (
  
    {
      clinicas.map((item) => (
  
  
      <FieldDefaultIcon
          text={data.nomeClinica}
          textColor="#4A5568"
          icon={FaRegFolderOpen}
        />
        
      ))}

        
   
  
    
  );
};

export default Clinica;
