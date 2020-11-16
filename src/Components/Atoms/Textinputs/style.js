import { StyleSheet, Dimensions } from 'Libraries';

const style = StyleSheet.create({
    action:{
        width: Dimensions.get('window').width - 30,
        flexDirection: 'row',
        marginTop: 20,
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
        alignSelf: 'center',
    },
    textInput1: {
        width: Dimensions.get('window').width - 30,
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
        fontSize: 16,
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    icons:{
        marginTop: 10,
    },
});

export default style;