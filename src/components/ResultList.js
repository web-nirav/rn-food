import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import ResultDetails from "./ResultDetails";

const ResultList = ({ title, results, navigation }) => {
  //   console.log(results.length);
  if (!results.length) {
    return null;
  }
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(result) => result.id}
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ResultShow", { id: item.id })}
            >
              <ResultDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 15,
  },
});

export default withNavigation(ResultList);
