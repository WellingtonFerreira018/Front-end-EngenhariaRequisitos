import api from "../services/api";
import { IUser } from "../interfaces/Iuser";

async function getUser(id: number) {
    
    try {
        const data: IUser = await api.get(`usuario/${id}`).then(data => data.data);

        return data;
    } catch (error) {
        alert("nao em usuario");
    }
}

export default getUser;