import React, { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import moment from "moment/min/moment-with-locales";
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../../types/navigation';
import { ApiData } from '../../types/api';
import { asyncSendApis } from '../../components/general/service';

const Home = ({ }) => {
    const navigation = useNavigation<StackNavigation>();
    const [inProgress, setInProgress] = useState(1);
    const [activeItem, setActiveItem] = useState(0);
    const [status, setStatus] = useState(0);
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [placa, setPlaca] = useState('');
    const [tipoVehiculo, setTipoVehiculo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fecha, setFecha] = useState('');
    const [regional, setRegional] = useState('');

    const handlePressServices = async () => {
        await AsyncStorage.setItem('dateCalendar', 'undefined');
    };

    const handlePressHistorial = () => {
        //navigation.navigate('Historial');
    };

    const handlePressNoveltyes = () => {
        //navigation.navigate('NoveltyesList');
    };

    const handlePressSettings = () => {
        //navigation.navigate('About');
    };

    const getUserData = useCallback(async () => {
        try {
            const data: ApiData = {
                token: await AsyncStorage.getItem('Token'),
            };
            const response = await asyncSendApis('/apis/userConductor/', data);
            if (response.status) {
                setPlaca(response[0].placa);
                setTelefono(response[0].telefono);
                setRegional(response[0].regional);
                setLastName(response[0].last_name);
                setFirstName(response[0].first_name);
                setTipoVehiculo(response[0].tipoVehiculo);
            } else {
                console.log('ErrorData ==> ', response);
            }
        } catch (error) {
            console.log('CatchError ==> ', error);
        }
    }, []);

    const getDate = () => {
        const myDate = moment();
        setFecha(myDate.locale('es').format('LL'));
    };

    const handlePressClose = async () => {
        try {
            let data: ApiData = {
                token: await AsyncStorage.getItem('Token'),
                method: 'POST',
            };
            const response = await asyncSendApis('/rest-auth/logout/', data);
            if (response.status) {
                clearLogout();
            } else {
                console.log('ErrorData ==> ', response);
                clearLogout();
            }
        } catch (error) {
            console.log('CatchError ==> ', error);
        }
    };

    const handlePressTycPp = (type: number) => {
        if (type === 1) {
            //navigation.navigate('Terms', { type: 1 });
        } else if (type === 2) {
            //navigation.navigate('Terms', { type: 2 });
        }
    };

    const clearLogout = async () => {
        const cantidadCursoString = await AsyncStorage.getItem('CantidadCurso');
        const cantidadCurso = cantidadCursoString ? parseInt(cantidadCursoString, 10) : 0;
        if (cantidadCurso === 0) {
            await AsyncStorage.clear();
            /*await locationFile.stopForegroundUpdate();
           await locationFile.stopBackgroundUpdate();
           await locationFile.clearloocs(); */
            navigation.navigate('Login');
        } else {
            Alert.alert('Señor usuario', 'Debes finalizar tus servicios en curso para poder cerrar sesión.');
        }
    };

    useEffect(() => {
        getUserData();
        getDate();
    }, [navigation]);

    return {
        inProgress,
        setInProgress,
        activeItem,
        setActiveItem,
        status,
        setStatus,
        first_name,
        setFirstName,
        last_name,
        setLastName,
        placa,
        setPlaca,
        tipoVehiculo,
        setTipoVehiculo,
        telefono,
        setTelefono,
        fecha,
        setFecha,
        regional,
        setRegional,
        handlePressClose,
        handlePressServices,
        handlePressSettings,
        handlePressTycPp,
        handlePressNoveltyes,
        handlePressHistorial,
    };
};

export default Home;
