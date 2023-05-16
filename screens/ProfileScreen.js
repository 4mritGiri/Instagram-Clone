import {SafeAreaView,Platform, ScrollView, StyleSheet, View, Text, } from 'react-native';
import ProfileHeader from './../components/profile/ProfileHeader';
import CenterTab from './../components/profile/CenterTab';
import ProfileBody from './../components/profile/ProfileBody';


const ProfileScreen = () => {

  return(
    <SafeAreaView style={styles.container}>
      <ProfileHeader />
      <ScrollView>
        <ProfileBody />
        <CenterTab />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  flex:1,
  paddingTop: Platform.OS === 'ios'? 0 : 35,
  backgroundColor:'black',
  },

});

export default ProfileScreen;
