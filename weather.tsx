import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import ErrorBoundary from "react-native-error-boundary";

interface weatherType {
  temp: number;
  condition: string;
  description: string;
}

interface WeatherDecoType {
  weatherOptions: string;
  backColor: string[];
}

function variableIcon(condition: string) {
  let clear: WeatherDecoType;

  switch (condition) {
    case "Clear":
      clear = {
        weatherOptions: "weather-sunny",
        backColor: ["#36d1dc", "#5b86e5"]
      };
      break;
    case "Thunderstorm":
      clear = {
        weatherOptions: "weather-lightning",
        backColor: ["#f0f2f0", "#000c40"]
      };
      break;
    case "Drizzle":
      clear = {
        weatherOptions: "weather-rainy",
        backColor: ["#667db6", "#0082c8", "#0082c8", "#667db6"]
      };
      break;
    case "Rain":
      clear = {
        weatherOptions: "weather-pouring",
        backColor: ["#000046", "#1cb5e0"]
      };
      break;
    case "Snow":
      clear = {
        weatherOptions: "weather-snowy",
        backColor: ["#e0eafc", "#cfdef3"]
      };
      break;
    case "Atmosphere":
      clear = {
        weatherOptions: "weather-hurricane",
        backColor: ["#457fca", "#5691c8"]
      };
      break;
    case "Clouds":
      clear = {
        weatherOptions: "weather-cloudy",
        backColor: ["#8e9eab", "#eef2f3"]
      };
      break;
  }
  return clear;
}

export default function Weather(weather: weatherType) {
  return (
    <ErrorBoundary>
      <LinearGradient
        colors={variableIcon(weather.condition).backColor}
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />
        <View style={styles.devideSector}>
          <MaterialCommunityIcons
            name={variableIcon(weather.condition).weatherOptions}
            size={100}
            color={"white"}
          />
          <Text style={styles.text}>temperature : {weather.temp} Celsius</Text>
        </View>

        <View style={{ ...styles.devideSector, ...styles.textContainer }}>
          <Text style={styles.title}>Today, it is "{weather.description}"</Text>
          <Text style={styles.subtitle}>
            I hope you have a good day, dude...
          </Text>
        </View>
      </LinearGradient>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 30,
    color: "white",
    fontWeight: "300",
    fontStyle: "italic"
  },
  devideSector: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: { color: "white", fontSize: 30, paddingBottom: 20 },
  subtitle: { color: "white", fontWeight: "600", fontSize: 15 },
  textContainer: { paddingHorizontal: 100, alignItems: "flex-start" }
});
