import { color } from 'Assets';
import { CardPhotoText } from 'Components';
import { React, useNavigation, Text, TextInput, StatusBar, TouchableOpacity, Ionicons, View } from 'Libraries';
import style from './style';

const UserAdmin = props => {
    const navigation = useNavigation();
    return (
        <View style={style.container}>
            <StatusBar backgroundColor={color.darkblue} barStyle="light-content" />
            <View style={style.topNav}>
                <Text style={style.headline}>Data User</Text>
                <TouchableOpacity>
                    <Ionicons name='add-outline' size={30} color={color.light} />
                </TouchableOpacity>
            </View>

            <View style={style.search}>
                <Ionicons name='search-outline' size={20} color={color.primary} />
                <TextInput style={style.textSearch} placeholder="Search Receiver here" />
            </View>
            <CardPhotoText
                onPress={() => navigation.navigate('DetailUser')}
                name='Samuel Suhi'
                detail='Income'
                count={
                    <View style={style.row}>
                        <Ionicons name='pencil-outline' size={20} color={color.primary} />
                        <Ionicons name='trash-outline' style={{ paddingLeft: 20 }} size={20} color={color.primary} />
                    </View>
                }
            />
            
        </View>
    );
};

export default UserAdmin;
