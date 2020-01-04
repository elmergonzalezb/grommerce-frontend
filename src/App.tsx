import * as React from 'react';
import { inject, observer } from 'mobx-react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
  RouteComponentProps
} from 'react-router-dom';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';

// Pages
import Dashboard from './Pages/Dashboard/Dashboard';
import ProductInfo from './Pages/Product/ProductInfo';
import { AllProducts } from './Pages/Product/AllProducts';
import AllCompanies from './Pages/Company/AllCompanies';
import CompanyInfo from './Pages/Company/CompanyInfo';
import Login from './Pages/Authentication/Login';

import { routes } from './config/routes';

import { HeaderStoreContext } from './stores/header';

import '../assets/css/vendor/bootstrap.min.css';
import '../assets/css/sass/themes/gogo.light.blue.scss';
import '../assets/fonts/simple-line-icons/css/simple-line-icons.css';
import '../assets/fonts/iconsmind-s/css/iconsminds.css';
import { hot } from 'react-hot-loader/root';

const App: React.FC = observer((routeProps: any) => {
  const headerStore = React.useContext(HeaderStoreContext);
  const { pathname } = routeProps.location;
  return (
    <div id="app-container" className={headerStore.nextClasses}>
      {pathname !== '/login' ? (
        <>
          <Header />
          <Sidebar />
        </>
      ) : null}
      <main>
        <div className="container-fluid">
          <Switch>
            <Route exact path={routes.index} component={() => <Dashboard />} />
            <Route
              exact
              path={routes.dashboard}
              component={() => <Dashboard />}
            />
            <Route
              exact
              path={routes.allProducts}
              component={() => <AllProducts />}
            />
            <Route
              exact
              path={routes.allCompanies}
              component={() => <AllCompanies />}
            />
            <Route
              exact
              path={routes.productInfo}
              component={() => <ProductInfo />}
            />
            {/* <Route
              exact
              path={routes.companyInfo}
              component={(props: any) => <CompanyInfo {...props} />}
            /> */}

            <Route exact path={routes.login} component={() => <Login />} />

            <Redirect to={routes.index} />
          </Switch>
        </div>
      </main>
    </div>
  );
});

export default withRouter(hot(App));
