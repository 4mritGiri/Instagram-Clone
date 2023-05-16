
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, } from 'react-native';
import { HeartIcon,
        PlusCircleIcon,
        ChatBubbleOvalLeftIcon } from "react-native-heroicons/solid";
import { USERS, PROFILE } from '../../data/users';

import { useNavigation } from '@react-navigation/native';

const Stories = () => {
  const	navigation = useNavigation();

  return(
   <View style={styles.container}>
     <ScrollView horizontal
  	showsHorizontalScrollIndicator={false}>
	<View style={{alignItems:'center'}}>
	 <TouchableOpacity 
	 	onPress={() => navigation.push('Status',{
	 		name: 'Your Story',
	 		image: PROFILE.profileImg,
	 	})}>
	  <View style={styles.storyPlus}>
            <PlusCircleIcon color='blue' size={35} />
          </View>
          <Image
            style={styles.image}
            source={{uri: PROFILE.profileImg}}
          />
	 </TouchableOpacity>
          <Text style={styles.text}> Your Story </Text>
        </View>

	{USERS.map((story, index) =>(
	 <View key={index} style={{alignItems:'center'}}>
	 <TouchableOpacity
	 	onPress={() => navigation.push('Status', {
	 		name: story.user,
	 		image: story.image,
	 	})}>
	  <Image
	    style={styles.image}
	    source={{uri: story.image}}
	  />
	 </TouchableOpacity>
    	  <Text style={styles.text}> {
			story.user.length > 11 ?
			  story.user.slice(0, 10).toLowerCase() + '...'
			: story.user.toLowerCase()

		} </Text>
	</View>
	))}
      </ScrollView>
   </View>
  );
}


const styles = StyleSheet.create({
  container: {
   color: 'white',
   marginTop: 13,
   marginHorizontal: 20,
//   borderBottomWidth:1,
//   borderColor:'gray',
   paddingBottom: 12,
  },
  storyPlus: {
   color:'white',
   position:'absolute',
   zIndex:100,
   bottom: -4,
   left: 58,
   borderWidth:0,
   borderRadius: 50,
   padding: -3,
   backgroundColor:'black',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
    padding: 4,
    marginLeft: 8,
    borderWidth: 3,
    borderColor:'#FF8501',
  },
  text: {
   marginTop: 5,
   fontSize: 16,
   color: 'white',
  },
});

export default Stories;
