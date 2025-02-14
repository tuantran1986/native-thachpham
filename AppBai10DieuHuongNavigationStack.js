import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, StyleSheet, Text, View } from "react-native";

// ========= BÀI - ĐIỀU HƯỚNG = 1 NAVIGATION STACK =========

// cydb 3 - props - điều hướng = navigation
function HomePage({ navigation }) {
  return (
    <View style={myStyles.container}>
      <Text>This is HomePage</Text>
      <Button
        title="chuyen trang Details"
        onPress={() => {
          // cydb 4 - điều hướng = props - navigation + navigate
          navigation.navigate("Details");
        }}
      />
    </View>
  );
}

function DetailsPage() {
  return (
    <View style={myStyles.container}>
      <Text>This is DetailsPage</Text>
    </View>
  );
}

export default function AppBai10DieuHuongNavigationStack() {
  // cydb 1 - khai báo STACK
  const Stack = createStackNavigator();

  // =================== render ===================
  // cydb 2 = "LÀM ROUTER" = wrap container - stack:
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Details" component={DetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ============ style ============
const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
