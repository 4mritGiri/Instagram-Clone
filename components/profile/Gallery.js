
import {View, StyleSheet, Text, Image, } from 'react-native';
import { POSTS } from './../../data/posts';


const Gallery = () => {

   return(
    <View style={styles.container}>
    {POSTS.map((p, index) => (
     <View key={index} >
       <Image style={styles.image} source={{uri: p.imageUrl }}/>
     </View>
     ))
     }
    </View>
   );
}


const styles = StyleSheet.create({
   container: {
     marginTop: 8,
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'space-between',
     flexWrap: 'wrap',
   },
   image:{
     width: 160,
     height: 160,
     marginBottom: 3,
     borderRadius: 2,
   },
});

export default Gallery;
