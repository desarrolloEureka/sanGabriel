import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StackNavigation } from '../../types/navigation';
import { ApiData } from '../../types/api';
import { asyncSendApis } from '../../components/general/service';

const PasswordTwo = ({ }: {
}) => {
    const navigation = useNavigation<StackNavigation>();
    const route = useRoute();
    const [code, setCode] = useState('');
    const [textError, setTextError] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [user, setUser] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handlePressBack = () => {
        navigation.goBack();
    }

    const handleInputChange = (text: any, name: any) => {
        if (name === 'code') {
            setCode(text)
        }
    }

    const handleData = () => {
        const user = route.params?.usuario;
        setUser(user || '');
    };

    const handlePressPasswordTwo = async () => {
        setIsLoading(true);

        if (code === '') {
            setTextError('* Correo electrónico obligatorio');
            setIsLoading(false);
        } else {
            try {
                let data: ApiData = {
                    method: 'POST',
                    body: JSON.stringify({
                        user: user,
                        code: code,
                    }),
                };
                const response = await asyncSendApis('/conductores/validateCodeSMS', data);
                if (response.status) {
                    console.log('success mensaje:' + response.Mensaje);
                    setMensaje('* ' + response.Mensaje);
                    setIsLoading(false);
                    navigation.navigate('PasswordThree', { tokenreset: response.token, uid: response.uid });
                } else {
                    console.log('fail mensaje:' + response.Mensaje);
                    setTextError('* ' + response.Mensaje);
                    setIsLoading(false);
                }
            } catch (error: any) {
                setIsLoading(false);
                if (error.response && error.response.status === 404) {
                    // Manejo específico del 404
                    setTextError('* ' + error.response.data.Mensaje);
                } else {
                    // Manejo de otros errores
                    setTextError('* Ocurrió un error inesperado.');
                }
                console.log("Error ==> ", error);
            }
        }
    }

    useEffect(() => {
        handleData();
    }, [navigation]);


    return {
        code,
        textError,
        mensaje,
        user,
        isLoading,
        handlePressBack,
        handleInputChange,
        handlePressPasswordTwo
    };
};

export default PasswordTwo;