import { Container, ContainerInputEmail, ConteinerIcon } from "../../components/Container/ContainerStyle"
import { AntDesign } from '@expo/vector-icons';
import { Logo } from "../../components/Logo/LogoStyle";
import { ButtonTitle, Subtitle, Title } from "../../components/Title/TitleStyle";
import { InputCheckEmail } from "../../components/Input/InputStyles";
import { Button } from "../../components/Button/ButtonStyle";
import { LinkCode } from "../../components/Links/Links";
import { useRef, useState } from "react";
import api from "../../Service/Service";

export const CheckEmail = ({ navigation, route }) => {

    const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)]
    const[codigo, setCodigo] = useState("")

    async function ValidarCodigo(){
        await api.post(`/RecuperarSenha/ConfirmarCodigo?email=${route.params.emailRecuperacao}&codigo=${codigo}`)
        .then(() => {
            navigation.replace("RedefinePassword", {emailRecuperacao: route.params.emailRecuperacao})
        }).catch(error => {
            console.log(error);
        })
    }

    function focusPrevInput(index){
        if (index > 0) {
            inputs[index - 1].current.focus()
        }
    }


    function focusNextInput(index) {
        //Verificar se o index é menor do que a quantidade de capos
        if (index < inputs.length - 1) {
            inputs[index + 1].current.focus()
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

            <Title>Verifique seu e-mail</Title>

            <Subtitle>Digite o código de 4 dígitos enviado para {route.params.emailRecuperacao}</Subtitle>

            <ContainerInputEmail>


                {
                    [0, 1, 2, 3].map((index) => (

                        <InputCheckEmail
                            key={index}
                            ref={inputs[index]}
                            placeholder={'0'}
                            keyboardType={'numeric'}
                            placeholderTextColor={'#34898F'}
                            maxLength={1}
                            onChangeText={(txt) => {
                                //Verificar se o campo é vazio
                                if (txt == "") {
                                    focusPrevInput(index)

                                } else {

                                    const codigoInformado = [...codigo]
                                    codigoInformado[index] = txt
                                    setCodigo(codigoInformado.join(''))


                                    //Verificar se o campo foi preenchido
                                    focusNextInput(index)
                                }
                            }}
                        />

                    ))
                }

            </ContainerInputEmail>

            <Button onPress={() => ValidarCodigo()}>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <LinkCode>Reenviar Código</LinkCode>



        </Container>
    )
}