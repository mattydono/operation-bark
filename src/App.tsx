import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { Action } from 'redux-actions';
import { AppState, configureStore } from './redux';
import { Registration } from './Registration';

class App extends React.Component {
  private store: Store<AppState, Action<any>> = configureStore();

  public render() {
    return (
      <Provider store={this.store}>
        <Registration />
      </Provider>
    );
  }
}

export default App;
