import * as React from 'react';
import { View } from 'react-native';
import { sG } from '../../components/general/styles';

//components
import Terms from '../../containers/settings/terms';

export const TermsTemplate = () => {
    const {
        type,
        handlePressBack
    } = Terms({});
    return (
        <View style={[sG.container]}>

        </View>
    );
}
