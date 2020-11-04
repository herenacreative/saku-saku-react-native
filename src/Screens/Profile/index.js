import { Button2} from 'Components';
import { Switch, Image, connect, Text, React, useState, View, useNavigation, ScrollView, Ionicons } from 'Libraries';
import style from './style';
import { color } from 'Assets';
import { logout } from 'Redux/actions';

const Profile = props => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onSubmit = () => {
    props.logout();
    navigation.navigate('Auth');
  }
  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.detail}>
          <Image
            style={style.img}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <Text style={style.helperText}>Edit</Text>
          <Text style={style.title}>Sinta Herena</Text>
          <Text style={style.text}>+62 12312 13213</Text>

        </View>
        <Button2
          onPress={() => navigation.navigate('PersonalInfo')}
          title='Personal Information'
          icons={<Ionicons name='arrow-forward-outline' size={20} color='#fff' />}
        />
        <Button2
          onPress={() => navigation.navigate('ChangePassword')}
          title='Change Password'
          icons={<Ionicons name='arrow-forward-outline' size={20} color='#fff' />}
        />
        <Button2
          onPress={() => navigation.navigate('ChangePin')}
          title='Change PIN'
          icons={<Ionicons name='arrow-forward-outline' size={20} color='#fff' />}
        />
        <Button2
          title='Notification'
          icons={<Switch
            trackColor={{ false: "#767577", true: "#6379F4" }}
            thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />}
        />
        <Button2
          onPress={onSubmit}
          title='Logout'
        />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { logout }

export default connect(mapStateToProps, mapDispatchToProps)(Profile)