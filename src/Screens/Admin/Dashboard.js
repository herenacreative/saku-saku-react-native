import {
  React,
  useNavigation,
  connect,
  TouchableOpacity,
  Text,
  StatusBar,
  ScrollView,
  Ionicons,
  View,
} from 'Libraries';
import style from './style';
import { color } from 'Assets';
import { Charts } from 'Components';
import { logout } from 'Redux/actions';

const Dashboard = props => {
  // const navigation = useNavigation();
  const formatMoney = `Rp ${props.auth.data.balance}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const onSubmit = async () => {
    await props.dispatch(logout());
    props.navigation.navigate('Auth');
  };

  return (
    <ScrollView>
      <View style={style.container1}>
        <StatusBar
          backgroundColor={color.darkblue}
          barStyle="light-content"
        />
        <View style={style.topNav}>
          <View style={style.row}>
            <Text style={style.headline}>
              Dashboard
          </Text>
            <TouchableOpacity
              onPress={onSubmit}
            >
              <Ionicons
                name='log-out-outline'
                size={30}
                color={color.light}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={style.card}>
            <Ionicons
              name='people-outline'
              style={{ marginTop: 10 }}
              size={20}
              color={color.darkblue}
            />
            <Text style={[style.helperText, { marginTop: 13 }]} >
              Total User
            </Text>
            <Text style={style.title}>
              {props.users.data.length}
            </Text>
          </View>
          <View style={style.card}>
            <Ionicons
              name='wallet-outline'
              style={{ marginTop: 10 }}
              size={20}
              color={color.darkblue}
            />
            <Text style={[style.helperText, { marginTop: 13 }]}>
              Total Transaction
            </Text>
            <Text style={style.title}>
              {/* {props.transfer.data.length} */}
              50
            </Text>
          </View>
          <View style={style.card}>
            <Ionicons
              name='cash-outline'
              style={{ marginTop: 10 }}
              size={20}
              color={color.darkblue}
            />
            <Text style={[style.helperText, { marginTop: 13 }]}>
              Total Balance
            </Text>
          </View>
          <Text style={[style.title, { marginLeft: 15 }]}>
            {formatMoney}
          </Text>
        </View>
        <Charts />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users,
  transfer: state.transfer,
});

export default connect(mapStateToProps)(Dashboard);
