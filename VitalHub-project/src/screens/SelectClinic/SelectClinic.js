import { useEffect, useState } from "react";
import {
  SelectClinicCard,
  SelectMedCard,
} from "../../components/AppointmentCard/AppointmentCard";
import { Button } from "../../components/Button/ButtonStyle";
import { Container } from "../../components/Container/ContainerStyle";
import { LinkCode } from "../../components/Links/Links";
import { ListComponent } from "../../components/List/ListStyles";
import {
  ButtonTitle,
  Title,
  TitleSelect,
} from "../../components/Title/TitleStyle";
import api from "../../Service/Service";
import { AlertModal } from "../../components/AlertModal/AlertModal";

export const SelectClinic = ({ navigation, route }) => {
  const [clinicas, setClinicas] = useState([]);
  const [clinica, setClinica] = useState(null);

  const [showAlertModal, setShowAlertModal] = useState(false);

  useEffect(() => {
    async function getClinica() {
      try {
        const promise = await api.get(
          `/Clinica/BuscarPorCidade?cidade=${route.params.agendamento.localizacao}`
        );
        setClinicas(promise.data);
      } catch (error) {
        console.log("Deu ruim na API", error);
      }
    }
    getClinica();
  }, []);

  //validação
  function handleContinue() {
    if (clinica != null) {
      navigation.replace("SelectMed", {
        agendamento: {
          ...route.params.agendamento,
          ...clinica,
        },
      });
    } else {
      setShowAlertModal(true);
    }
  }

  return (
    <Container>
      <TitleSelect>Selecionar Clinica</TitleSelect>

      {/* lista */}
      <ListComponent
        data={clinicas}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <SelectClinicCard
            ProfileNameCard={item.nomeFantasia}
            textCard={item.endereco.logradouro}
            clinica={item}
            setClinica={setClinica}
            selected={clinica ? clinica.clinicaId == item.id : false}
          />
        )}
      />

      <Button onPress={() => handleContinue()}>
        <ButtonTitle>Continuar</ButtonTitle>
      </Button>

      <LinkCode onPress={() => navigation.replace("Main")}>Cancelar</LinkCode>

      <AlertModal
        visible={showAlertModal}
        setShowAlertModal={setShowAlertModal}
        AlertAdvise={"Selecione uma clinica"}
      />
    </Container>
  );
};
