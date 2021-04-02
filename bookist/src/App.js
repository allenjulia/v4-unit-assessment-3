import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import BookList from './components/BookList.js'
import Shelf from './components/Shelf.js'
import data from './components/data.js'
import React from 'react';

export default class App extends React.Component {
  constructor (){
    super();
  }


  state = {
    books: data.data
  }


  render() {
    return (
      <div className="App">
        <Header/>
        <BookList/>
        <Shelf/>
      </div>
    );
  }  
}


