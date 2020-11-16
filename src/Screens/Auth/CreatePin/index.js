import {
  React,
  View,
  useState,
  SmoothPinCodeInput,
  connect,
  useRef,
} from 'Libraries';
import {
  FormAuth,
  Button
} from 'Components';
import style from './style';
import { patchUser } from 'Redux/actions';

const CreatePin = (props) => {
  const [code, setCode] = useState('');
  const pinInput = useRef();

  const onSubmit = () => {
    const id = props.auth.data.id
    const token = props.auth.data.tokenLogin
    const formData = {
      'pin': code,
      'verify': 1,
    }
    props.dispatch(patchUser(id, formData, token))
      .then(res => {
        console.log(res.value.data.data[0])
        props.navigation.navigate('StatusPin')
      })
      .catch((e) => {
        console.log(e.response)
      });
  };

  return (
    <View>
      <FormAuth
        title='Create Security PIN'
        desc='Create a PIN that’s contain 6 digits number for security purpose in Zwallet.'
        content={
          <View style={style.fomrs}>
            <View style={style.row}>
              <SmoothPinCodeInput
                ref={pinInput}
                value={code}
                codeLength={6}
                onTextChange={code => setCode(code)}
                // onFulfill={onSubmit}
              />
            </View>
            <Button
              title="Confirm"
              style="primary"
              type="fullwidth"
              onPress={onSubmit}
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

export default connect(mapStateToProps)(CreatePin);