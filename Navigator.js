import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import Home from './home'
import ListItem from './list_item'

const MainNavigator = createStackNavigator({
    Home: { screen: Home, navigationOptions: { header: null } },
    ListItem: { screen: ListItem, navigationOptions: { header: null } }

})

const Navigator = createAppContainer(MainNavigator)

export default Navigator