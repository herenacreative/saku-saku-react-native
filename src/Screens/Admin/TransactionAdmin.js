import {
   connect,
   React,
   Text,
   TextInput,
   useState,
   useNavigation,
   StatusBar,
   TouchableOpacity,
   Ionicons,
   View,
   Modal,
   useEffect,
   ScrollView,
} from 'Libraries';
import style from './style';
import { color } from 'Assets';
import {
   Button,
   Empty,
   CardText
} from 'Components';
import { getAdminTransfer } from 'Redux/actions';

const TransactionAdmin = props => {
   // const navigation = useNavigation();
   const [transfers, setTransfers] = useState([]);
   const [modalVisibleAdd, setModalVisibleAdd] = useState(false);

   const getAllTransfers = async () => {
      const token = props.auth.data.tokenLogin;
      await props.dispatch(getAdminTransfer(token))
         .then(res => {
            setTransfers(res.value.data.data);
         })
         .catch((e) => {
            console.log(e);
         });
   };

   useEffect(() => {
      getAllTransfers();
   }, []);

   const UselessTextInput = (props) => {
      return (
         <TextInput
            {...props}
            editable
         />
      );
   }
   return (
      <ScrollView style={style.container}>
         <StatusBar
            backgroundColor={color.darkblue}
            barStyle="light-content"
         />
         <View style={style.topNav}>
            <View style={style.row}>
               <Text style={style.headline}>
                  Data Transaction
               </Text>
               <TouchableOpacity
                  onPress={() => {
                     setModalVisibleAdd(true);
                  }}>
                  <Ionicons
                     name='add-outline'
                     size={30}
                     color={color.light}
                  />
               </TouchableOpacity>
            </View>
            <View style={style.search}>
               <Ionicons
                  name='search-outline'
                  size={20}
                  color={color.primary}
               />
               <TextInput
                  style={style.textSearch}
                  placeholder="Search Receiver here"
               />
            </View>
         </View>
         <View>
            {transfers
               ? transfers.length > 0
                  ? transfers.map((item, idx) => {
                     const formatMoney = `Rp ${item.amount}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                     return (
                        <CardText
                           key={idx}
                           type="fullwidth"
                           detail={item.sender_name}
                           count={item.receiver_id === props.auth.data.id ?
                              (<Text style={{ color: 'green' }}>+ {formatMoney}</Text>)
                              : (<Text style={{ color: 'red' }}>- {formatMoney}</Text>)
                           }
                        />
                     )
                  })
                  : <Text style={style.textLoading}>
                     Loading...
              </Text>
               : <Empty />
            }
         </View>

         {/* modal Add */}
         <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisibleAdd}
         >
            <TouchableOpacity
               style={style.modalFade}
               onPress={() => setModalVisibleAdd(false)}
            >
            </TouchableOpacity>
            <View style={style.modalContainer}>
               <View style={style.scrollTit}>
                  <Text style={style.textModal}>
                     Add
                  </Text>
               </View>
               <View style={style.modalsCard}>
                  <View >
                     <Text style={style.desc}>
                        Number
                     </Text>
                     <TextInput 
                        style={style.textSearch2}
                        placeholder="Input Number"
                     />
                  </View>
                  <View >
                     <Text style={style.desc}>
                        Description
                     </Text>
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
      </ScrollView>
   );
};

const mapStateToProps = (state) => ({
   auth: state.auth,
   transfer: state.transfer,
});

export default connect(mapStateToProps)(TransactionAdmin);
