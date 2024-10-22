import React from 'react';
import { TouchableOpacity, Text, View, ImageBackground, TextInput, ScrollView, ActivityIndicator, SafeAreaView } from 'react-native';
import { sG } from '../../components/general/styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PasswordTwo from '../../containers/password/PasswordTwo';

const PasswordTwoTemplate = () => {
    const {
        code,
        textError,
        mensaje,
        user,
        isLoading,
        handlePressBack,
        handleInputChange,
        handlePressPasswordTwo
    } = PasswordTwo({});

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
                        <Text style={[sG.h8, sG.text_center, sG.text_black]}>Ingresa el código de verificación enviado a tu correo electrónico.</Text>
                    </View>
                </View>

                <View style={[sG.w_100, sG.row_20, sG.ai_center, sG.jc_center]}>
                    <View style={[sG.w_90, sG.h_90, sG.ai_center, sG.jc_center, stylesLocal.componentBottom]}>
                        <View style={[sG.w_95, sG.h_40, sG.jc_end]}>
                            <Text style={[sG.h8, sG.text_secondary]}>Código de verificación</Text>
                        </View>
                        <View style={[sG.w_100, sG.h_70, sG.jc_center, sG.chrow, sG.ai_center]}>
                            <View style={[sG.w_10, sG.h_100, sG.jc_center, sG.ai_center]}>
                                <MaterialIcons name='verified-user' style={[sG.size_icon, code.length != 6 ? sG.text_gray_light : sG.text_secondary]} />
                            </View>
                            <TextInput
                                maxLength={6}
                                keyboardType='numeric'
                                value={code}
                                onChangeText={(text) => handleInputChange(text, "code")} style={[sG.h_90, sG.w_90, sG.h7, sG.text_center, sG.text_black]}
                                placeholder='X X X X X X' placeholderTextColor='#BDBDBD'>
                            </TextInput>
                        </View>
                    </View>
                </View>

                {code.length != 6 ?
                    <View style={[sG.row_10, sG.w_100, sG.ai_center, sG.jc_center]}>
                        <View style={[sG.h_70, sG.w_90]}>
                            <Text style={[sG.h8, sG.text_red]}>* el código debe tener 6 digitos</Text>
                        </View>
                    </View>
                    : null}

                {textError.length != 0 ?
                    <View style={[sG.row_10, sG.w_100, sG.ai_center, sG.jc_center]}>
                        <View style={[sG.h_70, sG.w_90]}>
                            <Text style={[sG.h8, sG.text_red]}>{textError}</Text>
                        </View>
                    </View>
                    : null}
            </ScrollView>

            {code.length != 6 ? null :
                <View style={[sG.h_15, sG.w_100, sG.jc_center, sG.ai_center]}>
                    {isLoading ?
                        <View style={[sG.h_50, sG.w_90, sG.jc_center, sG.ai_center, sG.bg_primary, sG.brounded]}>
                            <ActivityIndicator size="large" color="#ffffff" />
                        </View>
                        :
                        <TouchableOpacity style={[sG.h_50, sG.w_90, sG.jc_center, sG.ai_center, sG.bg_primary, sG.brounded]} onPress={handlePressPasswordTwo}>
                            <Text style={[sG.h7, sG.bold, sG.text_white]}>Verificar</Text>
                        </TouchableOpacity>
                    }
                </View>
            }
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

export default PasswordTwoTemplate;