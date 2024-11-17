import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const TaskItem = ({ task, onToggle, onEdit, onDelete }) => {
  // allowing users to define the star icon color based on priority of their tasks
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'High':
        return <Icon name="star" size={20} color="#FFD700" />; // Gold for high priority
      case 'Medium':
        return <Icon name="star" size={20} color="#C0C0C0" />; // Silver for medium
      case 'Low':
        return <Icon name="star" size={20} color="#CD7F32" />; // Bronze for low priority
      default:
        return <Icon name="star-o" size={20} color="#B0B0B0" />; // grey star for undefined priority
    }
  };

  return (
    <View style={styles.taskContainer}>
      <Switch
        value={task.completed}
        onValueChange={() => onToggle(task.id)}
        thumbColor={task.completed ? '#4CAF50' : '#B0B0B0'}
        trackColor={{ false: '#ccc', true: '#4CAF50' }}
      />
      <Text
        style={[styles.taskText, task.completed && styles.completedTaskText]}
      >
        {task.text}
      </Text>
      <View style={styles.priorityContainer}>
        {getPriorityIcon(task.priority)} {/* star icon */}
        <Text style={styles.detailLabel}>{task.priority}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => onEdit(task)}>
          <Text style={styles.icon}>✏️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(task.id)}>
          <Text style={styles.icon}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1E1E1E', 
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  taskText: {
    fontSize: 16,
    flex: 1,
    color: '#FFFFFF',
    marginLeft: 10,
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
    color: '#6c757d',
  },
  priorityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  detailLabel: {
    color: '#B0B0B0',
    marginLeft: 5,
  },
  actions: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 20,
    color: '#FFFFFF',
    marginLeft: 10,
  },
});

export default TaskItem;
