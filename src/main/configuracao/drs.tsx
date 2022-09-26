import { HiOutlineUser } from "react-icons/hi";
import FieldDefaultIcon from "../component/field_default_icon";

const Drs = ({medicos }) => {
  let drs:any[] = [];
  drs.push(medicos);
  return (
    <>
      {drs.map((dr) => (
        <FieldDefaultIcon
          text={dr.clinica}
          textColor="#4A5568"
          icon={HiOutlineUser}
          clinica={drs}
          clinicas={null}
        />
      )
      )}
    </>
  );
};

export default Drs;
