import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Spinner from "./Spinner";
import {
  VictoryBar,
  VictoryPie,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
} from "victory-native";

//https://reactnative.dev/docs/dimensions → programatically change the dimensions of the chart

const dayNames = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
];

const getTotal = (data, valuetocompare) => {
  var sum = 0;
  for (var i of data) {
    if (i[1] === valuetocompare) {
      //for carbs
      sum = sum + i[4];
    } else if (i[2] == valuetocompare) {
      //for prot
      sum = sum + i[5];
    }
  }
  return sum;
};

const pressClickHandler = () => {
  return [
    {
      target: "labels",
      mutation: (props) => {
        return props.datum.x !== props.datum.xName
          ? null
          : {
              text: `${props.datum.y} kg`,
              backgroundColor: "rgba(0, 0, 0, .5)",
            };
      },
    },
  ];
};

const pressClickHandlerBar = () => {
  return [
    {
      target: "data",
      mutation: (props) => {
        console.log(props);
        /*return props.style.fill == "red"
          ? null
          : { style: { fill: "red" }, datum: { x: "A" } };*/
      },
    },
  ];
};

const jsonReformat = (jsonInput, isWeekly = false) => {
  var o = [];
  var index = 0;
  if (isWeekly) {
    jsonInput.forEach(([key, value]) => {
      var aux = new Date(key);
      o[index] = {
        x: dayNames[aux.getDay()],
        y: Math.round(value * 100) / 100,
      };
      index++;
    });
  } else {
    const entries = Object.entries(jsonInput);
    entries.forEach(([key, value]) => {
      o[index] = {
        x: key,
        y: Math.round(value * 100) / 100,
      };
      index++;
    });
  }
  return o;
};

function getCol(matrix, col) {
  var column = [];
  for (var i = 0; i < matrix.length; i++) {
    column.push(matrix[i][col]);
  }
  return column; // return column data..
}
const window = Dimensions.get("window");

