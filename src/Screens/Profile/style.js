import { color } from 'Assets';
import { StyleSheet, Dimensions } from 'Libraries';

const style = StyleSheet.create({
    container: {
        minHeight: Dimensions.get('window').height + 20,
        padding: 15,
        backgroundColor: color.default,
    },
    container2: {
        minHeight: Dimensions.get('window').height - 20,
        backgroundColor: color.default,
    },
    container3: {
        minHeight: Dimensions.get('window').height,
        padding: 15,
        backgroundColor: color.light,
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    detail: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    helperText: {
        opacity: 0.5,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
        opacity: 0.5,
        marginVertical: 10,
    },
    textPadding: {
        fontSize: 16,
        opacity: 0.5,
        marginVertical: 30,
        marginHorizontal: 15,
        textAlign: 'center',
    },
    between: {
        margin: 15,
        justifyContent: 'space-between',
        height: Dimensions.get('window').height / 2 + 160,
    },
    between2: {
        justifyContent: 'space-between',
        height: Dimensions.get('window').height / 2 + 200,
    },
    btn: {
        margin: 15,
    },
    action: {
        flexDirection: 'row',
        margin: 15,
        borderBottomColor: 'rgba(169, 169, 169, 0.6)',
        borderBottomWidth: 1,
    },
    textInput1: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
        fontSize: 16,
    },
    icons: {
        marginTop: 10,
    },
    //modal
    modalContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 370,
        padding: 15,
        position: 'absolute',
        bottom: 0,
        backgroundColor: color.darkblue,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    scrollTit: {
        width: 80,
        height: 6,
        margin: 15,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: color.primary,
    },
    modalFade: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: color.dark,
        opacity: 0.6,
    },
    textModal: {
        paddingVertical: 15,
        color: color.primary,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'JustAnotherHand-Regular',

    },
    modalsCard: {
        width: Dimensions.get('window').width - 30,
        marginVertical: 30,
        // backgroundColor: color.light,
        borderRadius: 10,
    },
    desc: {
        color: color.primary,
        fontSize: 16,
        paddingTop: 10,
        // paddingHorizontal: 10,
    },
    search2: {
        // flexDirection: 'row',
        // alignItems: 'center',
        // marginTop: 15,
        borderWidth: 1,
        backgroundColor: color.light,
        borderRadius: 10,
        // paddingBottom: 10,
        borderColor: color.light,
    },
    textSearch2: {
        // marginHorizontal: 5,
        color: color.darkblue,
        borderBottomColor: color.primary,
        borderBottomWidth: 1,
        marginBottom: 10,
        backgroundColor: color.default,
        fontSize: 16,
        borderRadius: 10,
    },
});

export default style;