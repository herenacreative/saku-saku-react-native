import {
    Button,
    InputPassword
} from 'Components';
import {
    Text,
    React,
    View,
    useNavigation,
    ScrollView,
    useState,
    connect,
    useEffect,
    ToastAndroid,
} from 'Libraries';
import { patchUser } from 'Redux/actions';
import style from './style';

const ChangePassword = (props) => {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation();
    const { userId } = props.route.params;

    const onSubmit = () => {
        // if (oldPassword != props.auth.data.password) {
        //     console.log('Password Lama Salah')
        // } else {
            // if (newPassword == confirmPassword) {
            //     console.log('Password Baru Tidak Sama')
            // } else {
                const id = props.auth.data.id
                const token = props.auth.data.tokenLogin
                const formData = {
                    'password': password
                }
                props.dispatch(patchUser(id, formData, token))
                    .then(() => {
                        props.navigation.navigate('Profile');
                        ToastAndroid.show("Update change password success !", ToastAndroid.SHORT, ToastAndroid.TOP);
                        // console.log('Change Password Successfully')
                    })
                    .catch((error) => {
                        // console.log('Upss Change Password Not Successful...')
                        ToastAndroid.show('Upss change password Not Successful...', ToastAndroid.SHORT, ToastAndroid.TOP);
                        console.log(error);
                    })
            // }else{
            //     ToastAndroid.show("Password Baru Tidak Sama !", ToastAndroid.SHORT, ToastAndroid.TOP);
            // }
        // }
    }

    useEffect(() => {
        // console.log(userId.auth, 'kkk', oldPassword)
    }, [])

    return (
        <ScrollView>
            <View style={style.container2}>
                <Text style={style.textPadding}>
                    You must enter your current password and then type your new password twice.
                </Text>
                <View style={style.between}>
                    <View>
                        <InputPassword
                            onChangeText={(val) => setOldPassword({ oldPassword: val })}
                            value={oldPassword}
                        />
                        <InputPassword
                            onChangeText={(val) => setNewPassword({ newPassword: val })}
                            value={newPassword}
                        />
                        <InputPassword
                            onChangeText={(val) => setPassword(val)}
                            value={password}
                        />

                    </View>
                    <Button
                        title="Change Password"
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

export default connect(mapStateToProps)(ChangePassword);
