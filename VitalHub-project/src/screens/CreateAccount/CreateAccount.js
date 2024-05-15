import { useState } from "react";
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
import { AlertModal } from "../../components/AlertModal/AlertModal";

export const CreateAccount = ({ navigation }) => {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [verificarSenha, setVerificarSenha] = useState("");
  const [idTipoUsuario, setIdTipoUsuario] = useState(
    "4A747BF0-F985-4822-9BD0-2067D7277885"
  );

  const [showAlertModal, setShowAlertModal] = useState(false);

  async function cadastrar(verificarSenha, senha) {
    if (email === "") {
      setShowAlertModal(true)
    } else if (senha === "") {
      setShowAlertModal(true)
    } else if (verificarSenha === "") {
      setShowAlertModal(true)
    } else if (verificarSenha === senha) {
      try {
        await api.post("/Pacientes", {
          nome: nomeUsuario,
          email: email,
          senha: senha,
          idTipoUsuario: idTipoUsuario,
        });

        navigation.replace("Login");
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert("Erro", "Senha inválida");
    }
  }

  return (
    <Container>
      <Logo source={require("../../assets/VitalHub_Logo.png")} />

      <Title>Criar conta</Title>

      <Input
        placeholder={"Nome de Usuário"}
        keyboardType={"text"}
        placeholderTextColor={"#34898F"}
        fieldValue={nomeUsuario}
        onChangeText={(txt) => setNomeUsuario(txt)}
      />

      <Input
        placeholder={"E-mail"}
        keyboardType={"text"}
        placeholderTextColor={"#34898F"}
        fieldValue={email}
        onChangeText={(txt) => setEmail(txt)}
      />

      <Input
        placeholder={"Senha"}
        keyboardType={"text"}
        placeholderTextColor={"#34898F"}
        secureTextEntry={true}
        fieldValue={senha}
        onChangeText={(txt) => setSenha(txt)}
      />

      <Input
        placeholder={"Confirmar senha"}
        keyboardType={"text"}
        placeholderTextColor={"#34898F"}
        secureTextEntry={true}
        fieldValue={verificarSenha}
        onChangeText={(txt) => setVerificarSenha(txt)}
      />

      <Button onPress={() => cadastrar(verificarSenha, senha)}>
        <ButtonTitle>Cadastrar</ButtonTitle>
      </Button>

      <Button onPress={() => navigation.replace("Login")}>
        <ButtonTitle>Cadastrar</ButtonTitle>
      </Button>

      <LinkCode onPress={() => navigation.replace("Login")}>Cancelar</LinkCode>

      <AlertModal
        visible={showAlertModal}
        setShowAlertModal={setShowAlertModal}
        AlertAdvise={"Campos Preenchidos Incorretamente ! "}
      />

    </Container>
  );
};
