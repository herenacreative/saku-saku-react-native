import { React, useState, useEffect, connect, Text, View, TextInput, Ionicons, useNavigation, SafeAreaView, ScrollView, StatusBar } from 'Libraries';
import { CardPhotoText } from 'Components';
import { getAllUsers } from 'Redux/actions';
import style from './style';
import { color } from 'Assets';

const Search = (props) => {
  const navigation = useNavigation();
  const [user, setUser] = useState([]);

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
    console.log(props, 'pp')
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={color.primary} barStyle="light-content" />
      <ScrollView>
        <View style={style.topNav}>
          <View style={style.search}>
            <Ionicons name='search-outline' size={20} color={color.primary} />
            <TextInput style={style.textSearch} placeholder="Search Receiver here" />
          </View>
        </View>

        <Text style={style.subtitlePadding}>Contact</Text>
        <Text style={style.helperTextPadding}>17 Contact Founds</Text>
        <CardPhotoText
          name='Samuel Suhi'
          detail='+62 1231 1213'
          onPress={() => navigation.navigate('Transfer')}
        />
        <CardPhotoText
          name='Samuel Suhi'
          detail='+62 1231 1213'
        />
      </ScrollView>
    </SafeAreaView>
  );
};


const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users,
});

export default connect(mapStateToProps)(Search);

