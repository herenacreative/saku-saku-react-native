import {React, TouchableOpacity, Image, Text} from 'Libraries';
import style from './style';

const CardPhotoTextPrimary = props => {
    const {name, detail, count} = props;
    return (
        <TouchableOpacity style={style.container4}>
            <Image
                style={style.img}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <TouchableOpacity style={style.desc}>
                <Text style={style.helperTextlight}>{name}</Text>
                <Text style={style.subtitlelight}>{detail}</Text>
            </TouchableOpacity>
                <Text style={style.descRight}>{count}</Text>
        </TouchableOpacity>
    );
};

export default CardPhotoTextPrimary;
