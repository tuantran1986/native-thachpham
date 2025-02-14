import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

// ========= BÀI - TODOLIST = "JAVASCRIPT" =========
export default function AppBai8Bai9() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChangeToDo = (value) => {
    console.log("value", value);
    setTodo(value);
  };

  const handlePressAddTodo = () => {
    setTodoList([todo, ...todoList]);
    setTodo("");
  };

  // =================== render ===================
  return (
    <View style={myStyles.container}>
      {/* ----- THEM ----- */}
      <View style={myStyles.addArea}>
        <TextInput
          style={myStyles.addAreaInput}
          placeholder="Nhập tên công việc ..."
          // CYDB - SỰ KIỆN - ONCHANGE = "onChangeText"
          onChangeText={handleChangeToDo}
          value={todo}
        />
        <Button
          title="Thêm"
          style={myStyles.addAreaButton}
          // CYDB - SỰ KIỆN - ONCHANGE = "onPress"
          onPress={handlePressAddTodo}
        />
      </View>

      {/* ----- DANH SACH: chú ý = "key" ----- */}
      <View style={myStyles.listArea}>
        {todoList.map((item) => (
          <Text key={item}>{item}</Text>
        ))}
      </View>
    </View>
  );
}

// ==== style = "CLASS" ===
const myStyles = StyleSheet.create({
  container: {
    marginTop: 60,
    padding: 10,
  },
  //
  addArea: {
    flexDirection: "row",
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "gray",
  },
  addAreaInput: {
    borderWidth: 2,
    borderColor: "blue",
    // width: "80%",
    flex: 1, // TUANTRAN - CYDB: để chiếm toàn bộ - độ rộng còn lại
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
