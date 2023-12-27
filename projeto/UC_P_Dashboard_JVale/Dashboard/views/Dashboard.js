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
import {PieChart, StackedBarChart } from 'react-native-svg-charts';



const data1 = [
	{
		month: new Date(2015, 0, 1),
		apples: 3840,
		bananas: 1920,
		cherries: 960,
		dates: 400,
		oranges: 400,
	},
	{
		month: new Date(2015, 1, 1),
		apples: 1600,
		bananas: 1440,
		cherries: 960,
		dates: 400,
	},
	{
		month: new Date(2015, 2, 1),
		apples: 640,
		bananas: 960,
		cherries: 3640,
		dates: 400,
	},
	{
		month: new Date(2015, 3, 1),
		apples: 3320,
		bananas: 480,
		cherries: 640,
		dates: 400,
	},
]

const colors = ['#7b4173', '#a55194', '#ce6dbd', '#de9ed6']
const keys = ['apples', 'bananas', 'cherries', 'dates']





const data = [30,10,25,18,17];
const widthAndHeight = 250;

const pieData = data.map((value,index)=>({
	value,
	key: `${index}-${value}`,
	svg:{
		fill: (
			'#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000'
			).slice(0,7)
	}
}));


function DashboardScreen(props) {
	console.log(props);

	const login = () => props.navigation.navigate("DashboardScreen");
	return (
        
		<ImageBackground style={styles.image}>
		
		<View style={{flex:2.5, flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{width:300, height:400}}>
			<StackedBarChart
						style={{height:400, width:200,}}
						keys={keys}
						colors={colors}
						data={data1}
						showGrid={false}
						contentInset={{ top: 30, bottom: 30 }}
				/>
             </View>

            <View style={{width:300, height:400}}>
			<PieChart style={{height:600, width:300}}  
					data={pieData} 
					widthAndHeight={widthAndHeight}  
				/>
            </View>
            
            <View style={{width:300, height:400}}>
              <Text style={styles.textInstrucoes}>Benifícios</Text>
              <Text> </Text>
            
               </View>


</View>
			
	
		
		
            <View style={styles.footerdash}>	
            <View style={{flex: 1, flexDirection: 'row'}}>
        <View> <Image	source={require("../assets/ipb.png")}	style={styles.rodapeImg}/> </View>
        <View>  <Image source={require("../assets/cedri.png")}style={styles.rodapeImg1}/>  </View>
      </View>
        </View>
		</ImageBackground>

        
	);
}



export default DashboardScreen;