import { StatusBar } from "react-native"
import { Container } from "../../components/Container/ContainerStyle"
import CalendarComponent from "../../components/CalendarComponent/CalendarComponent"
import InputSelect from "../../components/InputSelect/InputSelect"
import { Button } from "../../components/Button/ButtonStyle"
import { ButtonTitle, LabelSelect, TitleSelect } from "../../components/Title/TitleStyle"
import { LinkCodeModal } from "../../components/Links/Links"
import { ConfirmModal } from "../../components/ConfirmModal/ConfirmModal"
import { useState } from "react"


export const SelectDate = ({navigation}) => {

    const [showConfirmModal, setShowConfirmModal] = useState(false);

    return (
        <Container>

            <StatusBar translucent backgroundColor="transparent" barStyle='dark-content' />

            <TitleSelect>Selecionar Data</TitleSelect>

            <CalendarComponent />

            <LabelSelect>Selecione um horário disponível</LabelSelect>

            <InputSelect />

            <Button onPress={() => setShowConfirmModal(true)}>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

            <LinkCodeModal onPress={() => navigation.replace("Main")}>Cancelar</LinkCodeModal>

            <ConfirmModal
                visible={showConfirmModal}
                setShowConfirmModal={setShowConfirmModal}
                navigation={navigation}
            />

        </Container>
    )
}