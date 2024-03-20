import { SelectMedCard } from "../../components/AppointmentCard/AppointmentCard"
import { Button } from "../../components/Button/ButtonStyle";
import { Container } from "../../components/Container/ContainerStyle";
import { LinkCode } from "../../components/Links/Links";
import { ListComponent } from "../../components/List/ListStyles";
import { ButtonTitle, Title, TitleSelect } from "../../components/Title/TitleStyle";

export const SelectMed = ({navigation}) => {
   
    const Medicos = [
        { id: 1, nome: "Dr Kaua", image: "https://github.com/kauameloo.png", especialidade: "Cirurgião, Cardiologista" },
        { id: 2, nome: "Dr Paladino", image: "https://github.com/MateusPaladino-29.png", especialidade: "Demartologa, Esteticista" },
        { id: 3, nome: "Dr Eduardo", image: "https://github.com/Duduuz7.png", especialidade: "Clínico, Pediatra"},
       
    ];
   
    return (

        <Container>


            <TitleSelect>Selecionar Medico</TitleSelect>

            {/* lista */}
            <ListComponent

                data={Medicos}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}

                renderItem={
                    ({item}) =>
                       (
                            <SelectMedCard
                                ProfileNameCard={item.nome}
                                textCard= {item.especialidade}
                                imageUrl={{ uri: item.image }}
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

