import './App.css'

import Home from './containers/home/Home'
import Menu from './components/menu/Menu'
import ContextLoginManager from './contexts/ContextLoginManager'
import ContextProductManager from './contexts/ContextProductManager'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Listado from './components/listado/Listado'
import FormularioCreacion from './components/formulario-creacion/FormularioCreacion'
import Remove from './containers/remove/Remove'
import FormularioEdicion from './components/formulario-edicion/FormularioEdicion'
import Detail from './containers/detail/Detail'
import NotFound from './containers/not-found/NotFound'
import Create from './containers/create/Create'
import Login from './containers/login/Login'
import Edit from './containers/edit/Edit'
import PrivateRoute from './components/private-router/PrivateRouter'


function App() {
  return (
  
    <ContextLoginManager>
        <ContextProductManager>
          <Router>
            <Switch>
            <div className="container">
              <Menu />
                  <Route path="/" exact>
                    <Login />
                  </Route>

                  <Route path="/list" exact>
                    <Home />
                  </Route>

                  <Route path="/create" exact>
                    <PrivateRoute path="/create" exact component={Create}/>
                  </Route>

                  <Route path="/remove/:id" exact>
                    <PrivateRoute path="/remove/:id" exact component={Remove}/>
                  </Route>

                  <Route path="/edit/:id" exact>
                    <PrivateRoute path="/edit/:id" exact component={Edit}/>
                  </Route>

                  <Route path="/detail/:id">
                    <Detail />
                  </Route>

                  <Route path="*" exact>
                    <NotFound />
                  </Route>
            </div>
            </Switch>
          </Router>
        </ContextProductManager>
      </ContextLoginManager>
                      
  );
}

export default App
