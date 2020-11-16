import { Dimensions, StyleSheet } from 'Libraries';
import { color } from 'Assets';

const style = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 30,
        backgroundColor: color.light,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 7.5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 10,
        elevation: 10,
        flexWrap: "wrap",
    },
    container4: {
        width: Dimensions.get('window').width - 30,
        backgroundColor: color.primary,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 7.5,
        borderRadius: 10,
    },
    container2: {
        width: Dimensions.get('window').width - 30,
        backgroundColor: color.light,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 7.5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 10,
        elevation: 10,
    },
    container3: {
        width: Dimensions.get('window').width / 2 - 30,
        backgroundColor: color.primary,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 7.5,
        borderRadius: 10,
    },
    img: {
        width: 50,
        height: 50,
    },
    icons: {
        width: 25,
        height: 25,
        marginTop: 5,
    },
    desc: {
        flex: 2,
        marginLeft: 15,
        textAlign: "left",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        color: color.dark,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: color.dark,
        fontWeight: 'bold',
    },
    subtitlelight: {
        fontSize: 24,
        color: color.light,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 14,
        color: color.dark,
        fontWeight: 'bold',
    },
    textPrimary: {
        color: color.primary,
        fontWeight: 'bold',
    },
    helperText: {
        opacity: 0.5,
    },
    helperTextlight: {
        fontSize: 14,
        opacity: 0.5,
        color: color.light,
    },
    helperTextPadding: {
        marginHorizontal: 13,
    },
    descRight: {
        fontWeight: 'bold',
        marginTop: 15,
    },
    descRight2: {
        marginTop: 8,
        color: color.primary,
    },
});

export default style;