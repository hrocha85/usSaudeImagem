
import Cookies from 'js-cookie';

const GetClinicaFree = () => {
    let item;
    let item_parse;
    if (localStorage.getItem("minhasClinicas") != null) {
        item = localStorage.getItem("minhasClinicas");
        item_parse = JSON.parse(item);
    }
    return item_parse ? item_parse : []
};

export default GetClinicaFree