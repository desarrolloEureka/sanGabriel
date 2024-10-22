import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;


EStyleSheet.build({
    $rem: entireScreenWidth / 300,
    // $colorPrimary: '#24dd6e',
    $colorPrimary: '#3ec7a9',
    $colorSecondary: '#3ec7a9',
    $colorGreen: '#24dd6e',
    $colorYellow: '#f2c43e',
    $colorOrange: '#f44611',
    $colorGrayLight: '#a0a0a0',
    $colorLight: '#f2f2f2',
    $colorRed: '#ff7a7a',
  });
  
const sG = EStyleSheet.create({
    container: { flex: 1 },
    chrow: { flexDirection: 'row' },
    calendar: {
    },

    border: {
        borderWidth: 1,
        borderColor: '#bbbbbb',
    },

    border_bottom: {
        borderBottomColor: '#bbbbbb',
        borderBottomWidth: 1,
    },

    border_primary: {
        borderWidth: 1,
        borderColor: '$colorPrimary',
    },

    border_secondary: {
        borderWidth: 1,
        borderColor: '$colorSecondary',
    },

    border_red: {
        borderWidth: 1,
        borderColor: '$colorRed',
    },

    border_green: {
        borderWidth: 1,
        borderColor: '$colorGreen',
    },

    border_yellow: {
        borderWidth: 1,
        borderColor: '$colorYellow',
    },

    border_orange: {
        borderWidth: 1,
        borderColor: '$colorOrange',
    },

    card_shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0.5,
            height: 0,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 5,
    },

    text_primary: { color: '$colorPrimary' },
    text_secondary: { color: '$colorSecondary' },
    text_gray_light: { color: '$colorGrayLight' },
    text_light: { color: '$colorLight' },
    text_green: { color: '$colorGreen' },
    text_yellow: { color: '$colorYellow' },
    text_orange: { color: '$colorOrange' },
    text_white: { color: '#ffffff' },
    text_black: { color: '#000000' },
    text_red: { color: '#ff7a7a' },

    bg_green: { backgroundColor: '$colorGreen' },
    bg_yellow: { backgroundColor: '$colorYellow' },
    bg_primary: { backgroundColor: '$colorPrimary' },
    bg_secondary: { backgroundColor: '$colorSecondary' },
    bg_light: { backgroundColor: '$colorLight' },
    bg_gray_light: { backgroundColor: '$colorGrayLight' },
    bg_red: { backgroundColor: '$colorRed' },
    bg_white: { backgroundColor: '#ffffff' },
    bg_transparent: { backgroundColor: 'transparent' },

    bg_zindex_transparent: { backgroundColor: 'rgba(52, 52, 52, 0.3)' },
    bg_zindex_camera: { backgroundColor: 'rgba(52, 52, 52, 0.8)' },
    zIndex: { zIndex: 1 },
    position_zindex: { position: 'absolute' },

    bc_primary: { borderColor: '$colorPrimary', borderWidth: 0.5, },
    bc_secondary: { borderColor: '$colorSecondary', borderWidth: 0.5, },
    bc_gray_light: { borderColor: '$colorGrayLight', borderWidth: 0.5, },
    bc_white: { borderColor: '#ffffff', borderWidth: 0.5, },

    text_top: {
        textAlignVertical: 'top',
    },
    text_vcenter: {
        textAlignVertical: 'center',
    },
    text_bottom: {
        textAlignVertical: 'bottom',
    },

    text_left: {
        textAlign: 'left',
    },
    text_center: {
        textAlign: 'center',
    },
    text_right: {
        textAlign: 'right',
    },
    text_justify: {
        textAlign: 'justify',
    },

    jc_start: {
        justifyContent: 'flex-start'
    },
    jc_center: {
        justifyContent: 'center'
    },
    jc_end: {
        justifyContent: 'flex-end'
    },

    ai_start: {
        alignItems: 'flex-start'
    },
    ai_center: {
        alignItems: 'center'
    },
    ai_end: {
        alignItems: 'flex-end'
    },

    brounded: {
        borderRadius: "10rem",
        overflow: 'hidden'
    },
    broundedmax: {
        borderRadius: "30rem",
        overflow: 'hidden'
    },
    brounded_bottom: {
        borderBottomLeftRadius: "15rem",
        borderBottomRightRadius: "15rem",
        overflow: 'hidden'
    },
    brounded_top: {
        borderTopLeftRadius: "15rem",
        borderTopRightRadius: "15rem",
        //overflow: 'hidden'
    },

    h_5: {
        height: '5%'
    },
    h_10: {
        height: '10%'
    },
    h_15: {
        height: '15%'
    },
    h_20: {
        height: '20%'
    },
    h_25: {
        height: '25%'
    },
    h_30: {
        height: '30%'
    },
    h_35: {
        height: '35%'
    },
    h_40: {
        height: '40%'
    },
    h_45: {
        height: '45%'
    },
    h_50: {
        height: '50%'
    },
    h_55: {
        height: '55%'
    },
    h_60: {
        height: '60%'
    },
    h_65: {
        height: '65%'
    },
    h_70: {
        height: '70%'
    },
    h_75: {
        height: '75%'
    },
    h_80: {
        height: '80%'
    },
    h_85: {
        height: '85%'
    },
    h_90: {
        height: '90%'
    },
    h_95: {
        height: '95%'
    },
    h_100: {
        height: '100%'
    },

    h_80_rem: { height: '5rem' },
    w_80_rem: { width: '5rem' },

    w_5: {
        width: '5%'
    },

    w_10: {
        width: '10%'
    },
    w_15: {
        width: '15%'
    },
    w_20: {
        width: '20%'
    },
    w_25: {
        width: '25%'
    },
    w_30: {
        width: '30%'
    },
    w_35: {
        width: '35%'
    },
    w_40: {
        width: '40%'
    },
    w_45: {
        width: '45%'
    },
    w_50: {
        width: '50%'
    },
    w_55: {
        width: '55%'
    },
    w_60: {
        width: '60%'
    },
    w_65: {
        width: '65%'
    },
    w_70: {
        width: '70%'
    },
    w_75: {
        width: '75%'
    },
    w_80: {
        width: '80%'
    },
    w_85: {
        width: '85%'
    },
    w_90: {
        width: '90%'
    },
    w_95: {
        width: '95%'
    },
    w_98: {
        width: '98%'
    },
    w_100: {
        width: '100%'
    },

    icon_xs: { height: '25rem', width: '25rem' },
    icon_md: { height: '50rem', width: '50rem' },
    icon_xl: { height: '100rem', width: '100rem' },
    size_icon: { fontSize: '15rem' },
    size_icon_xs: { fontSize: '10rem' },
    size_icon_md: { fontSize: '25rem' },
    size_icon_xl: { fontSize: '120rem' },


    size_loaded: { fontSize: '100rem' },
    color_loaded: { color: '#ff006e' },

    wb_xs: { width: "100rem", height: "33rem" },
    wb_sm: { width: "150rem", height: "40rem" },
    wb_md: { width: "205rem", height: "45rem" },
    wb_lg: { width: "265rem", height: "50rem" },
    wb_xl: { width: "335rem", height: "55rem" },

    row_5: { flex: 1, aspectRatio: 1 / 0.05 },
    row_10: { flex: 1, aspectRatio: 1 / 0.1 },
    row_15: { flex: 1, aspectRatio: 1 / 0.15 },
    row_20: { flex: 1, aspectRatio: 1 / 0.2 },
    row_25: { flex: 1, aspectRatio: 1 / 0.25 },
    row_30: { flex: 1, aspectRatio: 1 / 0.3 },
    row_35: { flex: 1, aspectRatio: 1 / 0.35 },
    row_40: { flex: 1, aspectRatio: 1 / 0.4 },
    row_45: { flex: 1, aspectRatio: 1 / 0.45 },
    row_50: { flex: 1, aspectRatio: 1 / 0.5 },
    row_60: { flex: 1, aspectRatio: 1 / 0.6 },
    row_70: { flex: 1, aspectRatio: 1 / 0.7 },
    row_80: { flex: 1, aspectRatio: 1 / 0.8 },
    row_90: { flex: 1, aspectRatio: 1 / 0.9 },
    row_100: { flex: 1, aspectRatio: 1 / 1 },
    row_120: { flex: 1, aspectRatio: 1 / 1.2 },
    row_130: { flex: 1, aspectRatio: 1 / 1.3 },
    row_140: { flex: 1, aspectRatio: 1 / 1.4 },
    row_150: { flex: 1, aspectRatio: 1 / 1.5 },
    row_160: { flex: 1, aspectRatio: 1 / 1.6 },
    row_170: { flex: 1, aspectRatio: 1 / 1.7 },
    row_180: { flex: 1, aspectRatio: 1 / 1.8 },
    row_190: { flex: 1, aspectRatio: 1 / 1.9 },
    row_200: { flex: 1, aspectRatio: 1 / 2 },
    row_205: { flex: 1, aspectRatio: 1 / 2.05 },
    row_210: { flex: 1, aspectRatio: 1 / 2.1 },
    row_220: { flex: 1, aspectRatio: 1 / 2.2 },
    row_230: { flex: 1, aspectRatio: 1 / 2.3 },
    row_280: { flex: 1, aspectRatio: 1 / 2.8 },
    flex_row: { flexDirection: 'row' },
    chrow_100: { flexDirection: 'column', flex: 1, aspectRatio: 1 / 0.1 },

    h1: { fontSize: '27.5rem' },
    h2: { fontSize: '25rem' },
    h3: { fontSize: '22.5rem' },
    h4: { fontSize: '20rem' },
    h5: { fontSize: '17.5rem' },
    h6: { fontSize: '15rem' },
    h7: { fontSize: '12.5rem' },
    h8: { fontSize: '10rem' },

    bold: { fontWeight: 'bold' },
    underline: { textDecorationLine: 'underline' },
    line_through: { textDecorationLine: 'line-through' },

    p_xs: { padding: '12.5rem' },
    p_sm: { padding: '15rem' },
    p_md: { padding: '20rem' },
    p_lg: { padding: '30rem' },
    p_xl: { padding: '50rem' },

    p_x_xs: { paddingHorizontal: '12.5rem' },
    p_x_sm: { paddingHorizontal: '15rem' },
    p_x_md: { paddingHorizontal: '20rem' },
    p_x_lg: { paddingHorizontal: '30rem' },
    p_x_xl: { paddingHorizontal: '50rem' },

    p_y_xs: { paddingVertical: '12.5rem' },
    p_y_sm: { paddingVertical: '15rem' },
    p_y_md: { paddingVertical: '20rem' },
    p_y_lg: { paddingVertical: '30rem' },
    p_y_xl: { paddingVertical: '50rem' },

    p_t_xs: { paddingTop: '12.5rem' },
    p_t_sm: { paddingTop: '15rem' },
    p_t_md: { paddingTop: '20rem' },
    p_t_lg: { paddingTop: '30rem' },
    p_t_xl: { paddingTop: '50rem' },

    p_r_xs: { paddingRight: '12.5rem' },
    p_r_sm: { paddingRight: '15rem' },
    p_r_md: { paddingRight: '20rem' },
    p_r_lg: { paddingRight: '30rem' },
    p_r_xl: { paddingRight: '50rem' },

    p_b_xs_intro: { paddingBottom: '3rem' },
    p_b_xs: { paddingBottom: '12.5rem' },
    p_b_sm: { paddingBottom: '15rem' },
    p_b_md: { paddingBottom: '20rem' },
    p_b_lg: { paddingBottom: '30rem' },
    p_b_xl: { paddingBottom: '50rem' },

    p_l_xs: { paddingLeft: '12.5rem' },
    p_l_sm: { paddingLeft: '15rem' },
    p_l_md: { paddingLeft: '20rem' },
    p_l_lg: { paddingLeft: '30rem' },
    p_l_xl: { paddingLeft: '50rem' },

    m_xs: { margin: '12.5rem' },
    m_sm: { margin: '15rem' },
    m_md: { margin: '20rem' },
    m_lg: { margin: '30rem' },
    m_xl: { margin: '50rem' },

    m_x_xs: { marginHorizontal: '12.5rem' },
    m_x_sm: { marginHorizontal: '15rem' },
    m_x_md: { marginHorizontal: '20rem' },
    m_x_lg: { marginHorizontal: '30rem' },
    m_x_xl: { marginHorizontal: '50rem' },

    m_y_xs: { marginVertical: '12.5rem' },
    m_y_sm: { marginVertical: '15rem' },
    m_y_md: { marginVertical: '20rem' },
    m_y_lg: { marginVertical: '30rem' },
    m_y_xl: { marginVertical: '50rem' },

    m_t_xs: { marginTop: '12.5rem' },
    m_t_sm: { marginTop: '15rem' },
    m_t_md: { marginTop: '20rem' },
    m_t_lg: { marginTop: '30rem' },
    m_t_xl: { marginTop: '50rem' },

    m_r_xs: { marginRight: '12.5rem' },
    m_r_sm: { marginRight: '15rem' },
    m_r_md: { marginRight: '20rem' },
    m_r_lg: { marginRight: '30rem' },
    m_r_xl: { marginRight: '50rem' },

    m_b_xs: { marginBottom: '12.5rem' },
    m_b_sm: { marginBottom: '15rem' },
    m_b_md: { marginBottom: '20rem' },
    m_b_lg: { marginBottom: '30rem' },
    m_b_xl: { marginBottom: '50rem' },

    m_l_xs: { marginLeft: '12.5rem' },
    m_l_sm: { marginLeft: '15rem' },
    m_l_md: { marginLeft: '20rem' },
    m_l_lg: { marginLeft: '30rem' },
    m_l_xl: { marginLeft: '50rem' },

});

export { sG }