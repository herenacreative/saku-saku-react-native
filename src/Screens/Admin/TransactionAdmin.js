import { color } from 'Assets';
import { CardPhotoText } from 'Components';
import { React, Text, TextInput, useNavigation, StatusBar, TouchableOpacity, Ionicons, View } from 'Libraries';
import style from './style';

const TransactionAdmin = props => {
    const navigation = useNavigation();
    const { num, desc } = props;
    return (
        <View style={style.container}>
            <StatusBar backgroundColor={color.darkblue} barStyle="light-content" />
            <View style={style.topNav}>
                <Text style={style.headline}>Data Transaction</Text>
                <TouchableOpacity>
                    <Ionicons name='add-outline' size={30} color={color.light} />
                </TouchableOpacity>
            </View>

            <View style={style.search}>
                <Ionicons name='search-outline' size={20} color={color.primary} />
                <TextInput style={style.textSearch} placeholder="Search Receiver here" />
            </View>
            <CardPhotoText
                onPress={() => navigation.navigate('DetailTransaction')}
                name='Samuel Suhi'
                detail='Income'
                count='Rp. 12.000.000'
            />
        </View>
    );
};

export default TransactionAdmin;
