import { useState } from "react"
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

export const PatientConsultations = ({navigation}) => {

    // state para exibição dos modais 
    const [showModalCancel, setShowModalCancel] = useState(false)
    const [showModalAppointment, setShowModalAppointment] = useState(false)
    const[showQueryModal, setShowQueryModal] = useState(false)

    const Consultas = [
        { id: 1, nome: "Vinicius", situacao: "pendente" },
        { id: 2, nome: "Vinicius", situacao: "realizado" },
        { id: 3, nome: "Vinicius", situacao: "cancelado" },
        { id: 4, nome: "Vinicius", situacao: "realizado" },
        { id: 5, nome: "Vinicius", situacao: "cancelado" }
    ];

    // state para o estado da lista(card)
    const [statusLista, setStatusLista] = useState("pendente")

    return (
        <Container>

            <HeaderPatient
            navigation={navigation}
            />

            <CalendarHome />

            <FilterAppointment>

                {/* Agendadas */}
                <BtnListAppointment
                    textButton={"Agendadas"}
                    clickButton={statusLista === "pendente"}
                    onPress={() => setStatusLista("pendente")}
                />

                {/* Realizadas */}
                <BtnListAppointment
                    textButton={"Realizadas"}
                    clickButton={statusLista === "realizado"}
                    onPress={() => setStatusLista("realizado")}
                />

                {/* Canceladas */}
                <BtnListAppointment
                    textButton={"Canceladas"}
                    clickButton={statusLista === "cancelado"}
                    onPress={() => setStatusLista("cancelado")}
                />

            </FilterAppointment>

            {/* lista */}
            <ListComponent

                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={
                    ({ item }) =>
                        statusLista == item.situacao && (
                            <AppointmentCard
                                onPressQuery={() => setShowQueryModal(item.situacao === "pendente" ? true : false)}
                                situacao={item.situacao}
                                onPressCancel={() => setShowModalCancel(true)}
                                onPressAppointment={() => setShowModalAppointment(true)}
                                navigation={navigation}
                                ProfileNameCard = "Dr. Claudio"
                                Age = "22 anos"
                                TipoConsulta = "Rotina"
                            />
                        )
                }

            />

                <BtnIcon  onPress={() => setShowModalAppointment(true)}>
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