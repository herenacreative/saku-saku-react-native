import 'react-native-gesture-handler';
import {
   React,
   connect,
   Ionicons,
   messaging,
   useState,
   useEffect,
   useNavigation,
   NavigationContainer,
   createStackNavigator,
   createDrawerNavigator,
   createBottomTabNavigator,
} from 'Libraries';
import { color } from 'Assets';
import {
   Home,
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
   InputPin,
   // OtpResetPassword,
   InputOTP,
} from 'Screens';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Routes = (props) => {
   const [loading, setLoading] = React.useState(true);
   const [initialRoute, setInitialRoute] = React.useState('Auth');

   React.useEffect(() => {
      messaging().onNotificationOpenedApp(remoteMessage => {
         console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
         );
         navigation.navigate(remoteMessage.data.type);
      });

      // Check whether an initial notification is available
      messaging()
         .getInitialNotification()
         .then(remoteMessage => {
            if (remoteMessage) {
               console.log(
                  'Notification caused app to open from quit state:',
                  remoteMessage.notification,
               );
               setInitialRoute(initialRoute); 
            }
            setLoading(false);
         });
   }, []);

   if (loading) {
      return null;
   }
   
   return (
      <NavigationContainer>
         <Stack.Navigator
            initialRouteName='Auth'
            screenOptions={{
               headerTintColor: 'white',
               headerStyle: {
                  backgroundColor: color.primary,
               },
            }}
         >
            {props.auth.isLogin ?
               props.auth.data.verify === 0 ? (
                  <>
                     <Stack.Screen
                        name="CreatePin"
                        component={CreatePin}
                        options={{ headerShown: false }}
                     />
                     <Stack.Screen
                        name="StatusPin"
                        component={StatusPin}
                        options={{ headerShown: false }}
                     />
                     <Stack.Screen
                        name="Login"
                        component={Auth}
                        options={{ headerShown: false }}
                     />
                     <Stack.Screen
                        name="ForgotPassword22"
                        component={ForgotPassword2}
                        options={{ headerShown: false }}
                     />
                  </>
               ) : (
                     props.auth.data.role === 3 ? (
                        <>
                           <Stack.Screen
                              name="Home"
                              component={DrawerNavigator}
                              options={{ headerShown: false }}
                           />
                           <Stack.Screen
                              name="DetailTransaction"
                              component={DetailTransaction}
                              options={{
                                 title: 'Detail Transaction',
                              }}
                           />
                           <Stack.Screen
                              name="History"
                              component={History}
                              options={{
                                 headerStyle: {
                                    backgroundColor: color.primary,
                                    borderBottomLeftRadius: 15,
                                    borderBottomRightRadius: 15,
                                 },
                              }}
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
                              options={{
                                 headerStyle: {
                                    backgroundColor: color.primary,
                                    borderBottomLeftRadius: 15,
                                    borderBottomRightRadius: 15,
                                 },
                              }}
                           />
                           <Stack.Screen
                              name="TopUp"
                              component={TopUp}
                              options={{
                                 title: 'Top Up',
                              }}
                           />
                           <Stack.Screen
                              name="Notif"
                              component={Notif}
                              options={{
                                 title: 'Notification',
                                 headerStyle: {
                                    backgroundColor: color.primary,
                                    borderBottomLeftRadius: 15,
                                    borderBottomRightRadius: 15,
                                 },
                              }}
                           />
                           <Stack.Screen
                              name="PersonalInfo"
                              component={PersonalInfo}
                              options={{
                                 title: 'Personal Information',
                                 headerStyle: {
                                    backgroundColor: color.primary,
                                    borderBottomLeftRadius: 15,
                                    borderBottomRightRadius: 15,
                                 },
                              }}
                           />
                           <Stack.Screen
                              name="ChangePassword"
                              component={ChangePassword}
                              options={{
                                 title: 'Change Password',
                                 headerStyle: {
                                    backgroundColor: color.primary,
                                    borderBottomLeftRadius: 15,
                                    borderBottomRightRadius: 15,
                                 },
                              }}
                           />
                           <Stack.Screen
                              name="ChangePin"
                              component={ChangePin}
                              options={{
                                 title: 'Change PIN',
                                 headerStyle: {
                                    backgroundColor: color.primary,
                                    borderBottomLeftRadius: 15,
                                    borderBottomRightRadius: 15,
                                 },
                              }}
                           />
                           <Stack.Screen
                              name="AddPhone"
                              component={AddPhone}
                              options={{
                                 title: 'Add Phone Number',
                                 headerLeft: null,
                                 headerStyle: {
                                    backgroundColor: color.primary,
                                    borderBottomLeftRadius: 15,
                                    borderBottomRightRadius: 15,
                                 },
                              }}
                           />
                           <Stack.Screen
                              name="InputPin"
                              component={InputPin}
                              options={{
                                 headerTransparent: true,
                                 title: 'Add Phone Number',
                                 headerStyle: {
                                    backgroundColor: color.primary,
                                    borderBottomLeftRadius: 15,
                                    borderBottomRightRadius: 15,
                                 },
                              }}
                           />
                           <Stack.Screen
                              name="ManagePhone"
                              component={ManagePhone}
                              options={{
                                 title: 'Manage Phone Number',
                                 headerStyle: {
                                    backgroundColor: color.primary,
                                    borderBottomLeftRadius: 15,
                                    borderBottomRightRadius: 15,
                                 },
                              }}
                           />
                           <Stack.Screen
                              name="Login"
                              component={Auth}
                              options={{ headerShown: false }}
                           />
                           {/* <Stack.Screen
                              name="ForgotPassword2"
                              component={ForgotPassword2}
                              options={{ headerShown: false }}
                           /> */}
                        </>
                     ) : (
                           <>
                              <Stack.Screen
                                 name="Dashboard"
                                 component={MyTabs}
                                 options={{
                                    headerShown: false,
                                 }}
                              />
                              <Stack.Screen
                                 name="DetailUser"
                                 component={DetailUser}
                                 options={{
                                    title: 'Detail User',
                                 }}
                              />
                              <Stack.Screen
                                 name="DetailTransaction"
                                 component={DetailTransaction}
                                 options={{
                                    title: 'Detail Transaction',
                                 }}
                              />
                              <Stack.Screen
                                 name='InputOTP'
                                 component={InputOTP}
                                 options={{ headerShown: false }}
                              />
                              {/* <Stack.Screen
                                 name="ForgotPassword2"
                                 component={ForgotPassword2}
                                 options={{ headerShown: false }}
                              /> */}
                           </>
                        )
                  ) : (
                  <>
                     <Stack.Screen
                        name="Auth"
                        component={Auth}
                        options={{ headerShown: false }}
                     />
                     <Stack.Screen
                        name="StatusPin"
                        component={StatusPin}
                        options={{ headerShown: false }}
                     />
                     <Stack.Screen
                        name='InputOTP'
                        component={InputOTP}
                        options={{ headerShown: false }}
                     />
                     <Stack.Screen
                        name="ForgotPassword"
                        component={ForgotPassword}
                        options={{ headerShown: false }}
                     />
                     <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                        options={{ headerShown: false }}
                     />
                     <Stack.Screen
                        name="ForgotPassword22"
                        component={ForgotPassword2}
                        options={{ headerShown: false }}
                     />
                  </>
               )}
         </Stack.Navigator>
      </NavigationContainer>
   );

};

