import {
   React,
   TouchableOpacity,
   Text,
   Dimensions,
} from 'Libraries';
import { color } from 'Assets';
import style from './style';

const Button = props => {
   const textColor = props.style === 'primary' ? color.grey : color.dark;
   const background = props.style === 'primary' ? color.primary : props.style === 'transparent' ? 'transparent' : props.style;
   const border = props.style === 'primary' ? color.primary : color.primary;
   const width = props.type === 'fullwidth' ? Dimensions.get('window').width - 30 : Dimensions.get('window').width * 45 / 100 - 10;
   return (
      <TouchableOpacity
         activeOpacity={0.8}
         style={{ ...style.button, width: width, backgroundColor: background, borderColor: border }}
         onPress={props.onPress}
         mode={props.mode}
         disabled={props.disabled}
      >
         <Text style={{ ...style.buttonText, color: textColor }}>
            {props.title}
         </Text>
      </TouchableOpacity>
   );
};

export default Button;
