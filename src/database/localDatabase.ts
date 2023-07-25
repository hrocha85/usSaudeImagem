// localDatabase.ts

import Datastore from 'nedb-promises';

// Caminho para a pasta local onde o banco de dados será armazenado
const DATABASE_PATH = `./database.db`;

// Inicializa o banco de dados
const db = Datastore.create({ filename: `${DATABASE_PATH}/database.db`, autoload: true });

// Defina a estrutura de dados que você deseja armazenar localmente
interface LocalData {
    // Defina as propriedades que você precisa armazenar
    name: string;
    age: number;
    // Adicione outras propriedades conforme necessário
}

// Função para obter os dados armazenados localmente
export const getLocalData = async (): Promise<LocalData | null> => {
    try {
        const data = await db.findOne<LocalData>({});
        return data;
    } catch (error) {
        console.error('Erro ao obter dados locais:', error);
        return null;
    }
};

// Função para armazenar os dados localmente
export const setLocalData = async (data: LocalData): Promise<void> => {
    try {
        await db.remove({}, { multi: true });
        await db.insert(data);
    } catch (error) {
        console.error('Erro ao definir dados locais:', error);
    }
};
