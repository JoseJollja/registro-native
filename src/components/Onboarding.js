import React, { useRef } from "react";
import {
  View,
  Animated,
  StatusBar,
  StyleSheet,
  Dimensions,
} from "react-native";

// components
import Dot from "./Dot";
import Slide from "./Slide";

// hooks
import useScroll from "../hooks/useScroll";

// data
import { slidesInfo } from "../data/slidesInfo";

const { width } = Dimensions.get("window");

const Welcome = () => {
  const scroll = useRef();
  const { handleOnScroll, currentIndex } = useScroll();

  const handleOnPress = (i) => {
    if (scroll.current) {
      scroll.current.scrollTo({ x: width * (i + 1), animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.container_slider}>
        <Animated.ScrollView
          horizontal
          ref={scroll}
          snapToInterval={width}
          decelerationRate="fast"
          onScroll={handleOnScroll}
          showsHorizontalScrollIndicator={false}
        >
          {slidesInfo.map((item, index) => (
            <Slide
              {...item}
              key={index}
              index={index}
              onPress={() => handleOnPress(index)}
              isLastItem={slidesInfo.length === index + 1}
            />
          ))}
        </Animated.ScrollView>
      </View>
      <View style={styles.container_dots}>
        {slidesInfo.map((_, i) => (
          <Dot key={i} {...{ i, currentIndex }} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    alignItems: "center",
  },
  container_slider: {
    justifyContent: "center",
  },
  container_dots: {
    bottom: 220,
    flexDirection: "row",
    position: "absolute",
  },
});

export default Welcome;
