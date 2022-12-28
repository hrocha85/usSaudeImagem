import { AiOutlineHome, AiOutlinePoweroff } from "react-icons/ai";
import { BsFolder2Open } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

export const SidebarData = [

  // const getUser = () => {
  //   if (localStorage.getItem("user") != null) {
  //     var user = JSON.parse(localStorage.getItem("user")!);
  //   }

  //   if (user != null) return user.isLogged;
  // };

  // const [userLogged, setuserLogged] = useState(getUser());


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
    title: "Sair",
    path: "",
    icon: <AiOutlinePoweroff />,
  },
];
