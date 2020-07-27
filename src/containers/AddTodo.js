import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {addTodo} from '../reducers/todosSlice';

const mapDispatch = {addTodo};

const AddTodos = ({addTodo}) => {
  const [todoText, setTodoText] = useState('');

  const onChange = (todoText) => setTodoText(todoText);

  const _onPress = (e) => {
    if (!todoText.trim()) {
      return;
    }
    addTodo(todoText);
    setTodoText('');
  };
  return (
    <View style={styles.oval}>
      <TextInput
        style={styles.textCard}
        placeholder="Введите текст"
        value={todoText}
        onChangeText={onChange}
      />
      <TouchableOpacity
        onPress={_onPress}
        // onPress={() => addTodo(todoText)}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'center',
  },
  oval: {
    flexDirection: 'column',
    backgroundColor: '#FFA500',
    width: 315,
    height: 90,
    borderRadius: 30,
    marginTop: 60,
  },
  button: {
    backgroundColor: '#E49401',
    width: 30,
    height: 30,
    borderRadius: 50,
    alignSelf: 'flex-end',
    marginTop: 30,
    marginRight: 20,
  },
  textCard: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Muli-Bold',
    position: 'absolute',
    top: 20,
    left: 25,
    width: 200,
  },
});

export default connect(null, mapDispatch)(AddTodos);
// export default AddTodos;
