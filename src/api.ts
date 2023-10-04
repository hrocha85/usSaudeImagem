// import axios from 'axios';

// const api = axios.create({ baseURL: 'http://localhost:3333/' })
// const api = axios.create({
//     baseURL: 'https://api.usgimagem.com.br/', 
//     headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//     },
// })


// export default api;

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333/',
    headers: {
        'Content-Type': 'application/json',

    },
});

// Função para definir o token JWT nas chamadas à API
export const setAuthToken = (token) => {
    if (token) {
        console.log('token', token)
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};

export default api;
