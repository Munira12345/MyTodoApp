import React, { useState, useEffect } from 'react';
import { SafeAreaView, TextInput, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskList from './components/TaskList';
import TaskModal from './components/TaskModal';
import TaskInput from './components/TaskInput';
import useDebounce from './hooks/useDebounce';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [searchText, setSearchText] = useState('');
  
  // Apply debounce to searchText
  const debouncedSearchText = useDebounce(searchText, 500);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks) setTasks(JSON.parse(storedTasks));
      } catch (error) {
        console.error('Failed to load tasks:', error);
      }
    };
    loadTasks();
  }, []);

  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (error) {
        console.error('Failed to save tasks:', error);
      }
    };
    saveTasks();
  }, [tasks]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: task, completed: false }]);
      setTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const openEditModal = (task) => {
    setCurrentTask(task);
    setIsModalVisible(true);
  };

  const updateTask = () => {
    setTasks(tasks.map((item) =>
      item.id === currentTask.id ? { ...item, text: currentTask.text } : item
    ));
    setIsModalVisible(false);
    setCurrentTask(null);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(debouncedSearchText.toLowerCase()) // debounced search text
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My To-Do List</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search tasks"
        value={searchText}
        onChangeText={setSearchText}
      />
      <TaskInput task={task} onChange={setTask} onAdd={addTask} />
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTaskCompletion}
        onEdit={openEditModal}
        onDelete={deleteTask}
      />
      <TaskModal
        isVisible={isModalVisible}
        task={currentTask}
        onChange={setCurrentTask}
        onUpdate={updateTask}
        onClose={() => setIsModalVisible(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
});

export default App;
