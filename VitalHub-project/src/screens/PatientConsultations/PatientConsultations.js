import { useEffect, useState } from "react"
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment"
import { CalendarHome } from "../../components/Calendar/Calendar"
import { Container } from "../../components/Container/ContainerStyle"
import { Header, HeaderPatient } from "../../components/Header/Header"
import { FilterAppointment } from "../MedicalConsultations/MedicalConsultationsStyles"
import { ListComponent } from "../../components/List/ListStyles"
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard"
import { FontAwesome6 } from '@expo/vector-icons';
import { BtnIcon } from "./Style"
import { BookModal } from "../../components/BookModal/BookModal"
import { QueryDoctorModal, QueryModal } from "../../components/QueryModal/QueryModal"
import { CancellationModal } from "../../components/CancellationModal/CancellationModal"
import { userDecodeToken } from "../../Utils/Auth"
import { dateFormatDbToView, functionPrioridade } from "../../Utils/StringFunction"
import api from "../../Service/Service"
import moment from "moment"

export const PatientConsultations = ({ navigation }) => {

    // state para exibição dos modais 
    const [showModalCancel, setShowModalCancel] = useState(false)
    const [showModalAppointment, setShowModalAppointment] = useState(false)
    const [showQueryModal, setShowQueryModal] = useState(false)

    //state para receber o array de consultas
    const [consultas, setConsultas] = useState([]);
    const [profile, setProfile] = useState({})
    const [dataConsulta, setDataConsulta] = useState('')

    async function ProfileLoad() {

        const token = await userDecodeToken();

        if (token != null) {
            setProfile(token)

            setDataConsulta(moment() .format('YYYY-MM-DD'))
        }
    }


    async function GetConsultas() {

        //Chamando o metodo da api
        await api.get(`/Pacientes/BuscarPorData?data=${dataConsulta}&id=${profile.id}`
        ).then(response =>{
            setConsultas(response.data)
        }).catch(error => {
            console.log(error);
        })

    }

    //Criar um useEffect para a chamda da função
    useEffect(() => {
        ProfileLoad();
    }, [])

    //Criar um useEffect para a chamda da função
    useEffect(() => {
        if(dataConsulta != ''){
            GetConsultas()
        }
    }, [dataConsulta])


    // state para o estado da lista(card)
    const [statusLista, setStatusLista] = useState("Agendado")

    return (
        <Container>

            <HeaderPatient
                navigation={navigation}
            />

            <CalendarHome 
                setDataConsulta={setDataConsulta}
            />

            <FilterAppointment>

                {/* Agendadas */}
                <BtnListAppointment
                    textButton={"Agendadas"}
                    clickButton={statusLista === "Agendado"}
                    onPress={() => setStatusLista("Agendado")}
                />

                {/* Realizadas */}
                <BtnListAppointment
                    textButton={"Realizadas"}
                    clickButton={statusLista === "Realizado"}
                    onPress={() => setStatusLista("Realizado")}
                />

                {/* Canceladas */}
                <BtnListAppointment
                    textButton={"Canceladas"}
                    clickButton={statusLista === "Cancelado"}
                    onPress={() => setStatusLista("Cancelado")}
                />

            </FilterAppointment>

            {/* lista */}
            <ListComponent

                data={consultas}
                keyExtractor={(item) => item.id}

                renderItem={
                    ({ item }) =>
                        statusLista == item.situacao.situacao && (
                            <AppointmentCard
                                situacao={item.situacao.situacao}
                                onPressCard={() => setShowQueryModal(item.situacao.situacao === "Agendado" ? true : false)}
                                onPressCancel={() => setShowModalCancel(true)}
                                onPressAppointment={() => setShowModalAppointment(true)}
                                navigation={navigation}
                                ProfileNameCard={item.medicoClinica.medico.idNavigation.nome}
                                Age={dateFormatDbToView(item.dataConsulta)}
                                TipoConsulta={functionPrioridade(item.prioridade.prioridade)}
                            />
                        )
                }

            />

            <BtnIcon onPress={() => setShowModalAppointment(true)}>
                <FontAwesome6 name="stethoscope" size={24} color="white" />
            </BtnIcon>

            {/* Modal ver prontuario */}

            <BookModal
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
                navigation={navigation}
            />

            <QueryDoctorModal
                visible={showQueryModal}
                setShowQueryModal={setShowQueryModal}
                setShowModalAppointment={() => setShowQueryModal(false)}
                navigation={navigation}
            />

            <CancellationModal
                navigation={navigation}
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
            />




        </Container>
    )
}