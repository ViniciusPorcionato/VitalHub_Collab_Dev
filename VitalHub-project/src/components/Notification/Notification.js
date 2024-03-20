
//importar os recursos do expo notification
import * as Notifications from 'expo-notifications';

//solicita permissao de notificacao ao iniciar o app
Notifications.requestPermissionsAsync();

//define como as notificacoes devem ser tratadas quando recebidas
Notifications.setNotificationHandler({
  handleNotification: async () => ({

    //mostrar o alerta quando a notificacao for recebida
    shouldShowAlert: true,
    //reproduz som ao receber notificacao
    shouldPlaySound: true,
    //mostrar quantidade de notificacao(numero de notificacoes no icone do app)
    shouldSetBadge: false

  })
})


    //funcao para lidar com a chamada de notificacao
  export const HandleCallNotifications = async({title, body}) => {

    //obtem o status da permissão
    const {status} = await Notifications.getPermissionsAsync();

    if (status !== "granted") {
      alert("Você não deixou as notificações ativas");
      return;
    }

    //agenda uma notificacao 
    await Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: body,
       
      },
      trigger: null
    })
  }