import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home/Home";
import { store } from "./src/redux/store/store";
import { Provider } from "react-redux";
import Details from "./src/screens/detailscreen/Details";
import FavScreen from "./src/screens/favPokemons/favScreen";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details}/>
          <Stack.Screen name="favScreen" component={FavScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}