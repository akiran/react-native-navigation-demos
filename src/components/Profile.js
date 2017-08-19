import React from 'react'
import {
  View,
  Button,
  StyleSheet
} from 'react-native'

export default class Profile extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: `${navigation.state.params.user}'s Profile`
    }
  };
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Button
          title='Go to Home'
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title='Go Back'
          onPress={() => navigation.goBack()}
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
