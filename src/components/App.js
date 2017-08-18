import {StackNavigator} from 'react-navigation'
import Home from './Home'
import Profile from './Profile'

export default StackNavigator({
  Home: {
    screen: Home
  },
  Profile: {
    screen: Profile
  }
})
