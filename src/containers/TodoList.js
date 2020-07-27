/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const TodoList = ({todos, toggleTodo, deleteTodo, completed}) => {
  return (
    <>
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <View>
            <Text
              onPress={() => toggleTodo(item.id)}
              style={[
                styles.itemTitle,
                {textDecorationLine: item.completed ? 'line-through' : 'none'},
              ]}>
              {item.text}
            </Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteTodo(item.id)}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  itemTitle: {
    borderColor: '#E6E5F2',
    borderWidth: 2,
    borderRadius: 25,
    color: '#55418E',
    fontSize: 17,
    padding: 10,
    margin: 5,
    textAlign: 'center',
    width: 315,
  },
  deleteButton: {
    backgroundColor: '#ff2400',
    width: 15,
    height: 15,
    borderRadius: 50,
    position: 'absolute',
    right: 20,
    top: '35%',
  },
});

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
