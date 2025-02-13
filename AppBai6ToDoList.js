import { Button, StyleSheet, Text, TextInput, View } from "react-native";

// ========= BÀI DỰNG GIAO DIỆN - TODOLIST =========
export default function AppBai6ToDoList() {
  const handlePressAdd = () => {
    alert("thêm mới");
  };

  // =================== render ===================
  return (
    <View style={myStyles.container}>
      {/* ----- THEM ----- */}
      <View style={myStyles.addArea}>
        <TextInput
          style={myStyles.addAreaInput}
          placeholder="Nhập tên công việc ..."
        />
        <Button
          title="Thêm"
          style={myStyles.addAreaButton}
          onPress={handlePressAdd}
        />
      </View>

      {/* ----- DANH SACH ----- */}
      <View style={myStyles.listArea}>
        <Text>todo list ...</Text>
      </View>
    </View>
  );
}

// ==== style = "CLASS" ===
const myStyles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    marginTop: 20,
    padding: 10,
  },
  //
  addArea: {
    flexDirection: "row",
  },
  addAreaInput: {
    borderWidth: 2,
    borderColor: "blue",
    width: "80%",
    marginRight: 10,
  },
  addAreaButton: {
    padding: 10,
    paddingTop: 20,
  },
  //
  listArea: {
    paddingTop: 20,
  },
});
