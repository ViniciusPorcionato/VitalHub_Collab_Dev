import { useEffect, useState } from "react";
import { SelectMedCard } from "../../components/AppointmentCard/AppointmentCard";
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

export const SelectMed = ({ navigation, route }) => {
  //Criar o state para receber a lista de médico (Array)
  const [medicos, setMedicos] = useState([]);

  const [medico, setMedico] = useState(null);

  const [showAlertModal, setShowAlertModal] = useState(false);

  //Criar um useEffect para a chamda da função
  useEffect(() => {
    //Criar a função para obter a lista de médico da api e setar no state
    async function getMedico() {
      try {
        const promise = await api.get(
          `/Medicos/BuscarPorIdClinica?id=${route.params.agendamento.clinicaId}`
        );

        setMedicos(promise.data);
      } catch (error) {
        console.log("Deu ruim na API !");
      }
    }

    getMedico();
    console.log(route.params.agendamento);
    console.log("aqui");
    // console.log(medico);
  }, []);

  //validação
  function handleContinue() {
    if (medico) {
      navigation.replace("SelectDate", {
        agendamento: {
          ...route.params.agendamento,
          ...medico,
        },
      });
    } else {
      setShowAlertModal(true);
    }
  }

  return (
    <Container>
      <TitleSelect>Selecionar Medico</TitleSelect>

      {/* lista */}
      <ListComponent
        data={medicos}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <SelectMedCard
            ProfileNameCard={item.idNavigation.nome}
            textCard={item.especialidade.especialidade1}
            medico={item}
            setMedico={setMedico}
            imageUrl={{ uri: item.idNavigation.foto }}
            selected={medico ? medico.medicoClinicaId == item.id : false}
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
        AlertAdvise={"Selecione uma Medico"}
      />
    </Container>
  );
};
