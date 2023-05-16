
import {SafeAreaView,Platform, Dimensions, StyleSheet, View, Text,} from 'react-native';

import Header from './../components/reels/Header';
import ReelsComponent from './../components/reels/ReelsComponent';

const ReelsScreen = () => {
   
  return(
   <>
    <SafeAreaView style={styles.container}>
       <Header />
       <ReelsComponent />
    </SafeAreaView>
   </>
  );
}

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
  	//flex:1,
  	//paddingTop: Platform.OS === 'ios'? 0 : 35,
  	backgroundColor:'black',
  	width: width,
  	height: height+25,
  	position: 'relative',
  },
});

export default ReelsScreen;
