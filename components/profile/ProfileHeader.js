
import { ScrollView, View, StyleSheet, TouchableOpacity, Text, Image, } from 'react-native';

import { PROFILE, } from './../../data/users';
import { Bars3Icon, LockClosedIcon, LinkIcon, ChevronDownIcon, } from 'react-native-heroicons/solid';
import { PlusCircleIcon, } from 'react-native-heroicons/outline';

import StoryHighlights from './StoryHighlights';


const ProfileHeader = () => {

  return(
   <View style={{marginHorizontal:8,}}>
    <Header />
   </View>
  );
}


const Header = () => {

  return(
   <View style={styles.container}>
    <TouchableOpacity style={styles.leftRow}>
      <LockClosedIcon color='#fff' size={18} />
      <Text style={styles.userText}> {PROFILE.name} </Text>
      <ChevronDownIcon color='#fff' size={24} />
    </TouchableOpacity>

    <View style={styles.leftRow}>
      <TouchableOpacity style={{padding: 8}}>
        <PlusCircleIcon color='#fff' size={27} />
      </TouchableOpacity>
      <TouchableOpacity style={{padding: 8}}>
        <Bars3Icon color='#fff' size={27} />
      </TouchableOpacity>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flexDirection:'row',
   justifyContent:'space-between',
   borderBottomWidth: 0.5,
   borderColor:'gray',
  },
  leftRow: {
   flexDirection:'row',
   alignItems: 'center',
  },
  userText:{
   color:'#fff',
   fontSize: 18,
   fontWeight: '600',
   padding: 2
  },
});

export default ProfileHeader;
