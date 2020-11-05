import { React, TouchableOpacity, Text, View } from 'Libraries';
import style from './style';

const CardPhotoText = props => {
    const { name, detail, count, onPress, image, key } = props;
    return (
        <TouchableOpacity style={style.container} onPress={onPress}>
            <View>
                {image}
                {key}
            </View>
            <View style={style.desc}>
                <Text style={style.subtitle}>{name}</Text>
                <Text style={style.helperText}>{detail}</Text>
            </View>
            <Text style={style.descRight}>{count}</Text>
        </TouchableOpacity>
    );
};

export default CardPhotoText;
