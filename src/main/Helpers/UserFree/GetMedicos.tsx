import Cookies from 'js-cookie';
const GetMedicosFree = () => {
    let item;
    let item_parse;
    const medicos: any[] = []
    const userIDString = Cookies.get('USGImage_user')
    const userID = JSON.parse(userIDString).id
    if (localStorage.getItem("medicos") != null) {
        item = localStorage.getItem("medicos");
        item_parse = JSON.parse(item);
        item_parse.map((clinica) => {
            if (clinica.userID === userID) {
                medicos.push(clinica)
            }
        })
    }

    return medicos;
};

export default GetMedicosFree