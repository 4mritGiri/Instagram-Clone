import React, {useState, } from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
// import FriendsProfileData from './../../data/users';

const Yesterday = ({ navigation, FriendsProfileData }) => {

	return(
	<>	
	   <Text style={{
	   		color: '#fff',
	   		fontWeight: 'bold',
	   		
	   	 }} >Yesterday </Text>
		{
		 FriendsProfileData.slice(2,5).map((data, index) =>{
			const [ follow, setFollow ] = useState(data.follow);
					 	return(
		 		<View key={index} style={{width:'100%'}}>
		 		 <View style={{
		 		 	flexDirection:'row',
		 		 	justifyContent: 'space-between',
		 		 	alignItems: 'center',
		 		 	paddingVertical: 10,
		 		 }}>
		 		   <TouchableOpacity
		 		   		onPress={() => navigation.push('FriendProfile',{
		 		   			name: data.name,
		 					accountName: data.accountName,	   			
		 		   			profileImage: data.profileImage,
		 		   			follow,
		 		   			setFollow,
		 		   			post: data.posts,
		 		   			followers: data.followers,
		 		   			following: data.following,
		 		   			workAt: data.workAt,
		 		   			about: data.about,
		 		   		})}
		 		   		style={{
		 		   			flexDirection: 'row',
		 		   			justifyContent: 'space-between',
		 		   			alignItems: 'center',
		 		   			maxWidth: '64%',
		 		   		}}>
		 		     <Image
		 		     	source={{uri: data.profileImage}}
		 		     	style={{
		 		     		height: 45,
		 		     		width:45,
		 		     		backgroundColor: 'gray',
		 		     		borderRadius: 100,
		 		     		// marginVertical: 20,
		 		     		marginRight: 10,
		 		     	}}/>
		 		     <Text style={{color: '#fff', fontSize: 15,}}>
		 		     	<Text style={{fontWeight: 'bold'}}>{data.name} </Text>
		 		     	 Who you know, is on Instagram
		 		     </Text>
		 		   </TouchableOpacity>

		 		   <TouchableOpacity
		 		   		onPress={() => setFollow(!follow)}
		 		   		style={{width: follow? 72 : 68}}>
		 		     <View style={{
		 		     	width: '100%',
		 		     	height: 40,
		 		     	backgroundColor: follow? 'rgba(52,52,52,0.8)' :'#3493D9',
		 		     	borderRadius: 5,
		 		     	borderWidth: follow? 1 : 0,
		 		     	borderColor: follow?'#798799' : null,
		 		     	justifyContent:'center',
		 		     	alignItems: 'center',
		 		     	
		 		     }}>
		 		       <Text style={{color:follow?'#1af': '#fff', fontWeight: 'bold'}}>{follow? 'Following': 'Follow'}</Text>
		 		     </View>
		 		   </TouchableOpacity>
		 		 </View>
		 		</View>
		 	);
		 })
		}	 
	 </>
	);
}

export default Yesterday;
