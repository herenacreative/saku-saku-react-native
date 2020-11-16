import { TouchableOpacity, useState, useEffect, Image, connect, React, Text, View, useNavigation, SafeAreaView, ScrollView, Ionicons } from 'Libraries';
import { CardPhotoText, Empty, CardIcons, Charts } from 'Components';
import style from './style';
import { getAllTransfer } from 'Redux/actions';
import config from 'Configs';


const Transaction = (props) => {
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
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.card}>
          <CardIcons icons={<Ionicons name='arrow-down-outline' size={20} color='green' />} detail='Income' count='Rp. 21.000.000' />
          <CardIcons icons={<Ionicons name='arrow-up-outline' size={20} color='red' />} detail='Expense' count='Rp. 21.000.000' />
        </View>
        <TouchableOpacity style={style.chart}>
          <Text style={style.subtitle}>In This Week</Text>
        </TouchableOpacity>
        <View>
          <Charts />
        </View>
        <View style={style.detail}>
          <Text style={style.subtitle}>Transaction History</Text>
          <Text style={style.subtitlePrimary} onPress={() => navigation.navigate('History')}>See all</Text>
        </View>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  transfer: state.transfer,
});

export default connect(mapStateToProps)(Transaction);
