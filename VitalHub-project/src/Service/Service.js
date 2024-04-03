
import axios from "axios"

//Declarar a aporta da API
const portaApi = '4466'

//Declarar o ip da maquina
const ipVinicius = '172.16.39.121'
// const ipVinicius = '192.168.21.107'


//Declarar o ip da maquina
const ipMurilo = '192.168.21.127'

//Definir a url padrao
// const apiUrlLocal = `http://${ipVinicius}:${portaApi}/api`
const apiUrlLocal = `http://${ipMurilo}:${portaApi}/api` 

//Trazer a configuracao do axios
const api = axios.create({
    baseURL: apiUrlLocal
})

export default api;