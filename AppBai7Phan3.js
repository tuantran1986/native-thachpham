import { Button, StyleSheet, Text, TextInput, View } from "react-native";

// ========= BÀI 7 - FLEX =========
export default function AppBai7Phan3() {
  // =================== render ===================
  return (
    <View
      style={{
        padding: 10,
        marginTop: 100,
        height: 100, // CON sẽ kế thừa thuộc tính của CHA
        // flexDirection: "row-reverse", // CYDB = row-reverse
        flexDirection: "row", // CYDB = row
        justifyContent: "space-between",
        // alignItems: "center",
        alignItems: "stretch",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          alignItems: "center", // CYDB
          justifyContent: "center", // CYDB
          flex: 1, // nếu các phần khác KHÔNG khai báo -> sẽ chiếm PHẦN CÒN LẠI
          // flex: 1,  // nếu các phần khác CÓ khai báo -> sẽ chiếm THEO TỶ LỆ - FLEX
        }}
      >
        <Text>red</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          alignItems: "center",
          justifyContent: "center",
          // flex: 1, // nếu các phần khác KHÔNG khai báo -> sẽ chiếm PHẦN CÒN LẠI
          flex: 1, // nếu các phần khác CÓ khai báo -> sẽ chiếm THEO TỶ LỆ - FLEX
        }}
      >
        <Text>green</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
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
