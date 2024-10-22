import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StackNavigation } from '../../types/navigation';
import { ApiData } from '../../types/api';
import { asyncSendApis } from '../../components/general/service';


const PasswordOne = ({ }: {
}) => {
    const navigation = useNavigation<StackNavigation>();

    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [textError, setTextError] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handlePressBack = () => {
        navigation.goBack();
    }

    const handleInputChange = (text: any, name: any) => {
        if (name === 'email') {
            setEmail(text)
        }
    }

    const handlePressPasswordTwo = async () => {
        setIsLoading(true);

        //evaluo si tiene los campos en blanco antes de consumir el API
        if (email === '') {
            setTextError('* Correo electrónico obligatorio');
            setIsLoading(false);
        } else {
            try {
                let data: ApiData = {
                    method: 'POST',
                    body: JSON.stringify({
                        username: email,
                    })
                };
                let response = await asyncSendApis('/conductores/sendCodeSMS', data);
                if (response.status) {
                    console.log('success mensaje:' + response.Mensaje);
                    setTextError('* ' + response.Mensaje);
                    setIsLoading(false);
                    navigation.navigate('PasswordTwo', { usuario: response.usuario });
                } else {
                    console.log(response)
                    console.log('fail mensaje:' + response.Mensaje)
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

    return {
        email,
        isLoading,
        textError,
        mensaje,
        handlePressBack,
        handlePressPasswordTwo,
        handleInputChange
    };
};

export default PasswordOne;