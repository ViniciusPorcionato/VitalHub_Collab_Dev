import { Button, View } from "react-native"

export const Navegacao = ({navigation}) => {
    return(
        <View>
            <Button
            title="Login"
            onPress={() => navigation.navigate("Login")}
            />

            <Button
            title="ForgotPassword"
            onPress={() => navigation.navigate("ForgotPassword")}
            />

            <Button
            title="CheckEmail"
            onPress={() => navigation.navigate("CheckEmail")}
            />

            <Button
            title="RedefinePassword"
            onPress={() => navigation.navigate("RedefinePassword")}
            />

            <Button
            title="CreateAccount"
            onPress={() => navigation.navigate("CreateAccount")}
            />

            <Button
            title="UserProfile"
            onPress={() => navigation.navigate("UserProfile")}
            />

            <Button
            title="MedicalRecord"
            onPress={() => navigation.navigate("MedicalRecord")}
            />

            <Button
            title="MedicalConsultations"
            onPress={() => navigation.navigate("MedicalConsultations")}
            />
            
            <Button
            title="PatientConsultations"
            onPress={() => navigation.navigate("PatientConsultations")}
            />
            <Button
            title="SelectMed"
            onPress={() => navigation.navigate("SelectMed")}
            />

            <Button
            title="SelectClinic"
            onPress={() => navigation.navigate("SelectClinic")}
            />

            <Button
            title="SelectDate"
            onPress={() => navigation.navigate("SelectDate")}
            />

            <Button
            title="ConsultationLocation"
            onPress={() => navigation.navigate("ConsultationLocation")}
            />

            <Button
            title="ViewPrescription"
            onPress={() => navigation.navigate("ViewPrescription")}
            />

            
        </View>
    )
}