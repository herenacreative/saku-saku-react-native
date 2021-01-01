import {
   React,
   View,
   TextInput,
   Ionicons,
   Text,
   Animatable
} from 'Libraries';
import style from './style';
import { color } from 'Assets';

const InputEmail = (props) => {
   const { onChangeText, value } = props;
   const [data, setData] = React.useState({
      check_textInputChange: false,
      isValidUser: true,
      active: true,
   });

   return (
      <View>
         <View style={style.action}>
            <Ionicons
               style={style.icons}
               name='mail-outline'
               size={25}
               color={color.primary}
            />
            <TextInput
               onChangeText={onChangeText}
               value={value}
               placeholderTextColor='#666666'
               placeholder='Enter your e-mail'
               autoCapitalize='none'
               style={[style.textInput1, { borderBottomColor: data.active ? color.primary : '#C0C0C0' }]}
            // style={style.textInput1}
            />
            {data.check_textInputChange ?
               <Animatable.View animation='bounceIn'>
                  <Ionicons
                     style={style.icons}
                     name='checkmark-circle-outline'
                     size={25}
                     color='green'
                  />
               </Animatable.View>
               : null}
         </View>
         {data.isValidUser ? null :
            <Animatable.View
               animation="fadeInLeft"
               duration={500}
            >
               <Text style={style.errorMsg}>
                  email must be email
          </Text>
            </Animatable.View>
         }
      </View>
   );
};

export default InputEmail;