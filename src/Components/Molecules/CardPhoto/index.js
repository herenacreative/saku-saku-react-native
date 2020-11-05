import { React, View, TouchableOpacity, Text } from 'Libraries';
import style from './style';

const CardPhoto = (props) => {
  const { detail, count, image, right } = props;

  return (
    <TouchableOpacity style={style.container}>
      <View>
        {image}
      </View>
      <TouchableOpacity style={style.desc}>
        <Text style={style.helperText}>{detail}</Text>
        <Text style={style.title}>{count}</Text>
      </TouchableOpacity>
      <Text style={style.title}>{right}</Text>
    </TouchableOpacity>
  );
};

export default CardPhoto;
