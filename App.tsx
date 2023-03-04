import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as Linking from "expo-linking";

export default function App() {
  const config = {
    screens: {
      Home: {
        path: "home",
      },
      Channel: {
        path: "account",
      },
      Settings: {
        path: "settings",
      },
      Watch: {
        path: "watch/:id",
      },
    },
  };

  const linking = {
    prefixes: [
      Linking.createURL("mychatapp://"),
      "https://lensplay.xyz",
      "https://www.lensplay.xyz",
    ],
    config,
  };

  return (
    <NavigationContainer linking={linking}>
      <Routes />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Watch" component={Feed} />
    </Stack.Navigator>
  );
};

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="GO to Feed"
        onPress={() => {
          navigation.navigate("Watch");
        }}
      />
    </SafeAreaView>
  );
};
const Feed = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="GO to Account"
        onPress={() => {
          navigation.navigate("Account");
        }}
      />
      <Text style={{ color: "white" }}>{route?.params?.id}</Text>
    </SafeAreaView>
  );
};
const Account = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="GO to Settings"
        onPress={() => {
          navigation.navigate("Settings");
        }}
      />
    </SafeAreaView>
  );
};

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="GO to Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
