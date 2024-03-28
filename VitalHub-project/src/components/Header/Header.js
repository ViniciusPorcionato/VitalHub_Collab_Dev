import { ContainerHeader } from "../Container/ContainerStyle"
import { Ionicons } from '@expo/vector-icons';
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./HomeStyles"
import {userDecodeToken} from "../../Utils/Auth"
import { useEffect, useState } from "react";


export const HeaderMed = ({navigation}) => {
    
    const[nameMed, setNameMed] = useState('');
    
    useEffect(() => {
        profileLoad()
    },[])
        
    async function profileLoad(){
        
        const token = await userDecodeToken();
        
        if (token) {
            console.log(token);
        }

        setNameMed(token.name)
        
    }
    
    
    return (
        
        <ContainerHeader>

            <BoxUser onPress={() => navigation.replace("UserProfile")}>

                <ImageUser
                    source={require('../../assets/unsplash_3HIroMoyre8.png')}
                    />

                <DataUser>
                    <TextDefault>Bem Vindo !</TextDefault>
                    <NameUser>{nameMed}</NameUser>
                </DataUser>

            </BoxUser>

            <Ionicons name="notifications" size={25} color="#fbfbfb" />

        </ContainerHeader>

)
}

export const HeaderPatient = ({navigation}) => {

    const [namePatient, setNamePatient] = useState('');
    
    async function profileLoad(){
        const token = await userDecodeToken();
        
        if (token) {
            console.log(token);
        }
        
        setNamePatient(token.name)

    }

    useEffect(() => {
        profileLoad()
    },[])

    return (

        <ContainerHeader>

            <BoxUser onPress={() => navigation.replace("UserProfile")}>

                <ImageUser
                    source={require('../../assets/ProfileImage.png')}
                />

                <DataUser>
                    <TextDefault>Bem Vindo !</TextDefault>
                    <NameUser>{namePatient}</NameUser>
                </DataUser>

            </BoxUser>

            <Ionicons name="notifications" size={25} color="#fbfbfb" />

        </ContainerHeader>

    )
}