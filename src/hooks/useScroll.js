import { useState } from "react";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const useScroll = () => {
  const [state, setState] = useState(0);

  const handleOnScroll = (e) => {
    const x = e.nativeEvent.contentOffset.x;
    const currentIndex = x / width;
    setState(currentIndex <= 0 ? 0 : Math.floor(currentIndex) + 1);
  };

  return { currentIndex: state, handleOnScroll };
};

export default useScroll;
