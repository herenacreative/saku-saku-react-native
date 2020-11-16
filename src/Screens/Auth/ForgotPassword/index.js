import {
  React,
  View,
  useNavigation,
  useEffect,
  ToastAndroid,
  connect,
} from 'Libraries';
import { FormAuth, Button, InputEmail } from 'Components';
import { requestPassword } from 'Redux/actions';
import style from './style';

const ForgotPassword = (props) => {
  const navigation = useNavigation();
  const [data, setData] = React.useState({ email: '', requestType: 'requestType' });

  const onReset = async () => {
    await props.dispatch(requestPassword(data))
      .then(res => {
        // props.navigation.reset({
        //   index: 0,
        //   routes: [{ name: 'InputOTP' }]
        // })

        // props.navigation.push('OtpResetPassword', { email: data.email, form: 'resetpassword' });
        // props.navigation.navigate("InputOTP")
        props.navigation.replace('Auth')
        console.log(res.value.data.data)
        // return res
      })
      .catch((e) => {
        ToastAndroid.show("Opps email is wrong !", ToastAndroid.SHORT, ToastAndroid.TOP);
        console.log(e.response);
        console.log(e)
      });
  };

  useEffect(() => {
    console.log(props, 'kokoko')
  })

  return (
    <View>
      <FormAuth
        title='Reset Password'
        desc='Enter your Zwallet e-mail so we can send
              you a password reset link.'
        content={
          <View style={style.fomrs}>
            <InputEmail
              onChangeText={(val) => setData({ ...data, email: val })}
              value={data.email}
            />
            {console.log(data.email)}
            <Button
              title="Confirm"
              style="primary"
              type="fullwidth"
              onPress={onReset}
            />
          </View>
        }
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ForgotPassword);