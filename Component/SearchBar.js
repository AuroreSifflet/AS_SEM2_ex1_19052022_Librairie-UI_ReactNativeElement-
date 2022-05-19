// import * as React from "react";
// import { SearchBar } from "@rneui/themed";

// export default SearchBarPeople = () => {
//   const [value, setValue] = React.useState("");
//   return (
//     <SearchBar
//       platform="default"
//       containerStyle={{}}
//       inputContainerStyle={{}}
//       inputStyle={{}}
//       loadingProps={{}}
//       onChangeText={(newVal) => setValue(newVal)}
//       onClearText={() => console.log(onClearText())}
//       placeholder="Trouver une personneTrouver une personneTrouver une personne"
//       placeholderTextColor="#888"
//       onCancel={() => console.log(onCancel())}
//       value={value}
//     />
//   );
// };
import React, { useState } from "react";
import { SearchBar } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";

const SwitchComponent = () => {
  const [search, setSearch] = useState("");
  //useState(); est un Hook
  //useState nous renvoie l’état actuel, Il y a une raison pour laquelle les noms des Hooks commencent toujours par use
  // Que renvoie useState ? Elle renvoie une paire de valeurs : l’état actuel et une fonction pour le modifier. C’est pourquoi nous écrivons const [search, setSearch] = useState()

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={styles.view}>
      <SearchBar
        placeholder="" //bouchetrou
        onChangeText={updateSearch}
        value={search}
        lightTheme
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 5,
  },
});

export default SwitchComponent;
