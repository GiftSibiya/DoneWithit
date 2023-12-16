import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This updating v3,</Text>
      <Image source={require("./assets/favicon.png")} />
      <Button
        title="Tap Me"
        color={"black"}
        onPress={() => console.log("You out here pressing buttons, bruh")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
