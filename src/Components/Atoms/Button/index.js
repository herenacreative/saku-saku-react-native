import { React, TouchableOpacity, Text, Dimensions, LinearGradient } from 'Libraries';
import { color } from 'Assets';
import style from './style';

const Button = props => {
    const textColor = props.style === 'primary' ? color.light : color.dark;
    const background = props.style === 'primary' ? color.primary : props.style === 'transparent' ? 'transparent' : props.style;
    const border = props.style === 'primary' ? color.primary : color.dark;
    const width = props.type === 'fullwidth' ? Dimensions.get('window').width - 30 : Dimensions.get('window').width * 45 / 100 - 10;
    return (
        <TouchableOpacity style={{ ...style.button, width: width, backgroundColor: background, borderColor: border }} onPress={props.onPress}>
            {/* <LinearGradient 
                style={{ ...style.button, width: width, backgroundColor: background, borderColor: border }} 
                colors={[color.default, color.primary]}
            > */}
            <Text style={{ ...style.buttonText, color: textColor }}>{props.title}</Text>
            {/* </LinearGradient> */}

        </TouchableOpacity>
    );
};

export default Button;
