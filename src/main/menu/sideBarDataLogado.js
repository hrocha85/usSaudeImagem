import { AiOutlineHome, AiOutlinePoweroff, AiOutlineUser, AiFillReconciliation  } from "react-icons/ai";
import { BsFolder2Open, BsPeople  } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

export const SidebarDataLogado = [
  {
    title: "Home",
    path: "/Home/",
    icon: <AiOutlineHome />,
  },
  {
    title: "Editar Perfil",
    path: '/Home/Perfil',
    icon: <AiOutlineUser />,
  },
  {
    title: "Configurações",
    path: "/Home/Configuracoes",
    icon: <IoSettingsOutline />,
  },
  {
    title: "Laudos",
    path: "/Home/Laudos",
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
