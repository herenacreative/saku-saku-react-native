import { color } from 'Assets';
import { Button, CardText } from 'Components';
import { React, Text, TextInput, StatusBar, TouchableOpacity, Ionicons, View } from 'Libraries';
import { Image } from 'Libraries/dist/index.dev';
import style from './style';

const DetailTransaction = props => {
    const { num, desc } = props;
    return (
        <View style={style.container}>
            <StatusBar backgroundColor={color.primary} barStyle="light-content" />
            <Image
                style={style.img}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <View style={style.card3}>
                <CardText detail='Income' count='Rp. 21.000.000' />
                <CardText detail='Expense' count='Rp. 21.000.000' />
            </View>
            <CardText detail='Expense' type="fullwidth" count='Rp. 21.000.000' />
            <CardText detail='Expense' type="fullwidth" count='Rp. 21.000.000' />
        </View>
    );
};

export default DetailTransaction;
