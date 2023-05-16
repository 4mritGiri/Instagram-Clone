
import {SafeAreaView,Platform, StyleSheet, View, Text, } from 'react-native';
import AddNewPost from './../components/newPost/AddNewPost';


const NewPostScreen = () => {

  return(
    <SafeAreaView style={styles.container}>
      <View>
       <AddNewPost />
      </View>
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

export default NewPostScreen;
