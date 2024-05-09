import { useEffect, useState } from "react";
import {
  BoxInputMedical,
  BoxInputMedicalRecord,
} from "../../components/BoxInput/BoxInput";
import { Button, ButtonEdit } from "../../components/Button/ButtonStyle";
import {
  Container,
  ContainerMedicalRecord,
  ScrollProfile,
} from "../../components/Container/ContainerStyle";
import { LinkCode } from "../../components/Links/Links";
import { UserImage } from "../../components/Logo/LogoStyle";
import {
  ButtonTitle,
  SubtitleMedicalRecord,
  TitleProfile,
} from "../../components/Title/TitleStyle";
import api from "../../Service/Service";
import { ActivityIndicator, LogBox } from "react-native";
import { userDecodeToken } from "../../Utils/Auth";
import moment from "moment";

LogBox.ignoreAllLogs(); //Ignora os warnings

export const MedicalRecord = ({ navigation, route }) => {
  const [consulta, setConsulta] = useState(null);

  const [descricao, setDescricao] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [prescricao, setPrescricao] = useState("");
  const [editable, setEditable] = useState(false);

  async function HandleUpdate() {
    await api
      .put(
        `/Consultas/Prontuario`,

        {
          consultaId: consulta.id,
          descricao: descricao,
          diagnostico: diagnostico,
          medicamento: prescricao,
        }
      )
      .then((response) => {
        console.log("Prontuário atualizado com sucesso !", response);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }



  useEffect(() => {
    GetProntuario();
  }, []);

  useEffect(() => {
    HandleUpdate();
  }, []);

 

  return (
    <ScrollProfile>
      {consulta ? (
        <Container>
          <UserImage source={require("../../assets/ProfileImage.png")} />

          <TitleProfile>{consulta.paciente.idNavigation.nome}</TitleProfile>

          <ContainerMedicalRecord>
            <SubtitleMedicalRecord>{`${
              moment().year() -
              moment(consulta.paciente.dataNascimento).format("YYYY")
            } anos`}</SubtitleMedicalRecord>

            <SubtitleMedicalRecord>
              {consulta.paciente.idNavigation.email}
            </SubtitleMedicalRecord>
          </ContainerMedicalRecord>

          <BoxInputMedicalRecord
            textLabel="Descrição da Consulta"
            placeholder={consulta.descricao}
            keyType="text"
            placeholderTextColor={"#34898F"}
            editable={editable}
            onChangeText={(x) => setDescricao(x)}
          />

          <BoxInputMedical
            textLabel="Diagnóstico do paciente"
            placeholder={consulta.diagnostico}
            keyType="text"
            placeholderTextColor={"#34898F"}
            editable={editable}
            onChangeText={(x) => setDiagnostico(x)}
          />

          <BoxInputMedicalRecord
            textLabel="Prescrição Médica"
            placeholder={consulta.receita.medicamento}
            keyType="text"
            placeholderTextColor={"#34898F"}
            editable={editable}
            onChangeText={(x) => setPrescricao(x)}
          />

          {editable == true ? (
            <Button
              onPress={() => {
                setEditable(false);
                HandleUpdate();
              }}
            >
              <ButtonTitle>Salvar</ButtonTitle>
            </Button>
          ) : (
            <></>
          )}

          {editable == false ? (
            <ButtonEdit
              onPress={() => {
                editable == false ? setEditable(true) : setEditable(false);
              }}
            >
              <ButtonTitle>Editar</ButtonTitle>
            </ButtonEdit>
          ) : (
            <ButtonEdit
              onPress={() => {
                setEditable(false);

                console.log(editable);
              }}
            >
              <ButtonTitle>Editar</ButtonTitle>
            </ButtonEdit>
          )}

          {editable == true ? (
            <LinkCode onPress={() => setEditable(false)}>Cancelar</LinkCode>
          ) : (
            <LinkCode onPress={() => navigation.navigate("MainMed")}>
              voltar
            </LinkCode>
          )}
        </Container>
      ) : (
        <></>
      )}
    </ScrollProfile>
  );
};
