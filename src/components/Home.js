import React from 'react'
import {
  View,
  Button,
  StyleSheet
} from 'react-native'

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Button
          title='Go to Profile'
          onPress={() => navigation.navigate('Profile', {user: 'John'})}
        />
        <Button
          title='Go to News'
          onPress={() => navigation.navigate('News')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
