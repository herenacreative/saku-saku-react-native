import { React, Text, TextInput, StatusBar, ScrollView, Ionicons, View } from 'Libraries';
import style from './style';
import { color } from 'Assets';
import { Charts } from 'Components';

const Dashboard = props => {
  const { num, desc } = props;
  return (
    <ScrollView>
    <View style={style.container}>
      <StatusBar backgroundColor={color.darkblue} barStyle="light-content" />
      <View style={style.topNav}>
        <Text style={style.headline}>Dashboard</Text>
      </View>
      <View>
      <View style={style.card}>
        <Ionicons name='pencil-outline' style={{marginTop: 10}} size={20} color={color.light} />
        <Text style={[style.helperTextPadding,{ marginTop: 13}]} >Total User</Text>
        <Text style={style.title}>120</Text>
      </View>
      <View style={style.card}>
        <Ionicons name='pencil-outline' style={{ marginTop: 10 }} size={20} color={color.light} />
        <Text style={[style.helperTextPadding, { marginTop: 13 }]}>Total Transaction</Text>
        <Text style={style.title}>120</Text>
      </View>
      <View style={style.card}>
        <Ionicons name='pencil-outline' style={{ marginTop: 10 }} size={20} color={color.light} />
        <Text style={[style.helperTextPadding, { marginTop: 13 }]}>Total Balance</Text>
      </View>
       <Text style={[style.title, {marginLeft: 15}]}>120</Text>
       </View>
      <View style={style.card2}>
        <Charts/>
      </View>
    </View>
    </ScrollView>
  );
};

export default Dashboard;
