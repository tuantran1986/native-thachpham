import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const handlePressBtn = () => {
    alert("bạn đã nhấn vào button");
  };

  // =================== render ===================
  return (
    <View style={styles.container}>
      {/* ==== CÚ PHÁP - 2 : "STYLE INLINE" - SAI : border: "1px solid red" === */}
      {/* <Text style={{ margin: 20, border: "1px solid red" }}>
        TUANTRAN - REACT - NATIVE - 123 !
      </Text> */}
      {/* ==== CÚ PHÁP - 2 : "STYLE INLINE" - ĐÚNG === */}
      <Text
        style={{ margin: 20, borderWidth: 2, borderColor: "red", padding: 10 }}
      >
        TUANTRAN - REACT - NATIVE - 1 = INLINE STYLE !
      </Text>

      {/* ==== CÚ PHÁP - 3 : "CLASS" - ĐÚNG === */}
      <Text style={styleCustom1.myText}>
        TUANTRAN - REACT - NATIVE - 2 = CLASS !
      </Text>

      <StatusBar style="auto" />

      {/* ==== CÚ PHÁP -1 : BUTTON SAI === */}
      {/* <Button>Text Button</Button> */}
      {/* ==== CÚ PHÁP -1 : BUTTON ĐÚNG === */}
      {/* title: là text hiển thị */}
      {/* onPress: là xử lý sự kiện nhấn nút - ko phải onClick */}
      <Button title="Text Button" onPress={handlePressBtn} />
    </View>
  );
}

// ==== CÚ PHÁP - 3 : "CLASS" - ĐÚNG ===
const styleCustom1 = StyleSheet.create({
  myText: {
    margin: 20,
    borderWidth: 2,
    borderColor: "red",
    padding: 10,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
