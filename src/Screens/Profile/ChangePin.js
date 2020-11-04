import { Button, InputPassword, CardPhotoTextPrimary } from 'Components';
import { Switch, Image, StatusBar, Text, React, useState, View, useNavigation, ScrollView, Ionicons } from 'Libraries';
import style from './style';
import { color } from 'Assets';

const ChangePin = () => {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={style.container2}>
                <Text style={style.textPadding}>
                    Enter your current 6 digits Zwallet PIN below to continue to the next steps.
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

export default ChangePin;
