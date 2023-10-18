import api from "../../../api";
import Cookies from 'js-cookie';

const getClinicaAdmin = async () => {
    let AllClinicas;
    try {
        const clinicas: any[] = []
        const userIDString = Cookies.get('USGImage_user')
        const userID = JSON.parse(userIDString).id
        const response = await api.get('/clinica');
        AllClinicas = response.data.data
        AllClinicas.map((clinica) => {
            if (clinica.usuario.id === userID) {
                clinicas.push(clinica)
            }
        })
        return clinicas;
        // return [];
    } catch (error) {
        console.error('Error', error);
        throw error;
    }
};

export default getClinicaAdmin;