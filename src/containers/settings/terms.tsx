import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigation } from '../../types/navigation';

const Terms = ({ }) => {
    const navigation = useNavigation<StackNavigation>();
    const [type, setType] = useState<number>(0);
    const route = useRoute();

    // Maneja el botón de retroceso
    const handlePressBack = () => {
        navigation.goBack();
    }

    const getData = () => {
        const type = route.params?.type;
        setType(type);
    }

    useEffect(() => {
        getData();
    }, [navigation]);

    return {
        type,
        handlePressBack
    }

};

export default Terms;
