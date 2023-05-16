import React, { useState } from "react";
import {
  StyleSheet,                                                                 Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";                                                      import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";


const ActivityIcons = ({ item, index, currentIndex }) => {
  // <AntDesign name="heart" size={24} color="black" />

  const [isLike, setIsLike] = useState(item.isLike);

  return (
    <View
      style={{                                                                                   position: "absolute",
        bottom: 91,
        right: 0,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >                                                                                          <TouchableOpacity
        onPress={() => setIsLike(!isLike)}
        style={{ padding: 10 }}
      >
        <AntDesign
          name={isLike ? "heart" : "hearto"}                                                       size={25}
          color={isLike ? "red" : "#fff"}
        />                                                                                       <Text style={{ color: "#fff" }}> {item.likes} </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ padding: 10 }}>
        <Ionicons name="ios-chatbubble-outline" size={25} color="#fff" />
        <Text style={{ color: "#fff" }}> 1k </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ padding: 10 }}>                                                 <Ionicons name="paper-plane-outline" size={25} color="#fff" />
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

export default ActivityIcons;
