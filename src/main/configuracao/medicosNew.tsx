import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import GetMedicosAdmin from "../Helpers/UserAdmin/GetMedicos";
import GetMedicosFree from "../Helpers/UserFree/GetMedicos";
import Medicos from "./medicos";

const Medico = (props, clinica) => {
  const [medicos, setmedicos] = useState<any[]>([]);
  // const pegarMedicos = () => {
  //   let item;
  //   let item_parse;
  //   if (localStorage.getItem("medicos") != null) {
  //     item = localStorage.getItem("medicos");

  //     item_parse = JSON.parse(item);
  //     setmedicos(item_parse);
  //   }
  // };

  // useEffect(() => {
  //   const medicos = GetMedicosFree()
  //   setmedicos(medicos);
  //   // pegarMedicos();
  // }, [props.atualizar]);

  useEffect(() => {
    let isAdmin;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role == 'admin' ? isAdmin = true : isAdmin = false
    }
    if (!isAdmin) {
      const medicos = GetMedicosFree()
      setmedicos(medicos);
    } else {
      GetMedicosAdmin()
        .then(medicos => {
          setmedicos(medicos);
        })
        .catch(error => {
          console.error('Erro ao obter medicos:', error);
        });
    }

  }, [props.atualizar])


  return (
    <>
      {medicos.map((medico, key) => {
        return <Medicos key={key} medico={medico} id={key} />;
      })}
    </>
  );
};

export default Medico;
