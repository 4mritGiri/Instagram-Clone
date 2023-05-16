import React,{useState } from 'react';
import {StyleSheet, ScrollView, SafeAreaView, View, Text, Image, Platform} from 'react-native';

import Header from './../components/friendProfile/Header';
import { ProfileBody
		 // ProfileButtons
		} from './../components/friendProfile/ProfileBody';
import Suggestion from './../components/friendProfile/Suggestion';
import  ProfileButtons from './../components/friendProfile/ProfileButtons';

const FriendProfile = ({route, navigation}) => {
   const { name, workAt, about, accountName, profileImage, post, followers, follow, following, } = route.params;

   const [isFollow, setFollow] = useState(follow);
   
     const handleFollow = () => {
       setFollow((prevFollow) => !prevFollow);
     };
   
	return(
	  <SafeAreaView style={styles.safe}>
		<View style={{
			width: '100%',
			height: '100%',
			padding: 10,
		}}>
		 <Header name={name} navigation={navigation}/>
		 <ProfileBody
		 		name={name}
		 		accountName={accountName}
		 		profileImage={profileImage}
		 		post={post}
		 		followers={followers}
		 		following={following}
		 		follow={follow}
		 		setFollow={setFollow}
		 		workAt={workAt}
		 		about={about}/>
		 <ProfileButtons id={1} follow={isFollow} setFollow={handleFollow} />
		 
		 
		  <Text style={{color: '#fff', paddingVertical:10, fontSize: 15, fontWeight: 'bold' }}>Suggested for you  </Text>

		  <ScrollView horizontal
		  		showsHorizontalScrollIndicator={false}
		  	>
			<Suggestion name={name} follow={follow}/>
		  </ScrollView>
		</View>
	  </SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safe:{
		flex:1,
		backgroundColor: 'black',
		paddingTop: Platform.OS === 'ios'? 0 : 25,
	}
});

export default FriendProfile;
