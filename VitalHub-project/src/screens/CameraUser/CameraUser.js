import { Image, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { CameraType, CameraView } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'
import { useEffect, useState, useRef } from 'react';
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons'
import { Button, ButtonEdit } from '../../components/Button/ButtonStyle';
import { ButtonTitle } from '../../components/Title/TitleStyle';
import { MaterialIcons } from '@expo/vector-icons';
import { ContainerCamera } from '../../components/Container/ContainerStyle';
import { LastPhoto } from './Styles';
import { userDecodeToken } from '../../Utils/Auth';

import * as ImagePicker from 'expo-image-picker'

export const CameraUser = ({ navigation, route }) => {

    const cameraRef = useRef(null)
    const [openModal, setOpenModal] = useState(false)
    const [photo, setPhoto] = useState(null)
    // const [tipoCamera, setTipoCamera] = useState(CameraType.front)
    const [tipoCamera, setTipoCamera] = useState('front')
    const [flashMode, setFlashMode] = useState('off')

    const [role, setRole] = useState('');

    const [lastPhoto, setLastPhoto] = useState();

    async function GetLatesPhoto() {
        const { assets } = await MediaLibrary.getAssetsAsync({ sortBy: [[MediaLibrary.SortBy.creationTime, false]], first: 1 });

        if (assets.length > 0) {
            setLastPhoto(assets[0].uri)
        }
    }

    async function SelectImageGallery() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1
        });

        if (!result.canceled) {
            setPhoto(result.assets[0].uri)
            setOpenModal(true)
        }
    }


    useEffect(() => {
        profileLoad()
        GetLatesPhoto()
    }, [])


    async function profileLoad() {

        const token = await userDecodeToken();

        setRole(token.role)
    }

    async function CapturePhoto() {
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync()

            setPhoto(photo.uri)
            setOpenModal(true);
        }
    }

    function ClearPhoto() {
        setPhoto(null)
        setOpenModal(false)
    }

    return (
        <View style={styles.container}>
            <CameraView
                ref={cameraRef}
                facing={tipoCamera}
                style={styles.camera}
                flashMode={flashMode}
                ratio='16:9'>

                <View style={styles.viewFlip}>
                    <TouchableOpacity
                        style={styles.btnFlip}
                        onPress={() => setTipoCamera(tipoCamera === "front" ? "back" : "front")}>
                        <Ionicons name='camera-reverse' size={40} color="#FFF" />
                    </TouchableOpacity>
                </View>

            </CameraView>

            <ContainerCamera>

                <TouchableOpacity onPress={() => SelectImageGallery()}>

                    {
                        lastPhoto != null
                            ? (
                                <LastPhoto
                                    source={{ uri: lastPhoto }}
                                />

                            ) : (null

                            )
                    }

                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.btnFlash}
                    onPress={() => setFlashMode(flashMode === 'off'
                        ? 'on'
                        : 'off')}
                >

                    <FontAwesome name="flash" size={30} color={"black"} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnCapture} onPress={() => CapturePhoto()}>
                    <FontAwesome name='camera' size={23} color="#FFF" />
                </TouchableOpacity>


                {
                    role == "Paciente"

                        ? (
                            <TouchableOpacity style={styles.btnCancel} onPress={() => navigation.navigate("Main")}>
                                <MaterialIcons name="cancel" size={30} color="black" />
                            </TouchableOpacity>

                        ) :
                        (
                            <TouchableOpacity style={styles.btnCancel} onPress={() => navigation.navigate("MainMed")}>
                                <MaterialIcons name="cancel" size={30} color="black" />
                            </TouchableOpacity>
                        )
                }

            </ContainerCamera>




            <Modal animationType='slide' transparent={false} visible={openModal}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>

                    <Image
                        style={{ width: "100%", height: 500, borderRadius: 15 }}
                        source={{ uri: photo }}
                    />

                    <View style={{ margin: 10, flexDirection: 'row', gap: 20 }}>
                        {/* Botoes de controle */}

                        <TouchableOpacity style={styles.btnClear} onPress={() => ClearPhoto()}>
                            <AntDesign name='closecircle' size={50} color="#ff0000" />
                        </TouchableOpacity>

                        {
                            role == "Paciente" ? (
                                <TouchableOpacity style={styles.btnUpload} onPress={() => navigation.replace("Main", { uriPhoto: photo, screen: "Perfil" })}>
                                    <FontAwesome name='upload' size={50} color="#FFF" />
                                </TouchableOpacity>

                            ) : (
                                <TouchableOpacity style={styles.btnUpload} onPress={() => navigation.replace("MainMed", { uriPhoto: photo, screen: "Perfil" })}>
                                    <FontAwesome name='upload' size={50} color="#FFF" />
                                </TouchableOpacity>
                            )
                        }


                    </View>
                </View>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    camera: {
        flex: 1,
        height: "80%",
        width: "100%"
    },

    viewFlip: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },

    btnFlip: {
        padding: 20
    },

    txtFlip: {
        fontSize: 20,
        color: '#FFF',
        marginBottom: 20
    },

    btnCapture: {
        margin: 20,
        padding: 20,
        borderRadius: 50,
        backgroundColor: "#121212",
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnCancel: {
        margin: 20,
        borderRadius: 50,
        backgroundColor: "transparent",
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnClear: {
        margin: 20,
        borderRadius: 10,
        backgroundColor: "#FFF",
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnUpload: {
        margin: 20,
        borderRadius: 10,
        backgroundColor: "#000",
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnFlash: {
        marginRight: 10,
        marginLeft: 30,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
