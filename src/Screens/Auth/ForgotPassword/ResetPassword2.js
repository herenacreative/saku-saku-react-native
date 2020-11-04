import { React, View, useNavigation } from 'Libraries';
import { FormAuth, Button, InputPassword } from 'Components';
import style from './style';

const ForgotPassword2 = () => {
  const navigation = useNavigation();

  return (
    <View>
      <FormAuth
        title='Reset Password'
        desc='Create and confirm your new password so
                      you can login to Zwallet.'
        content={
          <View style={style.fomrs2}>
            <View>
              <InputPassword />
              <InputPassword />
            </View>
            <Button
              title="Reset Password"
              style="primary"
              type="fullwidth"
              onPress={() => navigation.navigate('Auth')}
            />
          </View>
        }
      />
    </View>
  );
};

export default ForgotPassword2;