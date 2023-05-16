
import React from 'react';
import { StyleSheet, SafeAreaView, Platform, Dimensions, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SEARCHDATA } from './../../data/search';

const { height, width } = Dimensions.get('window');

console.log('width : ', width)

const SearchContent = (props) => {

  return (
    <View >
      {SEARCHDATA.map((data, index) => {

       return (
          <React.Fragment key={index}>
            {data.id === 0 ? (
              <View style={styles.rowContainer}>
                {data.images.splice(0,width > 400?16 : 12).map((imgData, imgIndex) => {
    
                  return (
                    <TouchableOpacity
                    	onPressIn={() => props.data(imgData)}
                    	onPressOut={() => props.data(null)}
                    	style={{marginBottom:5}}
                    	 key={imgIndex}>
                      <Image source={{ uri: imgData }} style={styles.image} />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}

			{data.id === 1 ? (
              <View style={{
              	flexDirection:'row',
              	justifyContent:'space-between'
              }}>
              <View style={{
              	flexDirection:'row',
              	flexWrap:'wrap',
              	width: width > 400?'74%' : 216,
              	justifyContent:'space-between',
              }}>
                {data.images.slice(0, width > 400? 18 : 12).map((imgData, imgIndex) => {

                  return (
                    <TouchableOpacity
                    	onPressIn={() => props.data(imgData)}
                    	onPressOut={() => props.data(null)}
                        style={{marginBottom: 5}}
                         key={imgIndex}>
                      <Image source={{ uri: imgData }} style={
styles.image} />
                    </TouchableOpacity>
                  );
                })}
                </View>
                <View>
                {data.images.slice(width > 400?19 : 13, width > 400?22: 16).map((imgData, imgIndex) => {
               		return(
                	  <TouchableOpacity
                	  	onPressIn={() => props.data(imgData)}
                	    onPressOut={() => props.data(null)}
                	  	 style={{
                	  	 	marginBottom: 5,
                	  	 }}
                	  	 key={imgIndex}
                	  >
                		 <Image
                		    source={{uri: imgData}}
                		        style={{
                		           width:105,
                		           height: 305,
                		     }}/>
               		  </TouchableOpacity>
                	);
                })}
				
                </View>
              </View>
            ) : null}

 			{data.id === 2 ? (
                <View style={{
                	flexDirection: 'row',
                	justifyContent: 'space-between'
                }}>
                  <View>
        			{data.images.slice(0,width > 400?5 : 3).map((imgData, imgIndex) => {
                            return(
                           
                              <TouchableOpacity
                              	onPressIn={() => props.data(imgData)}
                              	onPressOut={() => props.data(null)}
                                 style={{
                                    marginBottom: 5,
                                 }}
                                 key={imgIndex}
                              >
                                 <Image
                                    source={{uri: imgData}}
                                        style={{
                                           width: width > 400? 355 : 215,
                                           height: 305,
                                           marginRight: 5
                                     }}/>
                              </TouchableOpacity>
                            );
                        })}
                        </View>
                    <View style={{
                    	flexDirection:'row',
                    	flexWrap: 'wrap',
                    	width: 130,
                    	justifyContent: 'space-between',
                    }}>
                   {data.images.slice(width > 400?6 : 3,width > 360?16 : 9).map((imgData, imgIndex) => {
             
                       return (
                         <TouchableOpacity
                         	onPressIn={() => props.data(imgData)}
                       		onPressOut={() => props.data(null)}
                            style={{marginBottom: 5}}
                            key={imgIndex}>
                            <Image source={{ uri: imgData }} style={styles.image} />
                         </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
            ) : null}
            
          </React.Fragment>
        );
      })}
    </View>
  );
};


const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: 105,
    height: 150,
  },
});

export default SearchContent;
