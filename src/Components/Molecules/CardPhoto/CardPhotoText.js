import {React, TouchableOpacity, Image, Text, View} from 'Libraries';
import style from './style';

const CardPhotoText = props => {
    const {name, detail, count, onPress} = props;
    return (
        <TouchableOpacity style={style.container} onPress={onPress}>
            <Image
                style={style.img}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <View style={style.desc}>
                <Text style={style.subtitle}>{name}</Text>
                <Text style={style.helperText}>{detail}</Text>
            </View>
                <Text style={style.descRight}>{count}</Text>
        </TouchableOpacity>
    );
};

export default CardPhotoText;
