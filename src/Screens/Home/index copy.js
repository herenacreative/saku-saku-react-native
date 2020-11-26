import {
  connect,
  useState,
  Image,
  useEffect,
  StatusBar,
  React,
  Text,
  View,
  useNavigation,
  ScrollView,
  Ionicons,
  io,
} from 'Libraries';
import {
  Button,
  Empty,
  CardPhotoText,
  CardPhotoTextPrimary,
} from 'Components';
import style from './style';
import { color } from 'Assets';
import { getAllTransfer } from 'Redux/actions';
import config from 'Configs';

const Home = (props) => {
  // receiver = penerima
  // sender = pengirim
  //props
  const { tokenLogin, balance, id } = props.auth.data;
  const { receiver_id, amount } = props.transfer.data;
  //navigation
  const navigation = useNavigation();
  //state
  const [transfers, setTransfers] = useState([]);
  const [messages, setMessages] = useState([]);
  const socket = io(`${config.serverURL}`);

 

  //get data transfer
  const getAllTransfers = async () => {
    const token = tokenLogin;
    const idx = id;
    // let socket = io(`${config.serverURL}`);
    await props.dispatch(getAllTransfer(token, idx))
      .then(res => {
        socket.emit('transfers', { data: 'datas' })
        setTransfers({
          transfers: res.value.data.data[0]
        },
        () => {
          console.log(transfers)
        });
      })
      .catch((e) => {
        console.log(e);
        console.log(e.response);
      });
  };

  // eksekusi balance
  const test = () => {
    let countAmount = props.transfer.data.map(item => {
      const countBalance = parseInt(item.amount)
      return countBalance;
    })
    let sum = countAmount.reduce((x, y) => x + y, 0);
    const formatMoney = `Rp ${sum}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return formatMoney;
  }

  useEffect(() => {
    const socket = io(`${config.serverURL}`);
    socket.on('message', msg => {
      console.log(msg, 'msg')
      setTransfers({
        // transfers: [...transfers, msg]
        ...transfers,
        msg
      });
    });
    getAllTransfers();
    console.log('formatMoney', test())
  }, []);
  
  return (
    <ScrollView>
      <View style={style.container}>
        <StatusBar
          backgroundColor={color.primary}
          barStyle="light-content"
        />
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
            // detail={test()}
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
                <Ionicons
                  name='arrow-up-outline'
                  size={25}
                  color={color.primary}
                />
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
                <Ionicons
                  name='add-outline'
                  size={25}
                  color={color.primary}
                />
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
              //parseInt
              const countBalance = parseInt(item.amount)
              //convert to negativeMoney
              const negativeMoney = -Math.abs(countBalance)
              //format money
              const formatMoneyAmountNegative = `Rp ${negativeMoney}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
              const formatMoneyAmountPositive = `Rp ${countBalance}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

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
                    (<Text style={{ color: 'green' }}>+ {formatMoneyAmountPositive}</Text>)
                    : (<Text style={{ color: 'red' }}> {formatMoneyAmountNegative}</Text>)
                  }
                />
              )
            })
            : <Text style={style.textLoading}>
              Loading...
              </Text>
          : <Empty />
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
