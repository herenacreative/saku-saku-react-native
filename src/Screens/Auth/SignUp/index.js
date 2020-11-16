import {
  React,
  View,
  Ionicons,
  TextInput,
  Text,
  Animatable,
  connect,
  ToastAndroid,
} from 'Libraries';
import {
  FormAuth,
  Button,
  InputPassword,
  InputEmail
} from 'Components';
import style from './style';
import { color } from 'Assets';
import { register } from 'Redux/actions';

const SignUp = (props) => {
  const [data, setData] = React.useState({
    check_textInputChange: false,
    isValidUser: true,
    email: '',
    password: '',
    username: '',
  });

  const onSubmit = () => {
    props.dispatch(register(data))
      .then(res => {
        console.log(res);
        props.navigation.navigate('Auth');
      })
      .catch((e) => {
        ToastAndroid.show(e.response.data.message, ToastAndroid.SHORT, ToastAndroid.TOP);
        console.log(e);
      });
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
                <Ionicons
                  style={style.icons}
                  name='person-outline'
                  size={25}
                  color={color.primary}
                />
                <TextInput
                  placeholderTextColor='#666666'
                  placeholder='Enter your username'
                  autoCapitalize='none'
                  style={style.textInput1}
                  onChangeText={(val) => setData({ ...data, username: val })}
                  value={data.username}
                />
                {data.check_textInputChange ?
                  <Animatable.View animation='bounceIn'>
                    <Ionicons
                      style={style.icons}
                      name='checkmark-circle-outline'
                      size={25}
                      color='green'
                    />
                  </Animatable.View>
                  : null}
              </View>
              {data.isValidUser ? null :
                <Animatable.View
                  animation="fadeInLeft"
                  duration={500}
                >
                  <Text style={style.errorMsg}>
                    Username must be 3 characters long.
                  </Text>
                </Animatable.View>
              }

              <InputEmail
                onChangeText={(val) => setData({ ...data, email: val })}
                value={data.email}
              />
              <InputPassword
                onChangeText={(val) => setData({ ...data, password: val })}
                value={data.password}
              />
            </View>

            <Button
              title="Sign Up"
              style="primary"
              type="fullwidth"
              onPress={onSubmit}
              disabled={data.email.length <= 1 || data.password.length <= 1 || data.username.length <= 1}
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

export default connect(mapStateToProps)(SignUp);
