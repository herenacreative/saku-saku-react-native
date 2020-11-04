import { color } from 'Assets';
import { Button, CardText } from 'Components';
import { React, Text, TextInput, StatusBar, TouchableOpacity, Ionicons, View } from 'Libraries';
import { Image } from 'Libraries/dist/index.dev';
import style from './style';

const DetailTransaction = props => {
    const { num, desc } = props;
    return (
        <View style={style.container1}>
            <StatusBar backgroundColor={color.primary} barStyle="light-content" />
            <Image
                style={style.img}
                source={{
                    uri: 'https://images.unsplash.com/photo-1604304194650-3ba3cfa752fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80',
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
