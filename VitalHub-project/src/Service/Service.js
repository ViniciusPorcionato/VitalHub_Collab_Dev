
import axios from "axios"

//Declarar a aporta da API
const portaApi = '4466'

//Declarar o ip da maquina
const ipVinicius = '172.16.39.121'
// const ipVinicius = '192.168.21.107'


//Declarar o ip da maquina
const ipMurilo = '192.168.21.127'

//Definir a url padrao
<<<<<<< HEAD
const apiUrlLocal = `http://${ipVinicius}:${portaApi}/api`
// const apiUrlLocal = `http://${ipMurilo}:${portaApi}/api` 
=======
// const apiUrlLocal = `http://${ipVinicius}:${portaApi}/api`
const apiUrlLocal = `http://${ipMurilo}:${portaApi}/api` 
>>>>>>> 95a254050a75c9f75c83956c2cc90a3a3f62cd2a

//Trazer a configuracao do axios
const api = axios.create({
    baseURL: apiUrlLocal
})

export default api;