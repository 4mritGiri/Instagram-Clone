import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Status = ({ route, navigation }) => {
  const { name } = route.params;
  const { image } = route.params;

  useEffect(() => {
  	let timer = setTimeout(() => {
  		navigation.goBack();
  	},5000);

	 Animated.timing(progress, {
	   toValue: 5,
	   duration: 5000,
	   useNativeDriver: false,
	 }).start();
	 return () => clearTimeout(timer);
  },[]);

  const [progress, setProgress] = useState(new Animated.Value(0));
  
    const progressAnimation = progress.interpolate({
      inputRange: [0, 5],
      outputRange: ['0%', '100%'],
    });
  
  return (
   <SafeAreaView style={styles.safe}>
    <View style={styles.container}>
      <View style={styles.statusBarContainer}>
        <Animated.View
        	style={{
        		height: '100%',
     		 	width: progressAnimation,
     		 	backgroundColor: 'red',
        }}> 
          <Text> </Text>
        </Animated.View>
      </View>
      <View style={{
      	flexDirection: 'row',
      	alignItems: 'center',
      	position: 'absolute',
      	top: 12,
      	left: 0,
      	width: '90%',
      	padding: 15,
      }}>
        <View style={{
        	borderRadius:100,
        	width: 30,
        	height: 30,
        	justifyContent: 'center',
        	alignItems: 'center',
        }}>
           <Image
           		style={{
           			borderRadius: 100,
           			backgroundColor: 'orange',
           			height: '92%',
           			width: '92%',
           			resizeMode: 'cover',
           		}}
           		source={{uri: image}} />
        </View>
        <View style={{
        	flexDirection: 'row',
        	justifyContent: 'space-between',
        	width: '100%',
        }}>
          <Text style={{color: '#fff', fontSize: 15, paddingLeft: 10}}> {name} </Text>
          <TouchableOpacity
          		onPress={() => navigation.goBack()}>
             <Ionicons
             	name="ios-close"
             	size={24}
             	color="#fff"
             	style={{opacity: 0.6}}/>
          </TouchableOpacity>
        </View>
      </View>
      <Image
      	source={{uri: image}}
      	style={{
      		width: '100%',
      		height: 600,
      		position: 'absolute',
      	}} />

      <View style={{
      	flexDirection: 'row',
      	position: 'absolute',
      	justifyContent: 'space-around',
      	alignItems: 'center',
      	bottom: 0,
      	left: 0,
      	marginVertical: 10,
      	width: '100%'
      }}>
        <TextInput
        	placeholder="Send Message...."
        	placeholderTextColor="#fff"
        	style={{
        		borderRadius: 25,
        		borderColor: '#fff',
        		borderWidth: 1,
        		width: '85%',
        		height: 50,
        		paddingLeft: 20,
        		paddingRight: 10,
        		fontSize: 20,
        		color: '#fff'
        	}}
        	/>
        	<TouchableOpacity
        		onPress={() => navigation.goBack()}>
        	   <Ionicons name="ios-paper-plane-outline" size={24} color="#fff" />
        	</TouchableOpacity>
      </View>
    </View>  
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
     flex: 1,
     paddingTop: Platform.OS === 'ios' ? 0 : 25,
     backgroundColor: '#000',
  },
  container: {
  	 height: '100%',
     position: 'relative',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'black',
  },
  statusBarContainer: {
  	 height: 3,
     width: '95%',
     borderWidth: 0.7,
     backgroundColor: 'gray',
     position: 'absolute',
     top: 18,
  },
});

export default Status;
