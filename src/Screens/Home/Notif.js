import {
  connect,
  Image,
  useEffect,
  useState,
  React,
  Text,
  View,
  useNavigation,
  ScrollView
} from 'Libraries';
import { Empty, CardPhotoText } from 'Components';
import style from './style';
import { getAllTransfer } from 'Redux/actions';
import config from 'Configs';

const Notif = props => {
  const navigation = useNavigation();
  const [transfers, setTransfers] = useState([]);
  const formatMoney = `Rp ${props.auth.data.balance}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

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
                  name={item.fullname}
                  detail={item.phone}
                  count={item.receiver_id === props.auth.data.id ?
                    (<Text style={{ color: 'green' }}>+ {formatMoney}</Text>)
                    : (<Text style={{ color: 'red' }}>- {formatMoney}</Text>)
                  }
                />
              )
            })
            : <Text>Loading...</Text>
          : <Empty />
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
