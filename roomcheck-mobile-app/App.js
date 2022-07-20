import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from './src/screen/Home';

const stackNavigator = createStackNavigator({
  MainName_:Home
})

const App= createAppContainer(stackNavigator)
export default App