import { Dimensions, StyleSheet } from 'Libraries';
import { color } from 'Assets';

const style = StyleSheet.create({
    text: {
        textAlign: 'right',
        marginTop: 15,
    },
    fomrs: {
        minHeight: Dimensions.get('window').height - (15 * 25),
        justifyContent: 'space-between',
    },
    fomrsSuccess: {
        minHeight: Dimensions.get('window').height - (15 * 28),
        justifyContent: 'space-between',
        // marginTop: 300,
    },
    imgs:{
        alignItems: 'center',
        marginTop: 50,
    },
    img: {
        width: 100,
        height: 100,
    },
    action: {
        flexDirection: 'row',
        marginTop: 20,
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
    },
    textInput1: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
        fontSize: 16,
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    icons: {
        marginTop: 10,
    },
});

export default style;