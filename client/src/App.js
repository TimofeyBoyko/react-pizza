import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Header } from './components/Header';
import { useRoutes } from './routes';
import store from './redux/store';

function App() {
  const routes = useRoutes();

  return (
    <Provider store={store}>
      <Router>
        <div className="wrapper clear">
          <Header />
          {routes}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
