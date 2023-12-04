import { useEffect, useState } from "react";
import { FaRegFolderOpen } from "react-icons/fa";
import FieldDefaultIconCardClinicas from "../component/field_default_icon_card_clinicas";
import GetClinicaFree from "../Helpers/UserFree/GetClinicasFree";
import getClinicaAdmin from "../Helpers/UserAdmin/GetClinicasAdmin";
import Cookies from 'js-cookie';

const Clinica = (props) => {
  const [listaClinicas, setListaClinicas] = useState<any[]>([]);

  // useEffect(() => {
  //   const clinicas = GetClinicaFree();
  //   setListaClinicas(clinicas);
  // }, [props.atualizar]);

  useEffect(() => {
    const clinicas = GetClinicaFree();
    setListaClinicas(clinicas);
  }, [props.atualizar])

  return (
    <>
      {
        listaClinicas ?
          listaClinicas.map((item, key) => (
            <FieldDefaultIconCardClinicas
              key={key}
              text={item.nome}
              textColor="black"
              icon={FaRegFolderOpen}
              clinica={item}
              clinicas={listaClinicas}
              onClickModal={true}
              id={key}
              isMedic={false}
            />
          ))
          : null
      }
    </>
  );
};

export default Clinica;
