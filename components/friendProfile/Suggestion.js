import React,{useState, } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FriendsProfileData } from './../../data/users'

const Suggestion = ({name, }) => {

	return(
	 <>
	  {
	   name === FriendsProfileData.name? (
	   	null
	   ):(
	    FriendsProfileData.map((data, index) => {
			const [ isFollow, setIsFollow ] = useState(data.follow);
			const [ close, setClose ] = useState(false);
		
	  		return(
	  		  <View key={index} >
	  		  	{
	  		  	  data.name === name || close? null :
	  		  	  (
	  		  	   <View style={{
	  		  	   	  width: 160,
	  		  	   	  height: 200,
	  		  	   	  margin: 3,
	  		  	   	  justifyContent: 'center',
	  		  	   	  alignItems: 'center',
	  		  	   	  borderWidth: 0.5,
	  		  	   	  borderRadius: 2,
	  		  	   	  borderColor: '#DEDEDE',
	  		  	   	  position: 'relative',
	  		  	   }}>
	  		  	     <TouchableOpacity
	  		  	     	onPress={() => setClose(!close)}
	  		  	     	style={{
	  		  	     		position: 'absolute',
	  		  	     		top: 10,
	  		  	     		right: 10
	  		  	     	}}>
	  		  	       <AntDesign name='close' size={20} color="#fff" />
	  		  	     </TouchableOpacity>
	  		  	     <Image
	  		  	     	source={{uri: data.profileImage}}
	  		  	     	style={{
	  		  	     		width: 80,
	  		  	     		height: 80,
	  		  	     		borderRadius: 100,
	  		  	     		margin: 10,
	  		  	     		backgroundColor: 'gray',
	  		  	     	}}/>
	  		  	     	<Text style={{color: '#fff',fontSize: 16,fontWeight: 'bold'}}>{data.name}</Text>
	  		  	     	<Text style={{color: '#fff',fontSize: 12,}}>{data.accountName}</Text>
	  		  	     	<TouchableOpacity
	  		  	     		onPress={() => setIsFollow(!isFollow)}
	  		  	     		style={{
	  		  	     			width: '80%',
	  		  	     			paddingVertical: 10,
	  		  	     		}}>
	  		  	     	   <View style={{
	  		  	     	   	 width:'100%',
	  		  	     	   	 height: 30,
	  		  	     	   	 borderRadius: 5,
	  		  	     	   	 backgroundColor: isFollow? 'rgba(52,52,52,0.8)' : '#3493D9',
	  		  	     	   	 borderColor: '#DEDEDE',
	  		  	     	   	 borderWidth: isFollow? 1 : 0,
	  		  	     	   	 alignItems: 'center',
	  		  	     	   	 justifyContent: 'center',
	  		  	     	   }}>
	  		  	     	     <Text style={{color: isFollow?'blue' : '#fff', fontWeight: 'bold'}}>{isFollow? 'Following' : 'Follow' }</Text>
	  		  	     	   </View>
	  		  	     	</TouchableOpacity>
	  		  	   </View>
	  		  	  )
	  		  	}
	  		  </View>
	  		);
	  	})
	   )
	  }
	 </>
	);
}

export default Suggestion;
