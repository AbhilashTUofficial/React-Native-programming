import Home from './src/screens/Home';
import {data} from './src/redux/dataBinding';
import {Provider} from 'react-redux';

const ClickMeApp = () => {
  return (
    //! Bind app and data
    // store={data_name}
    // data name should be the same as import var_name
    // import var_name should be the same as export var_name

    <Provider store={data}>
      <Home />
    </Provider>
  );
};

export default ClickMeApp;
