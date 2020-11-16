import {
   React,
   TouchableOpacity,
   Text,
   View,
} from 'Libraries';
import style from './style';

const CardPhotoText = props => {
   const { name, detail, count, onPress, image } = props;

   return (
      <TouchableOpacity
         style={style.container}
         onPress={onPress}
         activeOpacity={0.7}
      >
         <View>
            {image}
         </View>
         <View style={style.desc}>
            <Text style={style.subtitle}>
               {name}
            </Text>
            <Text style={style.helperText}>
               {detail}
            </Text>
         </View>
         <Text style={style.descRight}>
            {count}
         </Text>
      </TouchableOpacity>
   );
};

export default CardPhotoText;
