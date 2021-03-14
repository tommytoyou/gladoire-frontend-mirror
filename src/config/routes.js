import { Switch, Route } from 'react-router-dom'
import Welcome from '../components/Welcome'
import JournalsContainer from '../containers/JournalsContainer'

export default (
  <Switch>
    <Route exact path='/' component={Welcome} />
    <Route path='/journals' component={JournalsContainer} />
  </Switch>
)