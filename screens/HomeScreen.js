import React, {useState} from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
//import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import images from "../constants/image";

const screenWidth = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {
  const cvData = useSelector((state) => state.cvData);
  const [isGitHubPressed, setIsGitHubPressed] = useState(false);

  // Function to navigate to the GitHub screen
  const navigateToGitHubScreen = () => {
    navigation.navigate("GitHub");
  };

  return (
    <View style={styles.root}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={styles.img}
      >
        <View style={styles.profileContainer}>
          <Image source={images.bimage} style={styles.profileImage} />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.displayText}>Full Name:</Text>
          <Text style={styles.innerText}>{cvData.name}</Text>

          <Text style={styles.displayText}>Slack Username:</Text>
          <Text style={styles.innerText}>{cvData.slack}</Text>

          <Text style={styles.displayText}>GitHub Handle:</Text>
          <TouchableOpacity
            onPress={navigateToGitHubScreen}
            onPressIn={() => setIsGitHubPressed(true)}
            onPressOut={() => setIsGitHubPressed(false)}
          >
            <Text
              style={[
                styles.linkText,
                isGitHubPressed && styles.linkTextPressed,
              ]}
            >
              {cvData.github}
            </Text>
          </TouchableOpacity>
        
          <Text style={styles.displayText}>Bio:</Text>
          <Text style={styles.innerText}>{cvData.bio}</Text>
        </View>
        <View style={styles.EditButtonContainer}>
          <Button
            title="Edit"
            onPress={() => navigation.navigate("Edit")}
            style={styles.EditButton}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
  },
  img: {
    height: "100%",
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  TextContainer: {
    marginTop: 10,
    width: "90%",
    paddingLeft: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20, 
  },
  displayText: {
    paddingBottom: 10,
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
  },
  linkText: {
    color: "blue", 
    textDecorationLine: "underline",
    fontSize: 16,
    paddingBottom: 10,
  },
  linkTextPressed: {
    //color: "purple", 
  },

  innerText: {
    paddingBottom: 10,
    fontSize: 16,
  },

  EditButtonContainer: {
    width: "50%",
    alignSelf: "center",
    marginTop: 80,
  },
  EditButton: {
    borderRadius: 50,
  },
});
