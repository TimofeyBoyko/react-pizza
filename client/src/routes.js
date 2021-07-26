import { Switch, Route, Redirect } from 'react-router-dom';

import { Cart } from './pages/Cart';
import { Home } from './pages/Home';

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" exact component={Cart} />
      <Redirect to="/" />
    </Switch>
  );
};
