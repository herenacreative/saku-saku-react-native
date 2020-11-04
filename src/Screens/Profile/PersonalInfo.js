import { Button2, CardText, CardPhotoTextPrimary } from 'Components';
import { Switch, Image, StatusBar, Text, React, useState, View, useNavigation, ScrollView, Ionicons } from 'Libraries';
import style from './style';
import { color } from 'Assets';

const PersonalInfo = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={style.container2}>
        <Text style={style.textPadding}>
          We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.
        </Text>
        <CardText detail='Expense' type="fullwidth" count='Rp. 21.000.000' />
        <CardText detail='Expense' type="fullwidth" count='Rp. 21.000.000' />
        <CardText detail='Expense' type="fullwidth" count='Rp. 21.000.000' />
        <CardText detail='Expense' type="fullwidth" button={<Text onPress={() => navigation.navigate('ManagePhone')}>Manage</Text>} count='Rp. 21.000.000' />
      </View>
    </ScrollView>
  );
};

export default PersonalInfo;
