import { React, TouchableHighlight, Text, TextInput, StatusBar, TouchableOpacity, Ionicons, View, Modal, useState, Alert } from 'Libraries';
import style from './style';
import { color } from 'Assets';

const TopUpAdmin = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeModal, setActiveModal] = useState('');

  const handleUpdate = (e) => {
    setActiveModal(e);
    setModalVisible(false);
  }
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={color.darkblue} barStyle="light-content" />
      <View style={style.topNav}>
        <Text style={style.headline}>Data Top Up</Text>
        <TouchableOpacity>
          <Ionicons name='add-outline' size={30} color={color.light} />
        </TouchableOpacity>
      </View>

      <View style={style.search}>
        <Ionicons name='search-outline' size={20} color={color.primary} />
        <TextInput style={style.textSearch} placeholder="Search Receiver here" />
      </View>
      <View style={style.container2}>
        <Text style={style.textPrimary}>1</Text>
        <Text style={style.helperTextPadding}>Cara Top Up</Text>
        <View style={style.row}>
          <TouchableHighlight
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Ionicons name='pencil-outline' size={20} color={color.primary} />
          </TouchableHighlight>
          <Ionicons name='trash-outline' style={{ paddingLeft: 20 }} size={20} color={color.primary} />
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <TouchableOpacity style={style.modalFade} onPress={() => setModalVisible(false)}>
        </TouchableOpacity>
        <View style={style.modalContainer}>
          <View style={style.scrollTit}>
            <Text style={style.textModal}>Update</Text>
            <View style={style.modalsCard}>
              <Text> hahahah </Text>
              <Text> hahahah </Text>
              <Text> hahahah </Text>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
};

export default TopUpAdmin;
