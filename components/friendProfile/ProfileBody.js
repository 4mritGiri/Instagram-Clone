import React, {useState, } from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const ProfileBody = ({name, workAt, about, accountName, profileImage, post, followers, following, follow }) => {
	// console.warn(follow)
	return(
	 <>
	  <View>
	  	 {
	  	 	!accountName? (
	  	 	  <View>
	  	 	   <View>
	  	 	      <Image
	  	 	      	 source={{uri: profileImage}}
	  	 	      	 style={{
	  	 	      	 	width: 80,
	  	 	      	 	height: 80,
	  	 	      	 	resizeMode: 'cover',
	  	 	      	 	borderRadius: 100,
	  	 	      	 	backgroundColor: 'gray',
	  	 	      	 }} />
	  	 	   </View>
	  	 	 </View>
	  	 	) : (
	  	 	<>
	  	 	 <View style={{
	  	 	 	flexDirection: 'row',
	  	 	 	justifyContent: 'space-around',
	  	 	 	alignItems: 'center',
	  	 	 	paddingVertical: 20,
	  	 	 }}>
	  	 	   <View style={{
	  	 	   		// alignItems: 'center',
	  	 	   }}>
	  	 	      <Image
	  	 	      	 source={{uri: profileImage}}
	  	 	      	 style={{
	  	 	      	 	width: 80,
	  	 	      	 	height: 80,
	  	 	      	 	borderRadius: 100,
	  	 	      	 	backgroundColor: 'gray',
	  	 	      	 }} />
	  	 	       <Text style={{color: '#fff', paddingTop: 5,  fontWeight: 'bold'}}>{accountName}</Text>
	  	 	        <Text style={{color: '#fff'}}>{workAt}</Text>
	  	 	       <Text style={{color: '#fff'}}>{about}</Text>
	  	 	   </View>
	  	 	   <View>
	  	 	     <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18,}}>{post}</Text>
	  	 	     <Text style={{color: '#fff',}}>Posts</Text>
	  	 	   </View>
	  	 	   <View>
	  	 	     <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18,}}>{followers}</Text>
	  	 	     <Text style={{color: '#fff',}}>Followers</Text>
	  	 	   </View>
	  	 	   <View>
	  	 	     <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18,}}>{following}</Text>
	  	 	     <Text style={{color: '#fff',}}>Following</Text>
	  	 	   </View>
	  	 	 </View>
			</>
	  	   )
	  	 }
	  	 
	  </View>
	 </>
	);
}

export const ProfileButtons = ({id, follow, setFollow}) => {
  // const [ follow, setFollow ] = useState(follow);
  
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
	     		onPress={() => setFollow(!follow)}
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

