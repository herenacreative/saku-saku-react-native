import { Dimensions, StyleSheet } from 'Libraries';
import { color } from 'Assets';

const style = StyleSheet.create({
    text: {
        textAlign: 'right',
        marginTop: 15,
    },
    fomrs: {
        minHeight: Dimensions.get('window').height - (15 * 29),
        justifyContent: 'space-between',
    },
    fomrs2: {
        minHeight: Dimensions.get('window').height - (15 * 26),
        justifyContent: 'space-between',
    },
});

export default style;