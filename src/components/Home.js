import React from 'react'
import {
  View,
  Button,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Home extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Welcome',
      headerRight: (
        <Ionicons
          name={'ios-person'}
          size={26}
          onPress={() => navigation.navigate('Profile', {user: 'John'})}
        />
      )
    }
  }
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
