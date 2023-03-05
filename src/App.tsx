import style from './App.module.css';

import { Game } from './components/Game';
import { Header } from './components/Header';

function App() {
  return (
    <div className={style.app}>
      <div className={style.container}>
        <Header />
        <Game />
      </div>
    </div>
  );
}

export default App;
