import React from 'react';
import '../styles/App.css';
import AddTodo from '../containers/AddTodo';
import Footer from '../components/Footer';
import VisibleTodoList from '../containers/VisibleTodoList';

const App: React.FC = () => {
  return (
      <div>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
      </div>
  );
};

export default App;
