import * as React from 'react';
import { Provider } from 'react-redux';
import {Store} from 'redux';
import { AppState, configureStore } from './redux';
import {Registration} from './Registration/Registration'

class App extends React.Component {

  private store: Store<AppState> = configureStore();

  public render() {
    return (
      <Provider store={this.store}>
        <Registration/>
      </Provider>
    );
  }
}

export default App;