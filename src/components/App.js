import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../components/VisibleTodoList';
import FilterTodo from '../containers/FilterTodo';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddTodo />
        <FilterTodo />
        <VisibleTodoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default App;
