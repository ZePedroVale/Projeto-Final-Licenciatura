import React from "react";
import styles from "../styles/main";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Button,
} from "react-native";
import Footer from "../Footer";

function RefeicoesScreen(props) {
  console.log(props);

  const login = () => props.navigation.navigate("RefeicoesScreen");
  return (
    <ImageBackground style={styles.image}>
      <View></View>

      <Footer />
    </ImageBackground>
  );
}

export default RefeicoesScreen;
