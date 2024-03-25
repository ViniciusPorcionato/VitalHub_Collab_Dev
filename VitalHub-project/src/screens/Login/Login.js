import { Container, ContentAccount } from "../../components/Container/ContainerStyle"
import { Logo } from "../../components/Logo/LogoStyle"
import { ButtonTitle, ButtonTitleGoogle, TextAccount, Title } from "../../components/Title/TitleStyle"
import { Input } from "../../components/Input/Input"
import { LinkAccount, LinkMedium } from "../../components/Links/Links"
import { Button, ButtonGoogle } from "../../components/Button/ButtonStyle"
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react"
import api from "../../Service/Service"

import AsyncStorage from '@react-native-async-storage/async-storage'
import { userDecodeToken } from "../../Utils/Auth"
import { ActivityIndicator } from "react-native"

export const Login = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    async function Login() {
        await api.post('/Login', {
            email: email,
            senha: senha
        }).then( async response => {
            
            await AsyncStorage.setItem("token", JSON.stringify(response.data))

            const token = await userDecodeToken();
            if (token.role == "Paciente") {

                navigation.navigate("Main");
            }else{

                navigation.navigate("MainMed")
            }

            

        }).catch(error =>{

            console.log(error);
            
        })
        
    }



    return (
        <Container>

            <Logo
                source={require('../../assets/VitalHub_Logo.png')}
            />

            <Title>Entrar ou criar conta</Title>

            <Input
                placeholder={'Usuário ou E-mail'}
                keyboardType={'text'}
                placeholderTextColor={'#34898F'}
                value={email}
                onChangeText={(txt) => setEmail(txt)}
            />

            <Input
                placeholder={'Senha'}
                keyboardType={'text'}
                placeholderTextColor={'#34898F'}
                secureTextEntry={true}
                value={senha}
                onChangeText={(txt) => setSenha(txt)}
            />


            <LinkMedium onPress={() => navigation.replace("ForgotPassword")}>Esqueceu sua senha?</LinkMedium>

            <Button onPress={(e) => Login()}>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle onPress={(e) => LoginMed()}>
                <AntDesign name="google" size={18} color="#496BBA" />
                <ButtonTitleGoogle>Entrar com o Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta ?</TextAccount>
                <LinkAccount onPress={() => navigation.replace("CreateAccount")}>Crie uma conta agora!</LinkAccount>
            </ContentAccount>

        </Container>
    )
}