import React,{useState, } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Gallery from './Gallery';
// import Posts from './Posts';

const CenterTab = () => {
  const Tab = createMaterialTopTabNavigator();

  let squares = [];
  let numberOfSquares = 8;

  for (let index=0; index < numberOfSquares; index++){
  	squares.push(
  		<View key={index}>
  		  <View style={{
  		  	width: 130,
  		  	height: 150,
  		  	marginVertical: 0.5,
  		  	backgroundColor: 'blue',
  		  	opacity: 0.1,
  		  }}>
  		  
  		  </View>
  		</View>
  	)
  }


  const Posts = () => {
      return(
        <View >
          <Gallery />
        </View>
      );
    }

  const Videos = ({squares}) => {
  	return(
  	  <ScrollView
  	  		showVerticalScrollIndicator={false}
  	  		style={{
  	  			width: '100%',
  	  			height: '100%',
  	  		}}>
  	    <View style={{
  	    	width:'100%',
  	    	height: '100%',
  	    	backgroundColor: 'white',
  	    	flexDirection: 'row',
  	    	justifyContent: 'space-between',
  	    	flexWrap: 'wrap',
  	    	paddingVertical: 5,
  	    }}>
  	    {squares}
  	    </View>
  	  </ScrollView>
  	);
  }

  
  const Tags = ({squares}) => {
  
  	return(
  	  <ScrollView
  	  		showVerticalScrollIndicator={false}
  	  		style={{
  	  			width: '100%',
  	  			height: '100%',
  	  		}}>
  	    <View style={{
  	    	width:'100%',
  	    	height: '100%',
  	    	backgroundColor: 'white',
  	    	flexDirection: 'row',
  	    	justifyContent: 'space-between',
  	    	flexWrap: 'wrap',
  	    	paddingVertical: 5,
  	    }}>
  	    {squares}
  	    </View>
  	  </ScrollView>
  	);
  }

  
   return(
	<Tab.Navigator 
		screenOptions={({route}) =>({
			tabBarShowLabel: false,
			tabBarStyle: {backgroundColor: 'black'},
			tabBarIndicatorStyle: {
				height: 3,
				borderRadius: 100,
			},
			tabBarIcon: ({focused, color}) => {
				let iconName;

				if (route.name === 'Posts'){
					iconName = focused? 'ios-apps-sharp' : 'ios-apps-outline';
					color = focused? 'white' : 'gray';
				}else if (route.name === 'Videos'){
					iconName = focused? 'ios-play-circle' : 'ios-play-circle-outline';
					color = focused? 'white' : 'gray';
				}else if (route.name === 'Tags'){
					iconName = focused? 'ios-person-circle' : 'ios-person-circle-outline';
					color = focused? 'white' : 'gray';
				} 
			 return <Ionicons name={iconName} size={24} color={color} />;
			},
		})}>
	  <Tab.Screen name="Posts" component={Posts} />
	  <Tab.Screen name="Videos" component={Videos} />
	  <Tab.Screen name="Tags" component={Tags} />
	</Tab.Navigator> 
   );
}


export default CenterTab;