//#####################################################################################################################
export default function App() {
  const [dimensions, setDimensions] = useState({ window });
  const [data, setData] = useState(null);
  const [weeklyData, setWeeklyData] = useState(null);
  const [status, setStatus] = useState("idle");
  var myData = { carb: {}, prot: {} };

  const getAlimentoWasted = () => {
    if (data !== null) {
      aux = Object.keys(myData.carb).reduce((a, b) =>
        myData.carb[a] > myData.carb[b] ? a : b
      );
      return aux;
    }
    return "Error";
  };

  const isPortrait = (logg = false) => {
    logg ? console.log(dimensions.window.height) : "";
    return dimensions.window.height > dimensions.window.width;
  };

  const getDataWeb = async () => {
    try {
      const response = await fetch(
        "http://193.136.195.105:8086/query?u=admin&p=catraport2020&db=BIoma&q=SELECT mean(PesoTotal) FROM Test where time>now()-7d group by time(1d)"
      );
      const json = await response.json();
      setWeeklyData(json.results[0].series[0].values);
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };
  const getDataFromApi = async () => {
    try {
      const response = await fetch(
        "http://193.136.195.105:8086/query?u=admin&p=catraport2020&db=BIoma&q=SELECT * FROM Test where time>now()-7d"
      );
      const json = await response.json();
      setData(json.results[0].series[0]);
      setStatus("success");
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };
  useEffect(() => {
    setStatus("loading");
    getDataWeb();
    getDataFromApi(); //This must be the last one, then it can set the status to success
  }, []);

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions({ window });
    });
    return () => {
      subscription?.remove();
    }; //Remove the event listener added in the first line of this function
  });

  if (status == "loading" || status == "idle") {
    return <Spinner />;
  } else if (status == "success") {
    var aux = [...new Set(getCol(data.values, 1))];
    for (var i of aux) {
      if (i !== " ") {
        myData.carb[i] = getTotal(data.values, i);
      }
    }
    var aux = [...new Set(getCol(data.values, 2))];
    for (var i of aux) {
      if (i !== " ") {
        myData.prot[i] = getTotal(data.values, i);
      }
    }
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    if (Platform.OS == "web") {
      console.log(jsonReformat(myData.carb));
      console.log([myData.carb]);
      console.log(myData);
      console.log(data);
      return (
        <View style={styles.container}>
          <Text style={styles.restriction}>WebView is restricted</Text>
        </View>
      );
      //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    } else {
      isPortrait(true);
      return (
        <SafeAreaView style={styles.container}>
          <View //FIRST BOX
            style={{
              width: "50%",
              height: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={[
                styles.wasteContainer,
                dimensions.window.width > dimensions.window.height
                  ? styles.wasteContainerLandscape
                  : styles.wasteContainerPortrait,
              ]}
            >
              <Text style={{ textAlign: "center" }}>
                O alimento com maior sobra desta semana foi o{" "}
                {getAlimentoWasted()}
              </Text>
            </View>
            <VictoryPie
              //standalone={true} By default it's true, if false, no width or height can be changed unless a VictoryContainer is used as a parent
              width={0.45 * dimensions.window.width}
              height={dimensions.window.height * 0.5}
              data={jsonReformat(myData.carb)}
              colorScale="qualitative"
              style={{
                labels: {
                  fontSize: ({ text }) =>
                    Array.isArray(text) ? (text[0].length >= 8 ? 10 : 12) : 12,
                  fontWeight: "bold",
                },
              }}
              events={[
                {
                  target: "data",
                  eventHandlers: {
                    onPress: pressClickHandler,
                  },
                },
              ]}
            />
          </View>
          <View //SECOND BOX
            style={{
              width: "50%",
              height: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <VictoryPie
              style={{
                labels: {
                  fontSize: ({ text }) =>
                    Array.isArray(text) ? (text[0].length >= 8 ? 10 : 12) : 12,
                  fontWeight: "bold",
                },
              }}
              width={0.45 * dimensions.window.width}
              height={dimensions.window.height * 0.5}
              data={jsonReformat(myData.prot)}
              colorScale="qualitative"
              events={[
                {
                  target: "data",
                  eventHandlers: {
                    onPress: pressClickHandler,
                  },
                },
              ]}
            />
          </View>

          <View //THIRD BOX
            style={{
              width: "100%",
              height: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <VictoryChart
              theme={VictoryTheme.material}
              width={dimensions.window.width}
              height={
                isPortrait()
                  ? dimensions.window.height * 0.33
                  : dimensions.window.height * 0.5
              }
              domainPadding={20}
            >
              <VictoryBar
                standalone={false}
                colorScale={"qualitative"}
                //alignment={"start"}
                style={{ flex: 1 }}
                data={jsonReformat(weeklyData, true)}
                labels={(datum) => (datum.y > 0 ? "aa" : "")}
                events={[
                  {
                    target: "data",
                    eventHandlers: {
                      onPress: pressClickHandlerBar,
                    },
                  },
                ]}
              />
              <VictoryAxis
                tickLabelComponent={
                  <VictoryLabel
                    angle={isPortrait() ? -30 : 0}
                    y={isPortrait() ? 210 : 165}
                  />
                }
                fixLabelOverlap={true}
              />
              <VictoryAxis dependentAxis style={{ grid: { stroke: 0 } }} />
            </VictoryChart>
          </View>
        </SafeAreaView>
      );
    }
  } else if (status == "error") {
    return (
      <View style={styles.restriction}>
        <Text>Critical Error, refresh the page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  pieContainer: {
    width: 10,
  },
  restriction: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  motherView: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "turquoise",
  },
  childView: {
    backgroundColor: "darkturquoise",
  },
  wasteContainer: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",

    position: "absolute",
    zIndex: 2,
    backgroundColor: "#66E6D9",

    textAlignVertical: "center",
    textAlign: "center",
    borderColor: "#33b3a6",
    borderWidth: 3,
  },
  wasteContainerPortrait: { left: "60%", top: "90%", width: "80%" },
  wasteContainerLandscape: { left: "80%", top: "45%", width: "35%" },
});
