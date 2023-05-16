import React,{useState, } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Suggestions = ({ navigation, FriendsProfileData}) => {

	return(
	 <>
	  <Text style={styles.heading}>Suggestion For You </Text>
	  {
	  	FriendsProfileData.slice(2,8).map((data, index) => {
		const [ follow, setFollow ] = useState(data.follow);
		const [ close, setClose ] = useState(false);
		
	  		return(
	  		  <View key={index} >
	  		  	{
	  		  	close?(
	  		  	null	
	  		  	)
	  		  	: (
	  		  	<>
	  		  	<View style={styles.container}>
	  		  	  <View >
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
	  		  	    	style={styles.imgClick}>
	  		  	      <Image
	  		  	        style={styles.image}
	  		  	      	source={{uri: data.profileImage }} />
	  		  	      <View style={{width: '100%'}}>
	  		  	       <Text style={[styles.sugText,{fontWeight: 'bold',}]}>{data.name}</Text>
	  		  	       <Text style={[styles.sugText,{opacity: 0.6, fontSize:12}]}>{data.accountName}</Text>
	  		  	       <Text style={[styles.sugText,{opacity: 0.6, fontSize:12}]}>Suggested for you</Text>
	  		  	      </View>
	  		  	    </TouchableOpacity>
	  		  	  </View>
	  		  	  <View style={{
	  		  	  	 flexDirection: 'row',
	  		  	  	 alignItems: 'center',
	  		  	  }}>
	  		  	  {
	  		  	  	follow?(
	  		  	   <TouchableOpacity
	  		  	   		onPress={() => setFollow(!follow)}
	  		  	   		style={{width:follow? 90 : 68}}>
	  		  	     <View style={{
	  		  	     	  width: '100%',
	  		  	     	  height: 30,
	  		  	     	  borderRadius: 5,
	  		  	     	  borderColor: '#DEDEDE',
	  		  	     	  backgroundColor: follow? null : '#3493D9',
	  		  	     	  borderWidth: follow? 1 : 0,
	  		  	     	  justifyContent: 'center',
	  		  	     	  alignItems: 'center',
	  		  	     }}>
	  		  	       <Text style={{color: '#fff'}}>{follow?'Following' : 'Follow'}</Text>
	  		  	     </View>
	  		  	   </TouchableOpacity>
	  		  	  	)
	  		  	  	: (
	  		  	  	<>
	  		  	   <TouchableOpacity
	  		  	   		onPress={() => setFollow(!follow)}
	  		  	   		style={{width:follow? 90 : 68}}>
	  		  	     <View style={{
	  		  	     	  width: '100%',
	  		  	     	  height: 30,
	  		  	     	  borderRadius: 5,
	  		  	     	  borderColor: '#DEDEDE',
	  		  	     	  backgroundColor: follow? null : '#3493D9',
	  		  	     	  borderWidth: follow? 1 : 0,
	  		  	     	  justifyContent: 'center',
	  		  	     	  alignItems: 'center',
	  		  	     }}>
	  		  	       <Text style={{color: '#fff'}}>{follow?'Following' : 'Follow'}</Text>
	  		  	     </View>
	  		  	   </TouchableOpacity>
	  		  	   
	  		  	   <TouchableOpacity
	  		  	   		onPress={() => setClose(true)}
	  		  	   		style={{paddingHorizontal: 10}}>
					  <AntDesign name="close" size={24} color="#fff" />
	  		  	   </TouchableOpacity>
	  		  	  	</>
	  		  	  	)
	  		  	  }
	  		  	  </View>
	  		  	</View>	
	  		  	</>
	  		  	)
	  		  	}
	  		  </View>
	  		);
	  	})
	  }
	 <TouchableOpacity style={{padding: 20}}>
	   <Text style={{color: '#3439D9'}}> See all Suggestions </Text>
	 </TouchableOpacity>
	 </>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginVertical: 10,
		justifyContent:'space-between',
		width: '100%',		
	},
	heading: {
		color: '#fff',
		paddingVertical: 10,
		fontWeight: 'bold',
	},
	image: {
		width: 45,
		height: 45,
		backgroundColor: 'gray',
		borderRadius: 100,
		marginRight: 10,
	},
	imgClick: {
		flexDirection: 'row',
		maxWidth: '64%',
		alignItems: 'center'
	},
	sugText: {
		color: '#fff',
		fontSize: 14
	}
});


export default Suggestions;

