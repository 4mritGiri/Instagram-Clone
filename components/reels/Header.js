
import {SafeAreaView, Dimensions, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
//import BottomTab from './../components/home/BottomTab';
import { Video } from 'expo-av';
import React,{useState, } from 'react';
import { EvilIcons } from '@expo/vector-icons';

//const video = './../data/PlayMusictermux.mp4';

const Header = () => {
   const windowWidth = Dimensions.get('window').width;
   const windowHeight = Dimensions.get('window').height;

  return(
     <View style={styles.container}>
		<Text style={{color:'#fff', fontSize:25,fontWeight:'900'}}> Reels </Text>
		<TouchableOpacity>
 		  <EvilIcons name="camera" size={35} color="white" />
		</TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
	container: {
	  	position: 'absolute',
	  	top: 12,
	  	left: 0,
	  	right: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		zIndex: 1,		
		padding:10,
	}
	
})

export default Header;
