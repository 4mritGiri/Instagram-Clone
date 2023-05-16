
import { SafeAreaView, View, TouchableOpacity, StyleSheet, Text, Image, TextInput, } from 'react-native';
import { ChevronLeftIcon, EllipsisVerticalIcon, CheckBadgeIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import FormikPostUploader from './FormikPostUploader';

const light = '#fff';

const AddNewPost = () => {

   return(
   <View style={styles.mainContainer}>
     <Header />
     <FormikPostUploader />
   </View>
   );
}

const Header = () => {
  const navigation = useNavigation();

  return(
   <View style={styles.header}>
     <TouchableOpacity
	onPress={() => navigation.goBack()}
	style={{flexDirection:'row'}}>
       <ChevronLeftIcon color={light} size={30} />
        <Text style={[styles.headerText,{color:'lightblue'}]} > Back </Text>
     </TouchableOpacity>

     <Text style={styles.headerText} > New Post </Text>
     <Text style={styles.headerText} > </Text>
   </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    margin:8,
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:0.5,
    borderColor:'gray',
    paddingBottom: 8,
  },
  headerText: {
   color: light,
   fontSize: 22,
  },
});


export default AddNewPost;
