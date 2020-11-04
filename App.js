import {React, Provider, PersistGate, useEffect, SplashScreen} from 'Libraries';
import Routes from 'Routes';
import storage from './src/Redux/store';

const { store, persistor } = storage;

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes/>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
