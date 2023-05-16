import React, {useState,} from 'react';
import {View, Text, TouchableOpacity, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({name, navigation}) => {

	return(
	 <>
	  <View style={{
	  	flexDirection: 'row',
	  	justifyContent: 'space-between',
	  	alignItems: 'center',
	  	borderBottomWidth: 0.6,
	  	borderColor: 'gray',
	  	paddingBottom:3,
	  }}>
	    <View style={{
	    	flexDirection: 'row',
	    	justifyContent: 'center',
	    	alignItems: 'center'
	    }}>
	      <TouchableOpacity
	      	onPress={() => navigation.goBack()}>
	         <Ionicons style={{paddingRight: 7}} name="ios-arrow-back-sharp" size={26} color="#fff" />
	      </TouchableOpacity>
	      <Text style={{color: '#fff', paddingLeft: 6, fontSize: 18, fontWeight: '900'}}> {name} </Text>
	    </View>
	     <TouchableOpacity>
	       <Ionicons name="ios-ellipsis-vertical-sharp" size={24} color="#fff" />
	     </TouchableOpacity>
	  </View>
	 </>
	);
}


export default Header;
