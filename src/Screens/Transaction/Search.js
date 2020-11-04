import { React, Text, View, TextInput, Ionicons, useNavigation, SafeAreaView, ScrollView, StatusBar } from 'Libraries';
import { CardPhotoText } from 'Components';
import style from './style';
import { color } from 'Assets';

const Search = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={color.primary} barStyle="light-content" />
      <ScrollView>
        <View style={style.topNav}>
          <View style={style.search}>
            <Ionicons name='search-outline' size={20} color={color.primary} />
            <TextInput style={style.textSearch} placeholder="Search Receiver here" />
          </View>
        </View>

        <Text style={style.subtitlePadding}>Contact</Text>
        <Text style={style.helperTextPadding}>17 Contact Founds</Text>
        <CardPhotoText
          name='Samuel Suhi'
          detail='+62 1231 1213'
          onPress={() => navigation.navigate('Transfer')}
        />
        <CardPhotoText
          name='Samuel Suhi'
          detail='+62 1231 1213'
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
