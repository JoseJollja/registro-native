import React, { useState } from "react";
import {
  Text,
  View,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

// components
import Input from "./Input";
import InputDate from "./InputDate";
import FilledButton from "./Buttons/FilledButton";
import { EnviarForm } from "../api/EnviarForm";

const Registro = () => {
  const navigate = useNavigation();
  const [nombres, setNombre] = useState("");
  const [apellidos, setApellido] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fechanacimiento, setFechanacimiento] = useState("");

  const isValid =
    nombres.trim() !== "" &&
    apellidos.trim() !== "" &&
    fechanacimiento.trim() !== "";

  const onChangeDate = (v) => {
    const date = moment(v).format("YYYY-MM-DD");
    setFechanacimiento(date);
  };

  const handleSubmit = async () => {
    if (!isValid) return;
    setIsLoading(true);

    const payload = {
      nombres,
      apellidos,
      fechanacimiento,
    };

    navigate.navigate("RegistroExitoso");

    const data = await EnviarForm(payload);

    if (data.cliente) {
      console.log("Exitoso");
      navigate.navigate("RegistroExitoso");
    } else {
      console.log("Error");
    }

    setNombre("");
    setApellido("");
    setFechanacimiento("");

    setIsLoading(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.top} />

        <View style={styles.form}>
          <View style={styles.top_sub} />

          <View style={styles.form_container}>
            <Text style={styles.header}>Registro</Text>

            <Input
              icon="user"
              label="Nombres"
              value={nombres}
              onChangeText={setNombre}
              placeholder="Ingresa tus nombres"
            />

            <Input
              icon="user"
              label="Apellidos"
              value={apellidos}
              onChangeText={setApellido}
              placeholder="Ingresa tus apellidos"
            />

            <InputDate {...{ onChangeDate }} />

            <FilledButton
              title="ENVIAR"
              onPress={handleSubmit}
              textColor={{ color: "#fff" }}
              style={{
                color: "#fff",
                marginTop: 20,
                backgroundColor: isValid || isLoading ? "#2cb9b0" : "#e2e2e2",
              }}
            />
          </View>
        </View>

        <View style={styles.bottom} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
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
    paddingTop: 30,
    paddingHorizontal: 50,
    backgroundColor: "#fff",
    borderTopStartRadius: 100,
    transform: [{ translateY: -100 }],
  },
  header: {
    fontSize: 40,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
  },
});

export default Registro;
