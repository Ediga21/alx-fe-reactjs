import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';

import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = {
    name: "Ediga Idu",
    email: "iduedigabarnabas@gmail.com",
    age: 30,
    bio: "Loves hiking and photography"
  };

  return (
    <UserContext.Provider value={userData}>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <WelcomeMessage />
      <Header />
      <MainContent />
      <ProfilePage />
      <Counter />
      <Footer />

      <div className="card">
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </UserContext.Provider>
  );
}

export default App;