import { CardPhotoText, Button } from 'Components';
import { React, Text, View, TextInput, Ionicons, useNavigation, SafeAreaView, ScrollView, StatusBar } from 'Libraries';
import style from './style';
import { color } from 'Assets';

const Transfer = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={color.primary} barStyle="light-content" />
            <ScrollView>
                <View style={style.topNav}>
                    <CardPhotoText
                        name='Samuel Suhi'
                        detail='+62 1231 1213'
                    />
                </View>
                <TextInput placeholder='0.00' style={style.inputs1}/>
                <View style={style.textcenter}>
                    <Text style={style.subtitle}>Rp 120.00 Available</Text>
                </View>
                <View style={style.action}>
                    <Ionicons style={style.icons} name='pencil-outline' size={25} color={color.primary} />
                    <TextInput
                        placeholderTextColor='#666666'
                        placeholder='Add some notes'
                        autoCapitalize='none'
                        style={style.textInput1}
                        onChangeText={(val) => handleValidUser(val)}
                    />
                </View>
                <View style={style.textcenter}>
                <Button
                    title='Continue'
                    style="primary"
                    type="fullwidth"
                    onPress={() => navigation.navigate('Confirmation')}
                />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Transfer;
