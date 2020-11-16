import {
   React,
   TouchableOpacity,
   View,
   Text,
} from 'Libraries';
import style from './style';

const CardIcons = (props) => {
   const { detail, count, icons } = props;

   return (
      <TouchableOpacity
         activeOpacity={0.8}
         style={style.container3}
      >
         <View>
            {icons}
         </View>
         <View style={style.desc}>
            <Text style={style.helperText}>
               {detail}
            </Text>
            <Text style={style.text}>
               {count}
            </Text>
         </View>
      </TouchableOpacity>
   );
};

export default CardIcons;
