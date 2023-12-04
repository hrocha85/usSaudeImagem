import { AiOutlineHome, AiOutlinePoweroff, AiOutlineUser, AiFillReconciliation } from "react-icons/ai";
import { BsFolder2Open, BsPeople } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

export const SidebarDataLogado = [
  {
    title: "Home",
    path: "/Home/",
    icon: <AiOutlineHome />,
  },
  {
    title: "Configurações",
    path: "/Home/Configuracoes",
    icon: <IoSettingsOutline />,
  },
  {
    title: "Laudos",
    path: "/Home/Configuracoes",
    icon: <BsFolder2Open />,
  },
  {
    title: "Trocar Usuário",
    path: "/SelectMedicos",
    icon: <BsPeople />,
  },
  {
    title: "Tutorial",
    path: "/Home/Tutorial",
    icon: <AiFillReconciliation />,
  },
  {
    title: "Sair",
    path: "/",
    icon: <AiOutlinePoweroff />,
  },
];
