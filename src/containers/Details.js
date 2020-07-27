import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Details = ({route, navigation}) => {
  /* 2. Get the param */
  const {todoId} = route.params;
  const {todoText} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.todoCard}>
        <Text style={styles.textCard}>More about task</Text>
        <Text style={styles.textCard}>Id task: {todoId}</Text>
        <Text style={styles.textCard}>Text task: {todoText}</Text>
      </View>
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
  todoCard: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFA500',
    width: '80%',
    // height: '20%',
    borderRadius: 30,
    marginTop: 30,
    padding: 10,
  },
  textCard: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});

export default Details;
