import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import GetMedicosAdmin from "../Helpers/UserAdmin/GetMedicosAdmin";
import GetMedicosFree from "../Helpers/UserFree/GetMedicosFree";
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
    const medicos = GetMedicosFree()
    setmedicos(medicos);
  }, [props.atualizar])


  return (
    <>
      {
        medicos ?
          medicos.map((medico, key) => {
            return <Medicos key={key} medico={medico} id={key} />;
          })
          : null
      }
    </>
  );
};

export default Medico;
