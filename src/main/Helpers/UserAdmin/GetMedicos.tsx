import Cookies from 'js-cookie';
import api from "../../../api";

const GetMedicosAdmin = async () => {
    let AllMedicos;
    try {
        const medicos: any[] = []
        const userIDString = Cookies.get('USGImage_user')
        const userID = JSON.parse(userIDString).id
        const response = await api.get('/medico');
        AllMedicos = response.data
        AllMedicos.map((medico) => {
            if (medico.usuario.id === userID) {
                medicos.push(medico)
            }
        })
        return medicos;

    } catch (error) {
        console.error('Error', error);
        throw error;
    }
};

export default GetMedicosAdmin