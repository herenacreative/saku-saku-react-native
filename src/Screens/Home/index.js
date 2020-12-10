import {
  connect,
  Image,
  StatusBar,
  React,
  Text,
  View,
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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transfers: [],

    }
  }
  // receiver = penerima
  // sender = pengirim

 

  //get data transfer
  getAllTransfers = async () => {
    const { tokenLogin, balance, id } = this.props.auth.data;
    const token = tokenLogin;
    const idx = id;
    this.socket = io(`${config.serverURL}`);
    await this.props.dispatch(getAllTransfer(token, idx))
      .then(res => {
        // console.log(this.state, 'res', res.value.data.data)
        this.socket.emit('message', { transfers: 'message' })
        this.setState({
          transfers: res.value.data.data
        },
        () => {
          console.log('this', this.state.transfers)
        });
      })
      .catch((e) => {
        console.log(e);
        console.log(e.response);
      });
  };

  componentDidMount() {
    this.socket = io(`${config.serverURL}`);
    console.log(this.socket, 'oi')
    this.socket.on('message', msg => {
      console.log(msg, 'msg')
      this.setState({
        transfers: [...this.state.transfers, msg]
      });
    });
    this.getAllTransfers();
  }

  componentWillUnmount(){
    this.socket.disconnect();
    this.socket.removeEventListener();
  }

  render(){
    console.log(this.state.transfers, 'lo')
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
                uri: `${config.imgURL}/${this.props.auth.data.photo}`
              }}
            />}
            onPress={() => this.props.navigation.navigate('Profile')}
            name="Balance"
            // detail={test()}
            detail={this.props.auth.data.balance}
            count={
              <Ionicons
                name='notifications-outline'
                onPress={() => this.props.navigation.navigate('Notif')}
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
            onPress={() => this.props.navigation.navigate('Search')}
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
            onPress={() => this.props.navigation.navigate('TopUp')}
          />
        </View>
        <Text style={style.subtitlePadding}>
          Transaction History
        </Text>
        {this.state.transfers
          ? this.state.transfers.length > 0
            ? this.state.transfers.map((item, idx) => {
              console.log(this.state.transfers, 'transs')
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
                  count={item.receiver_id === this.props.auth.data.id ?
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
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  transfer: state.transfer,
});


export default connect(mapStateToProps)(Home);
