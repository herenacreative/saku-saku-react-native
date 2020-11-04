import { React, View, Text, useNavigation, TouchableOpacity } from 'Libraries';
import { FormAuth, Button, InputPassword, InputEmail } from 'Components';
import style from './style';

const Auth = () => {
  const navigation = useNavigation();

  return (
    <View>
      <FormAuth
        title='Create Security PIN'
        desc='Create a PIN that’s contain 6 digits number for security purpose in Zwallet.'
        content={
          <View style={style.fomrs}>
            <View>
              <InputEmail />
            </View>
            <Button
              title="Confirm"
              style="primary"
              type="fullwidth"
              onPress={() => navigation.navigate('StatusPin')}
            />
          </View>
        }
      />
    </View>
  );
};

export default Auth;