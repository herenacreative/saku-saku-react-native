import { React, Text, TextInput, useState, useNavigation, StatusBar, TouchableOpacity, Ionicons, View, Modal } from 'Libraries';
import style from './style';
import { color } from 'Assets';
import { CardPhotoText, Button } from 'Components';

const TransactionAdmin = props => {
    const navigation = useNavigation();
    const [modalVisibleAdd, setModalVisibleAdd] = useState(false);

    const UselessTextInput = (props) => {
        return (
            <TextInput
                {...props}
                editable
            />
        );
    }
    return (
        <View style={style.container}>
            <StatusBar backgroundColor={color.darkblue} barStyle="light-content" />
            <View style={style.topNav}>
                <View style={style.row}>
                    <Text style={style.headline}>Data Transaction</Text>
                    <TouchableOpacity 
                    onPress={() => {
                        setModalVisibleAdd(true);
                    }}>
                        <Ionicons name='add-outline' size={30} color={color.light} />
                    </TouchableOpacity>
                </View>
                <View style={style.search}>
                    <Ionicons name='search-outline' size={20} color={color.primary} />
                    <TextInput style={style.textSearch} placeholder="Search Receiver here" />
                </View>
            </View>

            
            <CardPhotoText
                onPress={() => navigation.navigate('DetailTransaction')}
                name='Samuel Suhi'
                detail='Income'
                count='Rp. 12.000.000'
            />

            {/* modal Add */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleAdd}
            >
                <TouchableOpacity style={style.modalFade} onPress={() => setModalVisibleAdd(false)}>
                </TouchableOpacity>
                <View style={style.modalContainer}>
                    <View style={style.scrollTit}>
                        <Text style={style.textModal}>Add</Text>
                    </View>
                    <View style={style.modalsCard}>
                        <View >
                            <Text style={style.desc}>Number</Text>
                            <TextInput style={style.textSearch2} placeholder="Input Number" />
                        </View>
                        <View >
                            <Text style={style.desc}>Description</Text>
                            <UselessTextInput
                                multiline
                                numberOfLines={2}
                                style={style.textSearch2}
                                placeholder="Input Description"
                            />
                            <Button
                                title='Submit'
                                style="primary"
                                type="fullwidth"
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default TransactionAdmin;
