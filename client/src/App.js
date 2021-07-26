import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from './components/Header';
import { useRoutes } from './routes';

function App() {
  const routes = useRoutes();

  return (
    <Router>
      <div className="wrapper clear">
        <Header />
        {routes}
      </div>
    </Router>
  );
}

export default App;
