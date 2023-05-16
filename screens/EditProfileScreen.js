import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text, TouchableOpacity, Platform} from 'react-native';

import Header from './../components/profile/editProfile/Header';
import EditForm from './../components/profile/editProfile/EditForm';

const EditProfileScreen = ({route, navigation}) => {
    const { name, userName, profileImg, links, bio, webSite, } = route.params;

	return(
	  <SafeAreaView style={styles.safe}>
	    <View>
	    	<Header name={name} navigation={navigation}/>
	    	<ScrollView showsVerticalScrollIndicator={false}>
	    	 <EditForm
	    	 	name={name}
	    	 	userName={userName}
	    	 	profileImg={profileImg}
	    	 	links={links}
	    	 	bio={bio}
	    	 	webSite={webSite}
	    	 /> 
	    	</ScrollView>
	    </View>
	  </SafeAreaView>
	);
}


const styles= StyleSheet.create({
	safe: {
		flex: 1,
		paddingTop: Platform.OS == 'ios'? 0 : 15,
		paddingBottom: 55,
		backgroundColor: '#000',
		color: '#fff',
	}
})

export default EditProfileScreen;
