import api from "../services/api";
import IRegister from "../interfaces/Iregister";

async function postUsu() {
    try{
        const data: IRegister = await api.post("usuario")
    }
    catch{
        console.log("deu ruim no registro");
    }
}

export default postUsu;