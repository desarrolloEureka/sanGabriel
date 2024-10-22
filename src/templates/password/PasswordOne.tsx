import React from 'react';
import { TouchableOpacity, Text, View, ImageBackground, TextInput, ScrollView, ActivityIndicator, SafeAreaView } from 'react-native';
import { sG } from '../../components/general/styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PasswordOne from '../../containers/password/PasswordOne';

const PasswordOneTemplate = () => {
    const {
        email,
        isLoading,
        textError,
        mensaje,
        handlePressBack,
        handlePressPasswordTwo,
        handleInputChange
    } = PasswordOne({});

    return (
        <SafeAreaView style={[sG.container]}>
            <ScrollView>
                <View style={[sG.w_100, sG.row_10, sG.jc_center, sG.ai_center]}></View>

                <View style={[sG.w_100, sG.row_20, sG.jc_center, sG.chrow, sG.ai_center, stylesLocal.headerBottom]}>
                    <View style={[sG.h_100, sG.w_20, sG.jc_center, sG.ai_start, sG.p_l_xs]}>
                        <TouchableOpacity style={[sG.h_60, sG.w_60, sG.jc_center, sG.ai_center]} onPress={handlePressBack}>
                            <ImageBackground resizeMode='contain' style={[sG.h_100, sG.w_100, sG.ai_center, sG.jc_center]} source={require("../../../assets/btn_back.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={[sG.h_100, sG.w_60, sG.jc_center, sG.ai_center]}>
                        <Text style={[sG.h6, sG.bold, sG.text_black]}>Recuperar contraseña</Text>
                    </View>
                    <View style={[sG.h_100, sG.w_20, sG.jc_center, sG.ai_center]}></View>
                </View>

                <View style={[sG.w_100, sG.row_25, sG.ai_center, sG.jc_center]}>
                    <View style={[sG.w_80, sG.h_90, sG.jc_center, sG.ai_center]}>
                        <Text style={[sG.h8, sG.text_center, sG.text_black]}>Ingresa tu número de identificación y en breve recibirás un código de verificación en tu correo eléctronico.</Text>
                    </View>
                </View>

                <View style={[sG.w_100, sG.row_20, sG.ai_center, sG.jc_center]}>
                    <View style={[sG.w_90, sG.h_90, sG.ai_center, sG.jc_center, stylesLocal.componentBottom]}>
                        <View style={[sG.w_95, sG.h_40, sG.jc_end]}>
                            <Text style={[sG.h8, sG.text_secondary]}>Número de identificación</Text>
                        </View>
                        <View style={[sG.w_100, sG.h_70, sG.jc_center, sG.chrow, sG.ai_center]}>
                            <View style={[sG.w_10, sG.h_100, sG.jc_center, sG.ai_center]}>
                                <MaterialCommunityIcons name='email-check-outline' style={[sG.size_icon, email.length > 0 ? sG.text_secondary : sG.text_gray_light]} />
                            </View>
                            <TextInput
                                keyboardType='numeric'
                                value={email}
                                autoCapitalize='none'
                                onChangeText={(text) => handleInputChange(text, "email")} style={[sG.h_90, sG.w_90, sG.h7, sG.text_center, sG.text_black]} placeholder='Número de identificación' placeholderTextColor='#BDBDBD'>
                            </TextInput>
                        </View>
                    </View>
                </View>

                {textError != '' && mensaje === '' ?
                    <View style={[sG.row_10, sG.w_100, sG.ai_center, sG.jc_center]}>
                        <View style={[sG.h_85, sG.w_90]}>
                            <Text style={[sG.h8, sG.text_red]}>{textError}</Text>
                        </View>
                    </View>
                    : null}
            </ScrollView>

            <View style={[sG.h_15, sG.w_100, sG.jc_center, sG.ai_center]}>
                {isLoading ?
                    <View style={[sG.h_50, sG.w_90, sG.jc_center, sG.ai_center, sG.bg_primary, sG.brounded]}>
                        <ActivityIndicator size="large" color="#ffffff" />
                    </View>
                    :
                    <TouchableOpacity style={[sG.h_50, sG.w_90, sG.jc_center, sG.ai_center, sG.bg_primary, sG.brounded]} onPress={handlePressPasswordTwo}>
                        <Text style={[sG.h7, sG.bold, sG.text_white]}>Enviar</Text>
                    </TouchableOpacity>
                }
            </View>
        </SafeAreaView>

    );
};

const stylesLocal = EStyleSheet.create({
    headerBottom: {
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
    },
    componentBottom: {
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 2,
    },
    m_b_negative: { marginBottom: '-30rem' },
})

export default PasswordOneTemplate;