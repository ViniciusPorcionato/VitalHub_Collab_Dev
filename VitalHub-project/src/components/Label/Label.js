import { InputLabel, InputLabelMedicalRecord, InputLabelPhoto } from "./LabelStyles";

export const Label = ({textLabel}) => {
    return(
        <InputLabel>{textLabel}</InputLabel>
    )
}

export const LabelMedicalRecord = ({textLabel}) => {
    return(
        <InputLabelMedicalRecord>{textLabel}</InputLabelMedicalRecord>
    )
}

export const LabelPhoto = ({ textLabel }) => {

    return (
        <InputLabelPhoto>
            {textLabel}
        </InputLabelPhoto>
    )
}