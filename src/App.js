import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
      {/*Sidebar*/}
      {/* Feed */}
      {/* widgets */}
    </div>
  );
}

export default App;
