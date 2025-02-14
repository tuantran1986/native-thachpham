import { Button, StyleSheet, Text, TextInput, View } from "react-native";

// ========= BÀI 7 - FLEX =========
export default function AppBai7Phan4() {
  // =================== render ===================
  return (
    <View style={myStyles.containerBox}>
      <View
        style={{
          ...myStyles.containerBox, // CYDB - CÁCH CLEAN CODE = CLASS + INLINE STYLE
          backgroundColor: "red",
        }}
      >
        <Text>red</Text>
      </View>
      <View
        style={{
          ...myStyles.containerBox,
          backgroundColor: "green",
        }}
      >
        <Text>green</Text>
      </View>
      <View
        style={{
          ...myStyles.containerBox,
          backgroundColor: "blue",
        }}
      >
        <Text>blue</Text>
      </View>
    </View>
  );
}

// ==== style = "CLASS" ===
const myStyles = StyleSheet.create({
  containerBox: {
    padding: 10,
    marginTop: 100,
    height: 100, // CON sẽ kế thừa thuộc tính của CHA
    flexDirection: "row", // CYDB = row, // flexDirection: "row-reverse", // CYDB = row-reverse
    justifyContent: "space-between", // alignItems: "center",
    alignItems: "stretch",
  },
  itemBox: {
    alignItems: "center", // CYDB
    justifyContent: "center", // CYDB
    flex: 1, // nếu các phần khác KHÔNG khai báo -> sẽ chiếm PHẦN CÒN LẠI
    // flex: 1,  // nếu các phần khác CÓ khai báo -> sẽ chiếm THEO TỶ LỆ - FLEX
  },
});
