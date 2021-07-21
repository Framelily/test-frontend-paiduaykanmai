import { BrowserRouter, Route, Switch, NavLink,} from 'react-router-dom';
import PageFrom from './components/PageFrom';
import PagePokemon from './components/PagePokemon';
import PageFunction1 from './components/PageFunction1';
import PageFunction2 from './components/PageFunction2';
import PageFunction3 from './components/PageFunction3';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <header>
        Test Frontend Developer
      </header>
      <BrowserRouter>
        <div className="menu">
          <NavLink exact to="/" activeClassName="active">Froms</NavLink>
          <NavLink exact to="/pokemon" activeClassName="active">Pokemon's</NavLink>
          <NavLink exact to="/function1" activeClassName="active">Function 1</NavLink>
          <NavLink exact to="/function2" activeClassName="active">Function 2</NavLink>
          <NavLink exact to="/function3" activeClassName="active">Function 3</NavLink>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={PageFrom}></Route>
            <Route exact path="/pokemon" component={PagePokemon}></Route>
            <Route exact path="/function1" component={PageFunction1}></Route>
            <Route exact path="/function2" component={PageFunction2}></Route>
            <Route exact path="/function3" component={PageFunction3}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
