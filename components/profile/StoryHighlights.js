import React, {useState, } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, } from 'react-native';
import {ChevronUpIcon,
        ChatBubbleOvalLeftIcon } from "react-native-heroicons/solid";
import { PlusCircleIcon, } from "react-native-heroicons/outline";
import { USERS, PROFILE } from '../../data/users';

const circleImg = './../../assets/PlusCircle.png';

const StoryHighlights = () => {
  const [ isShow, setIsShow ] = useState(true);

   return(
    <View>
      <Header isShow={isShow} setIsShow={setIsShow}/>
	{isShow?(
      <Story />	
	):(
		null
	)}
    </View>
   );
}

const Header = ({isShow, setIsShow}) => {
   return(
   <View style={{flexDirection:'row',justifyContent: 'space-between', marginTop: 10,}}>
     <View>
       <Text style={{fontSize: 16,color:'#fff',fontWeight:'500'}}> Story highlights </Text>
       <Text style={{color:'#fff'}}> Keep your favorite stories on your profile </Text>
     </View>
     <TouchableOpacity
     	style={{padding:5}}
     	onPress={() => setIsShow(!isShow)}>
       <ChevronUpIcon color='#fff' size={25} />
     </TouchableOpacity>
   </View>
   );
}

const Story = () => {

  return(
   <View style={styles.container}>
     <ScrollView horizontal
        showsHorizontalScrollIndicator={false}>
        <View style={{alignItems:'center'}}>
         <TouchableOpacity>
            <Image
            style={[styles.image,{borderWidth:0}]}
            source={require(circleImg)}
          />
         </TouchableOpacity>
          <Text style={styles.text}> New </Text>
        </View>

        {USERS.map((story, index) =>(
         <View key={index} style={{alignItems:'center'}}>
         <TouchableOpacity>
          <Image
            style={styles.image}
            source={{uri: null}}
          />
         </TouchableOpacity>
          <Text style={styles.text}> 
          	{
              // story.user.length > 11 ?
                // story.user.slice(0, 10).toLowerCase() + '...'
              // : story.user.toLowerCase()
            }
          </Text>
        </View>
        ))}
      </ScrollView>
   </View>
  );
}


const styles = StyleSheet.create({
  container: {
   color: 'white',
   marginTop: 13,
   paddingBottom: 12,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 50,
    padding: 4,
    marginLeft: 8,
    borderWidth: 3,
    borderColor:'#555',
  },
  text: {
   marginTop: 5,
   fontSize: 16,
   color: 'white',
  },
});

export default StoryHighlights;
