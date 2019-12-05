import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { Route, Switch, Redirect } from 'react-router-dom';

// Components
import Header from './components/Header';
import { Sidebar } from './components/Sidebar';

// Pages
import Dashboard from './Pages/Dashboard/Dashboard';
import AllProducts from './Pages/Product/AllProducts';
import ProductInfo from './Pages/Product/ProductInfo';

import { routes } from './config/routes';
import AllCompanies from './Pages/Company/AllCompanies';
import CompanyInfo from './Pages/Company/CompanyInfo';
import { HeaderStoreContext } from './stores/header';

const MainApp: React.FC = observer(() => {
  const headerStore = React.useContext(HeaderStoreContext);
  return (
    <div id="app-container" className={headerStore.nextClasses}>
      <Header />
      <Sidebar />
      <main>
        <div className="container-fluid">
          <Switch>
            <Route exact path={routes.index} component={Dashboard} />
            <Route exact path={routes.dashboard} component={Dashboard} />
            <Route exact path={routes.allProducts} component={AllProducts} />
            <Route exact path={routes.allCompanies} component={AllCompanies} />
            <Route exact path={routes.productInfo} component={ProductInfo} />
            <Route exact path={routes.companyInfo} component={CompanyInfo} />

            <Redirect to={routes.index} />
          </Switch>
        </div>
      </main>
    </div>
  );
});

export default MainApp;
