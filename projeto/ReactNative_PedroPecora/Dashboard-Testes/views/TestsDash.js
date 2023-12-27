import React from "react";
import styles from "../styles/main";
import Footer from "../Footer";
import WebView from "react-native-webview";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Button,
  Platform,
} from "react-native";

function TestsDash(props) {
  /*iframeString = `<iframe
      src="https://mdn-samples.mozilla.org/snippets/html/iframe-simple-contents.html"
      title="iframe Example 1"
      width="400"
      height="300"
    ></iframe>`;*/
  //console.log(iframeString);
  //console.log(Platform.OS == "web" ? "Sim" : "Nao");
  const login = () => props.navigation.navigate("TestsDash");
  return (
    <ImageBackground style={styles.image}>
      <View style={styles.dashcontainer}>
        <View style={styles.dashItemFull}>
          <iframe
            src="http://193.136.195.105:3000/d-solo/spwg8Ejnk/bioma?orgId=2&from=now-7d&to=now&theme=light&panelId=4"
            width="500px"
            height="250px"
            frameborder="0"
          ></iframe>
          <View style={{ display: "flex-inline" }}>
            <Text style={styles.dashText}>
              Contagem de alimentos desperdiçados
            </Text>
            <iframe
              src="http://193.136.195.105:3000/d-solo/spwg8Ejnk/bioma?orgId=2&theme=light&panelId=11"
              width="200px"
              height="200px"
              frameborder="0"
            ></iframe>
            <iframe
              src="http://193.136.195.105:3000/d-solo/spwg8Ejnk/bioma?orgId=2&theme=light&panelId=12"
              width="200"
              height="200"
              frameborder="0"
            ></iframe>
          </View>
        </View>
        <View style={styles.dashItem}>
          <iframe
            src="http://193.136.195.105:3000/d-solo/spwg8Ejnk/bioma?orgId=2&theme=light&panelId=6"
            width="500"
            height="250"
            frameborder="0"
          ></iframe>
        </View>
        <View style={styles.dashItem}>
          <iframe
            src="http://193.136.195.105:3000/d-solo/spwg8Ejnk/bioma?orgId=2&theme=light&panelId=8"
            width="500"
            height="250"
            frameborder="0"
          ></iframe>
        </View>
      </View>
      <Footer />
    </ImageBackground>
  );
}

export default TestsDash;

/*
<iframe
              src="http://193.136.195.105:3000/d-solo/spwg8Ejnk/bioma?orgId=2&theme=light&panelId=11"
              width="200px"
              height="200px"
              frameborder="0"
            ></iframe>
<WebView
        scalesPageToFit={true}
        bounces={false}
        javaScriptEnabled
        style={{ height: 500, width: 300 }}
        source={{
          html: `
                  <!DOCTYPE html>
                  <html>
                    <head></head>
                    <body>
                      <div id="baseDiv">${iframeString}</div>
                    </body>
                  </html>
            `,
        }}
        automaticallyAdjustContentInsets={false}
      />
*/
