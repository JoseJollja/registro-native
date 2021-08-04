import React, { useState, useEffect } from "react";
import moment from "moment";
import { View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

// components
import Input from "../Input";

const parser = (value) => {
  return moment(value).format("DD-MM-YYYY");
};

const InputDate = ({ onChangeDate = () => {} }) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  useEffect(() => {
    onChangeDate(date);
  }, [date]);

  return (
    <View>
      <Input
        value={parser(date)}
        icon="calendar"
        onFocus={() => setShow(true)}
        onBlured={() => setShow(false)}
        label="Fecha de nacimiento"
        placeholder="00/00/00"
      />

      {show && (
        <DateTimePicker
          mode={"date"}
          value={date}
          is24Hour={false}
          display="default"
          onChange={onChange}
          testID="dateTimePicker"
        />
      )}
    </View>
  );
};

export default InputDate;
