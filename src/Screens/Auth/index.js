import {
  React,
  connect,
  View,
  Text,
  useNavigation,
  TouchableOpacity,
  ToastAndroid,
} from 'Libraries';
import {
  FormAuth,
  Button,
  InputPassword,
  InputEmail,
} from 'Components';
import style from './style';
import { login } from 'Redux/actions';

const Auth = (props) => {
  const navigation = useNavigation();
  const [data, setData] = React.useState({ email: '', password: '' });

  const onSubmit = () => {
    props.dispatch(login(data))
      .then(res => {
        console.log(res.value.data.data[0])
        props.navigation.navigate('Home');
      })
      .catch((e) => {
        ToastAndroid.show("Opps email or password is wrong !", ToastAndroid.SHORT, ToastAndroid.TOP);
        console.log(e.response);
      });
  };

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
              <InputEmail
                onChangeText={(val) => setData({ ...data, email: val })}
                value={data.email}
              />
              <InputPassword
                onChangeText={(val) => setData({ ...data, password: val })}
                value={data.password}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}
              >
                <Text style={style.text}>
                  Forgot password ?
                </Text>
              </TouchableOpacity>
            </View>
            <Button
              title="Login"
              style="primary"
              type="fullwidth"
              onPress={onSubmit}
              // disabled={data.email.length <= 1 || data.password.length <= 1}
              
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

export default connect(mapStateToProps)(Auth);