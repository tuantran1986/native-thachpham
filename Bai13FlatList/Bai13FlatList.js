import { FlatList, StyleSheet, Text, View } from "react-native";

// =================== COMPONENT - "CHÍNH" ===================
export default function Bai13FlatList() {
  // CYDB: 2 thuộc tính của FlatList = data + renderItem
  const data = [
    { id: 1, title: "flat list item - 1" },
    { id: 2, title: "flat list item - 2" },
    { id: 3, title: "flat list item - 3" },
    { id: 4, title: "flat list item - 4" },
    { id: 5, title: "flat list item - 5" },
    { id: 6, title: "flat list item - 6" },
    { id: 7, title: "flat list item - 7" },
    { id: 8, title: "flat list item - 8" },
  ];

  const renderItem = ({ item }) => (
    <View style={styleFlatList.itemFlatList}>
      <Text>{item.title}</Text>
    </View>
  );

  // --------- render ---------
  return <FlatList data={data} renderItem={renderItem} />;
}

// ============ style ============
const styleFlatList = StyleSheet.create({
  itemFlatList: {
    width: "100%",
    height: 286,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    margin: 10,
  },
});
