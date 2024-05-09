import { useEffect, useState } from "react";
import { CalendarHome } from "../../components/Calendar/Calendar";
import { Container } from "../../components/Container/ContainerStyle";
import { HeaderMed } from "../../components/Header/Header";
import { FilterAppointment } from "./MedicalConsultationsStyles";
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment";
import { ListComponent } from "../../components/List/ListStyles";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { CancellationModal } from "../../components/CancellationModal/CancellationModal";
import { AppointmentModal } from "../../components/AppointmentModal/AppointmentModal";
import api from "../../Service/Service";
import {
  dateFormatDbToView,
  functionPrioridade,
} from "../../Utils/StringFunction";
import moment from "moment";
import { userDecodeToken } from "../../Utils/Auth";

export const MedicalConsultations = ({ navigation }) => {
  // state para o estado da lista(card)
  const [statusLista, setStatusLista] = useState("Agendado");

  //state para receber o array de consultas
  const [consultas, setConsultas] = useState([]);
  const [profile, setProfile] = useState({});

  const [dataConsulta, setDataConsulta] = useState("");

  const [consultaSelecionada, setConsultaSelecionada] = useState(null);

  // state para exibição dos modais
  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModalAppointment, setShowModalAppointment] = useState(false);

  const [situacao, setSituacao] = useState("");

  async function ProfileLoad() {
    const token = await userDecodeToken();

    if (token != null) {
      setProfile(token);

      setDataConsulta(moment().format("YYYY-MM-DD"));
    }
  }

  function MostrarModal(modal, consulta) {
    setConsultaSelecionada(consulta);

    if (modal == "cancelar") {
      setShowModalCancel(true);
    } else {
      setShowModalAppointment(
        consulta.situacao.situacao === "Realizado" ? true : false
      );
    }
  }

  //chamar as consultas relacionadas ao médico
  async function GetConsultasMed() {
    //Chamando o metodo da api para listar as consultas relacionadas ao medico logado
    await api
      .get(`/Medicos/BuscarPorData?data=${dataConsulta}&id=${profile.id}`)
      .then((response) => {
        //setar as informações da api em um state consultas
        setConsultas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //Criar um useEffect para a chamda da função
  useEffect(() => {
    ProfileLoad();
  }, []);

  //Criar um useEffect para a chamda da função
  useEffect(() => {
    if (dataConsulta != "") {
      GetConsultasMed();
    }
  }, [dataConsulta]);

  return (
    <Container>
      <HeaderMed navigation={navigation} />

      <CalendarHome setDataConsulta={setDataConsulta} />

      <FilterAppointment>
        {/* Agendadas */}
        <BtnListAppointment
          textButton={"Agendadas"}
          clickButton={statusLista === "Agendado"}
          onPress={() => setStatusLista("Agendado")}
        />

        {/* Realizadas */}
        <BtnListAppointment
          textButton={"Realizadas"}
          clickButton={statusLista === "Realizado"}
          onPress={() => setStatusLista("Realizado")}
        />

        {/* Canceladas */}
        <BtnListAppointment
          textButton={"Canceladas"}
          clickButton={statusLista === "Cancelado"}
          onPress={() => setStatusLista("Cancelado")}
        />
      </FilterAppointment>

      {/* lista */}
      <ListComponent
        data={consultas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          statusLista == item.situacao.situacao && (
            <AppointmentCard
              situacao={item.situacao.situacao}
              profile={"Medico"}
              onPressCancel={() => MostrarModal("cancelar", item)}
              onPressAppointment={() => MostrarModal("inserirProntuario", item)}
              // onPressCancel={() => setShowModalCancel(true)}
              // onPressAppointment={() => setShowModalAppointment(true)}

              navigation={navigation}
              ProfileNameCard={item.paciente.idNavigation.nome}
              Age={dateFormatDbToView(item.paciente.dataNascimento)}
              TipoConsulta={functionPrioridade(item.prioridade.prioridade)}
            />
          )
        }
      />

      {/* Modal cancelar */}

      <CancellationModal
        visible={showModalCancel}
        setShowModalCancel={setShowModalCancel}
      />

      {/* Modal ver prontuario */}
      <AppointmentModal
        consulta={consultaSelecionada}
        visible={showModalAppointment}
        setShowModalAppointment={setShowModalAppointment}
        navigation={navigation}
        setSituacao={setSituacao}
      />
    </Container>
  );
};
