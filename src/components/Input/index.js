import React, { useState } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";

const VALID = "VALID";
const NEUTRO = "NEUTRO";
const INVALID = "INVALID";

const Input = ({ icon, label, onBlured = () => {}, ...props }) => {
  const [state, setState] = useState(NEUTRO);

  const isValid = state === VALID;

  const borderColor =
    state === VALID
      ? styles.input_valid
      : state === INVALID
      ? styles.input_invalid
      : styles.input_neutro;

  const colorIcon =
    state === VALID ? "#2cb9b0" : state === INVALID ? "red" : "#8a8d90";

  const feedback = isValid ? styles.feedback_valid : styles.feedback_invalid;

  const validate = () => {
    if (props.value.trim() === "") {
      return setState(INVALID);
    }

    setState(VALID);
    onBlured();
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.input, borderColor]}>
        <Icon style={styles.icon} name={icon} color={colorIcon} size={20} />
        <TextInput
          {...props}
          onBlur={validate}
          style={styles.field}
          placeholderTextColor="#8a8d90"
          underlineColorAndroid="transparent"
        />

        {(state === VALID || state === INVALID) && (
          <View style={[styles.feedback, feedback]}>
            <Icon name={state === VALID ? "check" : "x"} color="white" />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 17,
    marginBottom: 2,
    color: "#323232",
    fontFamily: "Poppins_500Medium",
  },
  input: {
    height: 48,
    width: "100%",
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 15,
    // justifyContent: "space-between",
  },
  field: {
    width: "80%",
    height: "100%",
    fontSize: 17,
  },
  icon: {
    marginRight: 10,
  },
  input_valid: {
    borderColor: "#2cb9b0",
    borderRadius: 10,
  },
  input_invalid: {
    borderColor: "red",
    borderRadius: 10,
  },
  input_neutro: {
    borderColor: "#8a8d90",
    borderRadius: 10,
  },
  feedback: {
    width: 20,
    height: 20,
    borderRadius: 50,
    marginLeft: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  feedback_valid: {
    backgroundColor: "#2cb9b0",
  },
  feedback_invalid: {
    backgroundColor: "red",
  },
});

export default Input;
