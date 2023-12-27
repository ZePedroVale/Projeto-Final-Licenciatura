import React, { Component } from "react";
import styles from "../styles/main";
import {
  View,
  ImageBackground,
  Image,
  Text,
  Button,
  TextInput,
  Alert,
} from "react-native";
import HomeScreen from "./Home";
import Footer from "../Footer";

const userList = [
  {
    id: 1,
    username: "sj",
    password: "sj",
    name: "Steeve Jobs",
    description:
      "Steve Jobs was born in 1955 and raised by adoptive parents in Cupertino, California. Though he was interested in engineering, his passions as a youth varied.",
    email: "steevejobs@apple.com",
    number: "800–692–7753",
  },
  {
    id: 2,
    username: "bg",
    password: "bg",
    name: "Bill Gates",
    description:
      "William Henry Gates III (born October 28, 1955) is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft Corporation",
    email: "billgates@microsoft.com",
    number: "XYZ-145-SD2",
  },
];

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loggedUser: [],
    };
  }

  // Update state key with value
  setStateFor = (key, val) => {
    this.setState({
      [key]: val,
    });
  };

  // Verify existing user credentials
  verifyUser = () => {
    // Find matching user
    const user = userList.find(
      (x) =>
        x.username === this.state.username && x.password === this.state.password
    );

    if (user !== undefined) {
      this.props.navigation.navigate("App", { user: this.state.loggedUser });
      this.props.navigation.navigate("Home");
    } else {
      console.log("Invalid User");
      alert("Invalid User");
    }
  };

  render() {
    return (
      <ImageBackground style={styles.image}>
        <View style={styles.logoContainer}>
          <Text style={styles.textStl}>
            Utilizador:
            <TextInput
              style={styles.input}
              onChangeText={(value) => this.setStateFor("username", value)}
            />
          </Text>
          <Text style={styles.textStl}>
            Senha:
            <TextInput
              style={styles.input}
              onChangeText={(value) => this.setStateFor("password", value)}
              secureTextEntry
            />
          </Text>
          <Button title="Entrar" onPress={this.verifyUser} />
        </View>

        <Footer />
      </ImageBackground>
    );
  }
}

export default LoginScreen;

/*<View style={styles.footerlogin}>
            <View style={{flex: 1, flexDirection: 'row'}}>
        <View> <Image	source={require("../assets/ipb.png")}	style={styles.rodapeImg}/> </View>
        <View>  <Image source={require("../assets/cedri.png")}style={styles.rodapeImg1}/>  </View>
      </View>
        </View>*/
