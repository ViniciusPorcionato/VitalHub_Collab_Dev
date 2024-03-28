import { Container, ContainerInputEmail, ConteinerIcon } from "../../components/Container/ContainerStyle"
import { AntDesign } from '@expo/vector-icons';
import { Logo } from "../../components/Logo/LogoStyle";
import { ButtonTitle, Subtitle, Title } from "../../components/Title/TitleStyle";
import { InputCheckEmail } from "../../components/Input/InputStyles";
import { Button } from "../../components/Button/ButtonStyle";
import { LinkCode } from "../../components/Links/Links";

export const CheckEmail = ({navigation}) => {
    return (
        <Container>

            <ConteinerIcon onPress={() => navigation.replace("Login")}>

                <AntDesign name="closecircle" size={30} color="#34898F" />

            </ConteinerIcon>

            <Logo
                source={require('../../assets/VitalHub_Logo.png')}
            />

            <Title>Verifique seu e-mail</Title>

            <Subtitle>Digite o código de 4 dígitos enviado para username@email.com</Subtitle>

            <ContainerInputEmail>

                <InputCheckEmail
                    placeholder={'0'}
                    keyboardType={'numeric'}
                    placeholderTextColor={'#34898F'}
                    maxLength={1}
                />

                <InputCheckEmail
                    placeholder={'0'}
                    keyboardType={'numeric'}
                    placeholderTextColor={'#34898F'}
                    maxLength={1}

                />

                <InputCheckEmail
                    placeholder={'0'}
                    keyboardType={'numeric'}
                    placeholderTextColor={'#34898F'}
                    maxLength={1}

                />

                <InputCheckEmail
                    placeholder={'0'}
                    keyboardType={'numeric'}
                    placeholderTextColor={'#34898F'}
                    maxLength={1}

                />

            </ContainerInputEmail>

            <Button onPress={() => navigation.replace("RedefinePassword")}>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <LinkCode>Reenviar Código</LinkCode>



        </Container>
    )
}