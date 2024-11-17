import React from 'react';
import { TextInput, Button, StyleSheet } from 'react-native';

const TaskInput = ({ task, onChange, onAdd }) => {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={task}
        onChangeText={onChange}
      />
      <Button title="Add Task" onPress={onAdd} color="#007BFF" />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});

export default TaskInput;
