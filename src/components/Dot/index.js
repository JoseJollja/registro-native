import React, { useEffect, useMemo } from "react";
import { Animated, StyleSheet } from "react-native";

const Dot = ({ i, currentIndex }) => {
  const animation = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    Animated.spring(animation, {
      toValue: currentIndex,
      useNativeDriver: true,
    }).start();
  }, [animation, currentIndex]);

  const interpolacion = animation.interpolate({
    inputRange: [i - 2, i - 1, i, i + 1, i + 2],
    outputRange: [0.5, 0.5, 1, 0.5, 0.5],
  });

  const opacity = {
    opacity: interpolacion,
  };

  return <Animated.View style={[styles.dot, opacity]} />;
};

const styles = StyleSheet.create({
  dot: {
    width: 16,
    height: 16,
    margin: 4,
    borderRadius: 4,
    backgroundColor: "#B7E0ED",
  },
  active: {
    transform: [{ scale: 1.25 }],
  },
});

export default Dot;
