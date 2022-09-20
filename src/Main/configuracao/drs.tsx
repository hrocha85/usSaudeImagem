import { HiOutlineUser } from "react-icons/hi";
import FieldDefaultIcon from "../component/field_default_icon";

const Drs = () => {
  let drs = [{ id: 1, dr: "Doutor(a)", clinica: "Clinica" }];

  return (
    <>
      {drs.map((dr) => (
        <FieldDefaultIcon
          text={dr.clinica + " " + 0 + dr.id}
          textColor="#4A5568"
          icon={HiOutlineUser}
          clinica={drs}
        />
      ))}
    </>
  );
};

export default Drs;
