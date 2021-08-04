import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import FilledButton from "../Buttons/FilledButton";

const { width } = Dimensions.get("window");

const Slide = ({
  image,
  strong,
  description,
  theme,
  index,
  onPress,
  isLastItem,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, styles[theme]]}>
        <Image resizeMode="contain" style={styles.image} source={image} />

        <View style={styles.content}>
          <Text style={styles.content_strong}>{strong}</Text>
          {/* <Text style={styles.content_desc}>{description}</Text> */}
        </View>

        {isLastItem ? (
          <FilledButton
            big
            title="EMPEZAR"
            style={styles.button}
            onPress={() => navigation.navigate("Registro")}
          />
        ) : (
          <View style={[styles.button, styles.empty]} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    alignItems: "center",
    paddingHorizontal: 35,
  },
  image: {
    flex: 0.6,
    marginVertical: 50,
    width: width - 100,
  },
  content: {
    color: "#fff",
    marginTop: 30,
  },
  content_strong: {
    fontSize: 30,
    // marginBottom: 10,
    color: "#323232",
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
  },
  content_desc: {
    fontSize: 20,
    maxWidth: 300,
    color: "#fff",
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold",
  },
  button_wrapper: {
    position: "relative",
  },
  button: {
    // top: 80,
    // left: -176,
    // position: "absolute",
    marginTop: "auto",
    marginBottom: 50,
    alignSelf: "flex-end",
  },
  empty: {
    height: 60,
  },
  "#F8AC52": {
    backgroundColor: "#F8AC52",
  },
  "#67A0BF": {
    backgroundColor: "#67A0BF",
  },
  "#24B091": {
    backgroundColor: "#24B091",
  },
});

export default Slide;
