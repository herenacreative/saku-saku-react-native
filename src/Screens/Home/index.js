import { connect, useState, Image, Animatable, useEffect, StatusBar, React, Text, View, useNavigation, ScrollView, Ionicons } from 'Libraries';
import { Button, CardPhotoText, CardPhotoTextPrimary } from 'Components';
import style from './style';
import { color } from 'Assets';
import { getAllTransfer } from 'Redux/actions';
import config from '../../Configs/index';
import Empty from '../../Assets/Images/undraw_empty_xct9.svg';

const Home = (props) => {
  const navigation = useNavigation();
  const [transfers, setTransfers] = useState([])

  const getAllTransfers = async () => {
    const token = props.auth.data.tokenLogin;
    const id = props.auth.data.id;
    await props.dispatch(getAllTransfer(token, id))
      .then(res => {
        setTransfers(res.value.data.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getAllTransfers();
  }, []);

  return (
    <ScrollView>
      <View style={style.container}>
        <StatusBar backgroundColor={color.primary} barStyle="light-content" />
        <View style={style.topNav}>
          <CardPhotoTextPrimary
            image={<Image
              style={style.img}
              source={{
                uri: `${config.imgURL}/${props.auth.data.photo}`
              }}
            />}
            onPress={() => navigation.navigate('Profile')}
            name="Balance"
            detail={props.auth.data.balance}
            count={
              <Ionicons
                name='notifications-outline'
                onPress={() => navigation.navigate('Notif')}
                size={25}
                color={color.light}
              />}
          />
        </View>

        <View style={style.between}>
          <Button
            title={
              <>
                <Ionicons name='arrow-up-outline' size={25} color={color.primary} />
                <Text> Transfer</Text>
              </>
            }
            style={color.grey}
            onPress={() => navigation.navigate('Search')}
            type="primary"
          />

          <Button
            title={
              <>
                <Ionicons name='add-outline' size={25} color={color.primary} />
                <Text> Top Up</Text>
              </>
            }
            style={color.grey}
            type="primary"
            onPress={() => navigation.navigate('TopUp')}
          />
        </View>
        <Text style={style.subtitlePadding}>
          Transaction History
        </Text>
        {props.transfer.data
          ? props.transfer.data.length > 0
            ? props.transfer.data.map((item, idx) => {
              return (
                <CardPhotoText
                  onPress={() => navigation.navigate('DetailTransaction', { detailTrans: item.id })}
                  key={idx}
                  image={<Image
                    style={style.img}
                    source={{
                      uri: `${config.imgURL}/${item.photo}`
                    }}
                  />}
                  name={item.fullname}
                  detail={item.phone}
                  count={item.amount}
                />
              )
            })
            : <Text>Loading...</Text>
          : (<Animatable.View animation='bounceIn' duration={6000}>
            <View style={style.icons} >
              <Empty width={150} height={150} />
              <Text style={style.title}>No Data</Text>
              <Button
                title='Create Transfer'
                style="primary"
                onPress={() => navigation.navigate('Search')}
                type="primary" />
            </View>
          </Animatable.View>)
        }
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  transfer: state.transfer,
});

export default connect(mapStateToProps)(Home);
