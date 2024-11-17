import React from 'react';
import { View, TextInput, Button, Modal, StyleSheet, Text } from 'react-native';

/**
 * TaskModal allows users to update an existing task. 
 * It will show when a user wants to edit a task's details.
 * 
 * @param {Object} props
 * @param {boolean} props.isVisible - will check if modal is visible or not first
 * @param {Object} props.task - Then the task to be edited
 * @param {function} props.onChange - Callback to handle task text changes
 * @param {function} props.onUpdate - Callback to handle the task update
 * @param {function} props.onClose - Callback to close the modal
 */
const TaskModal = ({ isVisible, task, onChange, onUpdate, onClose }) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Edit Task</Text>
          <TextInput
            style={styles.input}
            value={task?.text || ''}
            onChangeText={(text) => onChange({ ...task, text })}
            placeholder="Update task description"
            autoFocus={true}
          />
          <Button title="Update Task" onPress={onUpdate} color="#007BFF" />
          <Button title="Cancel" onPress={onClose} color="#DC3545" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});

export default TaskModal;
