import { React, View, Text, TextInput, Ionicons, useNavigation, TouchableOpacity, Animatable } from 'Libraries';
import { FormAuth, Button, InputPassword, InputEmail } from 'Components';
import style from './style';
import { color } from 'Assets';

const Auth = () => {
  const navigation = useNavigation();
  const [data, setData] = React.useState({
    password: '',
    email: '',
    check_textInputChange: false,
    isValidUser: true,
  });

  const textInputChange = val =>{
    if(val.trim().length >= 3){
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    }else{
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    }
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 3) {
      setData({
        ...data,
        isValidUser: true
      });
    } else {
      setData({
        ...data,
        isValidUser: false
      });
    }
  };


  return (
    <View>
      <FormAuth
        title='Login'
        desc='Login to your existing account to access all the features in Zwallet.'
        footer='Don’t have an account? '
        linkfooter='Let’s Sign Up'
        content={
          <View style={style.fomrs}>
            <View>
              {/* input email */}
              <View style={style.action}>
                <Ionicons style={style.icons} name='mail-outline' size={25} color={color.primary} />
                <TextInput
                  placeholderTextColor='#666666'
                  placeholder= 'Enter your e-mail'
                  autoCapitalize='none'
                  style={style.textInput1}
                  onChangeText={(val) => textInputChange(val)}
                  onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                />
                {data.check_textInputChange ?
                  <Animatable.View animation='bounceIn'>
                    <Ionicons style={style.icons} name='checkmark-circle-outline' size={25} color='green' />
                  </Animatable.View>
                : null}
              </View>
              {data.isValidUser ? null :
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={style.errorMsg}>email must be 4 characters long.</Text>
                </Animatable.View>
              }
              {/* input email */}
              <InputPassword/>
              <InputEmail />
              <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} >
                <Text style={style.text}>
                  Forgot password ?
                </Text>
              </TouchableOpacity>
            </View>
            <Button
              title="Login"
              style="primary"
              type="fullwidth"
            />
          </View>
        }
      />
    </View>
  );
};

export default Auth;