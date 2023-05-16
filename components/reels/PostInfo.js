import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";



const PostInfo = ({ item, index, currentIndex }) => {
  return (
    <>
      <View style={styles.container}>
        <View>
         <View>
          <TouchableOpacity style={{
          	backgroundColor:'rgba(52,52,52,0.6)',
          	borderRadius: 5,
          	flexDirection: 'row',
          	width: 90,
          	justifyContent: 'center',
          }}>
			<Feather name="repeat" size={24} color="#fff" />
			<Feather style={{
				position:'absolute',
				left: 2,
			}} name="plus" size={18} color="#fff" />
           <Text style={{color:'#fff'}}> Try Remix </Text>
           </TouchableOpacity>
 		   <TouchableOpacity style={{ width: 150 }}>
            <View style={styles.userInfoContainer}>
             
              <View style={styles.imgView}>
                <Image style={styles.image} source={{ uri: item.profileImg }} />
              </View>
              <Text style={styles.userName}>{item.user}</Text>
            </View>
            
          </TouchableOpacity>
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.audioContainer}>
            <Ionicons name="ios-musical-note" size={24} color="#fff" />
            <Text style={styles.audioText}>
              DJ Paijo-Zaskia Gotik • Original Audio
            </Text>
          </View>
        </View>
      </View>

      <ActivityIcons item={item} index={index} currentIndex={currentIndex} />
    </>
  );
};

const ActivityIcons = ({ item, index, currentIndex }) => {
  // <AntDesign name="heart" size={24} color="black" />

  const [isLike, setIsLike] = useState(item.isLike);

  return (
    <View
      style={{
        position: "absolute",
        bottom: 91,
        right: 0,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <TouchableOpacity
        onPress={() => setIsLike(!isLike)}
        style={{ padding: 10 }}
      >
        <AntDesign
          name={isLike ? "heart" : "hearto"}
          size={25}
          color={isLike ? "red" : "#fff"}
        />
        <Text style={{ color: "#fff" }}> {item.likes} </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ padding: 10 }}>
        <Ionicons name="ios-chatbubble-outline" size={25} color="#fff" />
        <Text style={{ color: "#fff" }}> 1k </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ padding: 10 }}>
        <Ionicons name="paper-plane-outline" size={25} color="#fff" />
        <Text style={{ color: "#fff" }}> 992 </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ padding: 10 }}>
        <Ionicons name="ios-ellipsis-vertical-sharp" size={25} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 8,
          marginTop: 12,
          borderWidth: 1.5,
          borderColor: "gray",
          borderRadius: 9,
          backgroundColor: "rgba(52,52,52,0.7)",
        }}
      >
        <Ionicons name="ios-musical-notes-sharp" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: width,
    zIndex: 1,
    bottom: 80,
    padding: 10,
  },
  userInfoContainer: {
    width: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imgView: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: "#fff",
    margin: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 100,
  },
  userName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    color: "#fff",
    fontSize: 14,
    marginHorizontal: 10,
  },
  audioContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "rgba(52,52,52,0.6)",
    borderRadius: 50,
    width: width / 1.23,
  },
  audioText: {
    color: "#fff",
  },
});

export default PostInfo;
