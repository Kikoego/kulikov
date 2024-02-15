
import "./App.css"
import Header from './components/Header';
import MainPage from './components/pages/MainPage';
import GamePage from './components/pages/GamePage';
import NotFoundPage from './components/pages/NotFoundPage';
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
	

  return (
    <div className='app'>
			<Header />
			
			<Routes>
				<Route path='kulikov/' element={<MainPage />}/>
				<Route path='kulikov/game' element={<GamePage />}/>
				<Route path='*' element={<NotFoundPage />}/>
			</Routes>
    </div>
  );
}

export default App;
