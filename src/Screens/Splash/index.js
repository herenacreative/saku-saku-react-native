import {React, View, Text, Animatable, StatusBar} from 'Libraries';
import style from './style';
import Ilus from '../../Assets/Images/Splash/undraw_digital_currency_qpak.svg';
import { color } from 'Assets';

const Splash = () => {
    return (
        <View style={style.container}>
            <StatusBar backgroundColor={color.primary} barStyle="light-content" />
            <Animatable.View animation='rubberBand' duration={6000}>
                <Ilus width={150} height={150} />
                <Text style={style.headline}>Saku Saku</Text>
            </Animatable.View>
        </View>
    );
};

export default Splash;