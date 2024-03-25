import { StatusBar } from "react-native"
import { BoxInput } from "../../components/BoxInput/BoxInput"
import { Button, ButtonExit, ButtonProfile } from "../../components/Button/ButtonStyle"
import { Container, ContainerInput, ScrollProfile } from "../../components/Container/ContainerStyle"
import { UserImage } from "../../components/Logo/LogoStyle"
import { ButtonTitle, SubtitleProfile, TitleProfile } from "../../components/Title/TitleStyle"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { userDecodeToken } from "../../Utils/Auth"


export const UserProfile = ({ navigation, profile = "Paciente" }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        profileLoad()
    }, [])

    const logout = async (navigation) => {

        try {
            await AsyncStorage.removeItem("token");

            // Verifica se o token foi apagado com sucesso
            const tokenAfterLogout = await AsyncStorage.getItem("token");
            if (tokenAfterLogout === null) {
                console.log('Token apagado com sucesso.');
            } else {
                console.log('Falha ao apagar o token.');
            }

            //Ir para a tela login
            navigation.reset({
                index: 0,
                routes: [{ name: "Login" }]
            });
        } catch (error) {
            console.error('Erro ao limpar o token:', error);
        }

    }

    async function profileLoad() {

        const token = await userDecodeToken();

        if (token) {
            console.log(token);
        }

        setName(token.name)
        setEmail(token.email)
    }


    return (
        <ScrollProfile>
            <Container>

                <UserImage
                    source={require('../../assets/ProfileImage.png')}
                />

                <TitleProfile>{name}</TitleProfile>

                <SubtitleProfile>{email}</SubtitleProfile>

                <BoxInput
                    textLabel='Data de Nascimento'
                    placeholder='dd/mm/aaaa'
                    keyType='numeric'
                    maxLength={8}
                />

                <BoxInput
                    textLabel='CPF'
                    placeholder='*********-**'
                    keyType='numeric'
                    maxLength={11}
                />

                <BoxInput
                    textLabel='Endereço'
                    placeholder='Endereço...'
                    keyType='text'
                />

                <ContainerInput>

                    <BoxInput
                        textLabel='Cep'
                        placeholder='00000-000'
                        keyType='numeric'
                        fieldWidth={45}
                        maxLength={8}
                    />

                    <BoxInput
                        textLabel='Cidade'
                        placeholder='Cidade...'
                        keyType='text'
                        fieldWidth={50}
                    />

                </ContainerInput>


                <Button onPress={() => navigation.replace(({ profile } == "Paciente") ? "Main" : "MainMed")} >
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>

                <ButtonProfile>
                    <ButtonTitle>Editar</ButtonTitle>
                </ButtonProfile>

                <ButtonExit onPress={() => logout(navigation)}>
                    <ButtonTitle>Sair do App</ButtonTitle>
                </ButtonExit>

                <StatusBar barStyle='dark-content' translucent backgroundColor='transparent' />

            </Container>
        </ScrollProfile>
    )
}