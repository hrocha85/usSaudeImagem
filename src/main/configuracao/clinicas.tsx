import { FaRegFolderOpen } from "react-icons/fa";
import FieldDefaultIcon from "../component/field_default_icon";

const Clinica = () => {
  let clinicas = [
    { id: 1, clinica: "Clínica" },
    { id: 2, clinica: "Clínica" },
    { id: 3, clinica: "Clínica" },
  ];

  return (
    <>
      {clinicas.map((cln) => (
        <FieldDefaultIcon
          text={cln.clinica + " " + 0 + cln.id}
          textColor="#4A5568"
          icon={FaRegFolderOpen}
        />
      ))}
    </>
  );
};

export default Clinica;
