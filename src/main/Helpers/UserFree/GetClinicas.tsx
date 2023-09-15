
import Cookies from 'js-cookie';

const GetClinicaFree = () => {
    let item;
    let item_parse;
    const clinicas: any[] = []
    const userIDString = Cookies.get('USGImage_user')
    const userID = JSON.parse(userIDString).id
    if (localStorage.getItem("minhasClinicas") != null) {
        item = localStorage.getItem("minhasClinicas");
        item_parse = JSON.parse(item);
        item_parse.map((clinica) => {
            if (clinica.userID === userID) {
                clinicas.push(clinica)
            }
        })
    }
    return clinicas;
};

export default GetClinicaFree