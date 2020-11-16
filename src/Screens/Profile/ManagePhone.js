import {
    Text,
    React,
    View,
    useNavigation,
    ScrollView,
    Ionicons,
} from 'Libraries';
import { CardText } from 'Components';
import style from './style';
import { color } from 'Assets';

const ManagePhone = props => {
    const navigation = useNavigation();
    const { phone } = props.route.params;

    return (
        <ScrollView>
            <View style={style.container2}>
                <Text style={style.textPadding}>
                    You can only delete the phone number and then you must add another phone number.
                </Text>
                <View style={style.between2}>
                    <CardText
                        detail='Primary'
                        button={<Ionicons
                            onPress={() => navigation.navigate('AddPhone', { phoneNum: phone })}
                            name='trash-outline'
                            size={20}
                            color={color.primary}
                        />}
                        type="fullwidth"
                        count={phone}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default ManagePhone;
