import React, {useState, } from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const ProfileButtons = ({id, follow, setFollow}) => {
   // const [ initialFollow, setFollow ] = useState(follow);

	const handleFollow = () => {
	    setFollow((prevFollowing) => !prevFollowing);
	  };
	  
	return(
	 <>
	 {
	   id === 0?null 
	   : ( 	
	  <View style={{
	  	width: '100%',
	  	flexDirection:'row',
	  	alignItems: 'center',
	  	justifyContent: 'space-evenly'
	  }}>
	     <TouchableOpacity 
	     		onPress={handleFollow}
	     		 style={{ width: '42%'}}>
	       <View style={{
	       		width: '100%',
	       		height: 35,
	       		borderRadius: 5,
	       		backgroundColor: follow? 'rgba(51,51,51,0.8)' : '#3493D9' ,
	       		borderWidth: follow? 1 : 0,
	       		borderColor: '#DEDEDE',
	       		justifyContent: 'center',
	       		alignItems: 'center',
	       }}>
	       	  <Text style={{color: follow? 'blue' : '#fff', fontWeight: 'bold'}}>{follow? 'Following' : 'Follow'}</Text>
	       </View>
	     </TouchableOpacity>
	       <TouchableOpacity
	         style={{
	       		height:35,
	       		width: '42%',
	       		borderWidth: 1,
	       		borderColor: '#DEDEDE',
	       		backgroundColor: 'rgba(51,51,51,0.8)' ,
	       		borderRadius: 5,
	       		justifyContent: 'center',
	       		alignItems: 'center',
	       }}>         
	       	  <Text style={{color: follow? '#fff' : '#fff'}}>{follow? 'Message' : 'follow gar vai'}</Text>
	       </TouchableOpacity>
	       <TouchableOpacity style={{
	       	       height:35,
	       	       width: '10%',
	       	       borderWidth: 1,
	       	       borderColor: '#DEDEDE',
	       	       backgroundColor: 'rgba(51,51,51,0.9)' ,
	       	       borderRadius: 5,
	       	       justifyContent: 'center',
	       	       alignItems: 'center',
	       }}>
	       <Ionicons name={follow?"ios-chevron-down" : 'ios-person-add-outline'} size={20} color="#fff" />
	       </TouchableOpacity>
	  </View>
	   )
	 }
	 </>		
	);
}

export default ProfileButtons;
