
import {StyleSheet, SafeAreaView, Image, View, Text, TouchableOpacity, } from 'react-native';
import {ChevronDownIcon,} from 'react-native-heroicons/solid';
import LoginForm from './../components/login/LoginForm';


const instaLogo = './../assets/logo/Instagram-logo.png';

const LoginScreen = ({isAuthenticated,setIsAuthenticated}) => {

   return(
    <SafeAreaView style={styles.container}>
      <Logo />
      <LoginForm isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
    </SafeAreaView>
   );
}

const Logo = () => {

	return(
	<View>
      <TouchableOpacity
      		style={{flexDirection:'row',
      			justifyContent:'center',alignItems:'center'}}>
       <Text style={styles.lang}>English(US) </Text>
       <ChevronDownIcon size={20} color='#fff' />
	  </TouchableOpacity>
	  <View style={styles.logo}>
	    <Image
	      style={styles.image}
	      source={require(instaLogo)} />
	 </View>
    </View>
	);
}

const styles = ({
    container:{
    	paddingTop: Platform.OS==='ios'?0 : 30,
    	backgroundColor: '#000',
    	flex:1,
    },
    lang: {
    	color: '#fff',
    	fontSize:16,
    	fontWeight:'500',
    	padding: 6,
    },
    logo: {
    	justifyContent: 'center',
    	alignItems:'center',
    	marginTop:160,
    },
	image: {
		height: 100,
		width: 250,
	},
});

export default LoginScreen;
