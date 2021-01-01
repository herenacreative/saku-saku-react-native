import { color } from 'Assets';
import {
   React,
   TouchableOpacity,
   View,
   Text,
   Animatable
} from 'Libraries';
import style from './style';

const Button2 = props => {
   return (
      <Animatable.View
         animation='slideInDown'
         duration={1000}
      >
         <TouchableOpacity
            activeColor={color.primary}
            activeOpacity={0.8}
            onPress={props.onPress}
            activeColor="red"
            style={style.button2}
         >
            <Text style={style.buttonText2}>
               {props.title}
            </Text>
            <View>
               {props.icons}
            </View>
         </TouchableOpacity>
      </Animatable.View>
   );
};

export default Button2;
