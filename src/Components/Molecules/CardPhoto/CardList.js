import {
   React,
   Text,
   TouchableOpacity,
} from 'Libraries';
import style from './style';

const CardList = props => {
   const { num, desc } = props;

   return (
      <TouchableOpacity style={style.container2}>
         <Text style={style.textPrimary}>
            {num}
         </Text>
         <Text style={style.helperTextPadding}>
            {desc}
         </Text>
      </TouchableOpacity>
   );
};

export default CardList;
