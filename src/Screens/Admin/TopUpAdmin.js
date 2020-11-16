import {
  React,
  TouchableHighlight,
  useNavigation,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Ionicons,
  View,
  Modal,
  connect,
  useState,
  useEffect,
  ScrollView,
} from 'Libraries';
import style from './style';
import { color } from 'Assets';
import { Button, Empty } from 'Components';
import { getAllTopUp, postTopUp, patchTopUp, deleteTopUp } from 'Redux/actions';

const TopUpAdmin = props => {
  const navigation = useNavigation();
  const [modalVisibleAdd, setModalVisibleAdd] = useState(false);
  const [modalVisibleEdit, setModalVisibleEdit] = useState(false);
  // const { topUpId } = props.route.params;
  const [topups, setTopups] = useState([]);
  const [data, setData] = useState({
    num: '',
    description: '',
  })

  const handleAddTopup = () => {
    const token = props.auth.data.tokenLogin
    props.dispatch(postTopUp(token, data))
      .then(res => {
        console.log(res);
        props.navigation.navigate('Dashboard');
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  const handleEditTopup = () => {
    const token = props.auth.data.tokenLogin
    const id = props.topUp.data.id
    props.dispatch(postTopUp(token, id, data))
      .then(res => {
        console.log(res);
        props.navigation.navigate('Dashboard');
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  const getAllTopup = () => {
    const token = props.auth.data.tokenLogin;
    props.dispatch(getAllTopUp(token))
      .then(res => {
        console.log(res.value.data, ":res")
        setTopups(res.value.data.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    getAllTopup()
    console.log(props.topUp, 'llll')
  }, []);

  const handleDelete = () => {
    const token = props.auth.data.tokenLogin
    const id = props.topUp.data[0].id
    props.dispatch(deleteTopUp(token, id))
      .then(res => {
        console.log(res);
        // props.navigation.navigate('Dashboard');
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  // const UselessTextInput = (props) => {
  //   return (
  //     <TextInput
  //       {...props}
  //       editable
  //     />
  //   );
  // }

  return (
    <>
      <View style={style.container}>
        <StatusBar backgroundColor={color.darkblue} barStyle="light-content" />
        <View style={style.topNav}>
          <View style={style.row}>
            <Text style={style.headline}>Data Top Up</Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisibleAdd(true)
              }}
            >
              <Ionicons name='add-outline' size={30} color={color.light} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          {props.topUp.data
            ? props.topUp.data.length > 0
              ? props.topUp.data.map((item, idx) => {
          // {props.topUp.data.map((item, idx) => {
            return (
              <View style={style.container2} id={idx}>
                <Text style={style.textPrimary}>{item.num}</Text>
                <Text style={style.helperTextPadding}>{item.description}</Text>
                <View style={style.row}>
                  <TouchableHighlight
                    onPress={() => {
                      setModalVisibleEdit(true);
                    }}
                  >
                    <Ionicons name='pencil-outline' size={20} color={color.primary} />
                  </TouchableHighlight>
                  <Ionicons
                    name='trash-outline'
                    style={{ paddingLeft: 20 }}
                    size={20}
                    color={color.primary}
                    onPress={handleDelete}
                  />
                </View>
              </View>
            )
              })
              : <Text style={style.textLoading}>
                Loading...
              </Text>
            : <Empty />
          }
          {/* // })} */}
        </ScrollView>
      </View>
      {/* modal update */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleEdit}
      >
        <TouchableOpacity style={style.modalFade} onPress={() => setModalVisibleEdit(false)}>
        </TouchableOpacity>
        <View style={style.modalContainer}>
          <View style={style.scrollTit}>
            <Text style={style.textModal}>Update</Text>
          </View>
          <View style={style.modalsCard}>
            <View >
              <Text style={style.desc}>Number</Text>
              <TextInput
                style={style.textSearch2}
                placeholder="Input Number"
                onChangeText={(val) => setData({ ...data, num: val })}
                value={data.num}
              />
            </View>
            <View >
              <Text style={style.desc}>Description</Text>
              {/* <UselessTextInput
                multiline
                numberOfLines={2}
                style={style.textSearch2}
                placeholder="Input Description"
              /> */}
              <TextInput
                style={style.textSearch2}
                placeholder="Input Description"
                onChangeText={(val) => setData({ ...data, description: val })}
                value={data.description}
              />
              <Button
                title='Submit'
                style="primary"
                type="fullwidth"
                onPress={handleEditTopup}
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* <View> */}
      {/* modal Add */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleAdd}
      >
        <TouchableOpacity style={style.modalFade} onPress={() => setModalVisibleAdd(false)}>
        </TouchableOpacity>
        <View style={style.modalContainer}>
          <View style={style.scrollTit}>
            <Text style={style.textModal}>Add</Text>
          </View>
          <View style={style.modalsCard}>
            <View >
              <Text style={style.desc}>Number</Text>
              <TextInput
                style={style.textSearch2}
                placeholder="Input Number"
                onChangeText={(val) => setData({ ...data, num: val })}
                value={data.num}
              />
            </View>
            <View >
              <Text style={style.desc}>Description</Text>
              {/* <UselessTextInput
                multiline
                numberOfLines={3}
                style={style.textSearch2}
                placeholder="Input Description"
                onChangeText={(val) => setData({ ...data, description: val })}
                value={data.description}
              /> */}
              <TextInput
                editable
                multiline
                numberOfLines={3}
                style={style.textSearch2}
                placeholder="Input Description"
                onChangeText={(val) => setData({ ...data, description: val })}
                value={data.description}
              />
              <Button
                title='Submit'
                style="primary"
                type="fullwidth"
                onPress={handleAddTopup}
              />
            </View>
          </View>
        </View>
      </Modal>
      {/* </View> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  topUp: state.topUp,
});

export default connect(mapStateToProps)(TopUpAdmin);

