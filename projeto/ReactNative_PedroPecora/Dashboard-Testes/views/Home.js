import React, { Component } from "react";
import styles from "../styles/main";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Button,
  ScrollView,
} from "react-native";
import Slideshow from "react-native-image-slider-show";
import Footer from "../Footer";

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: "Title 1",
          caption: "Caption 1",
          url: "http://placeimg.com/640/480/any",
        },
        {
          title: "Title 2",
          caption: "Caption 2",
          url: "http://placeimg.com/640/480/any",
        },
        {
          title: "Title 3",
          caption: "Caption 3",
          url: "http://placeimg.com/640/480/any",
        },
      ],
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.dataSource.length
              ? 0
              : this.state.position + 1,
        });
      }, 2000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
    return (
      <ImageBackground style={styles.image}>
        <View style={styles.slider}>
          <Slideshow
            dataSource={this.state.dataSource}
            position={this.state.position}
            onPositionChanged={(position) => this.setState({ position })}
          />
        </View>
        <View>
          <Text style={styles.text}>5 Dicas de Nutrição</Text>
        </View>

        <Footer />
      </ImageBackground>
    );
  }
}

export default HomeScreen;
