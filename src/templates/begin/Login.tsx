import React from 'react';
import { Text, View, Image, ImageBackground, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Modal } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LoginHook from '../../containers/begin/LoginHook';
import { sG } from '../../components/general/styles';
import EStyleSheet from 'react-native-extended-stylesheet';

const Login = () => {
    const {
        verifyVersion,
        setVerifyVersion,
        verifyLocation,
        setVerifyLocation,
        permissionAcepted,
        setPermissionAcepted,
        accept_tyc,
        Accept_tyc,
        setAccept_tyc,
        username,
        setName,
        password,
        setPassword,
        textErrorUsername,
        setTextErrorUsername,
        textErrorPassword,
        setTextErrorPassword,
        textError,
        setTextError,
        show,
        setShow,
        isLoading,
        setisLoading,
        loadingLogin,
        setLoadingLogin,
        handlePressPassword,
        requestPermissions,
        AppInGoogle,
        handleInputChange,
        handlePressLogin,
        showModalError
    } = LoginHook({});

    return (
        <View style={[sG.container, sG.bg_white]}>
            {loadingLogin ?
                <View style={[sG.w_100, sG.h_100, sG.ai_center, sG.jc_center]}>
                    <ActivityIndicator size="large" color="#3ec7a9" />
                </View>
                :
                <>
                    <KeyboardAwareScrollView>
                        <ScrollView>
                            <View style={[sG.row_50, sG.w_100, sG.ai_center, sG.jc_center, sG.m_t_xl]}>
                                <Text style={[sG.h5, sG.bold, sG.text_center,]}>Ingresa y administra{'\n'}tus servicios</Text>
                                <Text style={[sG.h7, sG.text_center, sG.text_gray_light]}>Un app para facilitar tu día a día</Text>
                            </View>

                            <View style={[sG.row_20, sG.w_100, sG.ai_center, sG.jc_center]}>
                                <View style={[sG.h_70, sG.w_80, sG.ai_center, sG.jc_center, stylesLocal.headerBottom]}>
                                    <TextInput style={[sG.h_90, sG.w_95, sG.h7, sG.text_center, sG.text_black]}
                                        keyboardType='numeric'
                                        autoCapitalize='none'
                                        placeholder='Ingresa tu número de identificación'
                                        placeholderTextColor='#BDBDBD'
                                        value={username} onChangeText={(text) => handleInputChange(text, "username")} >
                                    </TextInput>
                                </View>
                            </View>

                            {textErrorUsername != '' ?
                                <View style={[sG.row_10, sG.w_100, sG.ai_center, sG.jc_center]}>
                                    <View style={[sG.h_70, sG.w_80]}>
                                        <Text style={[sG.h8, sG.text_red]}>{textErrorUsername}</Text>
                                    </View>
                                </View>
                                : null}

                            <View style={[sG.row_20, sG.w_100, sG.ai_center, sG.jc_center]}>
                                <View style={[sG.h_70, sG.w_80, sG.ai_center, sG.jc_center, stylesLocal.headerBottom]}>
                                    <TextInput style={[sG.h_90, sG.w_95, sG.h7, sG.text_center, sG.text_black]}
                                        autoCapitalize='none'
                                        placeholder='Ingresa aquí tu contraseña'
                                        placeholderTextColor='#BDBDBD'
                                        value={password}
                                        onChangeText={(text) => handleInputChange(text, "password")}>
                                    </TextInput>
                                </View>
                            </View>

                            {textErrorPassword != '' ?
                                <View style={[sG.row_10, sG.w_100, sG.ai_center, sG.jc_center]}>
                                    <View style={[sG.h_70, sG.w_80]}>
                                        <Text style={[sG.h8, sG.text_red]}>{textErrorPassword}</Text>
                                    </View>
                                </View>
                                : null}

                            <View style={[sG.row_20, sG.w_100, sG.ai_center, sG.jc_center]}>
                                {isLoading ?
                                    <View style={[sG.h_70, sG.w_80, sG.brounded, sG.bg_light, sG.ai_center, sG.jc_center, sG.bg_primary]}>
                                        <ActivityIndicator size="large" color="#ffffff" />
                                    </View>
                                    :
                                    <TouchableOpacity style={[sG.h_70, sG.w_80, sG.brounded, sG.bg_light, sG.ai_center, sG.jc_center, sG.bg_primary]} onPress={handlePressLogin} >
                                        <Text style={[sG.h7, sG.bold, sG.text_white]}>Ingresar</Text>
                                    </TouchableOpacity>
                                }
                            </View>

                            <View style={[sG.row_15, sG.w_100, sG.ai_center, sG.jc_center]}>
                                <TouchableOpacity style={[sG.h_100, sG.w_80, sG.ai_center, sG.jc_center, sG.chrow]} onPress={handlePressPassword}>
                                    <Text style={[sG.h8, sG.text_gray_light]}>Olvidaste tu Contraseña, restablécela </Text>
                                    <Text style={[sG.h8, sG.bold, sG.underline, sG.text_secondary]}>aqui</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={[sG.row_20, sG.w_100, sG.ai_center, sG.jc_center]}>
                                <View style={[sG.h_90, sG.w_80, sG.ai_center, sG.jc_center, sG.chrow]}>
                                    <TouchableOpacity style={[sG.h_100, sG.w_20, sG.ai_center, sG.jc_center]} onPress={Accept_tyc}>
                                        <FontAwesome name="check-square-o" style={[sG.size_icon, accept_tyc ? sG.text_primary : sG.text_red]} />
                                    </TouchableOpacity>
                                    <View style={[sG.h_100, sG.w_80, sG.ai_center, sG.jc_center]}>
                                        <View style={[sG.h_50, sG.w_100, sG.ai_end, sG.chrow]}>
                                            <Text style={[sG.h8, sG.text_gray_light, sG.bold]}>Acepto los </Text>
                                            <TouchableOpacity onPress={() => AppInGoogle(2)} >
                                                <Text style={[sG.h8, sG.text_primary, sG.underline, sG.bold]}>términos y condiciones</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={[sG.h_50, sG.w_100, sG.ai_center, sG.chrow]}>
                                            <Text style={[sG.h8, sG.text_gray_light, sG.bold]}>y la </Text>
                                            <TouchableOpacity onPress={() => AppInGoogle(3)}>
                                                <Text style={[sG.h8, sG.text_primary, sG.underline, sG.bold]}>política de privacidad</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </ScrollView>
                    </KeyboardAwareScrollView>
                    {verifyVersion ?
                        <View style={[sG.h_100, sG.w_100, sG.ai_center, sG.jc_center, sG.bg_zindex_transparent, sG.position_zindex]}>
                            <View style={[sG.h_40, sG.w_80, sG.ai_center, sG.jc_center, sG.border_secondary, sG.bg_white, sG.brounded]}>
                                <View style={[sG.h_90, sG.w_80, sG.ai_center, sG.jc_center]}>
                                    <View style={[sG.h_40, sG.w_100, sG.ai_center, sG.jc_center]}>
                                        <ImageBackground
                                            resizeMode='contain'
                                            style={[sG.h_80, sG.w_100]}
                                            source={require("../../../assets/icons/logoColor.png")} />
                                    </View>
                                    <View style={[sG.h_60, sG.w_100, sG.ai_center, sG.jc_center]}>
                                        <Text style={[sG.text_gray_light, sG.bold, sG.h7, sG.text_center]}>Tu aplicación no está actualizada</Text>
                                        <TouchableOpacity /* onPress={() => AppInGoogle(1)} */>
                                            <Text style={[sG.text_primary, sG.underline, sG.bold, sG.h8, sG.text_center, sG.m_t_xs]}>Actualizar aplicación ahora</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        : null}
                    {verifyLocation ?
                        <View style={[sG.h_100, sG.w_100, sG.ai_center, sG.jc_center, sG.bg_zindex_transparent, sG.position_zindex]}>
                            <View style={[sG.h_95, sG.w_90, sG.ai_center, sG.jc_center, sG.border_secondary, sG.bg_white, sG.brounded]}>
                                <View style={[sG.h_95, sG.w_90, sG.ai_center, sG.jc_center]}>
                                    <View style={[sG.h_10, sG.w_100, sG.ai_center, sG.jc_center]}>
                                        <ImageBackground
                                            resizeMode='contain'
                                            style={[sG.h_100, sG.w_100]}
                                            source={require("../../../assets/icons/logoColor.png")} />
                                    </View>
                                    <View style={[sG.h_10, sG.w_100, sG.ai_center, sG.jc_center]}>
                                        <Image
                                            resizeMode='contain'
                                            style={[sG.h_80, sG.w_100]}
                                            source={require("../../../assets/location.gif")} />
                                        <View style={[sG.w_100, sG.ai_center, sG.jc_center]}>
                                            <Text style={[sG.h7, sG.bold, sG.text_center, sG.text_black]}>Uso de tu ubicación</Text>
                                        </View>
                                    </View>
                                    <View style={[sG.h_70, sG.w_100, sG.ai_center, sG.jc_center]}>
                                        <View style={[sG.h_90, sG.w_95]}>
                                            <Text style={[sG.h8, sG.text_center, sG.text_black]}>{'Esta aplicación recopila datos de ubicación incluso cuando la aplicación está cerrada o no está en uso.\n'}</Text>
                                            <Text style={[sG.h9, sG.text_justify, sG.text_black]}>{'Al estar la Empresa Transportadora San Gabriel S.A.S., en la modalidad de transporte, la geolocalización en tiempo real es fundamental, ya que se hace necesario, recibir las coordenadas que definen la ubicación del móvil que se encuentre en la prestación del servicio. Esas coordenadas que la app va capturando, son enviadas a nuestros servidores, donde nuestro software de Backend, las procesará para realizar los cálculos necesarios, que den como resultado, la velocidad a la que se transporta el móvil, la ubicación real del mismo, hora en que se puso en curso el servicio, hora en que llego a su destino, etc., toda esta información, nos ayudará a realizar las trazas necesarias, que permitirán mejorar y brindar a nuestros clientes, seguridad, efectividad y calidad en cada uno de nuestros servicios.\n'}</Text>
                                            <Text style={[sG.h8, sG.text_center, sG.text_black, sG.bold]}>{'¿Estás de acuerdo que la app utilice y recopile tu ubicación incluso cuando la aplicación está cerrada o no está en uso?'}</Text>
                                        </View>
                                    </View>
                                    <View style={[sG.h_10, sG.w_100, sG.ai_end, sG.jc_center, sG.chrow]}>
                                        <View style={[sG.h_60, sG.w_50, sG.jc_center]}>
                                            <TouchableOpacity style={[sG.h_100, sG.w_95, sG.ai_center, sG.jc_center, sG.bg_red, sG.brounded]}/*  onPress={handlePressDenyLocation} */>
                                                <Text style={[sG.h7, sG.bold, sG.text_white]}>Denegar</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={[sG.h_60, sG.w_50, sG.ai_end, sG.jc_center]}>
                                            <TouchableOpacity style={[sG.h_100, sG.w_95, sG.ai_center, sG.jc_center, sG.bg_primary, sG.brounded]} onPress={() => requestPermissions(2)}>
                                                <Text style={[sG.h7, sG.bold, sG.text_white]}>Aceptar</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        : null}
                </>
            }
            <Modal animationType="fade" transparent={true} visible={show}>
                <View style={[sG.container, sG.ai_center, sG.jc_center, sG.bg_zindex_transparent]}>
                    <View style={[sG.h_40, sG.w_80, sG.bg_white, sG.brounded, sG.ai_center, sG.jc_center, sG.card_shadow, sG.border]}>
                        <View style={[sG.w_90, sG.h_90, sG.ai_center, sG.jc_center]}>
                            <View style={[sG.w_100, sG.h_45, sG.ai_center, sG.jc_center]}>
                                <ImageBackground resizeMode='contain' source={require("../../../assets/icons/icon.png")} style={[sG.h_80, sG.w_100]} />
                            </View>
                            <View style={[sG.w_80, sG.h_30, sG.ai_center, sG.jc_center]}>
                                <Text style={[sG.text_gray_light, sG.text_center, sG.h7]}>{textError}</Text>
                            </View>
                            <View style={[sG.w_100, sG.h_25, sG.ai_center, sG.jc_center]}>
                                <TouchableOpacity style={[sG.w_90, sG.h_70, sG.ai_center, sG.jc_center, sG.brounded, sG.bg_primary]} onPress={showModalError}>
                                    <Text style={[sG.text_white, sG.text_center, sG.bold, sG.h8]}>¡Entendido!</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const stylesLocal = EStyleSheet.create({
    headerBottom: {
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
    },
})

export default Login;