import { Switch } from 'react-router-dom';

import Route from './Route';

import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Dashboard from '../pages/Dashboard';
import ShowCustomer from '../pages/ShowCustomer';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Signup} />
    <Route exact path="/signin" component={Signin} />
    <Route exact path="/forgot-password" component={ForgotPassword} />
    <Route exact path="/reset-password" component={ResetPassword} />
    <Route exact path="/dashboard" component={Dashboard} isPrivate />
    <Route exact path="/customers/:customer_id" component={ShowCustomer} isPrivate />
  </Switch>
);
export default Routes;
