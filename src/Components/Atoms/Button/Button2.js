import { React, TouchableOpacity, View, Text, Animatable, LinearGradient } from 'Libraries';
import { color } from 'Assets';
import style from './style';

const Button2 = props => {
  return (
    <Animatable.View animation='slideInDown' duration={1000}>
      <TouchableOpacity onPress={props.onPress} activeColor="red">
        <LinearGradient
          style={style.button2}
          colors={[color.default, color.primary]}
          animation='slideInDown'
        >
          <Text style={style.buttonText2}>{props.title}</Text>
          <View>{props.icons}</View>
        </LinearGradient>

      </TouchableOpacity>
    </Animatable.View>
  );
};

export default Button2;
