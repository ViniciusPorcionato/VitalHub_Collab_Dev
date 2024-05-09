import { ContainerHeader } from "../Container/ContainerStyle";
import { Ionicons } from "@expo/vector-icons";
import {
  BoxUser,
  DataUser,
  ImageUser,
  NameUser,
  TextDefault,
} from "./HomeStyles";
import { userDecodeToken } from "../../Utils/Auth";
import { useEffect, useState } from "react";
import api from "../../Service/Service";

export const HeaderMed = ({ navigation, fotoUri }) => {
  const [nameMed, setNameMed] = useState("");

  const [profileMed, setProfileMed] = useState("");
  const [imageProfileMed, setImageProfileMed] = useState(null);

  async function profileLoad() {
    const token = await userDecodeToken();

    setNameMed(token.name);
    setProfileMed(token);
    GetImageProfileMed(token);
  }

  async function GetImageProfileMed(token) {
    await api
      .get(`/Medicos/BuscarPorId?id=${token.id}`)
      .then((response) => {
        setImageProfileMed(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    profileLoad();
  }, []);

  return (
    <ContainerHeader>
      <BoxUser onPress={() => navigation.replace("UserProfile")}>
        
        {imageProfileMed != null && (
          <ImageUser source={{ uri: imageProfileMed.idNavigation.foto }} />
        )}

        <DataUser>
          <TextDefault>Bem Vindo !</TextDefault>
          <NameUser>{nameMed}</NameUser>
        </DataUser>
      </BoxUser>

      <Ionicons name="notifications" size={25} color="#fbfbfb" />
    </ContainerHeader>
  );
};

export const HeaderPatient = ({ navigation, fotoUri }) => {
  const [namePatient, setNamePatient] = useState("");
  const [profile, setProfile] = useState("");
  const [imageProfile, setImageProfile] = useState(null);

  async function profileLoad() {
    const token = await userDecodeToken();

    setNamePatient(token.name);
    setProfile(token);
    GetImageProfile(token);
  }

  async function GetImageProfile(token) {
    await api
      .get(`/Pacientes/BuscarPorId?id=${token.id}`)
      .then((response) => {
        console.log(response.data);
        setImageProfile(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    profileLoad();
  }, []);

  return (
    <ContainerHeader>
      <BoxUser onPress={() => navigation.replace("UserProfile")}>
        {imageProfile != null && (
          <ImageUser source={{ uri: imageProfile.idNavigation.foto }} />
        )}
        <DataUser>
          <TextDefault>Bem Vindo !</TextDefault>
          <NameUser>{namePatient}</NameUser>
        </DataUser>
      </BoxUser>

      <Ionicons name="notifications" size={25} color="#fbfbfb" />
    </ContainerHeader>
  );
};
