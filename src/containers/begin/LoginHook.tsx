import { Platform, Linking, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StackNavigation } from '../../types/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApiData } from '../../types/api';
import axios from 'axios';
import { asyncSendApis } from '../../components/general/service';
import { ConstantClass } from '../../components/general/config';

const LoginHook = ({ }: {
}) => {
    const navigation = useNavigation<StackNavigation>();
    const [verifyVersion, setVerifyVersion] = useState(false);
    const [verifyLocation, setVerifyLocation] = useState(true);
    const [permissionAcepted, setPermissionAcepted] = useState(false);
    const [accept_tyc, setAccept_tyc] = useState(false);
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [textErrorUsername, setTextErrorUsername] = useState('');
    const [textErrorPassword, setTextErrorPassword] = useState('');
    const [textError, setTextError] = useState('');
    const [show, setShow] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [loadingLogin, setLoadingLogin] = useState(false);

    const handlePressPassword = () => {
        navigation.navigate('PasswordOne');
    }

    useEffect(() => {
        getversion();
    }, []);

    const handleInputChange = (text: any, name: any) => {
        if (name === 'username') {
            setName(text);
        } else if (name === 'password') {
            setPassword(text);
        }
    }

    const requestPermissions = async (type: any) => {
        if (type === 1) {
            setVerifyLocation(true);
            await setPermissionAcepted(false);
        } else {
            await setVerifyLocation(false);
            await setPermissionAcepted(true);
            //await Linking.openSettings();
        }
    }

    const showModalError = () => {
        setShow(false);
    }

    //guardar el token de manera global
    const tokenValidate = async (token: any) => {
        await AsyncStorage.clear();
        await AsyncStorage.setItem('Token', "" + token);
    }

    //-------------------- inicio sección de apis --------------------
    const handlePressLogin = async () => {
        if (accept_tyc) {
            setTimeout(async () => {
                if (!permissionAcepted) {
                    setVerifyLocation(true);
                } else {
                    setisLoading(true)
                    //evaluo si tiene los campos en blanco antes de consumir el API
                    if (username === '' && password === '') {
                        setTextErrorUsername('* Correo electrónico obligatorio')
                        setTextErrorPassword('* Contraseña obligatoria')
                        setisLoading(false)
                    } else if (username === '' && password != '') {
                        setTextErrorUsername('* Correo electrónico obligatorio')
                        setTextErrorPassword('')
                        setisLoading(false)
                    } else if (password === '' && username != '') {
                        setTextErrorUsername('')
                        setTextErrorPassword('* Contraseña obligatoria')
                        setisLoading(false)
                    } else {
                        try {
                            let data: ApiData = {
                                //credentials: 'omit',
                                method: 'POST',
                                body: JSON.stringify({
                                    'username': username,
                                    'password': password,
                                })
                            }
                            let response = await asyncSendApis('/custom/login/', data);
                            if (response.status) {
                                tokenValidate(response.key);
                                api_put_id_device(response.key);
                            } else {
                                setTextErrorUsername('* Verifica tu correo electrónico')
                                setTextErrorPassword('* Verifica tu contraseña')
                                setisLoading(false)
                            }
                        }
                        catch (error: any) {
                            console.log("Error ====> ", error);
                            setTextError('Error en el proceso de acceso a tu cuenta.')
                            setShow(true)
                            setisLoading(false)

                            if (axios.isAxiosError(error) && error.response) {
                                console.error('Error during API call:', error.response.data);
                                return { status: false, error: error.response.data || 'Request failed' };
                            } else {
                                console.error('Error during API call:', error.message);
                                return { status: false, error: error.message || 'Request failed' };
                            }

                        }
                    }
                }
            }, 1000);
        } else {
            Alert.alert('Debes aceptar los términos y condiciones y la política de privacidad')
        }
    }

    const api_put_id_device = async (tok: any) => {
        try {
            var operating_system = 0;
            if (Platform.OS === 'ios') {
                operating_system = 2;
            } else {
                operating_system = 1;
            }
            let data: ApiData = {
                token: tok,
                method: 'POST',
                body: JSON.stringify({
                    push_token: "ExponentPushToken[aM-8N6Jo5jrnJmWGAXRuba]",
                    operating_system: operating_system,
                })
            }
            let response = await asyncSendApis('/usuarios/actualizarDispositivos', data);
            if (response.status) {
                setisLoading(false)
                navigation.navigate('Home');
            }
        }
        catch (error) {
            console.log("Error ==> ", error);
            setisLoading(false)
        }
    }

    const AppInGoogle = (type: number) => {
        if (type === 1) { // 1: ir a la play store para actualizar la app
            Linking.openURL(`https://play.google.com/store/apps/details?id=com.sangabriel.sangabriel`);
        } else if (type === 2) { // 2: Términos y condiciones
            navigation.navigate('Terms', { type: 1 });
        } else if (type === 3) { // 3: Política de privacidad
            navigation.navigate('Terms', { type: 2 });
        }
    }

    const Accept_tyc = () => {
        setAccept_tyc(!accept_tyc);
        if (!accept_tyc) {
            setVerifyLocation(true)
        }
    }

    const getversion = async () => {
        try {
            let data: ApiData = {
                method: 'GET',
            }
            let response = await asyncSendApis('/api-general/api_version', data);
            if (response.status) {
                if (ConstantClass.versionCode === response.version) {
                    getUserLogged();
                } else {
                    setVerifyVersion(true);
                }
            } else {
                console.log("CATCH VERSION ==> ", response);
            }
        } catch (error) {
            console.log("Error VERSION ==> ", error);
        }
    }

    const getUserLogged = async () => {
        setisLoading(true)
        let token = await AsyncStorage.getItem('Token')
        if (token != null) {
            setisLoading(false)
            navigation.navigate('Home');
        } else {
            setisLoading(false)
        }
    }

    const handlePressDenyLocation = () => {
        setVerifyLocation(false);
        setAccept_tyc(false);
    }

    return {
        verifyVersion,
        setVerifyVersion,
        verifyLocation,
        setVerifyLocation,
        permissionAcepted,
        setPermissionAcepted,
        accept_tyc,
        setAccept_tyc,
        username,
        setName,
        password,
        setPassword,
        textErrorUsername,
        setTextErrorUsername,
        textErrorPassword,
        setTextErrorPassword,
        textError,
        setTextError,
        show,
        setShow,
        isLoading,
        setisLoading,
        loadingLogin,
        setLoadingLogin,
        handlePressPassword,
        requestPermissions,
        AppInGoogle,
        Accept_tyc,
        handleInputChange,
        handlePressLogin,
        showModalError
    };
};

export default LoginHook;