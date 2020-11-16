import { color } from 'Assets';
import {CardText} from 'Components';
import {
  connect,
  Text,
  React,
  View,
  useNavigation,
  ScrollView,
} from 'Libraries';
import style from './style';

const PersonalInfo = props => {
  const navigation = useNavigation();
  const name = props.auth.data.fullname;
  const firstname = name.split(' ').slice(0, -1).join(' ');
  const lastname = name.split(' ').slice(-1).join(' ');

  return (
    <ScrollView>
      <View style={style.container2}>
        <Text style={style.textPadding}>
          We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.
        </Text>
        <CardText
          detail='First Name'
          type="fullwidth"
          count={firstname}
        />
        <CardText
          detail='Last Name'
          type="fullwidth"
          count={lastname}
        />
        <CardText
          detail='Verified E-mail'
          type="fullwidth"
          count={props.auth.data.email}
        />
        <CardText
          detail='Phone Number'
          type="fullwidth"
          count={props.auth.data.phone}
          button={
          <Text 
            style={{color: color.primary}}
              onPress={() => navigation.navigate('ManagePhone', { phone: props.auth.data.phone })}
          >
            Manage
          </Text>
          }
        />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PersonalInfo)
