import { Container, ContentAccount } from "../../components/Container/ContainerStyle"
import { Logo } from "../../components/Logo/LogoStyle"
import { ButtonTitle, ButtonTitleGoogle, TextAccount, Title } from "../../components/Title/TitleStyle"
import { Input } from "../../components/Input/Input"
import { LinkAccount, LinkMedium } from "../../components/Links/Links"
import { Button, ButtonGoogle } from "../../components/Button/ButtonStyle"
import { AntDesign } from '@expo/vector-icons';

export const Login = ({navigation}) => {


    async function Login(){
        navigation.navigate("Main")
    }

    async function LoginMed(){
        navigation.navigate("MainMed")
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
            // value={fieldValue}
            // onChangeText={onChangeText}
            />

            <Input
                placeholder={'Senha'}
                keyboardType={'text'}
                placeholderTextColor={'#34898F'}
                secureTextEntry={true}
            // value={fieldValue}
            // onChangeText={onChangeText}
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