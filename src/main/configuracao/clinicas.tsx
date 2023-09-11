import { useEffect, useState } from "react";
import { FaRegFolderOpen } from "react-icons/fa";
import FieldDefaultIconCardClinicas from "../component/field_default_icon_card_clinicas";
import GetClinicaFree from "../Helpers/UserFree/GetClinicas";
import getClinicaAdmin from "../Helpers/UserAdmin/GetClinicas";
import Cookies from 'js-cookie';

const Clinica = (props) => {
  const [listaClinicas, setListaClinicas] = useState<any[]>([]);

  // useEffect(() => {
  //   const clinicas = GetClinicaFree();
  //   setListaClinicas(clinicas);
  // }, [props.atualizar]);

  useEffect(() => {
    let isAdmin;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role == 'admin' ? isAdmin = true : isAdmin = false
    }
    if (!isAdmin) {
      const clinicas = GetClinicaFree();
      setListaClinicas(clinicas);
    } else {
      getClinicaAdmin()
        .then(clinicas => {
          setListaClinicas(clinicas);
          console.log(clinicas);
        })
        .catch(error => {
          console.error('Erro ao obter clínicas:', error);
        });
    }

  }, [props.atualizar])

  return (
    <>
      {listaClinicas.map((item, key) => (
        <FieldDefaultIconCardClinicas
          key={key}
          text={item.nomeClinica}
          textColor="black"
          icon={FaRegFolderOpen}
          clinica={item}
          clinicas={listaClinicas}
          onClickModal={true}
          id={key}
          isMedic={false}
        />
      ))}
    </>
  );
};

export default Clinica;
