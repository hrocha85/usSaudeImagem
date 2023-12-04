import Cookies from 'js-cookie';
const GetMedicosFree = () => {
    let item;
    let item_parse;
    const userIDString = Cookies.get('USGImage_user')
    if (localStorage.getItem("medicos") != null) {
        item = localStorage.getItem("medicos");
        item_parse = JSON.parse(item);

    }

    return item_parse;
};

export default GetMedicosFree