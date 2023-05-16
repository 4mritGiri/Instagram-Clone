
import React from 'react';
import { StyleSheet, SafeAreaView, Platform, Dimensions, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

const SearchBox = () => {
  return (
    <View>
      <TouchableOpacity style={styles.searchContainer}>
        <Ionicons style={styles.searchIcon} name="ios-search" size={24} color="#fff" />
        <TextInput
          placeholder="Search here.."
          placeholderTextColor="gray"
          style={styles.input}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2f2f2f',
    marginBottom: 20
  },
  searchIcon: {
    marginLeft: '5%',
  },
  input: {
    width: width / 1.2,
    padding: 3,
    marginHorizontal: 3,
    color: '#00ccbb',
    fontWeight: '700',
    fontSize: 20,
  },
});

export default SearchBox;
