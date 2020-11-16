import { Dimensions, StyleSheet } from 'Libraries';

const style = StyleSheet.create({
    text: {
        textAlign: 'right',
        marginTop: 15,
    },
    fomrs: {
        minHeight: Dimensions.get('window').height - (14.5 * 29),
        justifyContent: 'space-between',
    },
    row:{
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },
});

export default style;