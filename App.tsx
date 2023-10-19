import * as React from 'react';
import { View, Text, StatusBar, PixelRatio } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { COLORS, DEFAULT_BACKGROUND } from './src/constants/colors';
import RecentExpenses from './src/screens/RecentExpenses';
import SettingsScreen from './src/screens/AllExpenses';
import { Provider, useDispatch } from "react-redux"
import store from './src/store';
import PlusButton from './src/components/shared/PlusButton';

const Tab = createBottomTabNavigator();

function App()
{

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={COLORS.blue400} />
        <Tab.Navigator screenOptions={{
          headerStyle: { backgroundColor: COLORS.blue400 },
          headerTitleStyle: { color: "white" }
        }}>
          <Tab.Screen name="Home" component={RecentExpenses} options={{
            title: "Recent Expenses",
            headerRight: () => <PlusButton />,
          }} />
          <Tab.Screen name="Settings" component={SettingsScreen} options={{
            title: "All Expenses",
            headerRight: () => <PlusButton />,
            tabBarIcon: ({ color, size }) => { }
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App