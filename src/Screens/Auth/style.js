import { Dimensions, StyleSheet } from 'Libraries';
import { color } from 'Assets';

const style = StyleSheet.create({
    text:{
        textAlign: 'right',
        marginTop: 15,
    },
    fomrs: {
        minHeight: Dimensions.get('window').height - (15 * 27),
        justifyContent: 'space-between',
    },
});

export default style;