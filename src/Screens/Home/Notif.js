import { connect, Image, Animatable, useEffect, useState, React, Text, View, useNavigation, ScrollView } from 'Libraries';
import { Button, CardPhotoText } from 'Components';
import style from './style';
import Empty from '../../Assets/Images/undraw_empty_xct9.svg';
import { getAllTransfer } from 'Redux/actions';
import config from 'Configs';

const Notif = props => {
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
        <Text style={style.subtitlePadding}>
          Today
        </Text>
        {props.transfer.data
          ? props.transfer.data.length > 0
            ? props.transfer.data.map((item, idx) => {
              return (
                <CardPhotoText
                  key={idx}
                  image={<Image
                    style={style.img}
                    source={{
                      uri: `${config.imgURL}/${item.photo}`
                    }}
                  />}
                  onPress={() => navigation.navigate('DetailTransaction', { detailTrans: item.id })}
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
        <Text style={style.subtitlePadding}>
          This Week
            </Text>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  transfer: state.transfer,
});

export default connect(mapStateToProps)(Notif);
