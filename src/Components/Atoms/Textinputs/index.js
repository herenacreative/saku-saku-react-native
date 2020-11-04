import { React, View, TextInput, Ionicons, TouchableOpacity, Text, Animatable } from 'Libraries';
import style from './style';
import { color } from 'Assets';

const InputPassword = (props) => {
  const { onChange, value } = props;
  const [data, setData] = React.useState({
    check_textInputChange: false,
    secureTextEntry: true,
    isValidPassword: true,
  });

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 3) {
      setData({
        ...data,
        password: val,
        isValidPassword: true
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  };

  return (
    <View>
      <View style={style.action}>
        <Ionicons style={style.icons} name='lock-closed-outline' size={25} color={color.primary} />
        <TextInput
          onchange={onChange}
          onChangeText={(val) => handlePasswordChange(val)}
          value={value}
          placeholderTextColor='#666666'
          placeholder='Enter your password'
          autoCapitalize='none'
          style={style.textInput1}
          secureTextEntry={data.secureTextEntry ? true : false}
        />
        <TouchableOpacity onPress={updateSecureTextEntry}>
          {data.secureTextEntry ?
            <Ionicons style={style.icons} name='eye-off-outline' size={25} color={color.primary} />
            :
            <Ionicons style={style.icons} name='eye-outline' size={25} color={color.primary} />
          }
        </TouchableOpacity>
      </View>
      { data.isValidPassword ? null :
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={style.errorMsg}>Password must be 3 characters long.</Text>
        </Animatable.View>
      }
    </View>
  );
};

export default InputPassword;