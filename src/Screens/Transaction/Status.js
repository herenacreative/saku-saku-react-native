import { CardPhotoText, CardText, CardList, CardIcons, Button } from 'Components';
import { React, Text, View, Image, TouchableOpacity, useNavigation, SafeAreaView, ScrollView } from 'Libraries';
import style from './style';

const Status = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.topNav}>
          <CardPhotoText
            name='Samuel Suhi'
            detail='+62 1231 1213'
          />
        </View>
        <View style={style.viewImg}>
          <Image
            style={style.imgStatus}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <Text style={style.headline5}>Transfer Success</Text>
        </View>
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
        <Text style={style.subtitlePadding}>From</Text>
        <CardPhotoText
          name='Samuel Suhi'
          detail='+62 1231 1213'
        />
        <Text style={style.subtitlePadding}>To</Text>
        <CardPhotoText
          name='Samuel Suhi'
          detail='+62 1231 1213'
        />

        <View style={style.btnmargin}>
          <Button
            title='Back To Home'
            style="primary"
            type="fullwidth" onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Status;
