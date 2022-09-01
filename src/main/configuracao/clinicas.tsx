import { FaRegFolderOpen } from "react-icons/fa";
import FieldDefaultIcon from "../component/field_default_icon";
import { Cln } from "../configuracao/cln";



const Clinica = (clinicaobjt) => {
  let clinicas = [
   
    clinicaobjt

  ];
 
  
  console.log(clinicas);
  
  return (
    <>
      {clinicas.map((cln) => (
        <FieldDefaultIcon
          text={cln.nome}
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
 */
