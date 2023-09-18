import React from 'react';
import { SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';


const GitHubScreen = () => {
  return (
    <SafeAreaView style={{ width:'100%', height: '100%' }}>
    <WebView 
      source={{ uri: 'https://github.com/JK11751' }} 
      />
  </SafeAreaView>
  );
};

export default GitHubScreen;
