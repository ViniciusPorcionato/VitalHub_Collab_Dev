import { StatusBar } from "react-native"
import { BoxInput } from "../../components/BoxInput/BoxInput"
import { Button, ButtonExit, ButtonProfile } from "../../components/Button/ButtonStyle"
import { Container, ContainerInput, ScrollProfile } from "../../components/Container/ContainerStyle"
import { UserImage } from "../../components/Logo/LogoStyle"
import { ButtonTitle, SubtitleProfile, TitleProfile } from "../../components/Title/TitleStyle"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { userDecodeToken } from "../../Utils/Auth"
import api from "../../Service/Service"
import { dateFormatDbToView } from "../../Utils/StringFunction"


export const UserProfile = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [profile, setProfile] = useState();

    const [profileMed, setProfileMed] = useState()

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

        if (token !== null) {
            await GetPerfil(token)
        }

        setName(token.name)
        setEmail(token.email)
        setRole(token.role)
        // setId(token.id)
    }

    async function GetPerfil(token) {
        await api.get(`/${token.role}s/BuscarPorId?id=${token.id}`)
            .then(response => {
                const responseData = response.data
                setProfile(responseData)

            }).catch(error => {
                console.log(error);
            })
    }



    useEffect(() => {
        profileLoad()
    }, [])

    useEffect(() => {
        GetPerfil()
    }, [])


    return (
        <ScrollProfile>
            {
                profile ? (

                    <Container>

                        <UserImage
                            source={require('../../assets/ProfileImage.png')}
                        />


                        <TitleProfile>{name}</TitleProfile>

                        <SubtitleProfile>{email}</SubtitleProfile>

                        {
                            role == 'Paciente' ?(
                                <BoxInput
                                    textLabel='Data de Nascimento'
                                    placeholder='dd/mm/aaaa'
                                    keyType='numeric'
                                    fieldValue={dateFormatDbToView(profile.dataNascimento)}
                                />
                            ) : null
                        }

                        {
                            role == "Paciente" ? (
                                
                                <BoxInput
                                    textLabel='CPF'
                                    placeholder='*********-**'
                                    keyType='numeric'
                                    fieldValue={profile.cpf}
                                />

                            ) : (

                                <BoxInput
                                    textLabel='CRM'
                                    placeholder='*********-**'
                                    keyType='numeric'
                                    fieldValue={profile.crm}
                                />

                            )
                        }


                        <BoxInput
                            textLabel='Endereço'
                            placeholder='Endereço...'
                            keyType='text'
                            fieldValue={`${profile.endereco.logradouro}, Nº${profile.endereco.numero}`}
                        />

                        <ContainerInput>

                            <BoxInput
                                textLabel='Cep'
                                placeholder='00000-000'
                                keyType='numeric'
                                fieldWidth={45}
                                maxLength={8}
                                fieldValue={profile.endereco.cep}
                            />

                            <BoxInput
                                textLabel='Cidade'
                                placeholder='Cidade...'
                                keyType='text'
                                fieldWidth={50}
                                fieldValue={profile.endereco.cidade}
                            />

                        </ContainerInput>


                        <Button onPress={() => navigation.replace((role == "Paciente") ? "Main" : "MainMed")}>
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
                ) : (
                    <>
                    </>
                )
            }

        </ScrollProfile>
    )
}