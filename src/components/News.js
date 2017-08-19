import React from 'react'
import {
  View,
  Button,
  Text,
  StyleSheet
} from 'react-native'
import {TabNavigator} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';


function Business() {
  return <View style={styles.container}><Text style={styles.text}>Business news</Text></View>
}

Business.navigationOptions = {
  tabBarLabel: 'Business',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-cash' : 'ios-cash-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

function Tech() {
  return <View style={styles.container}><Text style={styles.text}>Tech news</Text></View>
}

Tech.navigationOptions = {
  tabBarLabel: 'Tech',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-flask' : 'ios-flask-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

function Sports() {
  return <View style={styles.container}><Text style={styles.text}>Sports news</Text></View>
}

Sports.navigationOptions = {
  tabBarLabel: 'Sports',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-football' : 'ios-football-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const News = TabNavigator({
  Business: {
    screen: Business
  },
  Tech: {
    screen: Tech
  },
  Sports: {
    screen: Sports
  }
})

News.navigationOptions = {
  title: 'News'
}

export default News

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 32
  }
})
