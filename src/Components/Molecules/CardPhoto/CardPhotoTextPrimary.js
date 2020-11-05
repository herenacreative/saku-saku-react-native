import { React, TouchableOpacity, View, Text } from 'Libraries';
import style from './style';

const CardPhotoTextPrimary = props => {
    const { name, detail, count, image, onPress } = props;
    return (
        <View style={style.container4}>
            <TouchableOpacity onPress={onPress}>
                {image}
            </TouchableOpacity>
            <View style={style.desc}>
                <Text style={style.helperTextlight}>{name}</Text>
                <Text style={style.subtitlelight}>{detail}</Text>
            </View>
            <TouchableOpacity>
                <Text style={style.descRight}>{count}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CardPhotoTextPrimary;
