import { color } from 'Assets';
import { StyleSheet, Dimensions } from 'Libraries';

const style = StyleSheet.create({
    container: {
        minHeight: Dimensions.get('window').height + 20,
        backgroundColor: color.default2,
    },
    topNav: {
        justifyContent: 'center',
        paddingTop: 0,
        height: Dimensions.get('window').height / 6 - 10,
        backgroundColor: color.primary,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
    },
    between: {
        justifyContent: 'space-between',
        padding: 15,
        flexDirection: 'row',
    },
    subtitlePadding: {
        fontWeight: 'bold',
        fontSize: 16,
        padding: 15,
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    icons: {
        alignSelf: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontFamily: 'JustAnotherHand-Regular',
        alignSelf: 'center',
        color: color.primary,
    },
    textLoading:{
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 30,
        color: color.primary,
    },
});

export default style;