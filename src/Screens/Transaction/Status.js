import { CardPhotoText, CardText, Button } from 'Components';
import { React, Text, Image, useEffect, View, connect, useNavigation, ScrollView } from 'Libraries';
import style from './style';
import config from 'Configs';
import Success from '../../Assets/Images/success.svg';

const Status = (props) => {
  const navigation = useNavigation();
  const { transferId } = props.route.params;

  useEffect(() => {
    console.log(transferId, 'o', props,)
  }, [])


  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.topNav}>
          <CardPhotoText
            name='Samuel Suhi'
            detail='+62 1231 1213'
          />
        </View>
        <View style={style.viewImg}>
          <Success width={100} height={100} />
          {/* <Image
            style={style.imgStatus}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          /> */}
          <Text style={style.headline5}>Transfer Success</Text>
        </View>
        <View style={style.card1}>
          <CardText detail='Amount' count={props.transfer.data.amount} />
          <CardText detail='BalanceLeft' count={transferId.balance} />
        </View>
        <View style={style.card1}>
          <CardText detail='Date' count={transferId.date} />
          <CardText detail='Time' count={transferId.time} />
        </View>
        <View style={style.card1}>
          <CardText detail='Notes' type="fullwidth" count={transferId.notes} />
        </View>
        <Text style={style.subtitlePadding}>From</Text>
        <CardPhotoText
          image={<Image
            style={style.img}
            source={{
              uri: `${config.imgURL}/${props.auth.data.photo}`
            }}
          />}
          name={props.auth.data.fullname}
          detail={props.auth.data.phone}
        />
        <Text style={style.subtitlePadding}>To</Text>
        <CardPhotoText
          image={<Image
            style={style.img}
            source={{
              uri: `${config.imgURL}/${props.users.data[0].photo}`
            }}
          />}
          name={props.users.data[0].fullname}
          detail={props.users.data[0].phone}
        />

        <View style={style.btnmargin}>
          <Button
            title='Back To Home'
            style="primary"
            type="fullwidth" onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  transfer: state.transfer,
  users: state.users,
});

export default connect(mapStateToProps)(Status);
