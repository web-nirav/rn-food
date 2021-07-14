import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultByPrice = (price) => {
    //   price == '$' || '$$' || '$$$'
    return results.filter((result) => result.price === price);
  };

  return (
    <>
      {/* <View style={{ flex: 1 }}> we should use <> tags to wrap parent view to fit all content automatically*/}
      {/* <SearchBar term={term} onTermChange={setTerm} onSubmitTerm={searchApi} /> */}
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onSubmitTerm={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text style={{ marginLeft: 15, marginVertical: 5 }}>
        We have found {results.length} results
      </Text> */}
      <ScrollView>
        <ResultList title="Cost Effective" results={filterResultByPrice("$")} />
        <ResultList title="Bit Pricier" results={filterResultByPrice("$$")} />
        <ResultList title="Big Spender" results={filterResultByPrice("$")} />
        <ResultList title="Millionaire" results={filterResultByPrice("$$")} />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
