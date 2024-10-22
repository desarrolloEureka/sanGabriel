import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StackNavigation } from '../../types/navigation';
import { ApiData } from '../../types/api';
import { asyncSendApis } from '../../components/general/service';

const PasswordThree = ({ }: {
}) => {
    const navigation = useNavigation<StackNavigation>();
    const route = useRoute();
    const [checked, setChecked] = useState(false);
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [iconName, setIconName] = useState('eye-off');
    const [isLoading, setIsLoading] = useState(false);
    const [tokenreset, setTokenReset] = useState('');
    const [uid, setUid] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [textError, setTextError] = useState('');

    const handlePressBack = () => {
        navigation.goBack();
    }

    const handlePressPasswordFour = () => {
        navigation.navigate('PasswordFour')
    }

    const handleInputChange = (text: any, name: any) => {
        if (name === 'passwordOne') {
            setPasswordOne(text)
        } else if (name === 'passwordTwo') {
            setPasswordTwo(text)
        }
    }

    const onIconPress = () => {
        setSecureTextEntry(!secureTextEntry);
        setIconName(secureTextEntry ? 'eye' : 'eye-off');
        setChecked(!checked);
    };

    const handleData = async () => {
        const tokenreset = route.params?.tokenreset;
        const uid = route.params?.uid;
        setTokenReset(tokenreset);
        setUid(uid);
    };

    const handlePressPasswordTwo = async () => {
        setIsLoading(true);

        try {
            let data: ApiData = {
                method: 'POST',
                body: JSON.stringify({
                    uid: uid,
                    token: tokenreset,
                    new_password1: passwordOne,
                    new_password2: passwordTwo,
                }),
            };
            const response = await asyncSendApis('/rest-auth/password/reset/confirm/', data);
            console.log('response ', response)
            if (response.status) {
                console.log('success mensaje:' + response.detail);
                setMensaje(response.detail);
                setIsLoading(false);
                navigation.navigate('PasswordFour');
            } else {
                console.log('fail mensaje:' + response.new_password2);
                setTextError('* ' + response.new_password2);
                setIsLoading(false);
            }
        } catch (error) {
            console.log('Error ==> ', error);
        }
    };

    useEffect(() => {
        handleData();
    }, []);

    return {
        checked,
        setChecked,
        passwordOne,
        setPasswordOne,
        passwordTwo,
        setPasswordTwo,
        secureTextEntry,
        setSecureTextEntry,
        iconName,
        setIconName,
        isLoading,
        setIsLoading,
        tokenreset,
        setTokenReset,
        uid,
        setUid,
        mensaje,
        setMensaje,
        textError,
        setTextError,
        handleInputChange,
        handlePressBack,
        handlePressPasswordFour,
        onIconPress,
        handlePressPasswordTwo
    };
};

export default PasswordThree;