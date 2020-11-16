import {
  Ionicons,
  useEffect,
  Image,
  connect,
  DateRangePicker,
  StatusBar,
  React,
  Text,
  View,
  moment,
  TouchableOpacity,
  useNavigation,
  useState,
  ScrollView,
  Modal
} from 'Libraries';
import { Empty, CardPhotoText } from 'Components';
import style from './style';
import { color } from 'Assets';
import { getAllTransfer } from 'Redux/actions';
import config from 'Configs';

const History = (props) => {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [displayedDate, setDisplayedDate] = useState(moment())
  const [dates, setDates] = useState({ ...dates })
  const [modalVisibleAdd, setModalVisibleAdd] = useState(false);
  const [transfers, setTransfers] = useState([])
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
      <>
        <View style={style.container}>
          <StatusBar
            backgroundColor={color.primary}
            barStyle="light-content"
          />
          <Text style={style.subtitlePadding}>
            This Week
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
            This Month
            </Text>

          <View style={style.btnSmall}>
            <View style={style.btnSmall1}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={style.btn}
              >
                <Ionicons
                  name='arrow-up-outline'
                  size={20}
                  color='red'
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                style={style.btn}
              >
                <Ionicons
                  name='arrow-down-outline'
                  size={20}
                  color='green'
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                setModalVisibleAdd(true);
              }}
              style={style.btnSmall2}>
              <Text style={style.text}>
                Filter by Date
                  </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* modal Add */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleAdd}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={style.modalFade}
            onPress={() => setModalVisibleAdd(false)}
          >
          </TouchableOpacity>
          <View style={style.modalContainer}>
            <View style={style.scrollTit}>
            </View>
            <View style={style.modalsCard}>
              <DateRangePicker
                onChange={setDates}
                endDate={endDate}
                startDate={startDate}
                displayedDate={displayedDate}
                range
              >
                <Text style={style.textModal}>
                  Click Date
                </Text>
              </DateRangePicker>
            </View>
          </View>
        </Modal>
      </>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  transfer: state.transfer,
});

export default connect(mapStateToProps)(History);