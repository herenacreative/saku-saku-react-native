import { React, TouchableOpacity, View, Text } from 'Libraries';
import style from './style';

const CardIcons = (props) => {
  const { detail, count, icons } = props;
  return (
    <TouchableOpacity style={style.container3}>
      <View>{icons}</View>
      <TouchableOpacity style={style.desc}>
        <Text style={style.helperText}>{detail}</Text>
        <Text style={style.text}>{count}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CardIcons;
