import React, {useState} from 'react';
import { StyleSheet, TextInput, Image, View, Text, TouchableOpacity, Switch, ToastAndroid, } from 'react-native';


const EditForm = ({name, userName, profileImg, links, bio, webSite}) => {

	const [isEnabled, setIsEnabled] = useState(false);
	  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
	  
    return(
     <View style={{
     	  borderBottomWidth: 1,
     	  borderColor: '#555'
     }}>
        <View style={{
        	marginTop: 10,
        	alignItems: 'center',
        }}>
           <Image source={{uri: profileImg}}
           		style={{
           			width: 85,
           			height: 85,
           			borderRadius: 100,
           			alignItems: 'center',
           		}}/>
        <TouchableOpacity>		
            <Text style={{color: 'blue', padding: 5}}>Edit picture or avatar</Text>
       </TouchableOpacity>
        </View>
        <View style={{padding:10}}>
          <View style={{paddingBottom: 10}}>
            <Text style={[styles.text,{opacity: 0.6}]}>Name</Text>
            <TextInput
				placeholder="name"
				placeholderTextColor='gray'
				defaultValue={name}
				style={{
					color: '#CCC',
					borderBottomWidth: 1,
					borderColor: '#8d8d8d',
					fontSize: 16,
				}}
            />
          </View>
          
		   <View style={{paddingBottom: 10}}>
            <Text style={[styles.text,{opacity: 0.6}]}>Username</Text>
            <TextInput
				placeholder="name"
				placeholderTextColor='gray'
				defaultValue={userName}
				style={{
					color: '#CCC',
					borderBottomWidth: 1,
					borderColor: '#8d8d8d',
					fontSize: 16,
				}}
            />
          </View>
  		  <View style={{paddingBottom: 10}}>
            <Text style={[styles.text,{opacity: 0.6}]}>Pronouns</Text>
            <TextInput
				placeholder="Pronouns"
				placeholderTextColor='gray'
				defaultValue={``}
				style={{
					color: '#CCC',
					borderBottomWidth: 1,
					borderColor: '#8d8d8d',
					fontSize: 16,
				}}
            />
          </View>
           <View style={{paddingBottom: 10}}>
            <Text style={[styles.text,{opacity: 0.6}]}>Web Site</Text>
            <TextInput
				placeholder="name"
				placeholderTextColor='gray'
				defaultValue={webSite}
				style={{
					color: '#CCC',
					borderBottomWidth: 1,
					borderColor: '#8d8d8d',
					fontSize: 16,
				}}
            />
          </View>
          <View style={{paddingBottom: 10}}>
            <Text style={[styles.text,{opacity: 0.6}]}>Add Links use , for multi links</Text>
            
            <TextInput
				placeholder="https://example.com,https://..."
				multiline
				placeholderTextColor='gray'
				defaultValue={`${links}`}
				style={{
					color: '#CCC',
					borderBottomWidth: 1,
					borderColor: '#8d8d8d',
					fontSize: 16,
				}}
            />
          </View>
          <View style={{paddingBottom: 10}}>
            <Text style={[styles.text,{opacity: 0.6}]}>Bio </Text>
            
            <TextInput
				placeholder="https://example.com,..."
				multiline
				placeholderTextColor='gray'
				defaultValue={`${bio}`}
				style={{
					color: '#CCC',
					borderBottomWidth: 1,
					borderColor: '#8d8d8d',
					fontSize: 16,
				}}
            />
          </View>
        </View>
         <Text style={{color:'#fff', paddingLeft: 10, fontSize: 16}}>Show other accounts </Text>
		<View style={{
			padding: 10,
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center'
		}}>
		 <View style={{
		 	flexDirection: 'row',
		 	justifyContent: 'center',
		  	alignItems: 'center'
		 	
		 }}>
		  <Image
		  	style={{
	           width: 50,
		  	   height: 50,
		  	   borderRadius: 100,
		  	   alignItems: 'center',
		  	   marginRight: 9
		  	 }}
		  source={{uri: profileImg}} />
		  <TouchableOpacity onPress={toggleSwitch}>
		  <Text style={{color: '#CDCDCD', fontWeight: 'bold'}}>legendspam </Text>
		  </TouchableOpacity>
		  </View>
		  <Switch
			 trackColor={{false: '#767577', true: '#81b0ff'}}
			 thumbColor={isEnabled ? 'blue' : '#f4f3f4'}
		 	 ios_backgroundColor="#3e3e3e"
			 onValueChange={toggleSwitch}
			  value={isEnabled}	
		   />
        </View>
		  <Text style={{color: '#838383', paddingHorizontal: 8}}>People will be able to see your accounts by tapping on your username. Only accounts you approve will be shown.</Text>        
	  <View 
		 style={{
		 	marginTop: 10,
		 	borderTopWidth: 1,
			borderColor: '#555',	 		
			paddingVertical: 12,
		 }}>
		 <TouchableOpacity
		 	onPress={() => 
		 		ToastAndroid.show(
		 				'You don\'t have proffessional accounts.', 
		 				ToastAndroid.LONG,
		 		)
		 	}> 
		  <Text style={{color: 'blue', paddingLeft: 10,fontSize: 16}}>Switch to proffessional accounts </Text>        
		</TouchableOpacity>
	 </View>
	 <View  
		 style={{
		 	borderTopWidth: 1,
			borderColor: '#555',	 		
			paddingVertical: 12,
		 }}>
		 <TouchableOpacity
		 	onPress={() => 
		 		ToastAndroid.show(
		 				'You don\'t have proffessional accounts.', 
		 				ToastAndroid.LONG,
		 		)
		 	}> 
		  <Text style={{color: 'blue', paddingLeft: 10,fontSize: 16}}>Personal information settings </Text>        
		</TouchableOpacity>
	  </View>
     </View>
    );
}


const styles= StyleSheet.create({
    text: {
        color: '#fff',
    }
})

export default EditForm;
