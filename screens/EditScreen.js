import React, { useState } from 'react';
import { View, TextInput, Button, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateCVData } from '../Redux/actions/actions';
import images from '../constants/image';

const screenWidth = Dimensions.get("window").width;

function EditScreen({ navigation }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [slack, setSlack] = useState('');
  const [github, setGithub] = useState('');
  const [bio, setBio] = useState('');

  const handleSave = () => {
    dispatch(updateCVData({ name, slack, github, bio }));
    navigation.goBack();
  };

  return (
    <View style={styles.root}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={styles.img}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Edit your full name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Edit your slack username"
            value={slack}
            onChangeText={(text) => setSlack(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter a valid GitHub handle"
            value={github}
            onChangeText={(text) => setGithub(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Edit your bio"
            value={bio}
            onChangeText={(text) => setBio(text)}
          />
        
        
        </View>
        <View style={styles.saveButtonContainer}>
          <Button
            title="Save"
            onPress={handleSave}
            style={styles.saveButton}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default EditScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  img: {
    height: "100%",
    width: screenWidth,
  },
  inputContainer: {
    marginTop: 80,
    width: '90%', 
    paddingLeft: 40,
  },
  input: {
    backgroundColor: 'white', 
    marginBottom: 40,
    borderRadius: 5,
    padding: 10,
    height: 40,
  
  },
  saveButtonContainer: {
    width: '50%', 
    alignSelf: 'center', 
    marginTop: 80, 
    
  },
  saveButton: {
    borderRadius: 50,
  },
  
});
