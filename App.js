import React from 'react';
import {store, persistor} from './src/redux/store';
import {Provider} from 'react-redux';
import Main from './src/screens/main';
import {PersistGate} from 'redux-persist/integration/react';

const AppNavigator = () => {
  return <Main />;
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}
