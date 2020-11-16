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
import { confirmPassword } from 'Redux/actions';

const InputOTP = (props) => {
    const [code, setCode] = useState('');
    const pinInput = useRef();

    const onSubmit = () => {
        const data = {
            'otp': code,
        }
        props.dispatch(confirmPassword(data))
            .then(res => {
                console.log(res.value.data.data[0])
                props.navigation.navigate('ForgotPassowrd2')
            })
            .catch((e) => {
                console.log(e.response)
            });
    };

    return (
        <View>
            <FormAuth
                title='Input your OTP'
                desc='Input a OTP that’s contain 6 digits number for security purpose in Saku Saku.'
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

export default connect(mapStateToProps)(InputOTP);