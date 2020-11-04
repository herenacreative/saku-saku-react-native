import { React, View, Ionicons, TextInput, Text, useNavigation, Animatable, TouchableOpacity } from 'Libraries';
import { FormAuth, Button, InputPassword, InputEmail } from 'Components';
import style from './style';
import { color } from 'Assets';

const SignUp = () => {
  const navigation = useNavigation();
  const [data, setData] = React.useState({
    check_textInputChange: false,
    isValidUser: true,
  });

  const textInputChange = val => {
    if (val.trim().length >= 3) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
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
        title='Sign Up'
        desc='Create your account to access Zwallet.'
        footer='Already have an account?  '
        linkfooter='Let’s Login'
        link='Auth'
        content={
          <View style={style.fomrs}>

            <View>
              {/* input username */}
              <View style={style.action}>
                <Ionicons style={style.icons} name='mail-outline' size={25} color={color.primary} />
                <TextInput
                  placeholderTextColor='#666666'
                  placeholder='Enter your username'
                  autoCapitalize='none'
                  style={style.textInput1}
                  onChangeText={(val) => handleValidUser(val)}
                />
                {data.check_textInputChange ?
                  <Animatable.View animation='bounceIn'>
                    <Ionicons style={style.icons} name='checkmark-circle-outline' size={25} color='green' />
                  </Animatable.View>
                  : null}
              </View>
              {data.isValidUser ? null :
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={style.errorMsg}>Username must be 3 characters long.</Text>
                </Animatable.View>
              }
              {/* input username */}
              <View>
                <InputEmail />
              </View>
              <View>
                <InputPassword/>
              </View>
            </View>
            
            <Button
              title="Sign Up"
              style="primary"
              type="fullwidth"
              onPress={() => navigation.navigate('CreatePin')}
            />
          </View>
        }
      />
    </View>
  );
};

export default SignUp;