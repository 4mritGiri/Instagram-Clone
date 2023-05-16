
import { SafeAreaView, TouchableOpacity, View, ScrollView, Text, Platform, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ThisWeek from './../components/activity/ThisWeek';
import Earlier from './../components/activity/Earlier';
import Suggestions from './../components/activity/Suggestions';
import Now from './../components/activity/Now';
import Yesterday from './../components/activity/Yesterday';
import ThisMonth from './../components/activity/ThisMonth';

import { useNavigation } from '@react-navigation/native';
import{ FriendsProfileData } from './../data/users';

const ActivityScreen = () => {
  const navigation = useNavigation();
  
	return(
	  <SafeAreaView style={styles.safe}>
		<View style={{height:'100%',width: '100%'}}>
		<View style={{
			flexDirection: 'row',
			justifyConternt: 'cener',
			alignItems: 'center',
			borderBottomWidth: 0.5,
			borderColor: 'gray',
		}}>
		<TouchableOpacity
			onPress={() => navigation.goBack()}>
			<AntDesign name="arrowleft" size={24} color="#fff" />
		</TouchableOpacity>
		 <Text style={{
		 	color: '#fff',
		 	fontSize: 20, 
		 	fontWeight: '900',
		 	borderBottomWidth:0.5,
		 	paddingLeft: 10,
			paddingVertical: 10,
		 	}}> Notifications </Text>
		 </View>
		 <ScrollView showsVerticalScrollIndicator={false}>
			<Now
				navigation={navigation}
				FriendsProfileData={FriendsProfileData} />		   
			<Yesterday
				FriendsProfileData={FriendsProfileData}
				navigation={navigation}/>		   
			<ThisWeek
				FriendsProfileData={FriendsProfileData}
				navigation={navigation}/> 
			<ThisMonth
				FriendsProfileData={FriendsProfileData}
				navigation={navigation}/>
			<Earlier
				FriendsProfileData={FriendsProfileData}
				navigation={navigation}/>
			<Suggestions
				FriendsProfileData={FriendsProfileData}
				navigation={navigation}/>
		 </ScrollView>
		</View>
	  </SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safe:{
	 flex: 1,
	 paddingTop: Platform.OS === 'ios'? 0 : 15,
	 backgroundColor: 'black',
	 padding:12
	},
});

export default ActivityScreen;
