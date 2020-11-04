import { color } from 'Assets';
import { StyleSheet, Dimensions } from 'Libraries';

const style = StyleSheet.create({
    topNav: {
        justifyContent: 'center',
        paddingTop: 0,
        height: Dimensions.get('window').height / 6 - 10,
        backgroundColor: color.primary,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
    },
    subtitlePadding: {
        fontWeight: 'bold',
        fontSize: 16,
        padding: 15,
    },

});

export default style;