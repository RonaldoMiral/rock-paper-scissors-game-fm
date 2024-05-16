import { useState } from 'react';
import Test from './components/Test';

import styles from './App.module.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.app}>
      <Test />
    </div>
  )
}

export default App
