import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store/configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Full from './components/Full'


store.subscribe(() => {
})

//@todo injectTapEVentPlugin, outside react scope break
if (!module.hot) {
  injectTapEventPlugin();
}

ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
        <Full/>
    </AppContainer>
  </Provider>, document.getElementById('container')
);

if (module.hot) {

  module.hot.accept();

  module.hot.dispose((data) => {
    data.store = store;
  });
}
