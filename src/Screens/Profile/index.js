import { Button2, Button } from 'Components';
import { Switch, RefreshControl, useEffect, Alert, Image, ImagePicker, TouchableOpacity, connect, Text, React, useState, View, useNavigation, ScrollView, Ionicons, Modal, TextInput } from 'Libraries';
import style from './style';
import { color } from 'Assets';
import { logout, patchUser, getIdUsers } from 'Redux/actions';
import config from 'Configs';

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const Profile = props => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = React.useState({
    fullname: props.auth.data.fullname,
    photo: props.auth.data.photo,
  });
  const [newImage, setNewImage] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [modalVisibleEdit, setModalVisibleEdit] = useState(false);

  const onSubmit = () => {
    props.dispatch(logout());
    navigation.navigate('Login');
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  const handleChoosePhoto = () => {
    console.log('test');
    const options = {
      noData: true,
    }
    ImagePicker.showImagePicker(options, response => {
      if (response.uri) {
        if (response.fileSize > 1024 * 1024 * 3) {
          Alert.alert('Image size is too large.', 'The maximum size is 3 MB. Please choose another image.')
        } else {
          setNewImage(response);
        }
      }
    })
  }

  const getIDUser = async () => {
    const token = props.auth.data.tokenLogin;
    const id = props.auth.data.id;
    await props.dispatch(getIdUsers(token, id))
      .then(res => {
        setData(res.value.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getIDUser()
    if (newImage !== null) handleEdit();
  }, [newImage])

  const handleEdit = () => {
    const id = props.auth.data.id;
    const formdata = {
      'fullname': data.fullname,
    };
    const token = props.auth.data.tokenLogin;
    // let formdata = new FormData();
    // formdata.append('fullname', data.fullname);
    // formdata.append('photo', {
    //   name: newImage ? newImage.fileName : props.auth.data.photo,
    //   uri: newImage ? newImage.uri : null,
    //   type: newImage ? newImage.type : null,
    // });
    props.dispatch(patchUser(id, formdata, token))
      .then(res => {
        // props.dispatch(getIdUsers(props.auth.data.id, props.auth.data.tokenLogin))
        console.log(res);
        setModalVisibleEdit(false);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  return (
    <ScrollView
    refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <View style={style.container3}>
        <View style={style.detail}>
          {newImage
            ? <TouchableOpacity onPress={() => handleChoosePhoto()}>
              <Image
                source={{ uri: `${newImage.uri}` }}
                style={style.img}
              />
            </TouchableOpacity>
            : <TouchableOpacity onPress={() => handleChoosePhoto()}>
              <Image
                source={{ uri: `${config.imgURL}/${props.auth.data.photo}` }}
                style={style.img}
              />
            </TouchableOpacity>}
          <TouchableOpacity
            onPress={() => {
              setModalVisibleEdit(true);
            }}
          >
            <Text style={style.helperText} >Edit</Text>
          </TouchableOpacity>
          <Text style={style.title}>{props.auth.data.fullname}</Text>
          <Text style={style.text}>{props.auth.data.phone}</Text>

        </View>
        <Button2
          onPress={() => navigation.navigate('PersonalInfo')}
          title='Personal Information'
          icons={<Ionicons name='arrow-forward-outline' size={20} color={color.dark} />}
        />
        <Button2
          onPress={() => navigation.navigate('ChangePassword', {userId: props})}
          title='Change Password'
          icons={<Ionicons name='arrow-forward-outline' size={20} color={color.dark} />}
        />
        <Button2
          onPress={() => navigation.navigate('ChangePin')}
          title='Change PIN'
          icons={<Ionicons name='arrow-forward-outline' size={20} color={color.dark} />}
        />
        <Button2
          title='Notification'
          icons={<Switch
            trackColor={{ false: "#767577", true: "#6379F4" }}
            thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />}
        />
        <Button2
          onPress={onSubmit}
          title='Logout'
        />
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
            <View style={{marginBottom: 35}}>
              <Text style={style.desc}>Fullname</Text>
              <TextInput 
                style={style.textSearch2}
                placeholder="Input your fullname"
                onChangeText={(val) => setData({ ...data, fullname: val })}
                value={data.fullname}
              />
            </View>
            <View>
              <Button
                title='Submit'
                style="primary"
                type="fullwidth"
                onPress={handleEdit}
              />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users,
});

export default connect(mapStateToProps)(Profile)