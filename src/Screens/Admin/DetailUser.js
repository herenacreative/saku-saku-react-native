import { React, Text, TextInput, useState, StatusBar, TouchableOpacity, Image, Modal, View } from 'Libraries';
import { color } from 'Assets';
import { Button, CardText } from 'Components';
import style from './style';

const DetailUser = props => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={color.primary} barStyle="light-content" />
      <Image
        style={style.img}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View style={style.card3}>
        <CardText detail='Income' count='Rp. 21.000.000' />
        <CardText detail='Expense' count='Rp. 21.000.000' />
      </View>
      <View style={style.card3}>
        <CardText detail='Income' count='Rp. 21.000.000' />
        <CardText detail='Expense' count='Rp. 21.000.000' />
      </View>
      <CardText detail='Expense' type="fullwidth" count='Rp. 21.000.000' />
      <CardText detail='Expense' type="fullwidth" count='Rp. 21.000.000' />
      <CardText detail='Expense' type="fullwidth" count='Rp. 21.000.000' />
      <View style={style.btnmargin}>
        <Button
          title='Continue'
          style="primary"
          type="fullwidth"
          onPress={() => {
            setModalVisible(true);
          }}
        />
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

export default DetailUser;
