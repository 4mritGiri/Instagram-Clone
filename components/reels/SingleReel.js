
import React, { useState, useRef, useEffect} from 'react';
import { Dimensions, StyleSheet, View, Pressable } from 'react-native';
import { Video } from 'expo-av';
import { Ionicons, AntDesign, } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import PostInfo from './PostInfo.js';

const SingleReel = ({ item, index, currentIndex }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState({});
  const [ mute, setMute ] = useState(false);

  
  const isFocused = useIsFocused();
  
    useEffect(() => {
      if (!isFocused) {
        setIsPlaying(false);
        videoRef.current.pauseAsync();
      }
    }, [isFocused]);
    
  const onBuffer = buffer => {
    console.log('buffering', buffer);
  };

  const onError = error => {
    console.log('error', error);
  };

  const handlePlayPause = () => {
    status.isPlaying ? videoRef.current.pauseAsync()
    : videoRef.current.playAsync();
    
    setIsPlaying(!isPlaying);

    if (!isPlaying) {
          videoRef.current.playAsync();
        } else {
          videoRef.current.pauseAsync();
        }
  };

  

  return (
    <View style={styles.container}>
      <Pressable
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
        onPress={handlePlayPause}
      >
        <Video
          ref={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          isMuted={mute}
          useNativeControls
          style={styles.video}
          resizeMode="cover"
          paused={!isPlaying}
          source={{ uri: item.video }}
          shouldPlay={index === currentIndex}
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <View style={styles.playPauseContainer}>
          <AntDesign
            name={!isPlaying ?'pausecircleo' : null }
            size={38}
            color="#fff"
          />
        </View>
      </Pressable>
      <Pressable onPress={()=> setMute(!mute)}
      	style={styles.volumn}>
      <Ionicons
          name={!mute ?'ios-volume-high' : 'ios-volume-mute'}
          size={23}
          color="#fff"
     />
     </Pressable>
     <PostInfo item={item} index={index} currentIndex={currentIndex}/>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: height + 10,
    width: width,
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  playPauseContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  volumn: {
    fontSize: 20,
    padding: 10,
  	position: 'absolute',
  	top: height /14,
  	right: 5,
  	backgroundColor: 'rgba(52,52,52,0.6)',
  	borderRadius: 100,
  },
});

export default SingleReel;
