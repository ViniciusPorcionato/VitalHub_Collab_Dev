<<<<<<< HEAD
import { useState } from "react"
import { Button } from "../../components/Button/ButtonStyle"
import { Container } from "../../components/Container/ContainerStyle"
import { Input } from "../../components/Input/Input"
import { LinkCode } from "../../components/Links/Links"
import { Logo } from "../../components/Logo/LogoStyle"
import { ButtonTitle, Subtitle, Title } from "../../components/Title/TitleStyle"
import api from "../../Service/Service"

export const CreateAccount = ({ navigation }) => {

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [verificarSenha, setVerificarSenha] = useState('')
    const [idTipoUsuario, setIdTipoUsuario] = useState('4A747BF0-F985-4822-9BD0-2067D7277885');

    async function cadastrar(verificarSenha, senha) {
        if (email === "") {
            Alert.alert(
                "Erro", "Preencher o campo email"
            )

        }
        else if (senha === "") {
            Alert.alert(
                "Erro", "Preencher o campo senha"
            )

        }
        else if (verificarSenha === "") {
            Alert.alert(
                "Erro", "Preencher o campo confirmar senha"
            )

        }
        else if (verificarSenha === senha) {

            try {
                await api.post("/Pacientes", {
                    nome: nomeUsuario,
                    email: email,
                    senha: senha,
                    idTipoUsuario: idTipoUsuario
                })

                navigation.replace("Login")

            } catch (error) {

                console.log(error)
            }

        }
        else {
            console.log("Senhas inválidas")

            Alert.alert(
                "Erro", "Senha inválida"
            )
        }
    }


    return (
        <Container>

            <Logo
                source={require('../../assets/VitalHub_Logo.png')}
            />
=======
import { useEffect, useState } from "react";
import { Button } from "../../components/Button/ButtonStyle";
import { Container } from "../../components/Container/ContainerStyle";
import { Input } from "../../components/Input/Input";
import { LinkCode } from "../../components/Links/Links";
import { Logo } from "../../components/Logo/LogoStyle";
import {
  ButtonTitle,
  Subtitle,
  Title,
} from "../../components/Title/TitleStyle";
import api from "../../Service/Service";

export const CreateAccount = ({ navigation }) => {
  // const [usuario, setUsuario] = useState("");
  // const [nome, setNome] = useState("");
  // const [email, setEmail] = useState("");
  // const [senha, setSenha] = useState("");

  // useEffect(() => {
  //   async function SignIn() {
  //     try {
  //       const promise = await api.post("/Pacientes");

  //       setUsuario(promise.data);
  //     } catch (error) {
  //       console.log("Deu ruim na api" + error);
  //     }
  //   }
  // }, []);
>>>>>>> 95a254050a75c9f75c83956c2cc90a3a3f62cd2a

  return (
    <Container>
      <Logo source={require("../../assets/VitalHub_Logo.png")} />

      <Title>Criar conta</Title>

<<<<<<< HEAD
            <Input
                placeholder={'Nome de Usuário'}
                keyboardType={'text'}
                placeholderTextColor={'#34898F'}
                fieldValue={nomeUsuario}
                onChangeText={
                    (txt) => setNomeUsuario(txt)
                }
            />

            <Input
                placeholder={'E-mail'}
                keyboardType={'text'}
                placeholderTextColor={'#34898F'}
                fieldValue={email}
                onChangeText={
                    (txt) => setEmail(txt)
                }
            />

            <Input
                placeholder={'Senha'}
                keyboardType={'text'}
                placeholderTextColor={'#34898F'}
                secureTextEntry={true}
                fieldValue={senha}
                onChangeText={
                    (txt) => setSenha(txt)
                }

            />

            <Input
                placeholder={'Confirmar senha'}
                keyboardType={'text'}
                placeholderTextColor={'#34898F'}
                secureTextEntry={true}
                fieldValue={verificarSenha}
                onChangeText={
                    (txt) => setVerificarSenha(txt)
                }
            />

            <Button onPress={() => cadastrar(verificarSenha, senha)}>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>
=======
      <Subtitle>
        Insira seu endereço de e-mail e senha para realizar seu cadastro.
      </Subtitle>

      <Input
        placeholder={"Nome de usuário"}
        keyboardType={"text"}
        placeholderTextColor={"#34898F"}
        // value={fieldValue}
        // onChangeText={onChangeText}
      />
      <Input
        placeholder={"E-mail"}
        keyboardType={"text"}
        placeholderTextColor={"#34898F"}
        // value={fieldValue}
        // onChangeText={onChangeText}
      />

      <Input
        placeholder={"Senha"}
        keyboardType={"text"}
        placeholderTextColor={"#34898F"}
        secureTextEntry={true}
        // value={fieldValue}
        // onChangeText={onChangeText}
      />

      <Input
        placeholder={"Confirmar senha"}
        keyboardType={"text"}
        placeholderTextColor={"#34898F"}
        secureTextEntry={true}
        // value={fieldValue}
        // onChangeText={onChangeText}
      />
>>>>>>> 95a254050a75c9f75c83956c2cc90a3a3f62cd2a

      <Button onPress={() => navigation.replace("Login")}>
        <ButtonTitle>Cadastrar</ButtonTitle>
      </Button>

      <LinkCode onPress={() => navigation.replace("Login")}>Cancelar</LinkCode>
    </Container>
  );
};
