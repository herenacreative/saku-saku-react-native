import { React, View, Text, useNavigation, TouchableOpacity } from 'Libraries';
import { FormAuth, Button, InputPassword, InputEmail } from 'Components';
import style from './style';

const Auth = () => {
  const navigation = useNavigation();

  return (
    <View>
      <FormAuth
        title='Login'
        desc='Login to your existing account to access all the features in Zwallet.'
        footer='Don’t have an account? '
        linkfooter='Let’s Sign Up'
        link='SignUp'
        content={
          <View style={style.fomrs}>
            <View>
              <InputEmail />
              <InputPassword/>
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
              onPress={() => navigation.navigate('TopUpAdmin')}
            />
          </View>
        }
      />
    </View>
  );
};

export default Auth;