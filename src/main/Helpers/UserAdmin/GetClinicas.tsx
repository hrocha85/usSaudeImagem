import api from "../../../api";

const getClinicaAdmin = async () => {
    try {
        const response = await api.get('/clinica');
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error', error);
        throw error;
    }
};

export default getClinicaAdmin;