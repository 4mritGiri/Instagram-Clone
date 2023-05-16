import { StyleSheet, TouchableOpacity, Text, View, Image,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import React,{useState, useEffect} from 'react';


import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import ProfileScreen from './screens/ProfileScreen';
import ReelsScreen from './screens/ReelsScreen';
import SearchScreen from './screens/SearchScreen';
import LoginScreen from './screens/LoginScreen';
import ActivityScreen from './screens/ActivityScreen';
import FriendProfileScreen from './screens/FriendProfileScreen';
import EditProfileScreen from './screens/EditProfileScreen';

import { userImg } from './components/home/Post';
import { Ionicons } from '@expo/vector-icons';

import Status from './components/home/Status';


const  App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  // const Stack = createStackNavigator();
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);
  

  const BottomTabScreen = () => {

  	return(
  		<Tab.Navigator
  			screenOptions={({route}) => ({
  				tabBarShowLabel: false,
				 headerShown: false,  				
  				tabBarHideOnKeyboard: true,
  				tabBarStyle: {
  					height: 50,	
  					backgroundColor: 'black'
  				},
  				
  				tabBarIcon: ({style, focused, size, color}) => {
  					let iconName;
  					if(route.name === 'Home'){
  						iconName= focused? "home-sharp" : "home-outline";
  						size= focused? size + 4 : size + 2;
  					}else if(route.name === "Search"){
  						iconName= focused? "search" : "ios-search-outline";
  						size= focused? size + 4  : size+2  ;
  					}else if(route.name === "NewPost"){
  						iconName= focused? "add-circle-outline" : "add-circle-outline";
  						size= focused? size+4  : size + 2  ;
  					}else if(route.name === "Reels"){
  						iconName= focused? "film" : "film-outline";
  						size= focused? size +4 : size+2 ;
  					}else if(route.name === "Profile"){
  						iconName= focused? "person-circle" : "person-circle-outline";
  						size= focused? size + 4 : size + 2;
  					}

  					return <Ionicons style={focused? styles.active : null} name={iconName} size={size} color={color} />;
  				}
  			})}>
  			<Tab.Screen name="Home" component={HomeScreen} />
  			<Tab.Screen name="Search" component={SearchScreen} />
  			<Tab.Screen
  				name="NewPost"
  				component={NewPostScreen}
  				options={{
  				   tabBarButton: ({ state, route, ...rest }) => {
  				 	   return (
  				   	     <TouchableOpacity
  				 	          {...rest}
  				 	           style={{
  				 	           		alignItems: 'center',
  				 		      	 	top: -25,
  				 		       		borderBottomWidth: rest.focused ? 5 : 0,
  				 		       		borderColor: 'skyblue',
  				 		      		 borderRadius: 50,
  				 		  		}} >
  				 		    <Ionicons name="add-circle-outline" size={50} color='red' />
  				 	     </TouchableOpacity>
  				 	     );
  				 	   },
  				 }}/>
  			<Tab.Screen name="Reels" component={ReelsScreen} />
  			<Tab.Screen
  				name="Profile"
  				component={ProfileScreen}
  				 options={{
	    			tabBarIcon: ({ color, size, focused}) => (
	     				<View style={[focused? styles.active : null,{padding:5}]}>
              				{focused?  <Image style={[styles.userCircle,{borderWidth:3,}]} source={{uri: userImg }} />
                			  : <Image style={styles.userCircle} source={{uri: userImg }} />
	     					}
	     			 	</View>
          			),
         		}}
  				/>
  		</Tab.Navigator>
  	);
  }

	return(
		<NavigationContainer>
		{
		 !isAuthenticated?(
			<LoginScreen isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
		 ): (
		 	
		  <Stack.Navigator
		  		screenOptions={{
		  		    headerShown: false,
		  		 }}>
		    <Stack.Screen name="BottomTab" component={BottomTabScreen} />
		    <Stack.Screen name="Activity" component={ActivityScreen} />
		    <Stack.Screen name="FriendProfile" component={FriendProfileScreen} />
		    <Stack.Screen name="Status" component={Status} />
		    <Stack.Screen name="EditProfile" component={EditProfileScreen} />
		  </Stack.Navigator>
		  )
		}
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
  active: {
    borderBottomWidth: 3,
    borderColor:'#00ccbb',
    borderRadius: 10,
    padding:5,
  },
  userCircle: {
    height: 30,
    width: 30,
    padding: 5,
    marginTop: 3,
    borderRadius: 50,
    borderColor:'#00ccbb',
  },
});


export default App;
