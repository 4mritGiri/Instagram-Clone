
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import * as Yup from  'yup';
import { Formik } from 'formik';
import React,{ useState, } from 'react';

const light = '#fff';

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A url is required'),
  caption: Yup.string().max(2200, 'Caption has reached the character limit.'),
})

const PLACEHOLDER_IMG = 'https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1';

const FormikPostUploader = () => {

  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);

  return(
   <Formik
    initialValues = {{caption: '', imageUrl: ''}}
    onSubmit = {(values) => console.log(values)}
    validationSchema={uploadPostSchema}
   >
   {
     ({handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
      <>
       <View style={{flexDirection:'row', marginTop:8,}} >
	<View >
	 <Image
	   style={styles.image}
	   source={{uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG}}/>
	</View>
	<TextInput multiline={true}
                style={styles.inputField}
                placeholder='Write a captions...'
                placeholderTextColor='gray'
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
         />
	{ errors.caption && (
           <Text style={styles.errors}>{errors.caption}</Text>
         )}
	</View>
        <View style={styles.input}>
	  <TextInput
		onChange={(e)=> setThumbnailUrl(e.nativeEvent.text)}
		style={styles.inputField}
		placeholder='Enter image url...'
		placeholderTextColor='gray'
		onChangeText={handleChange('imageUrl')}
                onBlur={handleBlur('imageUrl')}
                value={values.imageUrl}
	   />
	{ errors.imageUrl && (
	   <Text style={styles.errors}>{errors.imageUrl}</Text>
	 )}
       </View>
       <View style={{alignItems:'center'}}>
	<TouchableOpacity
	   onPress={handleSubmit}
	   disabled={!isValid}
	   style={styles.button}>
	  <Text style={[styles.text,{width: '100%'}]} > Share </Text>
	</TouchableOpacity>
      </View>
      </>
     )
   }
   </Formik>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    margin:8,
  },
  image:{
    height: 80,
    width: 80,
    marginTop: 5,
    borderRadius: 5,
    marginRight:3,
  },
  input: {
   padding: 5,
   marginTop: 5,
   borderTopWidth:0.9,
   borderColor:'gray',
  },
  inputField: {
   padding:3,
   marginBottom: 5,
   width:400,
   color:'#00ccbb',
   fontSize:18,
   borderRadius: 15
  },
  errors: {
   fontSize: 12,
   color:'red',
  },
  button: {
   alignItems: 'center',
  // padding: 8,
   backgroundColor:'blue',
   borderRadius: 50,
   //marginHorizontal: 60,
   width: 100,
   height: 40,
  },
  text: {
   color: light,
   fontWeight: '600',
   fontSize: 22,
   padding: 5,
  },
});

export default FormikPostUploader;