const DrawerNavigator = () => (
   <Drawer.Navigator
      drawerContentOptions={{
         activeTintColor: color.primary,
         itemStyle: { marginVertical: 10 },
      }}
      initialRouteName="Home"
   >
      <Stack.Screen
         name="Home"
         component={Home}
         options={{
            headerShown: false,
            drawerIcon: ({ color, size }) => (
               <Ionicons name='grid-outline' size={25} color={color} />
            )
         }}
      />
      <Drawer.Screen
         name="Transaction"
         component={Transaction}
         options={{
            drawerIcon: ({ color, size }) => (
               <Ionicons name='cash-outline' size={25} color={color} />
            )
         }}
      />
      <Drawer.Screen
         name="Profile"
         component={Profile}
         options={{
            headerShown: false,
            drawerIcon: ({ color, size }) => (
               <Ionicons name='people-outline' size={25} color={color} />
            )
         }}
      />
   </Drawer.Navigator>
);

const MyTabs = () => {
   return (
      <Tab.Navigator
         initialRouteName="Dashboard"
         tabBarOptions={{
            inactiveTintColor: color.default,
            activeTintColor: color.darkblue,
            inactiveBackgroundColor: color.darkblue,
            activeBackgroundColor: color.primary,
         }}
      >
         <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
               tabBarLabel: 'Dashboard',
               tabBarIcon: ({ color, size }) => (
                  <Ionicons name='grid-outline' size={25} color={color} />
               ),
            }}
         />
         <Tab.Screen
            name="TransactionAdmin"
            component={TransactionAdmin}
            options={{
               tabBarLabel: 'Transaction',
               tabBarIcon: ({ color, size }) => (
                  <Ionicons name='wallet-outline' size={25} color={color} />
               ),
            }}
         />
         <Tab.Screen
            name="UserAdmin"
            component={UserAdmin}
            options={{
               tabBarLabel: 'Users',
               tabBarIcon: ({ color, size }) => (
                  <Ionicons name='people-outline' size={25} color={color} />
               ),
            }}
         />
         <Tab.Screen
            name="TopUpAdmin"
            component={TopUpAdmin}
            options={{
               tabBarLabel: 'Top Up',
               tabBarIcon: ({ color, size }) => (
                  <Ionicons name='add-outline' size={25} color={color} />
               ),
            }}
         />
      </Tab.Navigator>
   );
}

const mapStateToProps = (state) => {
   return {
      auth: state.auth,
   };
};

export default connect(mapStateToProps)(Routes);
