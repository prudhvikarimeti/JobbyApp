import {Switch, Route} from 'react-router-dom'

import LoginSection from './components/LoginSection'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Jobs from './components/Jobs'
import NotFound from './components/NotFound'
import JobDetails from './components/JobDetails'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginSection} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={JobDetails} />
    <Route component={NotFound} />
  </Switch>
)

export default App
