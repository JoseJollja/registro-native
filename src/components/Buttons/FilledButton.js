import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const FilledButton = ({ title, style, textColor, onPress, big }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, big ? styles.big : styles.medium, style]}
    >
      <Text style={[styles.text, textColor]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 14,
    width: "100%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  big: { minWidth: 180 },
  medium: { minWidth: 150 },
  text: {
    fontSize: 20,
    color: "#000",
    letterSpacing: 1,
    // fontWeight: "500",
    fontFamily: "Poppins_600SemiBold",
  },
});

export default FilledButton;
