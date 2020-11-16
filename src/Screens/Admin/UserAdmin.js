import {
    React,
    useNavigation,
    Text,
    TextInput,
    StatusBar,
    TouchableOpacity,
    Ionicons,
    View,
    connect,
    useState,
    useEffect,
    ScrollView,
    Image,
} from 'Libraries';
import { color } from 'Assets';
import { CardPhotoText, Empty } from 'Components';
import style from './style';
import { getAllUsers } from 'Redux/actions';
import config from 'Configs';

const UserAdmin = props => {
    const [user, setUser] = useState([])
    const navigation = useNavigation();

    const getAllUser = async () => {
        // let search = "";
        // let limit = "100";
        // let page = "";
        const token = props.auth.data.tokenLogin
        props.dispatch(getAllUsers(token))
            .then(res => {
                setUser(res.value.data.data[0])
            })
            .catch(error => {
                console.log(error)
            })
    };

    useEffect(() => {
        getAllUser();
        // console.log(props, 'po')
    }, []);

    return (
        <ScrollView>
            <View style={style.container}>
                <StatusBar
                    backgroundColor={color.darkblue}
                    barStyle="light-content"
                />
                <View style={style.topNav}>
                    <View style={style.row}>
                        <Text style={style.headline}>
                            Data User
                    </Text>
                        <TouchableOpacity>
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
                {props.users.data
                    ? props.users.data.length > 0
                        ? props.users.data.map((item, idx) => {
                            return (
                                <CardPhotoText
                                    onPress={() => navigation.navigate('DetailUser')}
                                    image={<Image
                                        style={style.img2}
                                        source={{
                                            uri: `${config.imgURL}/${item.photo}`
                                        }}
                                    />}
                                    name={item.fullname}
                                    detail={item.phone}
                                    count={
                                        <View style={style.row}>
                                            <Ionicons
                                                name='pencil-outline'
                                                size={20}
                                                color={color.primary}
                                            />
                                        </View>
                                    }
                                />)
                        })
                        : <Text style={style.textLoading}>
                            Loading...
              </Text>
                    : <Empty />
                }

            </View>
        </ScrollView>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    users: state.users,
});

export default connect(mapStateToProps)(UserAdmin);
