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

  return (
    <Container>
      <Logo source={require("../../assets/VitalHub_Logo.png")} />

      <Title>Criar conta</Title>

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

      <Button onPress={() => navigation.replace("Login")}>
        <ButtonTitle>Cadastrar</ButtonTitle>
      </Button>

      <LinkCode onPress={() => navigation.replace("Login")}>Cancelar</LinkCode>
    </Container>
  );
};
