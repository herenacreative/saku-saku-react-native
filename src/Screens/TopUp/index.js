import {
  React,
  useEffect,
  useState,
  connect,
  Text,
  View,
  useNavigation,
  SafeAreaView,
  ScrollView
} from 'Libraries';
import { CardList, CardPhoto } from 'Components';
import { getAllTopUp } from 'Redux/actions';
import style from './style';
import Add from '../../Assets/Images/logo.svg';

const TopUp = (props) => {
  // const navigation = useNavigation();
  const [topups, setTopups] = useState([]);

  useEffect(() => {
    const token = props.auth.data.tokenLogin;

    props.dispatch(getAllTopUp(token))
      .then(res => {
        console.log(res.value.data, ":res")
        setTopups(res.value.data.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.topNav}>
          <CardPhoto
            image={<Add width={50} height={50} />}
            detail='Virtual Account Number'
            count='2389 081393877946'
          />
        </View>
        <Text style={style.subtitlePadding}>
          How to Top-Up
        </Text>
        {props.topUp.data.map((item, idx) => {
          return (
            <CardList
              id={idx}
              num={item.num}
              desc={item.description}
            />
          )
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  topUp: state.topUp,
});

export default connect(mapStateToProps)(TopUp);
