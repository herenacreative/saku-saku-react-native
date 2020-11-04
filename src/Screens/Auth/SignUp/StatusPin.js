import { React, View, Image, useNavigation, TouchableOpacity } from 'Libraries';
import { FormAuth, Button, InputPassword, InputEmail } from 'Components';
import style from './style';

const StatusPin = () => {
  const navigation = useNavigation();

  return (
    <View>
      <FormAuth
        title='PIN Successfully Created'
        desc='Your PIN was successfully created and you can now 
        access all the features in Zwallet. Login to your new account and start exploring!'
        content={
          <View style={style.fomrsSuccess}>
            <View style={style.imgs}>
              <Image
                style={style.img}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
            </View>
            <Button
              title="Login"
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

export default StatusPin;