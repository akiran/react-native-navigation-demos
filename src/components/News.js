import React from 'react'
import {
  View,
  Button,
  Text,
  StyleSheet
} from 'react-native'
import {TabNavigator} from 'react-navigation'

function Business() {
  return <View style={styles.container}><Text>Business news</Text></View>
}

function Tech() {
  return <View style={styles.container}><Text>Tech news</Text></View>
}

function Sports() {
  return <View style={styles.container}><Text>Sports news</Text></View>
}

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
  }
})
