import { React, Text, ScrollView, TextInput, useState, StatusBar, TouchableOpacity, Image, Modal, View } from 'Libraries';
import { color } from 'Assets';
import { Button, CardText } from 'Components';
import style from './style';

const DetailUser = props => {
  const [modalVisibleEdit, setModalVisibleEdit] = useState(false);
  return (
    <ScrollView>
    <View style={style.container1}>
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
            setModalVisibleEdit(true);
          }}
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
              <View>
                <Text style={style.desc}>Number</Text>
                <TextInput style={style.textSearch2} placeholder="Input Number" />
              </View>
              <View>
                <Text style={style.desc}>Number</Text>
                <TextInput style={style.textSearch2} placeholder="Input Number" />
              </View>
              <Button
                title='Submit'
                style="primary"
                type="fullwidth"
              />
            </View>
          </View>
        </Modal>

    </View>
    </ScrollView>
  );
};

export default DetailUser;
