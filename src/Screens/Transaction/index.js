import { CardPhotoText, CardIcons, Charts } from 'Components';
import {TouchableOpacity, React, Text, View, useNavigation, SafeAreaView, ScrollView, Ionicons} from 'Libraries';
import style from './style';
Charts
const Transaction = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.card}>
          <CardIcons icons={<Ionicons name='arrow-down-outline' size={20} color='green' />} detail='Income' count='Rp. 21.000.000' />
          <CardIcons icons={<Ionicons name='arrow-up-outline' size={20} color='red' />} detail='Expense' count='Rp. 21.000.000' />
        </View>
        <TouchableOpacity style={style.chart}>
          <Text style={style.subtitle}>In This Week</Text>
        </TouchableOpacity>
        <View>
          <Charts/>
        </View>
        <View style={style.detail}>
            <Text style={style.subtitle}>Transaction History</Text>
          <Text style={style.subtitlePrimary} onPress={() => navigation.navigate('History')}>See all</Text>
        </View>

        <CardPhotoText
          name='Samuel Suhi'
          detail='Income'
          count='Rp. 21.000.000'
        />
        <CardPhotoText
          name='Samuel Suhi'
          detail='Income'
          count='Rp. 21.000.000'
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Transaction;
