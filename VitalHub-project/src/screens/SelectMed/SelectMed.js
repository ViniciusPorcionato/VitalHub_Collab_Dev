import { useEffect, useState } from "react";
import { SelectMedCard } from "../../components/AppointmentCard/AppointmentCard"
import { Button } from "../../components/Button/ButtonStyle";
import { Container } from "../../components/Container/ContainerStyle";
import { LinkCode } from "../../components/Links/Links";
import { ListComponent } from "../../components/List/ListStyles";
import { ButtonTitle, Title, TitleSelect } from "../../components/Title/TitleStyle";
import api from "../../Service/Service";



export const SelectMed = ({ navigation }) => {

    //Criar o state para receber a lista de médico (Array)
    const [medicos, setMedicos] = useState([]);

    //Criar um useEffect para a chamda da função
    useEffect(() => {

        //Criar a função para obter a lista de médico da api e setar no state
        async function getMedico() {
            try {
                const promise = await api.get("/Medicos")

                setMedicos(promise.data)

            } catch (error) {
                console.log("Deu ruim na API !");
            }
        }

        getMedico()

    }, [])

    //Passar os dados do state(array) para o flatList
    //Passar o medico como props no medicalcard

    //Array mocado
    // const Medicos = [
    //     { id: 1, nome: "Dr Kaua", image: "https://github.com/kauameloo.png", especialidade: "Cirurgião, Cardiologista" },
    //     { id: 2, nome: "Dr Paladino", image: "https://github.com/MateusPaladino-29.png", especialidade: "Demartologa, Esteticista" },
    //     { id: 3, nome: "Dr Eduardo", image: "https://github.com/Duduuz7.png", especialidade: "Clínico, Pediatra" },

    // ];


    return (

        <Container>

            <TitleSelect>Selecionar Medico</TitleSelect>

            {/* lista */}
            <ListComponent

                data={medicos}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}

                renderItem={
                    ({ item }) =>
                    (
                        <SelectMedCard
                            // medico={item.item}
                            ProfileNameCard={item.idNavigation.nome}
                            textCard={item.especialidade.especialidade1}
                            // imageUrl={{ uri: item.image }}
                        />
                    )
                }

            />

            <Button onPress={() => navigation.replace("SelectDate")}>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

            <LinkCode onPress={() => navigation.replace("Main")}>Cancelar</LinkCode>

        </Container>
    );
};

