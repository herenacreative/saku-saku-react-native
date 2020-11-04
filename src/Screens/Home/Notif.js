import { Button, CardPhotoText, CardPhotoTextPrimary } from 'Components';
import { SafeAreaView, StatusBar, React, Text, View, useNavigation, ScrollView, Ionicons } from 'Libraries';
import style from './style';
import { color } from 'Assets';

const Notif = () => {
   const navigation = useNavigation();

   return (
      <ScrollView>
         <View style={style.container}>
            <Text style={style.subtitlePadding}>
               Today
            </Text>
            <CardPhotoText
               name='Samuel Suhi'
               detail='+62 1231 1213'
               count='Rp.200.000'
            />
            <Text style={style.subtitlePadding}>
               This Week
            </Text>
            <CardPhotoText
               name='Samuel Suhi'
               detail='+62 1231 1213'
               count='Rp.200.000'
            />
         </View>
      </ScrollView>
   );
};

export default Notif;
