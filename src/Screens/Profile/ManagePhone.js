import { Button, InputPassword, CardPhotoTextPrimary, CardText } from 'Components';
import { Switch, Image, StatusBar, Text, React, useState, View, useNavigation, ScrollView, Ionicons } from 'Libraries';
import style from './style';
import { color } from 'Assets';

const ManagePhone = () => {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={style.container2}>
                <Text style={style.textPadding}>
                    You can only delete the phone number and then you must add another phone number.
                </Text>
                <View style={style.between2}>
                    <CardText detail='Expense' button={<Ionicons name='arrow-forward-outline' size={20} color={color.primary} />} type="fullwidth" count='Rp. 21.000.000'/>
                    <View style={style.btn}>
                    <Button
                        title="Continue"
                        style="primary"
                        type="fullwidth"
                        onPress={() => navigation.navigate('AddPhone')}
                        />

                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default ManagePhone;
