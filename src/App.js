
import Navbar from './navbar'; //no need for .js extension (figure out itselt)
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFoundPage from './NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="content">
            <Switch>
              <Route exact path = "/">
                <Home />
              </Route>
              <Route path = "/create">
                <Create />
              </Route>
              <Route path = "/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path = "*" >
                <NotFoundPage />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
