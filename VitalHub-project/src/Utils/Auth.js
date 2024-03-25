import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';
import { encode, decode } from 'base-64';

//Descriptografia
if (!global.atob) {
    global.atob = decode
}

//Criptografia
if (!global.btoa) {
    global.btoa = encode
}


export const userDecodeToken = async () => {
    const token = await AsyncStorage.getItem("token")

    if (token === null) {
        return null;
    }

    //Decodificar o token recebido
    const decoded = jwtDecode(token);

    return {
        name: decoded.name,
        email: decoded.email,
        role: decoded.role
    }
}