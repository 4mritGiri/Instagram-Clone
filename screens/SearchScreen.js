import React,{useState, } from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, Platform, View, ScrollView, Text, StatusBar, Dimensions, Image, } from 'react-native';
import { Ionicons, Feather} from '@expo/vector-icons';
import SearchContent from './../components/search/SearchContent';
import SearchBox from './../components/search/SearchBox';


const { height, width } = Dimensions.get('window');

const SearchScreen = () => {

  const [ image, setImage ] = useState(null);

  const getData = data  => {
  	setImage(data)
  }

   return(
   	<SafeAreaView style={styles.container}>
	  <View style={{marginHorizontal: 6,}}>
	   <SearchBox />
	   <ScrollView
	   		style={{marginBottom: 70}}
	   		showsVerticalScrollIndicator={false} >
	     <SearchContent data={getData}/>
	   <TouchableOpacity style={{marginTop: 10, alignItems: 'center', justifyContent:'center'}}>
		<Ionicons name="ios-add-circle-outline" size={50} color="gray" />
	   </TouchableOpacity>
	   </ScrollView>

	   {
	   	image ?(
	   	  <View style={{
	   	  	position: 'absolute',
	   	  	zIndex: 1,
	   	  	width: '100%',
	   	  	height: '100%',
	   	  	backgroundColor: 'rgba(52,52,52,0.8)'
	   	  }}>
			<StatusBar backgroundColor='#525252' barStyle="dark-content"/>
			<View style={{
				position: 'absolute',
				top: height / 6,
				left: width / 19.5,
				backgroundColor:'white',
				width: width/1.23,
				height: 465,
				borderRadius: 15,
				zIndex: 1,
				elevation: 50,
			}}>
			 <View style={{
			 	flexDirection: 'row',
			 	alignItems: 'center',
			 	paddingVertical: 10,
			 	paddingHorizontal: 15,
			 }}>
			   <Image 
			   	 style={{
			   	 	width: 30,
			   	 	height: 30,
			   	 	borderRadius: 100,
			   	 }}
				 source={{uri: image}}
			   />
			   <View style={{
			   	  padding: 8,
			   }}>
			     <Text style={{
			     	fontSize: 12,
			     	fontWeight: '600',
			     }}> The anonymous guy </Text>
			   </View>
			 </View>
			 <Image source={{uri: image}}
			 style={{
			 	width:'100%',
			 	height: '80%',
			 }} />
			 <View style={{
			 	justifyContent: 'space-around',
			 	width: '100%',
			 	flexDirection: 'row',
			 	alignItems: 'center',
			 	padding: 8,
			 }}>
			 <Ionicons name="ios-heart-outline" size={24} color="black" />
			 <Ionicons name="ios-person-circle-outline" size={24} color="black" />
			 <Feather name="navigation" size={24} color="black" />
			 </View>
			</View>
	   	  </View>
	   	):null
	   }
	  </View>
   	</SafeAreaView>
   );
}


const styles = StyleSheet.create({
	container: {
		flex:1,
		paddingTop: Platform.OS == 'ios'? 0 : 30,
		padding: 12,
		backgroundColor:'#000',
	},
	
});

export default SearchScreen;

