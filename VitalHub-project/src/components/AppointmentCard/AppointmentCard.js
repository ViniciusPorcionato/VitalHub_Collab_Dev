import { AntDesign } from '@expo/vector-icons';
import { ButtonCard, ButtonTextCard, ClockCard, ContainerCardList, ContainerCardListClinic, ContainerDate, ContainerRate, ContainerRateTime, ContentCard, ContentMedCard, DataClinicCard, DataProfileCard, HourText, ProfileData, ProfileImage, ProfileName, RateText, TextAge, TextBold, TextBoldClinic, ViewRow } from './AppointmentCardStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';


export const AppointmentCard = ({
    navigation,
    profile = "Paciente",
    situacao = "pendente",
    onPressCancel,
    onPressAppointment,
    ProfileNameCard,
    Age,
    TipoConsulta,
    onPressQuery
}) => {


    // const [profile, setProfile] = useState("Paciente")

    return (

        <ContainerCardList onPress={onPressQuery}>

            <ProfileImage source={{ uri: "https://github.com/Guidcampos.png" }} />

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
                        <AntDesign name="clockcircle" size={14} color={situacao == "pendente" ? "#49B3BA" : "#8C8A97"} />
                        <TextBold situacao={situacao} color={"#49b3baq"}>14:00</TextBold>
                    </ClockCard>

                    {
                        situacao == "cancelado" ? (
                            <>
                            </>
                        ) : situacao == "pendente" ? (

                            <ButtonCard onPress={onPressCancel}>
                                <ButtonTextCard situacao={situacao}>Cancelar</ButtonTextCard>
                            </ButtonCard>
                        ) : (

                            <ButtonCard onPress={profile !== "Paciente" ? onPressAppointment : () => navigation.replace("ViewPrescription")}>
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
}) => {
    return (

        <ContainerCardList>

            <ProfileImage source={imageUrl} />
            {/* <ProfileImage source={{ uri: "https://github.com/Guidcampos.png" }} /> */}

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
    openTime
}) => {
    return (

        <ContainerCardListClinic>


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