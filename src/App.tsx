import { hot } from 'react-hot-loader/root';
import * as React from 'react';

import '../assets/css/vendor/bootstrap.min.css';
import '../assets/css/sass/themes/gogo.light.blue.scss';
import '../assets/fonts/simple-line-icons/css/simple-line-icons.css';
import '../assets/fonts/iconsmind-s/css/iconsminds.css';
import { Provider } from 'mobx-react';
import { MainApp } from './MainApp';

const App = () => {
  return (
    <Provider>
      <MainApp />
    </Provider>
  );
};

export default hot(App);
