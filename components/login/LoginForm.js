
import {View, StyleSheet, TextInput, Text, TouchableOpacity,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const LoginForm = ({isAuthenticated, setIsAuthenticated}) => {  const userName= 'Admin';
	return(
	<View style={styles.container}>
	  <View style={styles.input}>
	    <TextInput
	    	style={{color:'#fff',fontWeight:'700',fontSize: 18}}
	    	placeholder='Phone number, email or username '
	    	placeholderTextColor='gray'
	    	 />
	  </View>
	  <View style={[styles.input,{marginTop:8}]}>
	     <TextInput
	         style={{color:'#fff',fontWeight:'700', fontSize: 18}}
	         placeholder='Password '
	         secureTextEntry={true}
	         placeholderTextColor='gray'
	      />
	  </View>
	  <TouchableOpacity
	  		onPress={() => setIsAuthenticated(!isAuthenticated)}
	  		style={styles.button}>
	    <Text
	    	style={{fontWeight:'800',
	    		fontSize:22,
	    		color:'#fff',
	    		padding: 8}}
	    > Log In </Text>
	  </TouchableOpacity>
	  <View style={styles.forgot}>
	    <Text style={{color:'#fff',fontSize: 16,fontWeight:'500'}}> Forgot your login details? </Text>
	    <Text style={{color:'gray', fontSize:16,fontWeight:'900'}}> Get help logging in. </Text>
	  </View>
	  <Text style={styles.or}> OR </Text>

	  <TouchableOpacity style={styles.loginWithFb}>
	  <FontAwesome5 name="facebook" size={28} color="blue" />
		<Text style={{color:'blue',fontSize: 23}} > Log In with Facebook </Text>
	  </TouchableOpacity>

	  <View style={styles.noAccount}>
		<Text style={{color:'#fff',fontSize:18,}}> Don't have an account?</Text>
		<TouchableOpacity>
		  <Text style={{color:"gray",fontSize: 18, fontWeight: '900'}}> Sign Up </Text>
		</TouchableOpacity>
	  </View>
	</View>	
	);
}


const styles = StyleSheet.create({
	container:{
		marginTop:40,
		marginHorizontal: 18,
	},
	input: {
		backgroundColor: "#2f2f2f",
		padding: 8,
		borderRadius: 5,	
		margin: 5,
	},
	button: {
		backgroundColor: '#2233ff',
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius:8,
		marginHorizontal:3,
	},
	forgot: {
		flexDirection: 'row',
		justifyContent:'center',
		alignItems:'center',
		marginTop: 20,
		borderBottomWidth: 0.5,
		borderColor: 'gray',
		paddingBottom: 20,
	},
	or: {
		position:'absolute',
		color:'#fff',
		bottom: 68,
		left: '50%',
		zIndex: 999,
		fontSize: 18,
		backgroundColor:'#000',
		padding: 2,
	},
	loginWithFb: {
	   flexDirection: 'row',
		marginTop: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	noAccount: {
	    position: 'absolute',
		flexDirection: 'row',
		justifyContent: 'center',
		bottom: '-110%',
		left: '25%',
		
	}
})

export default LoginForm;

