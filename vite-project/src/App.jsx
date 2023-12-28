import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import BooksPage from "./pages/BooksPage";
import CategoriesPage from "./pages/CategoriesPage";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navigation /> {/* Include the Navigation component */}
          <nav>
            <ul>
              <li>
                <Link to="/books">Books</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route
              path="/vite-project/src/pages/books.js"
              component={BooksPage}
            />
            <Route
              path="/vite-project/src/pages/categories.js"
              component={CategoriesPage}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
