import {
  CardPhotoText,
  CardText,
  Button
} from 'Components';
import {
  React,
  useEffect,
  useNavigation,
  View,
  SafeAreaView,
  ScrollView,
  connect,
  Image,
} from 'Libraries';
import style from './style';
import config from 'Configs';
import { postTransfer } from 'Redux/actions';

const Confirmation = (props) => {
  const { transferId } = props.route.params;
  const navigation = useNavigation();

  const data = {
    'receiver_id': transferId.receiver_id,
    'sender_id': transferId.sender_id,
    'amount': transferId.amount,
    'notes': transferId.notes,
    'balance': transferId.total,
    'date': transferId.date,
    'time': transferId.time,
  }

  // const onSubmit = () => {
  //   const token = transferId.props.auth.data.tokenLogin
  //   const data = {
  //     'receiver_id': transferId.receiver_id,
  //     'sender_id': transferId.sender_id,
  //     'amount': transferId.amount,
  //     'notes': transferId.notes,
  //   }

  //   transferId.props.dispatch(postTransfer(token, data))
  //     .then(res => {
  //       console.log(res.value.data.data[0], 'lp');
  //       props.navigation.navigate('Status');
  //     })
  //     .catch((e) => {
  //       console.log(e.response);
  //     });
  // };

  // useEffect(() => {
  //   console.log('o', props, )
  // }, [])

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.topNav}>
          <CardPhotoText
            image={<Image
              style={style.img}
              source={{
                uri: `${config.imgURL}/${transferId.props.users.data[0].photo}`
              }}
            />}
            name={transferId.props.users.data[0].fullname}
            detail={transferId.props.users.data[0].phone}
          />
        </View>
        <View style={style.betweens}>
          <View>
            <View style={style.card1}>
              <CardText detail='Amount' count={transferId.amount} />
              <CardText detail='Balance Left' count={transferId.total} />
            </View>
            <View style={style.card1}>
              <CardText detail='Date' count={transferId.date} />
              <CardText detail='Time' count={transferId.time} />
            </View>
            <View style={style.card1}>
              <CardText detail='Notes' type="fullwidth" count={transferId.notes} />
            </View>
          </View>
          <View style={style.btnmargin}>
            <Button
              title='Continue'
              style="primary"
              type="fullwidth"
              onPress={() => navigation.navigate('InputPin', {transferId: data})}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  transfer: state.transfer,
});

export default connect(mapStateToProps)(Confirmation);