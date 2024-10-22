import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../../types/navigation';

const PasswordFour = ({ }: {
}) => {
    const navigation = useNavigation<StackNavigation>();

    const handlePressLogin = () => {
        navigation.navigate('Login')
    }
    return {
        handlePressLogin,
    };
};

export default PasswordFour;