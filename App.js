import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home'
import List from './screens/list'
import Edit from './screens/edit'
import Details from'./screens/details'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       {/* <Stack.Screen name="Home" component={Home} />*/}
        {/*<Stack.Screen name="List" component={List} />*/}
       {/* <Stack.Screen name="Create" component={Create} /> */}
        <Stack.Screen name="Details" component={Details} />
        {/* <Stack.Screen name="Edit" component={Edit} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;