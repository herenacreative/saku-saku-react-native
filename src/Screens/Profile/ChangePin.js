import { Button, InputPassword } from 'Components';
import { ToastAndroid, Text, connect, SmoothPinCodeInput, useState, useRef, React, View, useNavigation, ScrollView } from 'Libraries';
import style from './style';
import { color } from 'Assets';
import { patchUser } from 'Redux/actions';

const ChangePin = (props) => {
    const navigation = useNavigation();
    const [code, setCode] = useState('');
    const pinInput = useRef();

    const onSubmit = () => {
        const id = props.auth.data.id
        const token = props.auth.data.tokenLogin
        const formData = {
            'pin': code
        }
        props.dispatch(patchUser(id, formData, token))
            .then(res => {
                console.log(res.value.data.data[0]);
                props.navigation.navigate('Profile');
                ToastAndroid.show("Update pin success !", ToastAndroid.SHORT, ToastAndroid.TOP);
            })
            .catch((e) => {
                console.log(e.response);
            });
    };

    return (
        <ScrollView>
            <View style={style.container2}>
                <Text style={style.textPadding}>
                    Enter your current 6 digits Zwallet PIN below to continue to the next steps.
                </Text>
                <View style={{ ...style.between, alignItems: 'center' }}>
                    <SmoothPinCodeInput
                        ref={pinInput}
                        value={code}
                        codeLength={6}
                        onTextChange={code => setCode(code)}
                    // onFulfill={onSubmit}
                    />
                    <Button
                        title="Continue"
                        style="primary"
                        type="fullwidth"
                        onPress={onSubmit}
                    />
                </View>
            </View>
        </ScrollView>
    );
};


const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(ChangePin);
