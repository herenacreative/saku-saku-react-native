import { color } from 'Assets';
import {StyleSheet, Dimensions} from 'Libraries';

const style = StyleSheet.create({
    container: {
        minHeight: Dimensions.get('window').height + 20,
        padding: 15,
        backgroundColor: color.default,
    },
    container2: {
        minHeight: Dimensions.get('window').height - 20,
        backgroundColor: color.default,
    },
    img:{
        width: 70,
        height: 70,
    },
    detail: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    helperText: {
        opacity: 0.5,
        marginVertical: 10,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
        opacity: 0.5,
        marginVertical: 10,
    },
    textPadding: {
        fontSize: 16,
        opacity: 0.5,
        marginVertical: 30,
        marginHorizontal: 15,
        textAlign: 'center', 
    },
    between: {
        margin: 15,
        justifyContent: 'space-between',
        height: Dimensions.get('window').height / 2 + 160,
    },
    between2: {
        justifyContent: 'space-between',
        height: Dimensions.get('window').height / 2 + 200,
    },
     btn:{
         margin: 15,
     }
});

export default style;