import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import BookList from './components/BookList.js'
import Shelf from './components/Shelf.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <BookList/>
      <Shelf/>
    </div>
  );
}

export default App;
