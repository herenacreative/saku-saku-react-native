import { connect, useEffect, StatusBar, React, Text, View, useNavigation, ScrollView, Ionicons} from 'Libraries';
import { Button, CardPhotoText, CardPhotoTextPrimary } from 'Components';
import style from './style';
import { color } from 'Assets';

const Home = (props) => {
  const navigation = useNavigation();

  useEffect(() => {
    console.log('props:', props)
  }, [])

  return (
    <ScrollView>
    <View style={style.container}>
      <StatusBar backgroundColor={color.primary} barStyle="light-content" />
        <View style={style.topNav}>
          <CardPhotoTextPrimary
            // onPress={() => navigation.navigate('Profile')}
  name={<Text onPress={() => navigation.navigate('Profile')}>{props.auth.data.fullname}</Text>}
            detail={props.auth.data.phone}
            count={<Ionicons name='notifications-outline' onPress={() => navigation.navigate('Notif')} size={30} color={color.light} />}
          />
        </View>

        <View style={style.between}>
          <Button
            title='Transfer'
            style="primary"
            onPress={() => navigation.navigate('Search')}
            type="primary"/>

          <Button
            title='Top Up'
            style="primary"
            type="primary"
            onPress={() => navigation.navigate('TopUp')}
          />
        </View>
        <Text style={style.subtitlePadding}>
          Transaction History
        </Text>
        {props.transfer.data.map(item => (
          <CardPhotoText
            name={item.receiver_id}
            detail={item.amount}
            count={item.balance}
          />

        ))}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  transfer: state.transfer
});

export default connect(mapStateToProps)(Home);
