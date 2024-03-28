import { Input, InputMedicalRecord, InputPrescriptionView, InputProfile, InputViewPrescriptiion, InputViewPrescription, LargeInputModal } from "../Input/Input"
import { Label, LabelMedicalRecord } from "../Label/Label"
import { InputLabelModal } from "../Title/TitleStyle"
import { FieldContent, FieldContentMedicalRecord } from "./BoxInputStyles"

export const BoxInput = ({
    fieldWidth = 100,
    editable = true,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength
}) => {
    return(
        <FieldContent fieldWidth={fieldWidth}>

        <Label textLabel={textLabel}/>

        <InputProfile editable={editable} placeholder={placeholder } fieldValue={fieldValue} onChangeText={onChangeText} keyType={keyType} maxLength={maxLength}/>

        </FieldContent>
    )
}

export const BoxInputViewPrescription = ({
    fieldWidth = 90,
    fieldHeight = 90,
    editable = true,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength
}) => {
    return(
        <FieldContent fieldWidth={fieldWidth} fieldHeight={fieldHeight}>

        <Label textLabel={textLabel}/>

        <InputViewPrescription editable={editable} placeholder={placeholder} fieldValue={fieldValue} onChangeText={onChangeText} keyType={keyType} maxLength={maxLength}/>

        </FieldContent>
    )
}

export const BoxInputPrescriptionView = ({
    fieldWidth = 90,
    fieldHeight = 90,
    editable = true,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength
}) => {
    return(
        <FieldContent fieldWidth={fieldWidth} fieldHeight={fieldHeight}>

        <Label textLabel={textLabel}/>

        <InputPrescriptionView editable={editable} placeholder={placeholder} fieldValue={fieldValue} onChangeText={onChangeText} keyType={keyType} maxLength={maxLength}/>

        </FieldContent>
    )
}

export const BoxInputMedicalRecord = ({
    fieldWidth = 100,
    editable = true,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength,
    placeholderTextColor='#34898F'
}) => {
    return(
        <FieldContentMedicalRecord fieldWidth={fieldWidth}>

        <LabelMedicalRecord textLabel={textLabel}/>

        <InputMedicalRecord editable={editable} placeholder={placeholder } fieldValue={fieldValue} onChangeText={onChangeText} keyType={keyType} maxLength={maxLength} placeholderTextColor={placeholderTextColor}/>

        </FieldContentMedicalRecord>
    )
}

export const BoxInputMedical = ({
    fieldWidth = 100,
    editable = true,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength,
    placeholderTextColor='#34898F'
}) => {
    return(
        <FieldContentMedicalRecord fieldWidth={fieldWidth}>

        <Label textLabel={textLabel}/>

        <Input editable={editable} placeholder={placeholder } fieldValue={fieldValue} onChangeText={onChangeText} keyType={keyType} maxLength={maxLength} placeholderTextColor={placeholderTextColor}/>

        </FieldContentMedicalRecord>
    )
}

export const LargeInputBoxModal = ({
    fieldWidth = 100,
    fieldHeight = 90,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyboardType = "default",
    maxLength,
    placeholderTextColor
}) => {
    return (

        <FieldContent fieldWidth={fieldWidth} fieldHeight={fieldHeight} textLabel={textLabel}>

            <InputLabelModal>{textLabel}</InputLabelModal>

            <LargeInputModal
                placeholder={placeholder}
                editable={editable}
                keyboardType={keyboardType}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
                placeholderTextColor={placeholderTextColor}
            />

        </FieldContent>

    )
}