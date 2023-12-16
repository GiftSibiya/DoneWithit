import React from "react";
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/bgimage.png")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/icons/logo.png")}
        />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}>
        <Text style={styles.buttonText}> Log In</Text>
      </View>
      <View style={styles.registerButtton}>
        <Text style={styles.buttonText}> Register</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
  logo: {
    height: 70,
    width: 70,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 50,
  },
  tagline: {
    paddingTop: 20,
    color: "#ffff",
    width: "100%",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonText: {
    fontSize: 18,
    color: "#ffff",
  },
  loginButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: 50,
    backgroundColor: "#fc5c65",
    marginBottom: 20,
    borderRadius: 20,
  },
  registerButtton: {
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    height: 50,
    backgroundColor: "#1a43bf",
    marginBottom: 20,
    borderRadius: 20,
  },
});

export default WelcomeScreen;
