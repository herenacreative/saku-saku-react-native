import {
    useEffect,
    Text,
    React,
    useState,
    View,
    useNavigation,
    ScrollView,
    TextInput,
    Ionicons,
    connect,
    ToastAndroid,
} from 'Libraries';
import { Button } from 'Components';
import style from './style';
import { color } from 'Assets';
import { patchUser } from 'Redux/actions';

const AddPhone = (props) => {
    const navigation = useNavigation();
    const [data, setData] = React.useState({
        phone: ''
    });

    const onSubmit = () => {
        const id = props.auth.data.id
        const token = props.auth.data.tokenLogin
        const formData = {
            'phone': data.phone
        }
        props.dispatch(patchUser(id, formData, token))
            .then(res => {
                console.log(res);
                props.navigation.navigate('Profile');

                ToastAndroid.show("Update mobile phone sucess !", ToastAndroid.SHORT, ToastAndroid.TOP);
            })
            .catch((e) => {
                console.log(e.response);

                ToastAndroid.show("Upss mobile phone Not Successful...", ToastAndroid.SHORT, ToastAndroid.TOP);
            });
    };

    useEffect(() => {
        // console.log(phoneNum, 'aaa')
    }, []);

    return (
        <ScrollView>
            <View style={style.container2}>
                <Text style={style.textPadding}>
                    Add at least one phone number for the transfer ID so you can start transfering your money to another user.
                </Text>
                <View style={style.between}>
                    <View style={style.action}>
                        <Ionicons
                            style={style.icons}
                            name='call-outline'
                            size={25}
                            color={color.primary}
                        />
                        <TextInput
                            placeholderTextColor='#666666'
                            placeholder='Enter your phone number'
                            autoCapitalize='none'
                            style={style.textInput1}
                            onChangeText={(val) => setData({ ...data, phone: val })}
                            value={data.phone}
                            // type="number"
                        />
                    </View>
                    <Button
                        title="Submit"
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
    users: state.users,
});

export default connect(mapStateToProps)(AddPhone);