import { Button, CardPhotoText, CardPhotoTextPrimary } from 'Components';
import { SafeAreaView, StatusBar, React, Text, View, useNavigation, ScrollView, Ionicons} from 'Libraries';
import style from './style';
import { color } from 'Assets';

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={color.primary} barStyle="light-content" />
      <ScrollView>
        <View style={style.topNav}>
          <CardPhotoTextPrimary
            name='Samuel Suhi'
            detail='+62 1231 1213'
            count={<Ionicons name='notifications-outline' onPress={() => navigation.navigate('Notif')} size={30} color={color.light} />}
          />
        </View>
        <View style={style.between}>
          <Button
            title='Transfer'
            style="primary"
            onPress={() => navigation.navigate('Search')}
            type="primary"/>

          <Button
            title='Top Up'
            style="primary"
            type="primary"
            onPress={() => navigation.navigate('TopUp')}
          />
        </View>
        <Text style={style.subtitlePadding}>
          Transaction History
        </Text>
        <CardPhotoText
          name='Samuel Suhi'
          detail='+62 1231 1213'
          count='Rp.200.000'
        />
      </ScrollView>
      </SafeAreaView>
    // <View>
    //   <CardPhoto/>
    //   <Ionicons name='close' size={20} color='red' />
    //   <Text style={style.btnPrimary}>ini Home</Text>
    //   <Button title="About" onPress={() => navigation.navigate('About')} />
    // </View>
  );
};

export default Home;
