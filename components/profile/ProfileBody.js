import { ScrollView, View, StyleSheet, Share, TouchableOpacity, Text, Image, } from 'react-native';

import { PROFILE, } from './../../data/users';
import { Bars3Icon, LockClosedIcon, LinkIcon, ChevronDownIcon, } from 'react-native-heroicons/solid';
import { PlusCircleIcon, } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

import StoryHighlights from './StoryHighlights';

const ProfileBody = () => {

  return(
   <View style={{marginHorizontal:8,}}>
    <ProfileStatus />
    <UserInfo />
    <ProfessionalDashboard />
    <ProfileAction />
    <StoryHighlights />
   </View>
  );
}

const ProfileStatus = () => {

  return(
   <View style={styles.profileContainer}>
    <TouchableOpacity>
     <Image
        style={styles.profileImg}
        source={{uri: PROFILE.profileImg}} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.status} >
     <Text style={[styles.userText,{fontSize:18,fontWeight: 'bold'}]}>39</Text>
     <Text style={styles.userText} >Posts</Text>
    </TouchableOpacity>
   <TouchableOpacity style={styles.status}>
     <Text style={[styles.userText,{fontSize: 18, fontWeight: 'bold'}]} >69</Text>
     <Text style={styles.userText} >Followers</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.status}>
     <Text style={[styles.userText,{fontSize: 18,fontWeight: 'bold'}]}>39</Text>
     <Text style={styles.userText}>Following</Text>
    </TouchableOpacity>
   </View>
  );
}

const UserInfo = () => {

  return(
   <View style={styles.infoContainer}>
    <TouchableOpacity >
     <Text style={[styles.infoText, {fontSize:16, fontWeight: 'bold', marginTop: -5}]} >{PROFILE.name}</Text>
    </TouchableOpacity>
   <TouchableOpacity >
     <Text style={[styles.infoText, {color:'gray'}]} >CTFs Players </Text>
    </TouchableOpacity>
    <TouchableOpacity >
     <Text style={[styles.infoText]}>Lafanga, bekamko</Text>
    </TouchableOpacity>

    {PROFILE.links.slice(0,2).map((link, index) =>(
    <TouchableOpacity
    	key={index}
    	style={{flexDirection:'row', alignItems:'center'}} >
     <LinkIcon color='#fff' size={15} />
     <Text style={[styles.infoText,{color:'blue', marginLeft:4}]}>{link}</Text>
    </TouchableOpacity>
     ))
	 }
   </View>
  );
}

const ProfessionalDashboard = () => {

  return(
  <TouchableOpacity >
   <View style={styles.dashContainer}>
     <View>
       <Text style={[styles.dashText,]}> Professional Dashboard </Text>
       <Text style={{color:'gray',marginLeft: 8, fontSize: 15}}> New tools are now available </Text>
     </View>
    <Text style={{color:'blue', paddingRight: 15, fontSize:40, fontWeight:'900'}}> • </Text>
   </View>
 </TouchableOpacity>
  );
}

const ProfileAction = () => {
  const navigation = useNavigation();

  const goToProfile = () =>{
  	  navigation.push('EditProfile',{
  	        name: PROFILE.name,
  	        userName: PROFILE.userName,
  	        profileImg: PROFILE.profileImg,
  	        webSite: PROFILE.webSite,
  	        links: PROFILE.links,
  	        bio: PROFILE.bio,
  	        posts: PROFILE.posts,
  	        followers: PROFILE.followers,
            following: PROFILE.following,
  	})
  }

  const onShare = async () => {
      try {
        const result = await Share.share({
          message:
            `https://www.instagram.com/${PROFILE.userName}/?hl=en`,
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        Alert.alert(error.message);
      }
    };
    
  return(
  <View style={{
  		flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
    }} >
   <TouchableOpacity
		onPress={goToProfile}
     style={[styles.button,]} >
    <Text style={styles.btnTxt}> Edit profile </Text>
   </TouchableOpacity>
   <TouchableOpacity
	   onPress={onShare}
       style={styles.button}>
    <Text style={styles.btnTxt}> Share profile </Text>
   </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  userText:{
   color:'#fff',
   // fontSize: 14,
   fontWeight: '600',
  },
  profileContainer: {
   marginTop:12,
   flexDirection:'row',
   justifyContent:'space-between',
   alignItems:'center',
  },
  profileImg: {
   width: 80,
   height: 80,
   borderRadius: 50,
  },
  status: {
   alignItems: 'center',
   marginRight: 8,
  },
  infoContainer: {
   marginTop:10,
  },
  infoText: {
   color: 'white',
   fontWeight: '500',
  },
  dashContainer: {
   flexDirection:'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   backgroundColor: '#2f2f2f',
   borderRadius: 10,
   height: 50,
   marginTop: 10,
  },
  dashText: {
   marginTop: 6,
   fontSize: 16,
   fontWeight: '500',
   color:'white',
   marginLeft: 8,
  },
  button: {
   backgroundColor: '#2f2f2f',
   borderRadius: 15,
   width: '50%',
   height: 40,
   alignItems: 'center',
   justifyContent: 'center',
   marginRight: 5,
  },
  btnTxt: {
   alignItems: 'center',
   color:'#fff',
   fontSize: 16,
   padding: 5,
  },
});

export default ProfileBody;
