import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Routes from './navigator/Routes';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './redux/configStore';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Routes />
        {/* <Toast refs={ref => Toast.setRef(ref)} config={toastConfig} /> */}
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
