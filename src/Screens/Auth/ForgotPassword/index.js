import { React, View, useNavigation } from 'Libraries';
import { FormAuth, Button, InputEmail } from 'Components';
import style from './style';

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <View>
      <FormAuth
        title='Reset Password'
        desc='Enter your Zwallet e-mail so we can send
              you a password reset link.'
        content={
          <View style={style.fomrs}>
            <InputEmail />
            <Button
              title="Confirm"
              style="primary"
              type="fullwidth"
              onPress={() => navigation.navigate('ForgotPassword2')}
            />
          </View>
        }
      />
    </View>
  );
};

export default ForgotPassword;