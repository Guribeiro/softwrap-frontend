import { Switch, Route } from 'react-router-dom';

import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Signup} />
    <Route exact path="/signin" component={Signin} />
    <Route exact path="/forgot-password" component={ForgotPassword} />
    <Route exact path="/reset-password" component={ResetPassword} />
    <Route exact path="/dashboard" component={Dashboard} />
  </Switch>
);
export default Routes;
