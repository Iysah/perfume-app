import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const GLOBALSTYLES = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 18,
        paddingTop: 10,
        fontFamily: 'Averta-Regular',
        // backgroundColor: '#FAFAFA'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 24,
        fontFamily: 'Averta-Bold',
        color: '#000',
        textAlign: 'left',
        // marginBottom: 5,
        // marginTop: 10,
    },
    column: {
        justifyContent: 'center'
    },
    card: {
        borderWidth: 1,
        borderColor: '#F1F1F1',
        borderRadius: 24,
        paddingHorizontal: 20,
        paddingVertical: 24
    },
    text: {
        color: Colors.light.text,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        fontFamily: 'Averta-Regular',
        // marginTop: 5,
    },
    textCenter: {
        textAlign: 'center',
        fontFamily: 'Averta-Regular',
    },
    linkText: {
        textDecorationLine: 'underline',
        color: Colors.light.primary,
        fontFamily: 'Averta-Regular',
        // fontWeight: '6
    },
    iosShadowB: {
        shadowColor: '#000',
        shadowOffset: { width: -20, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 4,  
    },
    iosShadowT: {
        shadowColor: '#000',
        shadowOffset: { width: -20, height: -5 },
        shadowOpacity: 0.03,
        shadowRadius: 4,  
    },
    inputWrapper: {
        borderWidth: 1,
        borderColor: '#D8D8D8',
        borderRadius: 12,
        height: 50,
        paddingHorizontal: 16,
        marginTop: 10
    },
    divider: {
        height: .6,
        width: 120,
        backgroundColor: '#DDDDDB'
    },
    label: {
        color: '#1A1A1A',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        marginBottom: 8,
        fontFamily: 'Averta-Regular',
    },
    errorText: {
        color: '#F97066',
        fontSize: 12,
        fontWeight: 400,
        fontFamily: 'Averta-Regular',
    },
    buttonContainer: {
        borderRadius: 25,
        overflow: 'hidden',
        marginTop: 40,
    },
    buttonGradient: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: Colors.light.primary, 
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
        fontFamily: 'Averta-Regular',
    },
    skipText: {
        color: Colors.light.primary,
        textAlign: 'center',
        // marginTop: 10,
        textDecorationLine: 'underline',
        fontFamily: 'Averta-Regular',
      },
})