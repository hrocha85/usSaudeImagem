import { useEffect, useState } from "react";
import { FaRegFolderOpen } from "react-icons/fa";
import Medicos from "./medicos";
import Cookies from 'js-cookie';
import GetMedicosFree from "../Helpers/UserFree/GetMedicos";
import getClinicaAdmin from "../Helpers/UserAdmin/GetClinicas";


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
    const medicos = GetMedicosFree()
    setmedicos(medicos);
    // pegarMedicos();
  }, [props.atualizar]);

  useEffect(() => {
    let isAdmin;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role == 'admin' ? isAdmin = true : isAdmin = false
    }
    if (!isAdmin) {
      console.log('Não admin')
    } else {
      getClinicaAdmin()
        .then(clinicas => {
          console.log(clinicas);
        })
        .catch(error => {
          console.error('Erro ao obter clínicas:', error);
        });
    }

  }, [])


  return (
    <>
      {medicos.map((medico, key) => {
        return <Medicos key={key} medico={medico} id={key} />;
      })}
    </>
  );
};

export default Medico;
