import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { StackNavigation } from '../../types/navigation';

const SplashHook = () => {
    const navigation = useNavigation<StackNavigation>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.push('Login');
        }, 1500);
        return () => clearTimeout(timer);
    }, [navigation]);

    return {};
};

export default SplashHook;