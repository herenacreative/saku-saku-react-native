import { React, View, useNavigation } from 'Libraries';
import { FormAuth, Button } from 'Components';
import style from './style';
import Success from '../../../Assets/Images/success.svg';

const StatusPin = () => {
  const navigation = useNavigation();

  return (
    <View>
      <FormAuth
        title='PIN Successfully Created'
        desc='Your PIN was successfully created and you can now 
        access all the features in Zwallet. 
        Login to your new account and start exploring!'
        content={
          <View style={style.fomrsSuccess}>
            <View style={style.imgs}>
              <Success width={100} height={100} />
            </View>
            <Button
              title="Login"
              style="primary"
              type="fullwidth"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        }
      />
    </View>
  );
};

export default StatusPin;