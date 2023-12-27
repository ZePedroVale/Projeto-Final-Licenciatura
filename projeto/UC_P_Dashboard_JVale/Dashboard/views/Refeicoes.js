import React from "react";
import styles from '../styles/main'; 
import {
	View,
	StyleSheet,
	ImageBackground,
	Image,
	Text,
	Button,
} from "react-native";






function RefeicoesScreen(props) {
	console.log(props);

	const login = () => props.navigation.navigate("RefeicoesScreen");
	return (
        
		<ImageBackground style={styles.image}>
		<View>

          </View>
		
            <View style={styles.footerlogin}>
            <View style={{flex: 1, flexDirection: 'row'}}>
        <View> <Image	source={require("../assets/ipb.png")}	style={styles.rodapeImg}/> </View>
        <View>  <Image source={require("../assets/cedri.png")}style={styles.rodapeImg1}/>  </View>
      </View>
        </View>
		</ImageBackground>

        
	);
}



export default RefeicoesScreen;
