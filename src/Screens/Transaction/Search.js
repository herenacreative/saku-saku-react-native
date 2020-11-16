import {
  React,
  Image,
  connect,
  Text,
  View,
  TextInput,
  Ionicons,
  ScrollView,
  StatusBar,
  RefreshControl,
} from 'Libraries';
import { CardPhotoText, Empty } from 'Components';
import { getAllUsers } from 'Redux/actions';
import style from './style';
import { color } from 'Assets';
import config from 'Configs';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchUser: '',
      user: [],
      page: 1,
      spinnerLoading: false,
      refresh: false,
      isLoading: true,
    }
  }

  onSearch = async () => {
    await this.setState({
      isLoading: true,
      page: 1,
      search: this.state.searchUser,
    });
    const token = this.props.auth.data.tokenLogin;
    const { page, search } = this.state;
    
    await this.props
      .dispatch(getAllUsers(token, search, page))
      .then((res) => {
        this.setState({
          user: res.value.data.data[0],
          refresh: false,
          isLoading: false,
        });
      })
      .catch(() => {
        this.setState({
          refresh: false,
          isLoading: false,
          user: [],
        });
      });
   
  };

  getAllUser = async () => {
  const token = this.props.auth.data.tokenLogin;
    const { page, search } = this.state;
    await this.props.dispatch(getAllUsers(token, search, page))
    .then(res => {
      this.setState({
        books: this.state.users.concat(res.value.data.data[0]),
        isLoading: false,
        spinnerLoading: false,
      });
    })
    .catch((e) => {
      console.log(e);
    });
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
        spinnerLoading: true,
      },
      () => {
        this.getAllUser();
      },
    );
  };

  componentDidMount() {
    this.getAllUser();
  }

  render(){
    const isCloseToBottom = ({ 
      layoutMeasurement, 
      contentOffset, 
      contentSize
    }) => {
      const paddingToBottom = 20;
      return (
        layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom
      )
    };

  const spinner = this.state.spinnerLoading ? 
    (
      <Text style={{
        color: color.primary,
        textAlign: 'center',
        marginVertical: 15,
        fontWeight: 'bold'
      }}>
        Saku Saku - Contact
      </Text>
    ) 
    : false;

  return (
      <View style={style.container}>
        <StatusBar backgroundColor={color.primary} barStyle="light-content" />
        <View style={style.topNav}>
          <View style={style.search}>
            <Ionicons name='search-outline' size={20} color={color.primary} />
            <TextInput
              style={style.textSearch}
              placeholder="Search Receiver here"
              onSubmitEditing={() => this.onSearch()}
              onChangeText={(val) => this.setState({searchUser: val} )}
              defaultValue= ''
            />
          </View>
        </View>
        <View style={{marginBottom: 15}}>
        <Text style={style.subtitlePadding}>Contact</Text>
        {this.state.search === '' ? (
          <>
          <Text style={style.helperTextPadding}>
            {this.props.users.data.length} Contact Founds
          </Text>
          </>
        ) : (
          <Text style={style.helperTextPadding}>
            Result of '{this.state.search}'
          </Text>
        )}
      </View>
        <ScrollView
          onScroll={({ nativeEvent }) => {
            if (isCloseToBottom(nativeEvent)) {
              this.handleLoadMore();
            }
          }}
          scrollEventThrottle={400}
          refreshControl={
          <RefreshControl
            refreshing={this.state.refresh}
            onRefresh={this.onRefresh}
          />
        }
        >
        {this.props.users.data
          ? this.props.users.data.length > 0
            ? this.props.users.data.map((item, idx) => {
              return (
                <CardPhotoText
                  key={idx}
                  image={<Image
                    style={style.img}
                    source={{
                      uri: `${config.imgURL}/${item.photo}`
                    }}
                  />}
                  onPress={() => this.props.navigation.navigate('Transfer', { userId: item.id })}
                  name={item.fullname}
                  detail={item.phone}
                  count={item.amount}
                />
              )
            })
            : <Text>Loading...</Text>
          : <Empty />
        }
        {spinner}
        </ScrollView>
      </View>
  );
}};

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users,
});

export default connect(mapStateToProps)(Search);
