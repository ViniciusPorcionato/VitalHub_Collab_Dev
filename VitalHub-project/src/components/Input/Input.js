import { InputBox, InputBoxMedicalRecord, InputCheckEmail, InputPrescriptionViewBox, InputProfileBox, InputTextLargeModal, InputViewPrescriptionBox } from "./InputStyles"

export const Input = ({
    placeholder,
    fieldValue,
    onChangeText,
    keyType,
    placeholderTextColor,
    secureTextEntry = false
}) => {
    return(
        <InputBox
        placeholder={placeholder}
        keyboardType={keyType}
        value={fieldValue}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        />
    )
}


export const InputEmail = ({
    placeholder,
    fieldValue,
    onChangeText,
    keyType,
    placeholderTextColor,
    maxLength
}) => {
    return(
        <InputCheckEmail
        placeholder={placeholder}
        keyboardType={keyType}
        value={fieldValue}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        maxLength={maxLength}
        />
    )
}

export const InputProfile = ({
    placeholder,
    fieldValue,
    onChangeText,
    keyType,
    placeholderTextColor,
    maxLength,
    editable
}) => {
    return(
        <InputProfileBox
        placeholder={placeholder}
        keyboardType={keyType}
        value={fieldValue}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        maxLength={maxLength}
        editable={editable}
        />
    )
}

export const InputViewPrescription = ({
    placeholder,
    fieldValue,
    onChangeText,
    keyType,
    placeholderTextColor,
    maxLength,
}) => {
    return(
        <InputViewPrescriptionBox
        placeholder={placeholder}
        keyboardType={keyType}
        value={fieldValue}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        maxLength={maxLength}
        />
    )
}

export const InputPrescriptionView = ({
    placeholder,
    fieldValue,
    onChangeText,
    keyType,
    placeholderTextColor,
    maxLength,
}) => {
    return(
        <InputPrescriptionViewBox
        placeholder={placeholder}
        keyboardType={keyType}
        value={fieldValue}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        maxLength={maxLength}
        />
    )
}


export const InputMedicalRecord = ({
    placeholder,
    fieldValue,
    onChangeText,
    keyType,
    placeholderTextColor,
    maxLength
}) => {

    return(
        
        <InputBoxMedicalRecord
        placeholder={placeholder}
        keyboardType={keyType}
        value={fieldValue}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        maxLength={maxLength}
        />
    )
}


export function LargeInputModal({
    placeholder,
    fieldValue,
    onChangeText ,
    keyboardType,
    maxLength,
    placeholderTextColor,
    editable = true,
    secureTextEntry = false
}) {
    return(
        <InputTextLargeModal
        editable={editable}
        placeholder={placeholder}
        keyboardType= {keyboardType}
        placeholderTextColor={placeholderTextColor}
        maxLength={maxLength}
        value= {fieldValue}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        />
    )
}