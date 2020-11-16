import {
   React,
   Dimensions,
   TouchableOpacity,
   Text,
   View,
} from 'Libraries';
import style from './style';

const CardText = props => {
   const { detail, count, button } = props;
   const width = props.type === 'fullwidth' ? Dimensions.get('window').width - 30 : Dimensions.get('window').width * 45 / 100 - 12;

   return (
      <TouchableOpacity
         style={{ ...style.container, width: width }}
         activeOpacity={0.8}
      >
         <View>
            <Text style={style.helperText}>
               {detail}
            </Text>
            <Text style={style.subtitle}>
               {count}</Text>
         </View>
         <View style={style.descRight2}>
            {button}
         </View>
      </TouchableOpacity>
   );
};

export default CardText;
