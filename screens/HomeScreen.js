import React, {useEffect} from 'react';
import { SafeAreaView, View, KeyboardAvoidingView, Text, StyleSheet, ScrollView, BackHandler, Alert, } from 'react-native';

import Header from './../components/home/Header';
import Stories from './../components/home/Stories';
import Post from './../components/home/Post';
import { POSTS } from './../data/posts';

const HomeScreen = () => {


  useEffect(() => {
          const backAction = () => {
            Alert.alert('Hold on!', 'Are you sure you want to go back?', [
              {
                text: 'Cancel',
                onPress: () => null,
                style: 'cancel',
              },
              {text: 'YES', onPress: () => BackHandler.exitApp()},
            ]);
            return true;
          };
  
          const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
          );
  
          return () => backHandler.remove();
        }, []);

  return(
   <SafeAreaView style={styles.container}>
     <Header />
     <ScrollView>
     <Stories />
       {
	POSTS.map((post, index) => (
          <Post post={post} key={index} />
	))}
     </ScrollView>
   </SafeAreaView>
  );
}

export default HomeScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS==='ios'? 0 : 25,
    backgroundColor: '#000',
  },
});
