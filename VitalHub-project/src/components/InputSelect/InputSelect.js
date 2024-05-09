import RNPickerSelect from "react-native-picker-select";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import moment from "moment";
import { useEffect, useState } from "react";

// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const InputSelect = ({ setHoraSelecionada }) => {

  const dataAtual = moment().format('YYYY-MM-DD')

  const [arrayOptions, setArrayOptions] = useState(null);

  async function loadOptions() {
    //Capturar a quantidade que faltam pra 24h
    const horasRestantes = moment(dataAtual).add(24, 'hours').diff(moment(), "hours")

    //Criar um laço que rode a quantidade de horas
    const options = Array.from({ length: horasRestantes }, (_, index) => {
      let valor = new Date().getHours() + (index + 1)

      //Pra cada hora será uma nova option
      return {
        label: `${valor}:00`, value: `${valor}:00`
      }

    })

    setArrayOptions(options)

  }

  useEffect(() => {
    loadOptions();
  }, [])

  return (
    <View style={{ width: "90%" }}>
      {
        arrayOptions ?

          (
            <RNPickerSelect
              style={style}
              useNativeAndroidPickerStyle={false}
              Icon={() => {
                //   return <FontAwesomeIcon icon={faCaretDown} color='#34898F' size={22}/>
              }}
              placeholder={{
                label: 'Selecione um valor',
                value: null,
                color: '#34898F'
              }}
              onValueChange={(value) => setHoraSelecionada(value)}
              items={arrayOptions}
            />
          ) : (
            <ActivityIndicator />
          )
      }

    </View>
  )
}

const style = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: '#60BFC5',
    borderRadius: 5,
    color: '#34898F',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'MontserratAlternates_600SemiBold'
  },
  inputAndroid: {
    fontSize: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: '#60BFC5',
    borderRadius: 5,
    color: '#34898F',
    alignItems: 'center',
    justifyContent: 'center',

    fontFamily: 'MontserratAlternates_600SemiBold'
  },
  iconContainer: {
    top: '25%',
    marginRight: 10
  },
  placeholder: {
    color: '#34898F',
  }
})

export default InputSelect