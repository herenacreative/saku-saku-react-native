import { Dimensions, StyleSheet } from 'Libraries';
import { color } from 'Assets';

const style = StyleSheet.create({
    container: {
        minHeight: Dimensions.get('window').height + 20,
        backgroundColor: color.default,
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    head: {
        minHeight: Dimensions.get('window').height - (15 * 33),
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadow: {
        shadowColor: color.light,
        shadowOffset: {
            width: 0,
            height: 15,
        },
        shadowRadius: 30.00,
        elevation: 25,
        paddingTop: 7,
        borderTopLeftRadius: 33,
        borderTopRightRadius: 33,
    },
    contents: {
        backgroundColor: color.light,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        minHeight: Dimensions.get('window').height - (15 * 12),
        padding: 15,
        paddingBottom: 0,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    content: {
        alignItems: 'center',
    },
    forms: {
        width: Dimensions.get('window').width - 30,
    },
    //typography
    headline2: {
        fontSize: 32,
        color: color.primary,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 24,
        color: color.dark,
        fontWeight: 'bold',
        marginTop: 25,
    },
    desc: {
        fontSize: 16,
        opacity: 0.5,
        marginTop: 15,
        textAlign: 'center',
    },
    text: {
        marginTop: 30,
        marginBottom: 30,
        fontSize: 16,
    },
    textPrimary: {
        color: color.primary,
    },
});

export default style;