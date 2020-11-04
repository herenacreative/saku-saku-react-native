import 'react-native-gesture-handler';
import {
  React,
  NavigationContainer,
  createStackNavigator,
  createDrawerNavigator,
} from 'Libraries';
import { color } from 'Assets';
import { 
  Home,
  About,
  Auth,
  CreatePin,
  ForgotPassword,
  Transaction,
  History,
  Search,
  Transfer,
  Confirmation,
  Status,
  TopUp,
  Splash,
  SignUp,
  StatusPin,
  ForgotPassword2, 
  Notif,
  Profile,
  PersonalInfo,
  ChangePassword,
  ChangePin,
  AddPhone,
  ManagePhone,
  TopUpAdmin,
  Dashboard,
  UserAdmin,
  DetailUser,
  TransactionAdmin,
  DetailTransaction,
} from 'Screens';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Auth'
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { 
            backgroundColor: color.primary,
            // borderBottomLeftRadius: 13,
            // borderBottomRightRadius: 13,
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={DrawerNavigator} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
         name="Auth"
         component={Auth}
         options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreatePin"
          component={CreatePin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="History"
          component={History}
        />
        <Stack.Screen
          name="Search"
          component={Search} 
          options={{
            title: 'Find Receiver',
          }}
        />
        <Stack.Screen
          name="Transfer"
          component={Transfer}
        />
        <Stack.Screen
          name="Confirmation"
          component={Confirmation}
        />
        <Stack.Screen
          name="Status"
          component={Status}
        />
        <Stack.Screen
          name="TopUp"
          component={TopUp}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StatusPin"
          component={StatusPin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword2"
          component={ForgotPassword2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notif"
          component={Notif}
          options={{
            title: 'Notification'
          }}
        />
        <Stack.Screen
          name="PersonalInfo"
          component={PersonalInfo}
          options={{
            title: 'Personal Information'
          }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{
            title: 'Change Password'
          }}
        />
        <Stack.Screen
          name="ChangePin"
          component={ChangePin}
          options={{
            title: 'Change PIN'
          }}
        />
        <Stack.Screen
          name="AddPhone"
          component={AddPhone}
          options={{
            title: 'Add Phone Number'
          }}
        />
        <Stack.Screen
          name="ManagePhone"
          component={ManagePhone}
          options={{
            title: 'Manage Phone Number'
          }}
        />
        <Stack.Screen
          name="TopUpAdmin"
          component={TopUpAdmin}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="UserAdmin"
          component={UserAdmin}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="DetailUser"
          component={DetailUser}
          options={{
            title: 'Detail User'
          }}
        />
        <Stack.Screen
          name="TransactionAdmin"
          component={TransactionAdmin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetailTransaction"
          component={DetailTransaction}
          options={{
            title: 'Detail Transaction'
          }}
        />
        <Stack.Screen name="About" component={About}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

};

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
    />
    <Drawer.Screen
      name="Transaction"
      component={Transaction}
    />
    <Drawer.Screen
      name="Profile"
      component={Profile}
      options={{ headerShown: false }}
    />
  </Drawer.Navigator>
);

export default Routes;