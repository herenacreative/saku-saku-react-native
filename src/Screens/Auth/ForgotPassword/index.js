import {
  React,
  View,
  ToastAndroid,
  connect,
} from 'Libraries';
import { FormAuth, Button, InputEmail } from 'Components';
import { requestPassword } from 'Redux/actions';
import style from './style';

const ForgotPassword = (props) => {
  const [data, setData] = React.useState({
    email: '',
  });

  const onReset = () => {
    const datas = {
      'email' : data.email,
      'requestPassword': 'resetPassword',
    };
    props.dispatch(requestPassword(datas))
      .then(res => {
        console.log(res.value.data.data)
        props.navigation.navigate('InputOTP', {
          email: data.email, form: 'resetpassword'
        });
      })
      .catch((e) => {
        ToastAndroid.show("Opps email is wrong !", ToastAndroid.SHORT, ToastAndroid.TOP);
        console.log(e)
      });
  };

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
              onPress={()=>onReset()}
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