import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { Button, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// ========= BÀI - ĐIỀU HƯỚNG = 2 NAVIGATION TAB =========

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

export default function AppBai11DieuHuongNavigationTab() {
  // cydb 1 - khai báo "TAB" = createBottomTabNavigator
  const Tab = createBottomTabNavigator();

  // =================== render ===================
  // cydb 2 = "LÀM ROUTER" = wrap container - "TAB"
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // cydb - icon
          tabBarIcon: (focused, color, size) => {
            let iconName = "home";
            if (route.name === "Details") {
              iconName = "list";
            }
            return <Icon name={iconName} color={color} size={20} />;
          },
          tabBarActiveTintColor: "blue", // cydb - màu icon - active
          tabBarInactiveTintColor: "gray", // cydb - màu icon - inactive
        })}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Details" component={DetailsPage} />
      </Tab.Navigator>
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
