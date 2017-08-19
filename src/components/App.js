import {StackNavigator} from 'react-navigation'
import Home from './Home'
import Profile from './Profile'
import News from './News'

export default StackNavigator({
  Home: {
    screen: Home
  },
  Profile: {
    screen: Profile
  },
  News: {
    screen: News
  }
})
