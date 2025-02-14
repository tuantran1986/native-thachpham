import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";

// =================== COMPONENT - "PHỤ" ===================
function FirstRoute() {
  return (
    <View style={{ ...styleRoute.myText, backgroundColor: "blue" }}>
      <Text>FIRST ROUTER !</Text>
    </View>
  );
}
function SecondRoute() {
  return (
    <View style={{ ...styleRoute.myText, backgroundColor: "green" }}>
      <Text>SECOND ROUTER !</Text>
    </View>
  );
}

// =================== COMPONENT - "CHÍNH" ===================
export default function HomeTabView() {
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  const initialLayout = {
    width: Dimensions.get("window").width,
  };

  // cydb - phan render component : FirstRoute + SecondRoute
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  // --------- render ---------
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

// ============ style ============
const styleRoute = StyleSheet.create({
  myText: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
});
