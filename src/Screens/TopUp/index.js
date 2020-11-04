import { CardPhotoText, CardText, CardList, CardIcons, Button, CardPhoto } from 'Components';
import { React, Text, View, TextInput, TouchableOpacity, useNavigation, SafeAreaView, ScrollView } from 'Libraries';
import style from './style';

const TopUp = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.topNav}>
          <CardPhoto
            count='Samuel Suhi'
            detail='+62 1231 1213'
          />
        </View>
        <Text style={style.subtitlePadding}>How to Top-Up</Text>
        <CardList num='1' desc='Type the virtual account number that we provide you at the top.' />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TopUp;
