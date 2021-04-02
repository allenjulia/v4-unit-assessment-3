import React, {Component} from 'react'
import App from '../App'


export default class BookList extends Component{
  constructor(){
    super()
  }
  

  render () {
    return (
      <div>
        <h2 className="title">List</h2>
        <h2>Books {App.books}</h2>
      </div>  
    )
  }
}