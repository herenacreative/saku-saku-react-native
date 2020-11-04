import {React, useEffect, SplashScreen} from 'Libraries';
import Routes from 'Routes';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Routes/>
  );
};

export default App;
