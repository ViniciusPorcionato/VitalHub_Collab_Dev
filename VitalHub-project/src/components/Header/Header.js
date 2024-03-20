import { ContainerHeader } from "../Container/ContainerStyle"
import { Ionicons } from '@expo/vector-icons';
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./HomeStyles"

export const HeaderMed = ({navigation}) => {
    return (

        <ContainerHeader>

            <BoxUser onPress={() => navigation.replace("UserProfile")}>

                <ImageUser
                    source={require('../../assets/unsplash_3HIroMoyre8.png')}
                />

                <DataUser>
                    <TextDefault>Bem Vindo !</TextDefault>
                    <NameUser>Dr. Fulano</NameUser>
                </DataUser>

            </BoxUser>

            <Ionicons name="notifications" size={25} color="#fbfbfb" />

        </ContainerHeader>

    )
}

export const HeaderPatient = ({navigation}) => {
    return (

        <ContainerHeader>

            <BoxUser onPress={() => navigation.replace("UserProfile")}>

                <ImageUser
                    source={require('../../assets/ProfileImage.png')}
                />

                <DataUser>
                    <TextDefault>Bem Vindo !</TextDefault>
                    <NameUser>Richar Kosta</NameUser>
                </DataUser>

            </BoxUser>

            <Ionicons name="notifications" size={25} color="#fbfbfb" />

        </ContainerHeader>

    )
}