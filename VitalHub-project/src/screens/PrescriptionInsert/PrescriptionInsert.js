import { BoxInputMedical, BoxInputMedicalRecord } from '../../components/BoxInput/BoxInput'
import { Button } from '../../components/Button/ButtonStyle'
import { Container, ContainerPrescription, ScrollProfile } from '../../components/Container/ContainerStyle'
import { LinkCode } from '../../components/Links/Links'
import { UserImage } from '../../components/Logo/LogoStyle'
import { ButtonTitle, SubtitlePrescription, TitleProfile } from '../../components/Title/TitleStyle'

export const PrescriptionInsert = () => {

    return (
        <ScrollProfile
            showsVerticalScrollIndicator={false}>

            <Container>

                <UserImage
                    source={require('../../assets/MedicalImage.png')}
                />

                <TitleProfile>Dr. Claudio</TitleProfile>


                <ContainerPrescription>

                    <SubtitlePrescription>Cliníco geral</SubtitlePrescription>

                    <SubtitlePrescription>CRM-15286</SubtitlePrescription>
        
                </ContainerPrescription>

                <BoxInputMedicalRecord
                    textLabel='Descrição da Consulta'
                    placeholder='Descrição'
                    keyType='text'
                    placeholderTextColor={'#34898F'}
                />

                <BoxInputMedical
                    textLabel='Diagnóstico do paciente'
                    placeholder='Diagnóstico'
                    keyType='text'
                    placeholderTextColor={'#34898F'}
                />            


                <BoxInputMedicalRecord
                    textLabel='Prescrição Médica'
                    placeholder='Prescrição médica'
                    keyType='text'
                    placeholderTextColor={'#34898F'}
                />

                <BoxInputMedicalRecord
                    textLabel='Exames médicos'
                    placeholder='[!] Nenhuma foto informada'
                    keyType='text'
                    placeholderTextColor={'#34898F'}
                />


                <LinkCode>Voltar</LinkCode>


            </Container>

        </ScrollProfile>
    )
}