import {
  React,
  connect,
  Image,
  Text,
  useState,
  View,
  TextInput,
  useEffect,
  Ionicons,
  useNavigation,
  ScrollView,
  StatusBar,
  moment,
} from 'Libraries';
import { CardPhotoText, Button } from 'Components';
import { getIdUsers } from 'Redux/actions';
import style from './style';
import { color } from 'Assets';
import config from 'Configs';

const Transfer = (props) => {
  const navigation = useNavigation();
  const [user, setUser] = useState({});
  const { userId } = props.route.params;
  const [data, setData] = React.useState({
    amount: '',
    notes: '',
    receiver_id: userId,
    sender_id: props.auth.data.id,
    created_at: moment().format('MMMM Do YYYY, h:mm:ss a'),
    date: moment().format('LL'),
    time: moment().format('LT'),
  });

  const total = props.auth.data.balance - data.amount
  const formatMoney = `Rp ${total}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const getIDUser = async () => {
    const token = props.auth.data.tokenLogin;
    const id = userId;
    await props.dispatch(getIdUsers(token, id))
      .then(res => {
        setUser(res.value.data.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getIDUser();
    console.log(props.users.data, 'koko')
  }, []);

  return (
    <ScrollView>
      <View style={style.container}>
        <StatusBar
          backgroundColor={color.primary}
          barStyle="light-content"
        />

        <View style={style.topNav}>
          <CardPhotoText
            image={<Image
              style={style.img}
              source={{
                uri: `${config.imgURL}/${props.users.data.photo}`
              }}
            />}
            name={props.users.data[0].fullname}
            detail={props.users.data[0].phone}
          />
        </View>

        <TextInput
          placeholder='0.00'
          style={style.inputs1}
          onChangeText={(val) => setData({ ...data, amount: val })}
          value={data.amount}
        />
        <View style={style.textcenter}>
          <Text style={style.subtitle}>
            {formatMoney} Available
          </Text>
        </View>
        <View style={style.action}>
          <Ionicons
            style={style.icons}
            name='pencil-outline'
            size={25}
            color={color.primary}
          />
          <TextInput
            placeholderTextColor='#666666'
            placeholder='Add some notes'
            autoCapitalize='none'
            style={style.textInput1}
            onChangeText={(val) => setData({ ...data, notes: val })}
            value={data.notes}
          />
        </View>
        <View style={style.textcenter}>
          <Button
            title='Continue'
            style="primary"
            type="fullwidth"
            onPress={() => navigation.navigate('Confirmation', { transferId: { ...data, total, userId, props } })}
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

export default connect(mapStateToProps)(Transfer);
