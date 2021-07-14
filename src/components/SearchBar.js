import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onSubmitTerm }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        style={styles.inputStyle}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={onSubmitTerm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#ccc",
    borderRadius: 5,
    marginHorizontal: 15,
    height: 50,
    marginVertical: 10,
    flexDirection: "row",
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    marginHorizontal: 10,
    alignSelf: "center",
  },
});

export default SearchBar;
