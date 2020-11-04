import { CardPhotoText, CardText, CardList, CardIcons, Button } from 'Components';
import { React, Text, View, TextInput, TouchableOpacity, useNavigation, SafeAreaView, ScrollView } from 'Libraries';
import style from './style';

const Confirmation = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.topNav}>
          <CardPhotoText
            name='Samuel Suhi'
            detail='+62 1231 1213'
          />
        </View>
        <View style={style.betweens}>
          <View>
            <View style={style.card1}>
              <CardText detail='Income' count='Rp. 21.000.000' />
              <CardText detail='Expense' count='Rp. 21.000.000' />
            </View>
            <View style={style.card1}>
              <CardText detail='Income' count='Rp. 21.000.000' />
              <CardText detail='Expense' count='Rp. 21.000.000' />
            </View>
            <View style={style.card1}>
              <CardText detail='Expense' type="fullwidth" count='Rp. 21.000.000' />
            </View>
          </View>
          <View style={style.btnmargin}>
            <Button
              title='Continue'
              style="primary"
              type="fullwidth"
              onPress={() => navigation.navigate('Status')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Confirmation;
