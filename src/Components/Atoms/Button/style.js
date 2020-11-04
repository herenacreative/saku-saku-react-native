import { color } from 'Assets';
import { Dimensions, StyleSheet } from 'Libraries';

const style = StyleSheet.create({
    button: {
        width: Dimensions.get('window').width - 30,
        alignItems: 'center',
        padding: 15,
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 16,
    },
    button2:{
        width: Dimensions.get('window').width - 30,
        alignItems: 'baseline',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        borderRadius: 15,
        marginVertical: 5,
    },
    buttonText2: {
        fontSize: 16,
        color: color.light,
    },
});

export default style;