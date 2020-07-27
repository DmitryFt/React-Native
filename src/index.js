import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import Details from './containers/Details';
import rootReducer from './reducers';

const Stack = createStackNavigator();

const store = createStore(rootReducer);

const Apps = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Todo App">
            <Stack.Screen name="Todo App" component={App} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default Apps;
