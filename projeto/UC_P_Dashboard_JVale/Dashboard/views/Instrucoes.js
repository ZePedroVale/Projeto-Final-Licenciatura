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






function InstrucoesScreen(props) {
	console.log(props);

	const login = () => props.navigation.navigate("RefeicoesScreen");
	return (
        
		<ImageBackground style={styles.image}>
		
		<View style={{flex:1, flexDirection:'row'}}>
            <View style={{width:300, height:400}}>
              <Text style={styles.textInstrucoes}>1º Passo - Colocar o prato em cima da balança </Text>
            <Image style={{width:600, height:700,right:"-30%"}}	source={require("../assets/balanca.png")} style={styles.alimentos} />
             </View>

            <View style={{width:300, height:400}}>
              <Text style={styles.textInstrucoes}>2º Passo - Selecionar a sua ementa</Text> 
            <Image style={{width:600, height:700,right:"-30%"}}	source={require("../assets/scan.png")} style={styles.alimentos} />
            </View>
            
            <View style={{width:300, height:400}}>
              <Text style={styles.textInstrucoes}>3º Passo - Visualizar os seus resultados</Text>
            <Image style={{width:600, height:700,right:"-30%"}}	source={require("../assets/resul.png")} style={styles.alimentos} />
               </View>

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



export default InstrucoesScreen;
