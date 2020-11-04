import { React, TouchableOpacity, Image, Text} from 'Libraries';
import style from './style';

const CardPhoto = (props) => {
  const {detail, count, icons, image, right} = props;
  return (
    <TouchableOpacity style={style.container}>
      <Image
        style={style.img}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <TouchableOpacity style={style.desc}>
        <Text style={style.helperText}>{detail}</Text>
        <Text style={style.title}>{count}</Text>
      </TouchableOpacity>
        <Text style={style.title}>{right}</Text>
      {/* <Image
        style={style.img}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      /> */}
    </TouchableOpacity>
  );
};

export default CardPhoto;
