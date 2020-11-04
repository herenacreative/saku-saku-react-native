import { Button, InputPassword, CardPhotoTextPrimary } from 'Components';
import { Switch, Image, StatusBar, Text, React, useState, View, useNavigation, ScrollView, Ionicons } from 'Libraries';
import style from './style';
import { color } from 'Assets';

const ChangePassword = () => {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={style.container2}>
                <Text style={style.textPadding}>
                    You must enter your current password and then type your new password twice.
                </Text>
                <View style={style.between}>
                    <View>
                        <InputPassword />
                        <InputPassword />
                        <InputPassword />

                    </View>
                <Button
                    title="Change Password"
                    style="primary"
                    type="fullwidth"
                    onPress={() => navigation.navigate('Home')}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default ChangePassword;
