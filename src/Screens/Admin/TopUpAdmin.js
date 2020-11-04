import { React, TouchableHighlight, useNavigation, Text, TextInput, StatusBar, TouchableOpacity, Ionicons, View, Modal, useState, Alert } from 'Libraries';
import style from './style';
import { color } from 'Assets';
import { Button } from 'Components';

const TopUpAdmin = props => {
  const navigation = useNavigation();
  const [modalVisibleAdd, setModalVisibleAdd] = useState(false);
  const [modalVisibleEdit, setModalVisibleEdit] = useState(false);

  const UselessTextInput = (props) => {
    return (
      <TextInput
        {...props}
        editable
      />
    );
  }

  return (
    <View style={style.container}>
      <StatusBar backgroundColor={color.darkblue} barStyle="light-content" />
      <View style={style.topNav}>
        <View style={style.row}>
          <Text style={style.headline}>Data Top Up</Text>
          <TouchableOpacity
            onPress={() => {
              setModalVisibleAdd(true);
            }}
          >
            <Ionicons name='add-outline' size={30} color={color.light} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.container2}>
        <Text style={style.textPrimary}>1</Text>
        <Text style={style.helperTextPadding}>Cara Top Up</Text>
        <View style={style.row}>
          <TouchableHighlight
            onPress={() => {
              setModalVisibleEdit(true);
            }}
          >
            <Ionicons name='pencil-outline' size={20} color={color.primary} />
          </TouchableHighlight>
          <Ionicons name='trash-outline' style={{ paddingLeft: 20 }} size={20} color={color.primary} />
        </View>
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
              <TextInput style={style.textSearch2} placeholder="Input Number" />
            </View>
            <View >
              <Text style={style.desc}>Description</Text>
              <UselessTextInput
                multiline
                numberOfLines={2}
                style={style.textSearch2}
                placeholder="Input Description"
              />
              <Button
                title='Submit'
                style="primary"
                type="fullwidth"
              />
            </View>
          </View>
        </View>
      </Modal>
      
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
              <TextInput style={style.textSearch2} placeholder="Input Number" />
            </View>
            <View >
              <Text style={style.desc}>Description</Text>
              <UselessTextInput
                multiline
                numberOfLines={2}
                style={style.textSearch2}
                placeholder="Input Description"
              />
              <Button
                title='Submit'
                style="primary"
                type="fullwidth"
              />
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
};

export default TopUpAdmin;
