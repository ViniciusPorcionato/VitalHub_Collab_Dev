import { Container, ConteinerIcon } from "../../components/Container/ContainerStyle"
import { AntDesign } from '@expo/vector-icons';
import { Logo } from "../../components/Logo/LogoStyle";
import { ButtonTitle, Subtitle, Title } from "../../components/Title/TitleStyle";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/ButtonStyle";
import { useState } from "react";
import api from "../../Service/Service";

export const RedefinePassword = ({ navigation, route }) => {

    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');


    async function AlterarSenha() {

        if (senha === confirmarSenha) {

            await api.put(`/Usuario/AlterarSenha?email=${route.params.emailRecuperacao}`, {
                senhaNova: senha
            }).then(() => {
                navigation.replace("Login")
            }).catch(error => {
                console.log(error);
            })
        }else{
            alert("Senhas incompatíveis")
        }

    }


    return (
        <Container>

            <ConteinerIcon onPress={() => navigation.replace("Login")}>

                <AntDesign name="closecircle" size={30} color="#34898F" />

            </ConteinerIcon>

            <Logo
                source={require('../../assets/VitalHub_Logo.png')}
            />

            <Title>Redefinir senha</Title>

            <Subtitle>Insira e confirme a sua nova senha</Subtitle>

            <Input
                placeholder={'Nova Senha'}
                keyboardType={'text'}
                placeholderTextColor={'#34898F'}
                secureTextEntry={true}
                value={senha}
                onChangeText={(txt) => setSenha(txt)}
            />

            <Input
                placeholder={'Confirmar nova senha'}
                keyboardType={'text'}
                placeholderTextColor={'#34898F'}
                secureTextEntry={true}
                value={confirmarSenha}
                onChangeText={(txt) => setConfirmarSenha(txt)}
            />

            <Button onPress={() => AlterarSenha()}>
                <ButtonTitle>Confirmar nova senha</ButtonTitle>
            </Button>


        </Container>
    )
}