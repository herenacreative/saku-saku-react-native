import {
  React,
  Image,
  useState,
  useEffect,
  connect,
  Text,
  View,
  TextInput,
  Ionicons,
  useNavigation,
  ScrollView,
  StatusBar,
} from 'Libraries';
import { CardPhotoText, Empty } from 'Components';
import { getAllUsers } from 'Redux/actions';
import style from './style';
import { color } from 'Assets';
import config from 'Configs';

const Search = (props) => {
  const navigation = useNavigation();
  const [user, setUser] = useState([]);
  const [searching, setSeaching] = useState('');

  const onSearch = async () => {
    const token = props.auth.data.tokenLogin;
    const search = searching || ''
    const page = 1 || ''
    await props.dispatch(getAllUsers(token, search, page))
      .then(res => {
        setUser(res.value.data.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getAllUser = async () => {
    const token = props.auth.data.tokenLogin;
    await props.dispatch(getAllUsers(token))
      .then(res => {
        setUser(res.value.data.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getAllUser();
    console.log(onSearch(), 'pp')
  }, []);

  return (
    <ScrollView>
      <View style={style.container}>
        <StatusBar backgroundColor={color.primary} barStyle="light-content" />
        <View style={style.topNav}>
          <View style={style.search}>
            <Ionicons name='search-outline' size={20} color={color.primary} />
            <TextInput
              style={style.textSearch}
              placeholder="Search Receiver here"
              // onSubmitEditing={onSearch}
              onChangeText={(val) => setSeaching( val )}
              // defaultValue= ''
              {...props}
              value={onSearch}
            />
            {/* {console.log(searchStore)} */}
          </View>
        </View>

        <Text style={style.subtitlePadding}>Contact</Text>
        <Text style={style.helperTextPadding}>{props.users.data.length} Contact Founds</Text>
        {props.users.data
          ? props.users.data.length > 0
            ? props.users.data.map((item, idx) => {
              return (
                <CardPhotoText
                  key={idx}
                  image={<Image
                    style={style.img}
                    source={{
                      uri: `${config.imgURL}/${item.photo}`
                    }}
                  />}
                  onPress={() => navigation.navigate('Transfer', { userId: item.id })}
                  name={item.fullname}
                  detail={item.phone}
                  count={item.amount}
                />
              )
            })
            : <Text>Loading...</Text>
          : <Empty />
        }
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users,
});

export default connect(mapStateToProps)(Search);
