import { HiOutlineUser } from "react-icons/hi";
import FieldDefaultIcon from "../component/field_default_icon";

const Drs = () => {
  let drs = [{ id: 1, dr: "Doutor(a)", clinica: "Clinica" }];

  return (
    <>
      {drs.map((dr) => (
        <FieldDefaultIcon
          text={'clinica'}
          textColor="#4A5568"
          icon={HiOutlineUser}
          clinica={drs}
          clinicas={null}
        />
      ))}
    </>
  );
};

export default Drs;
