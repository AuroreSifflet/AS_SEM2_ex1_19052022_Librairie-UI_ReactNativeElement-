import { StyleSheet, Text, View } from "react-native";
import Header from "./Component/Header";
import SwitchComponent from "./Component/SearchBar";
import ListPeople from "./Component/ListItem";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ListItem, Avatar } from "@rneui/themed";

export default function App() {
  return (
    <SafeAreaProvider>
      <Header />
      <SwitchComponent />
      <ListPeople />
    </SafeAreaProvider>
  );
}

// const styles = StyleSheet.create({});
