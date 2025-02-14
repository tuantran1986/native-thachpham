import { Button, StyleSheet, Text, TextInput, View } from "react-native";

// ========= BÀI 7 - FLEX =========
export default function AppBai7Phan1() {
  // =================== render ===================
  return (
    <View
      style={{
        // flexDirection: "row",   // CYDB = row
        flexDirection: "row-reverse", // CYDB = row-reverse
        justifyContent: "center",
        padding: 10,
        marginTop: 100,
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          width: 100,
          height: 100,
          alignItems: "center", // CYDB
          justifyContent: "center", // CYDB
        }}
      >
        <Text>red</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          width: 100,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>green</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>blue</Text>
      </View>
    </View>
  );
}

// ==== style = "CLASS" ===
const myStyles = StyleSheet.create({
  container: {},
});
