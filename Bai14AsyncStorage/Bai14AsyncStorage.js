import { Button, StyleSheet, View } from "react-native";
// CYDB
import AsyncStorage from "@react-native-async-storage/async-storage";

const setData = async (key, value) => {
  try {
    // CYDB: async + await
    await AsyncStorage.setItem(key, value);
    console.log("ghi dữ liệu - thành công !");
  } catch (error) {
    console.log("error", error);
  }
};
const getData = async (key) => {
  try {
    // CYDB: async + awai
    const value = await AsyncStorage.getItem(key);
    console.log("đọc dữ liệu - thành công !");
    return value;
  } catch (error) {
    console.log("error", error);
  }
};
// =================== COMPONENT - "CHÍNH" ===================
export default function Bai14AsyncStorage() {
  return (
    <View style={styles.container}>
      <View>
        <Button
          style={styles.buttonItem}
          title="GHI"
          onPress={() => {
            setData("name", "tuantran86");
          }}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button
          style={styles.buttonItem}
          title="ĐỌC"
          // CYDB: async + awai
          onPress={async () => {
            const val = await getData("name");
            console.log("AsyncStorage: ", val);
            alert(val);
          }}
        />
      </View>
    </View>
  );
}

// ============ style ============
const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // justifyContent: "center",
    height: "100%",
    padding: 10,
    marginTop: 60,
  },
  buttonItem: {
    width: 100,
    marginTop: 200,
  },
});
