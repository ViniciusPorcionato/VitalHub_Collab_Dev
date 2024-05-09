import { StatusBar, processColor } from "react-native";
import { BoxInput } from "../../components/BoxInput/BoxInput";
import {
  Button,
  ButtonExit,
  ButtonProfile,
} from "../../components/Button/ButtonStyle";
import {
  Container,
  ContainerInput,
  ContainerProfile,
  ScrollProfile,
} from "../../components/Container/ContainerStyle";
import { UserImage } from "../../components/Logo/LogoStyle";
import {
  ButtonTitle,
  SubtitleProfile,
  TitleProfile,
} from "../../components/Title/TitleStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { userDecodeToken } from "../../Utils/Auth";
import api from "../../Service/Service";
import { dateFormatDbToView } from "../../Utils/StringFunction";

import { ButtonCamera } from "../../components/Button/ButtonStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinkCode } from "../../components/Links/Links";

import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { useFocusEffect } from "@react-navigation/native";

export const UserProfile = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [profile, setProfile] = useState(null);
  const [idUsuario, setIdUsuario] = useState("");

  // states para update
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCPF] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [cep, setCEP] = useState("");
  const [cidade, setCidade] = useState("");
  /////////////////////////////////////////////////////////

  const [profileMed, setProfileMed] = useState();

  const [editable, setEditable] = useState(false);

  const logout = async (navigation) => {
    try {
      await AsyncStorage.removeItem("token");

      // Verifica se o token foi apagado com sucesso
      const tokenAfterLogout = await AsyncStorage.getItem("token");

      //Ir para a tela login
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (error) {
      console.error("Erro ao limpar o token:", error);
    }
  };

  async function profileLoad() {
    const token = await userDecodeToken();

    if (token !== null) {
      await GetPerfil(token);

      setName(token.name);
      setEmail(token.email);
      setRole(token.role);
      setIdUsuario(token.id);
    }
  }

  async function GetPerfil(token) {
    await api
      .get(`/${token.role}s/BuscarPorId?id=${token.id}`)
      .then((response) => {
        const responseData = response.data;
        setProfile(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function requestGaleria() {
    await MediaLibrary.requestPermissionsAsync();

    await ImagePicker.requestMediaLibraryPermissionsAsync();
  }

  async function UpdatePerfil() {
    const token = await userDecodeToken();
    await api
      .put(`/Pacientes?idUsuario=${token.id}`, {
        dataNascimento: dataNascimento,
        cpf: cpf,
        logradouro: endereco,
        numero: numero,
        cep: cep,
        cidade: cidade,
      })
      .then((response) => {
        console.log("Prontuario atualizado com sucesso", response);
      })
      .catch((error) => {
        console.log(error);
      });

    setEditable(false);
  }

  useEffect(() => {
    profileLoad();
    requestGaleria();
  }, []);

  useEffect(() => {
    if (route.params != null && idUsuario != "") {
      AlterarFotoPerfil();
    }
  }, [idUsuario]);

  async function AlterarFotoPerfil() {
    const formData = new FormData();
    formData.append("Arquivo", {
      uri: route.params.uriPhoto,
      name: `image.${route.params.uriPhoto.split(".").pop()}`,
      type: `image/${route.params.uriPhoto.split(".").pop()}`,
    });

    await api
      .put(`/Usuario/AlterarFotoPerfil?id=${idUsuario}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(async () => {
        await setProfile({
          ...profile,
          idNavigation : {
            ...profile.idNavigation,
            foto: route.params.uriPhoto,
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useFocusEffect(
    React.useCallback(() => {
      profileLoad();
    }, []))

  return (
    <ScrollProfile>
      {profile ? (
        <Container>
          <ContainerProfile>
            <UserImage
              source={{ uri: profile.idNavigation.foto }}
            />

            {editable == true ? (
              <ButtonCamera onPress={() => navigation.replace("CameraUser")}>
                <MaterialCommunityIcons
                  name="camera-plus"
                  size={20}
                  color="#fbfbfb"
                />
              </ButtonCamera>
            ) : (
              <></>
            )}
          </ContainerProfile>

          <TitleProfile>{name}</TitleProfile>

          <SubtitleProfile>{email}</SubtitleProfile>

          {role == "Paciente" ? (
            <BoxInput
              textLabel="Data de Nascimento"
              placeholder={dateFormatDbToView(profile.dataNascimento)}
              keyType="numeric"
              editable={editable}
              onChangeText={(x) => setDataNascimento(x)}
            />
          ) : null}

          {role == "Paciente" ? (
            <BoxInput
              textLabel="CPF"
              placeholder={profile.cpf}
              keyType="numeric"
              editable={editable}
              onChangeText={(x) => setCPF(x)}
            />
          ) : (
            <BoxInput
              textLabel="CRM"
              placeholder={profile.crm}
              keyType="numeric"
              editable={editable}
            />
          )}

          <ContainerInput>
            <BoxInput
              textLabel="Endereço"
              placeholder={`${profile.endereco.logradouro}`}
              keyType="text"
              editable={editable}
              onChangeText={(x) => setEndereco(x)}
              fieldWidth={70}
            />
            <BoxInput
              textLabel="Numero"
              placeholder={`Nº${profile.endereco.numero}`}
              keyType="numeric"
              editable={editable}
              onChangeText={(x) => setNumero(x)}
              fieldWidth={30}
            />
          </ContainerInput>

          <ContainerInput>
            <BoxInput
              textLabel="Cep"
              placeholder={profile.endereco.cep}
              keyType="numeric"
              fieldWidth={45}
              maxLength={8}
              editable={editable}
              onChangeText={(x) => setCEP(x)}
            />

            <BoxInput
              textLabel="Cidade"
              placeholder={profile.endereco.cidade}
              keyType="text"
              fieldWidth={50}
              editable={editable}
              onChangeText={(x) => setCidade(x)}
            />
          </ContainerInput>

          {editable == true ? (
            <Button onPress={() => UpdatePerfil()}>
              <ButtonTitle>Salvar</ButtonTitle>
            </Button>
          ) : (
            <></>
          )}

          {editable == false ? (
            <ButtonProfile onPress={() => setEditable(true)}>
              <ButtonTitle>Editar</ButtonTitle>
            </ButtonProfile>
          ) : (
            <></>
          )}
          {editable == false ? (
            <ButtonExit onPress={() => logout(navigation)}>
              <ButtonTitle>Sair do App</ButtonTitle>
            </ButtonExit>
          ) : (
            <LinkCode onPress={() => setEditable(false)}>Cancelar</LinkCode>
          )}

          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
        </Container>
      ) : (
        <></>
      )}
    </ScrollProfile>
  );
};
