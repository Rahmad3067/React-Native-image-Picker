import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { bold, gray } from 'ansi-colors';

export default function App() {

  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create ({

  container: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    margin: 15,
    padding: 15,
    backgroundColor: 'gray',
    marginTop: 80,
    alignSelf: 'center',

  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },



  instructions: {
    textAlign:'center',
    margin: 15,
  },
  logo : {
    alignItems: 'center',
    height: 100,
    width: 150,
    margin: 15,

  },

  instructions: {
    textAlign: 'center',
    margin : 15,



  },


  button: {
    padding: 5,
    borderRadius:5,
  },

  buttonText: {
    fontWeight: "bold",
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 4,

  },

})


