import React from "react";
import { Image, View } from "react-native";
import styles from "./styles/main";

export default function Footer() {
  return (
    <View style={styles.footertotal}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View>
          {" "}
          <Image
            source={require("./assets/ipb.png")}
            style={styles.rodapeImg}
          />{" "}
        </View>
        <View>
          {" "}
          <Image
            source={require("./assets/cedri.png")}
            style={styles.rodapeImg1}
          />{" "}
        </View>
      </View>
    </View>
  );
}
