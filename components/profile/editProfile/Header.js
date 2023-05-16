import React from 'react';
import { StyleSheet, View, Text, ToastAndroid, TouchableOpacity, Platform} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({name, navigation}) => {

   const handleBack = () => {
   		navigation.goBack();
   		ToastAndroid.showWithGravity(
   				'Edit not Apply.',
   				ToastAndroid.SHORT,
   				ToastAndroid.TOP,
   		);
   }

   const handleSave = () =>{
   	 navigation.goBack();
   	 ToastAndroid.showWithGravity(
   	 		'Edit successfuly.',
   	 		ToastAndroid.LONG,
   	 		ToastAndroid.TOP
   	 )
   }
    return(
     <View style={{
     	flexDirection: 'row',
     	justifyContent: 'space-between',
     	padding: 5,
     	alignItems: 'center',
     	borderBottomWidth: 0.5,
     	borderColor: 'gray',
     }}>
       <View style={{
       		flexDirection: 'row',
       		alignItems: 'center',
       }}>
         <TouchableOpacity
         	onPress={handleBack}>
           <Ionicons name="ios-close-outline" size={30} color="#fff" />
         </TouchableOpacity>
         <Text style={{color:'#fff', fontSize: 18, fontWeight: 'bold', paddingLeft: 10}}>Edit Profile </Text>
       </View>
         <TouchableOpacity onPress={handleSave}>
            <Ionicons name="ios-checkmark" size={28} color="blue" />
         </TouchableOpacity>
     </View>
    );
}


const styles= StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#000',
        color: '#fff',
    }
})

export default Header;
