import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, Linking,ScrollView,SafeAreaView,ImageBackground,Picker,TextInput } from "react-native";
import Data from "../desperdicio.json";
import styles from "../styles/main";



const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};


const index = 0;
function NoticiasScreen(props) {
  console.log(props);

  const login = () => props.navigation.navigate("NoticiasScreen");
  
  return (
    <ImageBackground style={styles.image}>


        <View style={{flex: 2.5, flexDirection: 'row', justifyContent: 'space-between'}}>
        
        <View style={{width: 150, height: 120}}>
        
        <Image style={styles.newsImage} source={{uri: Data[index].img,}} />
            <Text  style={styles.textNoticias}  onPress={() => {
              Linking.openURL(Data[index].href);}}>{Data[index].title}</Text>
        </View>

              <Text>     </Text>

        <View style={{width: 150, height: 120}}>
        <Image style={styles.newsImage} source={{uri: Data[index+1].img,}} />
            <Text style={styles.textNoticias} onPress={() => {
              Linking.openURL(Data[index+1].href);}}>{Data[index+1].title}</Text>
        </View>

        <Text>     </Text>

        <View style={{width: 150, height: 120}}>
        <Image style={styles.newsImage} source={{uri: Data[index+2].img,}} />
            <Text style={styles.textNoticias} onPress={() => {
              Linking.openURL(Data[index+2].href);}}>{Data[index+2].title}</Text>
              </View>

              <Text>     </Text>
              <View style={{width: 150, height: 120}}>
        <Image style={styles.newsImage} source={{uri: Data[index+3].img,}} />
            <Text style={styles.textNoticias} onPress={() => {
              Linking.openURL(Data[index+3].href);}}>{Data[index+3].title}</Text>
              </View>
              <Text>     </Text>
              <View style={{width: 150, height: 120}}>
        <Image style={styles.newsImage} source={{uri: Data[index+4].img,}} />
            <Text style={styles.textNoticias} onPress={() => {
              Linking.openURL(Data[index+4].href);}}>{Data[index+4].title}</Text>
              </View>
              <Text>     </Text>
              <View style={{width: 150, height: 120}}>
        <Image style={styles.newsImage} source={{uri: Data[index+5].img,}} />
            <Text style={styles.textNoticias} onPress={() => {
              Linking.openURL(Data[index+5].href);}}>{Data[index+5].title}</Text>
              </View>
                 
      </View>
      

      <View style={{flex: 2.5, flexDirection: 'row',justifyContent: 'space-between',}}>

        <View style={{width: 150, height: 120}}>
        <Image style={styles.newsImage} source={{uri: Data[index+6].img,}} />
            <Text style={styles.textNoticias} onPress={() => {
              Linking.openURL(Data[index+6].href);}}>{Data[index+6].title}</Text>
        </View>

        <Text>     </Text>
        <View style={{width: 150, height: 120}}>
        <Image style={styles.newsImage} source={{uri: Data[index+7].img,}} />
            <Text style={styles.textNoticias} onPress={() => {
              Linking.openURL(Data[index+7].href);}}>{Data[index+7].title}</Text>
        </View>
        <Text>     </Text>

        <View style={{width: 150, height: 120}}>
        <Image style={styles.newsImage} source={{uri: Data[index+8].img,}} />
            <Text style={styles.textNoticias} onPress={() => {
              Linking.openURL(Data[index+8].href);}}>{Data[index+8].title}</Text>
              </View>
              <Text>     </Text>
              <View style={{width: 150, height: 120}}>
        <Image style={styles.newsImage} source={{uri: Data[index+9].img,}} />
            <Text style={styles.textNoticias} onPress={() => {
              Linking.openURL(Data[index+9].href);}}>{Data[index+9].title}</Text>
              </View>
              <Text>     </Text>
              <View style={{width: 150, height: 120}}>
        <Image style={styles.newsImage} source={{uri: Data[index+10].img,}} />
            <Text style={styles.textNoticias} onPress={() => {
              Linking.openURL(Data[index+10].href);}}>{Data[index+10].title}</Text>
              </View>
              <Text>     </Text>
              <View style={{width: 150, height: 120}}>
        <Image style={styles.newsImage} source={{uri: Data[index+11].img,}} />
            <Text style={styles.textNoticias} onPress={() => {
              Linking.openURL(Data[index+11].href);}}>{Data[index+11].title}</Text>
              </View>
              
      </View>
      
    


      <View style={styles.footernoticias}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View>
            {" "}
            <Image
              source={require("../assets/ipb.png")}
              style={styles.rodapeImg}
            />{" "}
          </View>
          <View>
            {" "}
            <Image
              source={require("../assets/cedri.png")}
              style={styles.rodapeImg1}
            />{" "}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default NoticiasScreen;
