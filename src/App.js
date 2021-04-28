import React from 'react';
import styles from  './App.module.css';
import { Timer } from './Components/Timer';

function App() {
  return (
    <div className={styles.App}>
      <Timer />
    </div>
  );
}

export default App;
