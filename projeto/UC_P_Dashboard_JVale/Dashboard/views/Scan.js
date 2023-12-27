import React from "react";
import styles from '../styles/main'; 
import {
	View,
	ImageBackground,
	Image,
	Text,
    Picker,
	Button,
  TextInput,
} from "react-native";








function ScanScreen(props) {
	console.log(props);

  const login = () => props.navigation.navigate("ScanScreen");
	return (
        
		<ImageBackground
		
			//resizeMode="cover"
			style={styles.image}
			/*width="500"
			height="500"*/
		>
			<View style={styles.logoContainer}>
				<Text style={styles.textScan}>Selecione a sua ementa </Text> 
                <Picker style={{ height: 50, width: 150 }}>
                    <Picker.Item label="Sugestão Chefe" value="java" />
                    <Picker.Item label="Dieta" value="js" />
                    <Picker.Item label="Vegetariana" value="js" />
                </Picker>

			</View>

           
          <View style={{flex:1, flexDirection:'row'}}>
            <View style={{width:300, height:400}}>
              <Text style={styles.textSt2}>Peito de Frango</Text>
            <Image style={{width:300, height:400,right:"-30%"}}	source={require("../assets/bife.png")} style={styles.alimentos} />
            <View style={{flex:1, flexDirection:'row',right:"-30%"}}><View><Button color="green" title="Sim"/></View><View><Button color="red" title="Não"/></View></View>
            </View>

            <View style={{width:300, height:400}}>
              <Text style={styles.textSt2}>Couve Flor</Text> 
            <Image style={{width:300, height:400,right:"-30%"}}	source={require("../assets/couve.png")} style={styles.alimentos} />
            <View style={{flex:1, flexDirection:'row',right:"-30%"}}><View><Button color="green" title="Sim"/></View><View><Button color="red" title="Não"/></View></View>
            </View>
            
            <View style={{width:300, height:400}}>
              <Text style={styles.textSt2}>Arroz</Text>
            <Image style={{width:300, height:400,right:"-30%"}}	source={require("../assets/arroz.png")} style={styles.alimentos} />
            <View style={{flex:1, flexDirection:'row',right:"-30%"}}><View><Button color="green" title="Sim"/></View><View><Button color="red" title="Não"/></View></View></View>
          </View>


            <View style={styles.footerscan}>
            <View style={{flex: 1, flexDirection: 'row'}}>
        <View> <Image	source={require("../assets/ipb.png")}	style={styles.rodapeImg}/> </View>
        <View>  <Image source={require("../assets/cedri.png")}style={styles.rodapeImg1}/>  </View>
      </View>
        </View>
		</ImageBackground>

);
}

export default ScanScreen;
