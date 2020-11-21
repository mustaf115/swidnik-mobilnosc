import * as React from 'react'
import styled from 'styled-components/native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen';
import ExchangeScreen from '../screens/ExchangeScreen';
import ReportScreen from '../screens/ReportScreen';

const Drawer = createDrawerNavigator();

const AdditionalDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
    <DrawerItem label="Wyloguj" onPress={() => props.navigation.replace('Login')} />
  </DrawerContentScrollView>
)

const DrawerNav = (props) => (
  <Drawer.Navigator initialRouteName="Ekran główny" drawerPosition="right" drawerType="slide" drawerContent={props => <AdditionalDrawerContent {...props} />}>
    <Drawer.Screen name="Ekran główny" component={HomeScreen} options={{headerShown: false}} />
    <Drawer.Screen name="Wymień punkty" component={ExchangeScreen} options={{headerShown: false}} />
    <Drawer.Screen name="Zgłoś zdarzenie" component={ReportScreen} options={{headerShown: false}} />
  </Drawer.Navigator>
)

export default DrawerNav