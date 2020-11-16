import {
   React,
   useNavigation,
   Animatable,
   View,
   Text,
} from 'Libraries';
import Icons from '../../../Assets/Images/undraw_empty_xct9.svg';
import { Button } from 'Components';
import style from './style';

const Empty = () => {
   const navigation = useNavigation();

   return (
      <View>
         <Animatable.View
            animation='bounceIn'
            duration={6000}
         >
            <View style={style.icons}>
               <Icons width={150} height={150} />
               <Text style={style.title}>
                  No Data
          </Text>
               <Button
                  title='Create Transfer'
                  style="primary"
                  onPress={() => navigation.navigate('Search')}
                  type="primary"
               />
            </View>
         </Animatable.View>
      </View>
   );
};

export default Empty;
