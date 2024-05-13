import { StatusBar } from "react-native"
import { Container } from "../../components/Container/ContainerStyle"
import CalendarComponent from "../../components/CalendarComponent/CalendarComponent"
import InputSelect from "../../components/InputSelect/InputSelect"
import { Button } from "../../components/Button/ButtonStyle"
import { ButtonTitle, LabelSelect, TitleSelect } from "../../components/Title/TitleStyle"
import { LinkCodeModal } from "../../components/Links/Links"
import { ConfirmModal } from "../../components/ConfirmModal/ConfirmModal"
import { useEffect, useState } from "react"


export const SelectDate = ({ navigation, route }) => {


    const [agendamento, setAgendamento] = useState(null)
    const [dataSelecionada, setDataSelecionada] = useState("");
    const [horaSelecionada, setHoraSelecionada] = useState("");

    const [showConfirmModal, setShowConfirmModal] = useState(false);

    function handleContinue() {

        setAgendamento({
            ...route.params.agendamento,
            dataConsulta: `${dataSelecionada} ${horaSelecionada}`
        });

        setShowConfirmModal(true);
    }

    useEffect(()=>{
        console.log(route.params.agendamento);
    },[])

    return (
        <Container>

            <StatusBar translucent backgroundColor="transparent" barStyle='dark-content' />

            <TitleSelect>Selecionar Data</TitleSelect>

            <CalendarComponent 
                setDataSelecionada={setDataSelecionada}
                dataSelecionada={dataSelecionada}
            />

            <LabelSelect>Selecione um horário disponível</LabelSelect>

            <InputSelect 
                setHoraSelecionada={setHoraSelecionada}
            />

            <Button onPress={() => handleContinue()}>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

            <LinkCodeModal onPress={() => navigation.replace("Main")}>Cancelar</LinkCodeModal>

            <ConfirmModal
                visible={showConfirmModal}
                setShowConfirmModal={setShowConfirmModal}
                navigation={navigation}
                agendamento={agendamento}
            />

        </Container>
    )
}