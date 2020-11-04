import { Button, InputPassword, CardPhotoTextPrimary } from 'Components';
import { Switch, Image, StatusBar, Text, React, useState, View, useNavigation, ScrollView, Ionicons } from 'Libraries';
import style from './style';
import { color } from 'Assets';

const AddPhone = () => {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={style.container2}>
                <Text style={style.textPadding}>
                    Add at least one phone number for the transfer ID so you can start transfering your money to another user.
                </Text>
                <View style={style.between}>
                    <View>
                        <InputPassword />

                    </View>
                    <Button
                        title="Continue"
                        style="primary"
                        type="fullwidth"
                        onPress={() => navigation.navigate('Home')}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default AddPhone;
