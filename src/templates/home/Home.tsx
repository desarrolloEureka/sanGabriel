import React from 'react';
import { TouchableOpacity, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import { sG } from '../../components/general/styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from '../../containers/home/Home';

const HomeTemplate = () => {
    const {
        first_name,
        last_name,
        placa,
        tipoVehiculo,
        telefono,
        fecha,
        regional,
        handlePressClose,
        handlePressServices,
        handlePressSettings,
        handlePressTycPp,
        handlePressNoveltyes,
        handlePressHistorial,
    } = Home({});

    return (
        <SafeAreaView style={[sG.container]}>
            <ImageBackground
                resizeMode='cover'
                style={[sG.h_100, sG.w_100]}
                source={require("../../../assets/app_bg_01.png")}>
                <View style={[sG.h_40, sG.w_100, sG.ai_center, sG.jc_center, sG.bg_zindex_transparent, sG.brounded_bottom, sG.chrow]}>
                    <View style={[sG.h_100, sG.w_65, sG.jc_center]}>
                        <Text style={[sG.h7, sG.text_white]}>Bienvenido</Text>
                        <Text style={[sG.h4, sG.text_white, sG.bold]}>{first_name}</Text>
                        <Text style={[sG.h4, sG.text_white, sG.bold]}>{last_name}</Text>
                        <Text style={[sG.h7, sG.text_white]}>{telefono}</Text>
                        <Text style={[sG.h7, sG.text_white]}>{regional}</Text>
                        <Text style={[sG.h7, sG.text_white]}>{placa}</Text>
                        <Text style={[sG.h7, sG.text_white]}>{tipoVehiculo}</Text>
                        <Text style={[sG.h7, sG.text_white]}>{fecha}</Text>
                    </View>
                    <View style={[sG.h_100, sG.w_25, sG.ai_end, sG.jc_center, sG.m_b_lg]}>
                        <ImageBackground
                            resizeMode='contain'
                            style={[sG.h_40, sG.w_100]}
                            source={require("../../../assets/icons/logoColor.png")} />
                    </View>
                </View>

                <View style={[sG.h_25, sG.w_100, sG.ai_center, sG.jc_center, sG.chrow]}>
                    <TouchableOpacity style={[sG.h_100, sG.w_50, sG.ai_center, sG.jc_center]} onPress={handlePressServices}>
                        <View style={[sG.h_80, sG.w_90, sG.ai_center, sG.jc_center, sG.bg_zindex_transparent, sG.brounded]}>
                            <View style={[sG.h_60, sG.jc_center, stylesLocal.widthTitle]}>
                                <Text style={[sG.text_white, sG.bold, stylesLocal.titleFont]}>Mis servicios</Text>
                                <Text style={[sG.h8, sG.text_white]}>Ver el estado de mis servicios asignados.</Text>
                            </View>
                            <View style={[sG.h_30, sG.w_90, sG.ai_end, sG.jc_center]}>
                                <MaterialCommunityIcons name="car-key" style={[sG.size_icon_md, sG.text_white]} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[sG.h_100, sG.w_50, sG.ai_center, sG.jc_center]} onPress={handlePressNoveltyes}>
                        <View style={[sG.h_80, sG.w_90, sG.ai_center, sG.jc_center, sG.bg_zindex_transparent, sG.brounded]}>
                            <View style={[sG.h_60, sG.jc_center, stylesLocal.widthTitle]}>
                                <Text style={[sG.text_white, sG.bold, stylesLocal.titleFont]}>Mis Novedades</Text>
                                <Text style={[sG.h8, sG.text_white]}>Ver el seguimiento de las novedades reportadas.</Text>
                            </View>
                            <View style={[sG.h_30, sG.w_90, sG.ai_end, sG.jc_center]}>
                                <AntDesign name="notification" style={[sG.size_icon_md, sG.text_white]} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={[sG.h_35, sG.w_100, sG.ai_center, sG.chrow]}>
                    <View style={[sG.h_100, sG.w_50, sG.ai_center]}>
                        <View style={[sG.h_30, sG.w_90, sG.ai_center]}>
                            <TouchableOpacity style={[sG.h_95, sG.w_100, sG.ai_center, sG.jc_center, sG.bg_zindex_transparent, sG.brounded]} onPress={() => handlePressTycPp(1)}>
                                <View style={[sG.h_90, sG.w_90, sG.ai_center, sG.jc_center]}>
                                    <Text style={[sG.h7, sG.text_white, sG.bold]}>Términos y condiciones</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={[sG.h_30, sG.w_90, sG.ai_center, sG.jc_end]}>
                            <TouchableOpacity style={[sG.h_95, sG.w_100, sG.ai_center, sG.jc_center, sG.bg_zindex_transparent, sG.brounded]} onPress={() => handlePressTycPp(2)}>
                                <View style={[sG.h_90, sG.w_90, sG.ai_center, sG.jc_center]}>
                                    <Text style={[sG.h7, sG.text_white, sG.bold]}>Política de privacidad</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={[sG.h_100, sG.w_50, sG.ai_center]}>
                        <View style={[sG.h_30, sG.w_90, sG.ai_center, sG.jc_start]}>
                            <TouchableOpacity style={[sG.h_95, sG.w_100, sG.ai_center, sG.jc_center, sG.bg_zindex_transparent, sG.brounded]} onPress={handlePressHistorial}>
                                <View style={[sG.h_90, sG.w_90, sG.ai_center, sG.jc_center, sG.chrow,]}>
                                    <View style={[sG.h_90, sG.w_80, sG.ai_center, sG.jc_center]}>
                                        <Text style={[sG.h7, sG.text_white, sG.bold]}> Historial Novedades</Text>
                                    </View>
                                    <FontAwesome5 name="history" style={[sG.size_icon, sG.text_white]} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={[sG.h_30, sG.w_90, sG.ai_center, sG.jc_center]}>
                            <TouchableOpacity style={[sG.h_95, sG.w_100, sG.ai_center, sG.jc_center, sG.bg_zindex_transparent, sG.brounded]} onPress={handlePressSettings}>
                                <View style={[sG.h_90, sG.w_90, sG.ai_center, sG.jc_center, sG.chrow,]}>
                                    <View style={[sG.h_90, sG.w_80, sG.ai_center, sG.jc_center]}>
                                        <Text style={[sG.h7, sG.text_white, sG.bold]}>Acerca de </Text>
                                    </View>
                                    <AntDesign name="infocirlce" style={[sG.size_icon, sG.text_white]} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={[sG.h_30, sG.w_90, sG.ai_center, sG.jc_end]}>
                            <TouchableOpacity style={[sG.h_95, sG.w_100, sG.ai_center, sG.jc_center, sG.bg_zindex_transparent, sG.brounded]} onPress={handlePressClose}>
                                <View style={[sG.h_90, sG.w_90, sG.ai_center, sG.jc_center, sG.chrow]} >
                                    <View style={[sG.h_90, sG.w_80, sG.ai_center, sG.jc_center]} >
                                        <Text style={[sG.h7, sG.text_white, sG.bold]}>Cerrar sesión </Text>
                                    </View>
                                    <MaterialCommunityIcons name="exit-to-app" style={[sG.size_icon, sG.text_white]} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ImageBackground>
        </SafeAreaView>

    );
};

const stylesLocal = EStyleSheet.create({
    titleFont: { fontSize: '15.5rem' },
    widthTitle: { width: '92%' }
})

export default HomeTemplate;