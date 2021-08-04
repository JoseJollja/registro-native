import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const RegistroExitoso = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.top} />

      <View style={styles.form}>
        <View style={styles.top_sub} />

        <View style={styles.form_container}>
          <View style={styles.icon}>
            <Icon name="check" size={60} color="#fff" />
          </View>
          <Text style={styles.header}>¡Registro exitoso!</Text>
          {/* <Text style={styles.slogan}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text> */}
          <TouchableOpacity
            style={styles.link}
            onPress={() => navigate("Registro")}
          >
            <Text style={styles.link_text}>Volver al registro.</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottom} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e7f9f7",
  },
  top: {
    flex: 0.25,
    width: "100%",
    backgroundColor: "#24B091",
    borderBottomEndRadius: 100,
  },
  top_sub: {
    zIndex: 1,
    height: 100,
    width: "100%",
    backgroundColor: "#24B091",
  },
  bottom: {
    // flex: 0.2,
    // height: 100,
    width: "100%",
    backgroundColor: "#111023",
    transform: [{ translateY: -100 }],
  },
  form: {
    flex: 1,
    width: "100%",
  },
  form_container: {
    zIndex: 2,
    width: "100%",
    height: "100%",
    paddingTop: 100,
    paddingHorizontal: 50,
    backgroundColor: "#fff",
    // justifyContent: "center",
    alignItems: "center",
    borderTopStartRadius: 100,
    transform: [{ translateY: -100 }],
  },
  header: {
    fontSize: 40,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
  },
  slogan: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Poppins_500Medium",
  },
  link: {
    marginTop: 30,
  },
  link_text: {
    fontSize: 20,
    textDecorationLine: "underline",
    textDecorationColor: "#2cb9b0",
    fontFamily: "Poppins_500Medium",
  },
});

export default RegistroExitoso;
