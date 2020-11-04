import { color } from 'Assets';
import { StyleSheet, Dimensions } from 'Libraries';

const style = StyleSheet.create({
    container: {
        backgroundColor: color.primary,
        minHeight: Dimensions.get('window').height + 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headline: {
        fontSize: 32,
        color: color.light,
        fontWeight: 'bold',
    },
});

export default style;