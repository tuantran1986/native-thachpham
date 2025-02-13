import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const handlePressBtn = () => {
    alert("bạn đã nhấn vào button");
  };

  // =================== render ===================
  return (
    <View style={styles.container}>
      <Text>TUANTRAN - REACT - NATIVE - 123 !</Text>
      <StatusBar style="auto" />

      {/* ==== CÚ PHÁP: SAI === */}
      {/* <Button>Text Button</Button> */}

      {/* ==== CÚ PHÁP: ĐÚNG === */}
      {/* title: là text hiển thị */}
      {/* onPress: là xử lý sự kiện nhấn nút - ko phải onClick */}
      <Button title="Text Button" onPress={handlePressBtn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
