import {
    CardPhotoText,
    CardText,
    Button
} from 'Components';
import {
    React,
    useEffect,
    View,
    SafeAreaView,
    ScrollView,
    connect,
    Image,
    useState,
    useRef,
    SmoothPinCodeInput,
} from 'Libraries';
import style from './style';
import config from 'Configs';
import { postTransfer, patchUser } from 'Redux/actions';
import { Text } from 'Libraries/dist/index.dev';

const InputPin = (props) => {
    const { transferId } = props.route.params;
    const [code, setCode] = useState('');
    const pinInput = useRef();

    const onSubmit = () => {
        if(props.auth.data.pin == code){
            console.log(transferId, 'ttfff')
            const token = props.auth.data.tokenLogin
            const id = props.auth.data.id
            const data = {
                'receiver_id': transferId.receiver_id,
                'sender_id': transferId.sender_id,
                'amount': transferId.amount,
                'notes': transferId.notes,
            }
        props.dispatch(postTransfer(token, data))
            .then(res => {
                // const formData = {
                //     'balance': transferId.balance,
                // }
                // props.dispatch(patchUser(id, formData, token))
                // .then(res => {
                    console.log(res.value.data.data[0], 'lp');
                    props.navigation.navigate('Status', {transferId});
                //     })
                // .catch((e) => {
                //     console.log(e.response);
                // });
            })
            .catch((e) => {
                console.log(e.response);
            });
        }else{
            console.log('pin beda')
            console.log(props.auth.data.pin, 'l', code)
        }
    };

    useEffect(() => {
      console.log(transferId, 'o', props, 'l', code )
    }, [])

    return (
        <View style={style.container}>
                <View style={style.betweens}>
                    <View style={style.center}>
                    <Text style={{fontSize: 24, fontWeight:'bold'}}>Enter PIN to Transfer</Text>
                    <Text style={{ marginVertical: 20, textAlign: 'center' }}>Enter your 6 digits PIN for confirmation to continue transferring money. </Text>
                    <SmoothPinCodeInput
                        ref={pinInput}
                        value={code}
                        codeLength={6}
                        onTextChange={code => setCode(code)}
                    // onFulfill={onSubmit}
                    />
                    </View>
                    <View style={style.btnmargin}>
                        <Button
                            title='Continue'
                            style="primary"
                            type="fullwidth"
                            onPress={onSubmit}
                        />
                    </View>
                </View>
        </View>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    users: state.users,
    transfer: state.transfer,
});

export default connect(mapStateToProps)(InputPin);