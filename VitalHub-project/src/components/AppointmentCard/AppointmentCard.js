import { AntDesign } from '@expo/vector-icons';
import { ButtonCard, ButtonTextCard, ClockCard, ContainerCardList, ContainerCardListClinic, ContainerDate, ContainerRate, ContainerRateTime, ContentCard, ContentMedCard, DataClinicCard, DataProfileCard, HourText, ProfileData, ProfileImage, ProfileName, RateText, TextAge, TextBold, TextBoldClinic, ViewRow } from './AppointmentCardStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import moment from 'moment';


export const AppointmentCard = ({
    navigation,
    profile = "Paciente",
    situacao = "Agendado",
    onPressCancel,
    onPressAppointment,
    ProfileNameCard,
    Age,
    consultas,
    TipoConsulta,
    dataConsulta,
    onPressQuery, 
    source
}) => {
    return (

        <ContainerCardList >

            {/* <ProfileImage source={{ uri: "https://github.com/Guidcampos.png" }} /> */}
            <ProfileImage source={source} />

            <ContentCard>

                <DataProfileCard>

                    <ProfileName>{ProfileNameCard}</ProfileName>

                    <ProfileData>
                        <TextAge>{Age}</TextAge>
                        <TextBold>{TipoConsulta}</TextBold>
                    </ProfileData>

                </DataProfileCard>

                <ViewRow>

                    <ClockCard situacao={situacao}>
                        <AntDesign name="clockcircle" size={14} color={situacao == "Agendado" ? "#49B3BA" : "#8C8A97"} />
                        <TextBold situacao={situacao} color={"#49b3ba"}>{moment(dataConsulta).format('HH:mm')}</TextBold>
                    </ClockCard>

                    {
                        situacao == "Cancelado" ? (
                            <>
                            </>
                        ) : situacao == "Agendado" ? (

                            <ButtonCard onPress={onPressCancel}>
                                <ButtonTextCard situacao={situacao}>Cancelar</ButtonTextCard>
                            </ButtonCard>
                        ) : (

                            // <ButtonCard onPress={profile !== "Paciente" ? onPressAppointment : () => navigation.replace("ViewPrescription")}>
                            <ButtonCard onPress={onPressAppointment}>
                                <ButtonTextCard situacao={situacao}>Ver prontuário</ButtonTextCard>
                            </ButtonCard>
                        )
                    }

                </ViewRow>

            </ContentCard>

        </ContainerCardList>

    )
}

export const SelectMedCard = ({
    textCard,
    onPressCard,
    ProfileNameCard,
    imageUrl,
    medico,
    selected,
    setMedico
}) => {
    return (

        <ContainerCardList
            selected={selected}
            onPress={() => setMedico({
                medicoClinicaId: medico.id,
                medicoNome: medico.idNavigation.nome,
                medicoEspecialidade: medico.especialidade.especialidade1
            })}
        >

            <ProfileImage source={imageUrl} />

            <ContentMedCard>
                <DataProfileCard>
                    <ProfileName>{ProfileNameCard}</ProfileName>
                    <ProfileData>
                        <TextBold>{textCard}</TextBold>
                    </ProfileData>
                </DataProfileCard>
            </ContentMedCard>
        </ContainerCardList>

    )
}

export const SelectClinicCard = ({
    textCard,
    onPressCard,
    ProfileNameCard,
    rate,
    openTime,
    clinica,
    setClinica,
    selected
}) => {
    return (

        <ContainerCardListClinic
            selected={selected}
            onPress={() => setClinica({
                clinicaId: clinica.id,
                clinicaLabel: clinica.nomeFantasia
            })}>


            <ContentMedCard>

                <DataClinicCard>

                    <ProfileName>{ProfileNameCard}</ProfileName>

                    <ProfileData>
                        <TextBoldClinic>{textCard}</TextBoldClinic>
                    </ProfileData>

                </DataClinicCard>

            </ContentMedCard>

            <ContainerRateTime>

                <ContainerRate>
                    <AntDesign name="star" size={20} color="#F9A620" />

                    <RateText>{rate}</RateText>
                </ContainerRate>

                <ContainerDate>

                    <MaterialCommunityIcons name="calendar-outline" size={15} color="#49B3BA" />

                    <HourText>{openTime}</HourText>

                </ContainerDate>

            </ContainerRateTime>


        </ContainerCardListClinic>

    )
}